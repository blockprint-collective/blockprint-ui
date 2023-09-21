import {Precision} from '@/types';
import safeDivide from '@/utils/safeDivide';

const getComparativePpvRate = (rowData: Precision, colData: Precision, key: string) => {
    const { true_positives, false_positives } = rowData;
    const { false_negatives_detail } = colData;

    return Math.round(safeDivide(false_negatives_detail[key], (true_positives + false_positives)) * 100)
}

export default getComparativePpvRate;
