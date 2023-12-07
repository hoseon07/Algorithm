function solution(order) {
  return [...order.toString().matchAll(/[3|6|9]/g)].length;
}