import useFinderStore from '@/stores/finder-store'

import { FinderMenu } from '@/constants/icons'
import { username } from '@/constants/system'

const CurrentDirectory = () => {
  const { focusedDirectory } = useFinderStore()
  return (
    <span className='font-semibold opacity-80'>
      {focusedDirectory === (FinderMenu.USER as string)
        ? username
        : focusedDirectory}
    </span>
  )
}

export default CurrentDirectory
