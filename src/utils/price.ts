export function calculateDiscount(retail: number, discounted: number) {
  const discount = ((retail - discounted) / retail) * 100;
  return Math.round(discount * 100/100);
}