import {CellColor} from '@/types';

const getPercentageColor = (percentage: number | string): CellColor => {
  switch (true) {
      case percentage > 90:
          return {bg: 'bg-green-500', text: 'text-green-600', darkText: 'text-green-950'}
      case percentage >= 75 && percentage < 90:
          return {bg: 'bg-yellow-500', text: 'text-yellow-600', darkText: 'text-yellow-950'};
      default:
          return {bg: 'bg-red-500', text: 'text-red-600', darkText: 'text-red-950'}
  }
}

export default getPercentageColor