"use client";

import { useEffect, useState } from "react";

const IMAGE_STORAGE_KEY = "hrd-image-overrides";
const IMAGE_EVENT = "hrd-image-overrides-changed";

function readOverrides(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(IMAGE_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

export function getImageOverrides(): Record<string, string> {
  return readOverrides();
}

export function setImageOverride(path: string, url: string) {
  const current = readOverrides();
  if (url && url.trim()) {
    current[path] = url.trim();
  } else {
    delete current[path];
  }
  window.localStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify(current));
  window.dispatchEvent(new Event(IMAGE_EVENT));
}

export function resetAllImageOverrides() {
  window.localStorage.removeItem(IMAGE_STORAGE_KEY);
  window.dispatchEvent(new Event(IMAGE_EVENT));
}

export function useSiteImage(defaultPath: string): string {
  const [src, setSrc] = useState(defaultPath);

  useEffect(() => {
    const update = () => {
      const overrides = readOverrides();
      setSrc(overrides[defaultPath] || defaultPath);
    };
    update();
    window.addEventListener("storage", update);
    window.addEventListener(IMAGE_EVENT, update);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener(IMAGE_EVENT, update);
    };
  }, [defaultPath]);

  return src;
}
