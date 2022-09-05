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

export function getObj(): Object {
  return {
    id:999,
    name: 'test'
  }
}

export function getObjWithParameters(_label: string, _id: number) {
  return {
    label: _label,
    id: _id
  }
}
