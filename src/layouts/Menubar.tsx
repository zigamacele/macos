import useSystemStore from '@/stores/system-store.ts'

import { SystemScreen } from '@/types/store.ts'

const Menubar = () => {
  const { screen } = useSystemStore()

  if (screen === SystemScreen.BOOT) return null
  return <div className='absolute w-screen bg-white opacity-40'>menubar</div>
}

export default Menubar
