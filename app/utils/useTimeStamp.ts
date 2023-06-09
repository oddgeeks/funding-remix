import { useState, useEffect } from "react";

type ISODate = string;

export function useTimestamp(isoDate: ISODate): number | null {
  const [timestamp, setTimestamp] = useState<number | null>(null);

  useEffect(() => {
    if (isoDate) {
      const date = new Date(isoDate);
      const unixTimestamp = date.getTime(); // Convert to Unix timestamp in milliseconds
      setTimestamp(unixTimestamp);
    }
  }, [isoDate]);

  return timestamp;
}
