const getPercentageColor = (percentage: number | string) => {
  switch (true) {
      case (percentage < 75):
          return 'bg-red-500';
      case percentage >= 75 && percentage < 95:
          return 'bg-yellow-500';
      case percentage > 95:
          return 'bg-green-500'
      case percentage === '-':
          return 'bg-grey-500'
      default:
          return 'bg-grey-500'
  }
}

export default getPercentageColor