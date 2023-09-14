const safeDivide = (numerator: number, denominator?: number) => {
    if(!denominator || denominator === 0 || isNaN(denominator)) return 0

    return numerator/ denominator
}

export default safeDivide;