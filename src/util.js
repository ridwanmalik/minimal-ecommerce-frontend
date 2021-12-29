export function formatCurrency(num) {
  return num
  // return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
  return `$${num.toFixed(1)}`
}

export function formatImage(url) {
  return `${process.env.REACT_APP_STORAGE_URL}${url}`
}
