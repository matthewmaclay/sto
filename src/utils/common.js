import isNode from 'detect-node'
export function setParam(param, value) {
  if (!isNode) {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    params.set(param, value)
    url.search = value ? params.toString() : ''

    history.pushState(null, null, url.toString())
  }
}

const localCache = {}

export function setLocalStorage(param, value) {
  if (localCache[param] === value) return null
  localCache[param] = value
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  params.set(param, value)
  url.search = value ? params.toString() : ''

  history.pushState(null, null, url.toString())
}

export function separateNumbers(str, withoutPrefix) {
  if (!str) return ' —'
  var parts = (str + '').split('.')
  var main = parts[0]
  var len = main.length
  var output = ''
  var i = len - 1

  while (i >= 0) {
    output = main.charAt(i) + output
    if ((len - i) % 3 === 0 && i > 0) {
      output = ' ' + output
    }
    --i
  }

  if (parts.length > 1) {
    output += '.' + parts[1]
  }
  return withoutPrefix ? output : output + ' руб.'
}
