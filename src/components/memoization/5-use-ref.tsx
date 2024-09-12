import { useState, useRef, useEffect } from "react";

export default function UseRefNew() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);

  // Do not write or read ref.current during rendering. - Pure function
  // We can only read and write to ref.current during useEffect or event handlers.
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    const currentTime = Date.now();
    setStartTime(currentTime);
    setNow(currentTime);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
