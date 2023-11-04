import dayjs from 'dayjs'

export const currentDateTime = () => {
  const dateTime = dayjs()
  const currentTime = dateTime.format('HH:mm')
  const currentDate = dateTime.format('ddd D MMM')
  return { currentDate, currentTime }
}
