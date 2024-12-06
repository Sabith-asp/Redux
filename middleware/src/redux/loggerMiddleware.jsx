export const loggerMiddleware = (store) => (next) => (action) => {
  console.log("before count", store.getState().count);
  console.log("before action", action);
  let result = next(action);
  console.log(result);

  console.log("done 1", store.getState().count);
  return result;
};
export const loggerMiddlewar = (store) => (next) => (action) => {
  console.log("after count", store.getState().count);
  console.log("after action", action);
  let result = next(action);
  console.log(result);

  console.log("done 2", store.getState().count);
  return result;
};
