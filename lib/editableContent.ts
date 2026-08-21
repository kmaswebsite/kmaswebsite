"use client";

import { useEffect, useState } from "react";

const PREFIX = "hrd-content-";
const EVENT = "hrd-content-changed";

export function getOverride<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

export function setOverride<T>(key: string, value: T) {
  window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
  window.dispatchEvent(new Event(EVENT));
}

export function clearOverride(key: string) {
  window.localStorage.removeItem(PREFIX + key);
  window.dispatchEvent(new Event(EVENT));
}

export function useEditableContent<T>(key: string, defaultValue: T): T {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    const update = () => {
      const override = getOverride<T>(key);
      setValue(override ?? defaultValue);
    };
    update();
    window.addEventListener("storage", update);
    window.addEventListener(EVENT, update);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener(EVENT, update);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return value;
}
