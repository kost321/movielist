export function fetchAddLetter() {
  return new Promise((resolve) => setTimeout(() => resolve(alertFunc())));
}

function alertFunc() {
  return Math.random().toString(36).replace(/\d|_/g, "").slice(1, 2);
}
