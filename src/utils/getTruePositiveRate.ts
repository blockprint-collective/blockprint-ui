import {Precision} from '@/types';
import safeDivide from '@/utils/safeDivide';

const getTruePositiveRate = (data: Precision) => {
    const { true_positives, false_negatives } = data;
  return Math.round(safeDivide(true_positives, (true_positives + false_negatives)) * 100)
}

export default getTruePositiveRate;