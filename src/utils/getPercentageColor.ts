const getPercentageColor = (percentage: number | string) => {
  switch (true) {
      case percentage > 95:
          return 'bg-green-500'
      case percentage >= 75 && percentage < 95:
          return 'bg-yellow-500';
      default:
          return 'bg-red-500'
  }
}

export default getPercentageColor