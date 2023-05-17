import React from 'react'

function TextWithLineBreaks ({ onlyBreakFirstLine, styled, children }) {
  const stylesFirstLine = 'text-2xl font-bold sm:text-lg'
  const stylesOtherLines = 'text-base italic font-normal'

  const lines = onlyBreakFirstLine
    ? children.split('\n')
      .map((line, index) =>
        index === 0
          ? <span className={styled && stylesFirstLine} key={index}>{line.trim()}<br /></span>
          : <span className={styled && stylesOtherLines} key={index}>{line.trim()} </span>
      )
    : children
      .split('\n')
      .map((line, index) => <React.Fragment key={index}>{line.trim()}<br /></React.Fragment>)

  return lines
}

export default TextWithLineBreaks
