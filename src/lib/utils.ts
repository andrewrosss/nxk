export function pprintJsonify(object: any): string {
  return JSON.stringify(object, null, 2);
}

export function coerceOrString(value: any): any {
  try {
    return JSON.parse(`{ "value": ${value} }`).value;
  } catch {
    return value;
  }
}
