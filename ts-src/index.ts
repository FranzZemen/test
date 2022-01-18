export function getJSON(): string {
  const obj = {hello: 'world', from: 'test'};
  return JSON.stringify(obj);
}
