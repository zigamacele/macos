import { useEffect, useState } from 'react'

import { currentDateTime } from '@/utils/dateTime'

const MenubarDateTime = () => {
  const [dateTime, setDateTime] = useState(currentDateTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(currentDateTime())
    }, 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className='flex cursor-pointer gap-2 text-[13px]'>
      <span>{dateTime.currentDate}</span>
      <span>{dateTime.currentTime}</span>
    </section>
  )
}

export default MenubarDateTime
