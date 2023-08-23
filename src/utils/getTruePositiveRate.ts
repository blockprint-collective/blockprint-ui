import {Precision} from '@/types';
import formatPercentage from '@/utils/formatPercentage';

const getTruePositiveRate = (data: Precision) => {
    const { true_positives, false_negatives } = data;
  return formatPercentage(Math.round((true_positives / (true_positives + false_negatives)) * 100))
}

export default getTruePositiveRate;