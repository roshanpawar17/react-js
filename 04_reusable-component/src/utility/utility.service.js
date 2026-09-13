export const formatNumber = (value, emptyValue = 0) => {
    if (value === null || value === undefined || value === '') {
        return emptyValue;
    }
    return Number(value).toLocaleString('en-IN', { maximumFractionDigits: 2 });
}