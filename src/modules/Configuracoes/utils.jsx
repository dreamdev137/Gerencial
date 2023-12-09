export const createObject = (obj) => {
    const currentObj = JSON.stringify(obj);
    return JSON.parse(currentObj);
  }