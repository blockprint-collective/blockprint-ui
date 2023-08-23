const formatPercentage = (value: number) => {
  return isNaN(value) ? '-' : `${value} %`
}

export default formatPercentage;