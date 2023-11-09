import useWindowManager from '@/stores/window_manager-store'

import AppWindow from './windowManager/AppWindow'

const WindowManager = () => {
  const { openWindows } = useWindowManager()
  return (
    <div>
      {openWindows.map((app) => (
        <AppWindow key={app} app={app} />
      ))}
    </div>
  )
}

export default WindowManager
