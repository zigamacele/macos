import { useEffect } from 'react'

import useAudioPlayer from '@/hooks/useAudioPlayer.tsx'

import useSystemStore from '@/stores/system-store'

import chime from '@/assets/sounds/chime.mp3'

import AppleLogo from '../AppleLogo'

import { SystemScreen } from '@/types/store'

const BootScreen = () => {
  const { play } = useAudioPlayer(chime, 0, 0.1)
  const { setScreen } = useSystemStore()

  useEffect(() => {
    setTimeout(() => {
      setScreen(SystemScreen.LOGIN)
    }, 3000)
  }, [])

  return (
    <div
      className='flex h-screen w-screen items-center justify-center bg-black'
      onClick={() => play()}
    >
      <AppleLogo className='bootMask absolute z-50' />
      <AppleLogo fill='#141414' />
    </div>
  )
}

export default BootScreen
