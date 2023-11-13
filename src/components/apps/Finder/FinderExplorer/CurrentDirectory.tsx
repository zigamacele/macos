import useFinderStore from '@/stores/finder-store'

import { FinderMenu } from '@/constants/icons'
import { username } from '@/constants/system'

const CurrentDirectory = () => {
  const { focusedMenu } = useFinderStore()
  return (
    <span className='font-semibold opacity-80'>
      {focusedMenu === FinderMenu.USER ? username : focusedMenu}
    </span>
  )
}

export default CurrentDirectory
