export function getJSON(): string {
  const obj = {hello: 'world', from: 'test'};
  return JSON.stringify(obj);
}

export const jsonStr = '{"prop":"jsonStr"}';

export const lib = {myJSONData: "nice data!"}

export const nestedJsonStr = {
  id: 1,
  jsonStr,
  getJSON
}
