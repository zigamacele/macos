import { FileIcons, FileType } from '@/constants/file-structure'

const TitleBar = () => (
  <section className='absolute left-1/2 z-20 flex h-7 w-full -translate-x-1/2 items-center justify-center gap-1 rounded-t-lg bg-[#3A3838] text-xs font-bold text-white'>
    <img
      src={FileIcons[FileType.TEXT].icon}
      alt='text file icon'
      className='h-3.5 w-3.5'
    />
    <span className='opacity-60'>macOS</span>
  </section>
)

export default TitleBar
