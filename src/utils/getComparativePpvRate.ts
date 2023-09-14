import {Precision} from '@/types';
import safeDivide from '@/utils/safeDivide';

const getComparativePpvRate = (data: Precision, key: string) => {
    const { false_negatives_detail, true_positives, false_positives } = data

    return Math.round(safeDivide(false_negatives_detail[key], (true_positives + false_positives)) * 100)
}

export default getComparativePpvRate;