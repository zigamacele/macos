import { createContext } from 'react'
import { Rnd } from 'react-rnd'

import TrafficLights from '@/components/apps/TrafficLights'

import useWindowManager from '@/stores/window_manager-store'

import { AppWindowConfig } from '@/constants/apps'

import { App } from '@/types/apps'

interface AppWindowProps {
  app: App
}
export const CurrentAppContext = createContext<App>(App.FINDER)

const AppWindow = ({ app }: AppWindowProps) => {
  const { focusedWindow, setFocusWindow } = useWindowManager()
  const { width, height, component } = AppWindowConfig[app]

  const style = {
    cursor: 'default',
    border: 'solid 1px rgba(255, 255, 255, 0.25)',
    ...(app === focusedWindow && { zIndex: 30 }),
  }

  const defaultWindowSize = {
    x: window.innerWidth / 2 - width / 2,
    y: window.innerHeight / 2 - height / 2,
    width,
    height,
  }

  const onWindowClick = () => {
    if (focusedWindow !== app) {
      setFocusWindow(app)
    }
  }

  const AppComponent = component

  return (
    <CurrentAppContext.Provider value={app}>
      <Rnd
        className='relative rounded-lg'
        style={style}
        default={defaultWindowSize}
        onClick={onWindowClick}
        disableDragging={app !== focusedWindow}
        enableResizing={app === focusedWindow}
        bounds='window'
      >
        <TrafficLights app={app} />
        <AppComponent />
      </Rnd>
    </CurrentAppContext.Provider>
  )
}

export default AppWindow
