const intl = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

export default (value: number) => {
  return intl.format(value)
}
