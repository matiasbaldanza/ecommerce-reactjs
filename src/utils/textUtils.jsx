export const pluralize = (count, noun, suffix = 's') => {
  return `${count} ${noun}${count !== 1 ? suffix : ''}`
}

export const formatTextWithLineBreaks = (text) => {
  return text
    .split('\n')
    .map((line, index) => <span key={index}>{line}<br /></span>)
}
