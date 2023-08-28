/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useMemo } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../services/fireBase";

export interface Sound {
  Decibels: number;
  timestamp: number; // Assuming timestamp is stored as UNIX timestamp
}

type ContentType = "red" | "blue" | "green";

export default function useSound() {
  const [allData, setAllData] = useState<Sound[]>([]);
  const [soundData, setSoundData] = useState<Sound[]>([]);
  const [type, setType] = useState<ContentType>("red");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const readSoundDecibels = ref(database, "Data/");
    const unsubscribe = onValue(readSoundDecibels, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const newDataArray = Object.keys(data).map((key) => ({
          Decibels: +data[key].Decibels,
          timestamp: data[key].timestamp as number,
        }));
        setAllData(newDataArray);
        setSoundData(newDataArray.slice(-50));
      }
      setLoading(false);
    });
    // Cleanup the Firebase listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  const totalDecibels = useMemo(
    () => soundData.reduce((sum, entry) => sum + entry.Decibels, 0),
    [soundData]
  );

  const averageDecibels = useMemo(
    () => totalDecibels / soundData.length,
    [soundData.length, totalDecibels]
  );

  // Find the maximum and minimum decibel levels
  const maxDecibels = useMemo(
    () => Math.max(...soundData.map((entry) => entry.Decibels)),
    [soundData]
  );

  const minDecibels = useMemo(
    () => Math.min(...soundData.map((entry) => entry.Decibels)),
    [soundData]
  );

  const aggregateSound = {
    maxDecibels,
    minDecibels,
    averageDecibels: averageDecibels ,
  };

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handleDataChange = (value: any) => {
    setLoading(true);
    if (!value) {
      setSoundData(allData);
      setLoading(false);
    } else {
      const from = new Date(value[0]).valueOf();
      const to = new Date(value[1]).valueOf();

      const newData = allData.filter(
        ({ timestamp }) => timestamp >= from && timestamp <= to
      );

      setSoundData(newData);
      setLoading(false);
    }
  };

  useEffect(() => {
    setType(
      averageDecibels >= 80
        ? "red"
        : averageDecibels >= 50 && averageDecibels < 80
        ? "green"
        : "blue"
    );
  }, [averageDecibels]);

  return { soundData, aggregateSound, handleDataChange, type, loading };
}
