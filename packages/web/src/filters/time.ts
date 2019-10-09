export default (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
    .toString()
    .padStart(2, '0')
  const restMinutes = (minutes % 60)
    .toString()
    .padStart(2, '0')

  return `${minutes} min. / ${hours}:${restMinutes}`
}
