const getPercentageColor = (percentage: number | string) => {
  switch (true) {
      case percentage > 95:
          return 'bg-green-500 text-green-600'
      case percentage >= 75 && percentage < 95:
          return 'bg-yellow-500 text-yellow-600';
      default:
          return 'bg-red-500 text-red-600'
  }
}

export default getPercentageColor