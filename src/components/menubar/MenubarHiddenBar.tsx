import { useState } from 'react'

import HiddenBar from './MenuHiddenBar/HiddenBar'
import Icon from '../Icon'

const MenubarHiddenBar = () => {
  const [showHiddenBar, setShowHiddenBar] = useState(false)

  const toggleHiddenBar = () => {
    setShowHiddenBar(true)
    setTimeout(() => {
      setShowHiddenBar(false)
    }, 10 * 1000)
  }

  return (
    <section className='flex items-center gap-2'>
      {showHiddenBar && <HiddenBar />}
      <Icon
        icon={showHiddenBar ? 'ChevronRightIcon' : 'ChevronLeftIcon'}
        className='h-4 w-4 cursor-pointer font-bold transition-all'
        onClick={toggleHiddenBar}
      />
    </section>
  )
}

export default MenubarHiddenBar
