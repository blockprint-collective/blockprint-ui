const formatPercentage = (value: number) => {
  return isNaN(value) ? '0 %' : `${value} %`
}

export default formatPercentage
