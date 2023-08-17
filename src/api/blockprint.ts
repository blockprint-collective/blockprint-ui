export const getConfusion = async () => {
  const res = await fetch('https://api.blockprint.sigp.io/confusion')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
