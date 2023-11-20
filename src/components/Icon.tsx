import * as Icons from '@radix-ui/react-icons'

interface IconProps {
  icon: string
  className?: string
  onClick?: (event?: React.MouseEvent) => void
}

const Icon = ({ icon, className, onClick }: IconProps) => {
  // @ts-expect-error-next-line
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, import/namespace
  const IconRadix = Icons[icon]

  return <IconRadix className={className} onClick={onClick} />
}

export default Icon
