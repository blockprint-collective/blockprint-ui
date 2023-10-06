const getPercentageColor = (percentage: number): string => {
  switch (true) {
      case percentage > 90:
          return 'text-good'
      case percentage >= 75 && percentage < 90:
          return 'text-fair'
      default:
          return 'text-error'
  }
}

export default getPercentageColor