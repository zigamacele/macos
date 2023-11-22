import { isEqual } from 'lodash'
export const openInNewWindow = (url: string) => {
  window.open(url, '_blank')
}

export const areArraysEqual = (a: string[], b: string[]) => {
  return isEqual(a, b)
}

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
