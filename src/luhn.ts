export function checkLuhn(creditCardNumber: string): boolean {
    // Input validation (optional)
    if (!creditCardNumber || creditCardNumber.trim() === '') {
        return false; // Handle empty input
    }

    const nDigits = creditCardNumber.length;
    let nSum: number = 0;
    let isSecond: boolean = false;
    let d: number;

    for (let i = nDigits - 1; i >= 0; i--) {
        d = parseInt(creditCardNumber[i], 10); // Parse char to int

        if (isNaN(d)) {
            return false; // Early return for non-numeric characters
        }

        if (isSecond) {
            d = d * 2;
        }

        // Handle two-digit numbers after doubling
        nSum += Math.floor(d / 10);
        nSum += d % 10;

        isSecond = !isSecond;
    }

    return nSum % 10 === 0;
}
