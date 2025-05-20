import { Precision } from '@/types'
import safeDivide from '@/utils/safeDivide'

const getTrueNegativeRate = (data: Precision) => {
  const { true_negatives, false_positives } = data
  return Math.round(safeDivide(true_negatives, true_negatives + false_positives) * 100)
}

export default getTrueNegativeRate
