import {Precision} from '@/types';

const getTruePositiveRate = (data: Precision) => {
    const { true_positives, false_negatives } = data;
  return Math.round((true_positives / (true_positives + false_negatives)) * 100)
}

export default getTruePositiveRate;