import {Precision} from '@/types';
import formatPercentage from '@/utils/formatPercentage';

const getTrueNegativeRate = (data: Precision) => {
    const { true_negatives, false_positives } = data;
    return formatPercentage(Math.round((true_negatives / (true_negatives + false_positives)) * 100))
}

export default getTrueNegativeRate;