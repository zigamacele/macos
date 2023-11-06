import TrafficLight from './TrafficLights/TrafficLight'

const TrafficLights = () => {
  return (
    <section className='group flex gap-2'>
      <TrafficLight icon='Cross2Icon' color='bg-red-500' />
      <TrafficLight icon='MinusIcon' color='bg-yellow-500' />
      <TrafficLight
        icon='HeightIcon'
        color='bg-green-500'
        className='-rotate-45'
      />
    </section>
  )
}

export default TrafficLights
