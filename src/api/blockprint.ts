import { defaultApiEndpoint } from '../../config';
const apiEndpoint = process.env.API_ENDPOINT || defaultApiEndpoint;

export const getConfusion = async () => {
  const res = await fetch(apiEndpoint)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
