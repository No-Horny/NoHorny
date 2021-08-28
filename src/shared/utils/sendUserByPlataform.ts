export function sendUserByPlataform(
  caseAndroid: string,
  caseIOS: string,
  caseNotAMobile: string
): string {
  const userAgent = navigator.userAgent || navigator.vendor;
  if (/android/i.test(userAgent)) {
    return caseAndroid;
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return caseIOS;
  }
  return caseNotAMobile;
}
