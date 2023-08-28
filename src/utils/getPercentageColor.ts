const getPercentageColor = (percentage: number | string) => {
  switch (true) {
      case percentage > 95:
          return {bg: 'bg-green-500', text: 'text-green-600'}
      case percentage >= 75 && percentage < 95:
          return {bg: 'bg-yellow-500', text: 'text-yellow-600'};
      default:
          return {bg: 'bg-red-500', text: 'text-red-600'}
  }
}

export default getPercentageColor