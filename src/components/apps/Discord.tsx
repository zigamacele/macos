import discordLogo from '@/assets/apps/discord/logo.gif'

const Discord = () => {
  return (
    <div className='flex h-full w-full items-center justify-center rounded-lg bg-discord-surface'>
      <img src={discordLogo} className='h-52 w-52' />
    </div>
  )
}

export default Discord
