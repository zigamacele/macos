import Icon from '@/components/Icon'

import { hiddenBarIcons } from '@/constants/icons'

const HiddenBar = () => {
  return (
    <>
      {hiddenBarIcons.map((icon) => (
        <img
          key={icon.link}
          src={icon.icon}
          onClick={() => window.open(icon.link, '_blank')}
          className='h-7 w-7 cursor-pointer'
        />
      ))}
      <Icon icon='DividerVerticalIcon' className='h-4 w-4 cursor-pointer' />
    </>
  )
}

export default HiddenBar
