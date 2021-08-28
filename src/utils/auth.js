import Cookies from 'js-cookie'

const CsrfTokenKey = 'X-CSRFToken'

export function getCsrfToken() {
  return Cookies.get(CsrfTokenKey)
}

export function setCsrfToken(csrfToken) {
  return Cookies.set(CsrfTokenKey, csrfToken)
}

export function removeCsrfToken() {
  return Cookies.remove(CsrfTokenKey)
}