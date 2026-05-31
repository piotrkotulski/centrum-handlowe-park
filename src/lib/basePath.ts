const basePath = process.env.NODE_ENV === "production" ? "/centrum-handlowe-park" : "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}

export default basePath;
