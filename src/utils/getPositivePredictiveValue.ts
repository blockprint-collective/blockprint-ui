import {Precision} from '@/types';
import formatPercentage from '@/utils/formatPercentage';

const getPositivePredictiveValue = (data: Precision) => {
    const { true_positives, false_positives } = data;

    return formatPercentage(Math.round((true_positives / (true_positives + false_positives)) * 100))
}

export default getPositivePredictiveValue;