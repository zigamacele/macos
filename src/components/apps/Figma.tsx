import Icon from '../Icon'

const Figma = () => {
  const figmaEmbedPrefix =
    'https://www.figma.com/embed?embed_host=zigamacele_macos&url='
  return (
    <div className='h-full w-full rounded-lg bg-neutral-900'>
      <div className='h-10 rounded-t-lg bg-neutral-800'></div>
      <iframe
        className='relative z-20 h-full w-full rounded-b-lg'
        src={
          figmaEmbedPrefix +
          'https://www.figma.com/file/OWbX6LxGrSZiFOyhonNCXE/Personal-Project---pixiv?type=design&node-id=0%3A1&mode=design&t=PnYWmNodRbI8oU6D-1'
        }
      />
      <Icon
        icon='FigmaLogoIcon'
        className='absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-pulse'
      />
    </div>
  )
}

export default Figma
