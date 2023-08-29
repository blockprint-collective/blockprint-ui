import {CellColor} from '@/types';

const getComparativeColor = (percentage: number | string): CellColor => {
    switch (true) {
        case percentage <= 10:
        case isNaN(percentage as number):
            return {bg: 'bg-green-500', text: 'text-green-600'}
        case percentage > 10 && percentage < 25:
            return {bg: 'bg-green-500', text: 'text-green-600'}
        default:
            return {bg: 'bg-red-500', text: 'text-red-600'}
    }
}

export default getComparativeColor