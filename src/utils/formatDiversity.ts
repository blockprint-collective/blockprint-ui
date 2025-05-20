import { ClientDiversityResult, DiversityResults } from '@/types'

const formatDiversity = (
  diversity: DiversityResults,
  clientList: string[],
): ClientDiversityResult[] => {
  const totalBlocks = Object.values(diversity).reduce((a, b) => a + b)
  return clientList
    .map((client) => ({
      client,
      percentage: (((diversity[client] || 0) / totalBlocks) * 100).toFixed(2),
    }))
    .sort((a, b) => Number(b.percentage) - Number(a.percentage))
}

export default formatDiversity
