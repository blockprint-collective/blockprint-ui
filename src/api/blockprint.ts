import { defaultConfusionApiEndpoint, defaultDiversityApiEndpoint } from '../../config';
const confusionApiEndpoint = process.env.CONFUSION_API_ENDPOINT || defaultConfusionApiEndpoint;
const diversityApiEndpoint = process.env.DIVERSITY_API_ENDPOINT || defaultDiversityApiEndpoint;

export const getConfusion = async () => {
  const res = await fetch(confusionApiEndpoint, {next: { revalidate: 60 }})

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const getDiversity = async (start, end) => {
  const res = await fetch(`${diversityApiEndpoint}/${start}/${end}`, {next: { revalidate: 60 }})

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
