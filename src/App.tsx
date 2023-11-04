import trackpadClick from '@/assets/sounds/trackpadClick.mp3'

import Menubar from '@/layouts/Menubar.tsx'
import Screen from '@/layouts/Screen.tsx'

import UseAudioPlayer from './hooks/useAudioPlayer'
import Background from './layouts/Background'
import useSystemStore from './stores/system-store'
import { SystemScreen } from './types/store'

const App = () => {
  const { play } = UseAudioPlayer(trackpadClick, 0, 0.15)
  const { screen } = useSystemStore()

  const playTrackpadClick = () => {
    if (screen !== SystemScreen.BOOT) {
      play()
    }
  }

  return (
    <main onClick={playTrackpadClick}>
      <Menubar />
      <Screen />
      <Background />
    </main>
  )
}

export default App
