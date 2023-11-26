import { FileIcons, FileType } from '@/constants/file-structure'

const TitleBar = () => (
  <section className='absolute left-1/2 top-1.5 flex -translate-x-1/2 items-center gap-1 text-xs font-bold text-white'>
    <img
      src={FileIcons[FileType.TEXT].icon}
      alt='text file icon'
      className='h-3.5 w-3.5'
    />
    <span className='opacity-60'>macOS</span>
  </section>
)

export default TitleBar
