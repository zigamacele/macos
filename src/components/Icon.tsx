import * as Icons from '@radix-ui/react-icons'

interface IconProps {
  icon: string
  className?: string
}

const Icon = ({ icon, className }: IconProps) => {
  // @ts-expect-error-next-line
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, import/namespace
  const IconRadix = Icons[icon]

  return <IconRadix className={className} />
}

export default Icon
