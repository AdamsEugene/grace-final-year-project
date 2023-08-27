/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useCallback, useEffect, useState } from "react";
import { database } from "../services/fireBase";
import { onValue, ref } from "firebase/database";

export default function useImage() {
  const [photos, setPhotos] = useState<string[]>([]);
  // @ts-ignore
  const [model, setModel] = useState<mobilenet.MobileNet>();
  const [predictionModel, setPredictionModel] =
    // @ts-ignore
    useState<cocoSsd.ObjectDetection>();
  const [loadingImg, setLoading] = useState(false);
  const [result, setResult] = useState<{ name: string; score: number }[]>();

  useEffect(() => {
    if (!model && !predictionModel) {
      (async () => {
        setLoading(true);
        try {
          // @ts-ignore
          const _predictionModel = await mobilenet.load();
          setPredictionModel(_predictionModel);
          // @ts-ignore
          const _model = await cocoSsd.load();
          setModel(_model);
        } catch (error) {
          console.error("Error loading models:", error);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [model, predictionModel]);

  useEffect(() => {
    const readImages = ref(database, "esp32-cam/");
    const imagesListener = onValue(readImages, (snapshot) => {
      const data = snapshot.val();
      if (data && data.photo) {
        setPhotos((prevPhotos) => [...prevPhotos, data.photo]);
      }
    });

    // Cleanup the Firebase listener when the component unmounts
    return () => {
      imagesListener();
    };
  }, []);

  const getPredictions = useCallback((pre: any[]) => {
    const result = pre.map((p) => ({
      name: p.class,
      score: +((p.score * 100) as number).toFixed(2),
    }));
    setResult(result);
  }, []);

  return { photos, loadingImg, model, predictionModel, getPredictions, result };
}
