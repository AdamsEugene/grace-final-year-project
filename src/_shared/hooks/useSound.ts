/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../services/fireBase";

interface Sound {
  Decibels: number;
  timestamp: number; // Assuming timestamp is stored as UNIX timestamp
}

export default function useSound() {
  const [soundData, setSoundData] = useState<Sound[]>([]);

  useEffect(() => {
    const readSoundDecibels = ref(database, "Data/");
    const unsubscribe = onValue(readSoundDecibels, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const newDataArray = Object.keys(data).map((key) => ({
          Decibels: +data[key].Decibels,
          timestamp: data[key].timestamp as number,
        }));
        setSoundData(newDataArray);
      }
    });
    // Cleanup the Firebase listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  const filterSoundByTime = (start: number, end: number) => {
    return soundData.filter(
      ({ timestamp }) => timestamp >= start && timestamp <= end
    );
  };

  const totalDecibels = soundData.reduce(
    (sum, entry) => sum + entry.Decibels,
    0
  );
  const averageDecibels = totalDecibels / soundData.length;

  // Find the maximum and minimum decibel levels
  const maxDecibels = Math.max(...soundData.map((entry) => entry.Decibels));
  const minDecibels = Math.min(...soundData.map((entry) => entry.Decibels));

  const aggregateSound = { maxDecibels, minDecibels, averageDecibels };

  return { soundData, filterSoundByTime, aggregateSound };
}
