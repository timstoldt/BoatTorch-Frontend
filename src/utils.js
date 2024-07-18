export function formatPhoneNumber(number) {
  return String(number).replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
}
