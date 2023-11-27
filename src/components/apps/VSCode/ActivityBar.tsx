import {
  Blocks,
  Bug,
  Folder,
  GitBranch,
  LucideIcon,
  MessageSquare,
  Search,
  SlidersHorizontal,
  User,
} from 'lucide-react'

const iconsTop = [Folder, Search, GitBranch, Bug, Blocks, MessageSquare]
const iconsBottom = [User, SlidersHorizontal]

const IconsDisplay = (iconsArray: LucideIcon[]) => {
  return iconsArray.map((Icon, i) => (
    <Icon
      key={i}
      strokeWidth={1.5}
      className='h-6 w-6 opacity-40 hover:opacity-80'
    />
  ))
}

const ActivityBar = () => (
  <section className='absolute right-0 z-0 flex h-full w-12 flex-col items-center justify-between gap-5 rounded-r-lg border-l border-neutral-700 bg-[#1E1E1E] pb-8 pt-9'>
    <span className='flex flex-col gap-5'>{IconsDisplay(iconsTop)}</span>
    <span className='flex flex-col gap-4'>{IconsDisplay(iconsBottom)}</span>
  </section>
)

export default ActivityBar
