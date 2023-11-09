import { Rnd } from 'react-rnd'

import useWindowManager from '@/stores/window_manager-store'

import { AppWindowConfig } from '@/constants/apps'

import { App } from '@/types/apps'

interface AppWindowProps {
  app: App
}

const AppWindow = ({ app }: AppWindowProps) => {
  const { focusedWindow, setFocusWindow } = useWindowManager()
  const { width, height, component } = AppWindowConfig[app]

  const style = {
    border: 'solid 1px rgba(255, 255, 255, 0.45)',
    ...(app === focusedWindow && { zIndex: 30 }),
  }

  const defaultWindowSize = {
    x: window.innerWidth / 2 - width / 2,
    y: window.innerHeight / 2 - height / 2,
    width,
    height,
  }

  const AppComponent = component

  return (
    <Rnd
      className='rounded bg-red-500'
      style={style}
      default={defaultWindowSize}
      onClick={() => setFocusWindow(app)}
      disableDragging={app !== focusedWindow}
      enableResizing={app === focusedWindow}
      bounds='window'
    >
      <AppComponent />
    </Rnd>
  )
}

export default AppWindow
