import BootScreen from '@/components/screen/BootScreen.tsx'
import HomeScreen from '@/components/screen/HomeScreen.tsx'
import LoginScreen from '@/components/screen/LoginScreen.tsx'

import useSystemStore from '@/stores/system-store.ts'

import { SystemScreen } from '@/types/store.ts'

const Screen = () => {
  const { screen } = useSystemStore()

  const screens = {
    [SystemScreen.BOOT]: BootScreen,
    [SystemScreen.LOGIN]: LoginScreen,
    [SystemScreen.HOME]: HomeScreen,
  }
  const CurrentScreen = screens[screen]

  return <CurrentScreen />
}

export default Screen
