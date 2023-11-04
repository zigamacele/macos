import MenubarBattery from '@/components/menubar/MenubarBattery'
import MenubarDateTime from '@/components/menubar/MenubarDateTime'
import MenubarHiddenBar from '@/components/menubar/MenubarHiddenBar'
import MenubarTrigger from '@/components/menubar/MenubarTrigger'

import useSystemStore from '@/stores/system-store.ts'

import { Icon } from '@/constants/icons'
import { cn } from '@/utils/styles'

import { SystemScreen } from '@/types/store.ts'

const Menubar = () => {
  const { screen } = useSystemStore()

  if (screen === SystemScreen.BOOT) {
    return null
  }

  const isHomeScreen = screen === SystemScreen.HOME

  return (
    <div
      className={cn(
        'absolute flex h-8 w-screen items-center justify-end px-4 ',
        isHomeScreen && 'justify-between bg-black/20 backdrop-blur-2xl',
      )}
    >
      {isHomeScreen && (
        <MenubarTrigger
          icon={Icon.APPLE_LOGO}
          className='h-4 w-4 drop-shadow-lg'
        />
      )}
      <div className='flex items-center gap-4'>
        <MenubarHiddenBar />
        <MenubarBattery />
        <MenubarTrigger icon={Icon.WIFI} className='h-[18px] w-[18px]' />
        <MenubarTrigger icon={Icon.CONTROL_CENTER} className='h-4 w-4' />
        <MenubarDateTime />
      </div>
    </div>
  )
}

export default Menubar
