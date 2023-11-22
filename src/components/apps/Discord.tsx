import discordLogo from '@/assets/apps/discord/logo.gif'

import { loadingMessages } from '@/constants/discord'
import { randomNumber } from '@/utils/global'

const Discord = () => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center rounded-lg bg-discord-surface'>
      <img src={discordLogo} className='h-36' />
      <div className='flex flex-col items-center gap-2 text-sm'>
        <span className='uppercase italic'>
          {loadingMessages[randomNumber(0, loadingMessages.length - 1)]}
        </span>
        <span className='animate-pulse text-xs uppercase tracking-wide opacity-40'>
          CONNECTING
        </span>
      </div>
    </div>
  )
}

export default Discord
