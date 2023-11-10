import useWindowManager from '@/stores/window_manager-store'

import background from '@/assets/background.jpg'

import { App } from '@/types/apps'

const Background = () => {
  const { setFocusWindow } = useWindowManager()
  return (
    <img
      src={background}
      onClick={() => setFocusWindow(App.FINDER)}
      className='absolute top-0 z-[-1] h-screen w-screen object-cover animate-in fade-in'
    />
  )
}

export default Background
