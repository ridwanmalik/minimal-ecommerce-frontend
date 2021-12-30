export function formatCurrency(num) {
  return `$${parseFloat(num).toFixed(1)}`
}

export function formatImage(url) {
  return `${process.env.REACT_APP_STORAGE_URL}${url}`
}
