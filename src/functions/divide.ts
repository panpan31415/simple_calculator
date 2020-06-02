/**
 *divide a by b
 *
 * @param a number to be divided
 * @param b divider
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw "O can't be divide";
  }
  return a / b;
}

export default divide;
