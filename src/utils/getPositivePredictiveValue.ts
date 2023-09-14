import {Precision} from '@/types';
import safeDivide from '@/utils/safeDivide';

const getPositivePredictiveValue = (data: Precision) => {
    const { true_positives, false_positives } = data;

    return Math.round(safeDivide(true_positives, (true_positives + false_positives)) * 100)
}

export default getPositivePredictiveValue;