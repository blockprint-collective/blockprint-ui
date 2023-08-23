import {Precision} from '@/types';

const getTrueNegativeRate = (data: Precision) => {
    const { true_negatives, false_positives } = data;
    return Math.round((true_negatives / (true_negatives + false_positives)) * 100)
}

export default getTrueNegativeRate;