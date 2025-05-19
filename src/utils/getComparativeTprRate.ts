import { Precision } from '@/types'
import safeDivide from '@/utils/safeDivide'

const getComparativeTprRate = (data: Precision, key: string) => {
  const { false_negatives_detail, true_positives, false_negatives } = data
  return Math.round(safeDivide(false_negatives_detail[key], true_positives + false_negatives) * 100)
}

export default getComparativeTprRate
