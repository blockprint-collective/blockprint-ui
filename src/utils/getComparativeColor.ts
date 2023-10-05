const getComparativeColor = (percentage: number): string => {
    switch (true) {
        case percentage <= 10:
        case isNaN(percentage as number):
        case percentage > 10 && percentage < 25:
            return 'text-good'
        default:
            return 'text-error'
    }
}

export default getComparativeColor