import {Precision} from '@/types';

const getPositivePredictiveValue = (data: Precision) => {
    const { true_positives, false_positives } = data;

    return Math.round((true_positives / (true_positives + false_positives)) * 100)
}

export default getPositivePredictiveValue;