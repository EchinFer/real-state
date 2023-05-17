export const currency = {
    country: 'Paraguay',
    code: 'PYG',
    symbol: '₲'
};
export const noPhotoProductAvailable = {
    portrait: 'no-photo-available.png',
    landscape: 'no-photo-available.png',
    full: 'no-photo-available.png'
}

export const formatNumberToCurrency = (number) => Intl.NumberFormat('de-DE').format(number);

export const uniQueArrayValue = (arr) => {
    const uniqueValue = arr.filter((value, index, self) => (self.indexOf(value) === index));

    return uniqueValue;
}