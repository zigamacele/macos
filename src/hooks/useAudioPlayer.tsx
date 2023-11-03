const UseAudioPlayer = (
  audioFile: string,
  delay: number = 0,
  volume: number = 1,
) => {
  const play = () => {
    setTimeout(async () => {
      const audio = new Audio(audioFile)
      audio.volume = volume
      await audio.play()
    }, delay)
  }

  return {
    play,
  }
}

export default UseAudioPlayer
