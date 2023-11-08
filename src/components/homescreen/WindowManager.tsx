import useWindowManager from '@/stores/window_manager-store'

import AppWindow from './windowManager/AppWindow'

const WindowManager = () => {
  const { openWindows } = useWindowManager()
  return (
    <div>
      {openWindows.map((app) => (
        <AppWindow width={1366} height={768} app={app} />
      ))}
    </div>
  )
}

export default WindowManager
