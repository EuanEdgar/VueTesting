export const blank = (v) => (
  [null, undefined].includes(v) ||
    (typeof v === 'string' && v.length === 0) ||
    (typeof v === 'object' && Object.entries(v).length === 0)
)

export const titleize = (str) => (
  str.split(/\s/g).map((s) => `${s[0].toUpperCase()}${s.substring(1)}`).join(' ')
)
