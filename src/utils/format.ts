import { username } from '@/constants/system'

export const capitalize = (str: string | undefined) => {
  if (!str) {
    return ''
  }

  if (str === username) return str

  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const formatUrl = (url: string) => {
  const urlWithoutProtocol = url.replace(/^https?:\/\//, '').replace(/\/$/, '')
  return url.replace(urlWithoutProtocol, '')
}
