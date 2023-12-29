export function roundNumber(num: number): number {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

export function formatCurrency(numberString: string) {
    return '$' + numberString;
}
