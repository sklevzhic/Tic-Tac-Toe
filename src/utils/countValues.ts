export function countValues(array: (string | null)[], winSeries: number, value: string) {
  // Счетчик значений в массиве, который пришел на проверку
  let count = 0

  for (let i = 0; i <= array.length - 1; i++ ) {
    let tempCount = array[i] === value ? count + 1 : 0
    count = tempCount
    console.log(count)
    if (tempCount === winSeries) return true
  }

  return false
}
