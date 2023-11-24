export const isValidUrl = (url: string) => {
  const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
  return regex.test(url)
}

export const isValidFigmaProjectUrl = (url: string) => {
  const regex = /^https:\/\/www.figma.com\/file\/[a-zA-Z0-9]{22}\/[a-zA-Z0-9-]+/
  return regex.test(url)
}
