export function fakeApiCall(result) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
}
