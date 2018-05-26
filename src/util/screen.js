export function getScreenWidth() {
  return window.innerWidth
}

export function getScreenHeight() {
  return window.innerHeight
}

export function isWideImageFormat() {
  return getScreenWidth >= 798
}
