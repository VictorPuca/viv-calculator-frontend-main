export default function formatNumber(num) {
    num = parseFloat(num)
    if (num >= 1000 || num <= 1e-3) {
        return num.toExponential(3).replace('.',',')
    }
    return num.toFixed(3).toString().replace('.',',')
}