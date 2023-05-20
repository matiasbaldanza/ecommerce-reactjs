
import { useState, useRef, useLayoutEffect } from 'react'
import clsx from 'clsx'

function IconButtonWithResponsiveLabel ({ icon, onClick, ...props }) {
  const [showLabel, setShowLabel] = useState(true)

  const buttonContainerRef = useRef(null)
  const labelRef = useRef(null)
  const iconRef = useRef(null)

  const handleResize = () => {
    if (
      buttonContainerRef.current &&
      iconRef.current &&
      labelRef.current &&
      labelRef.current.getBoundingClientRect
    ) {
      /* Obtener el ancho de los elementos */
      const buttonContainerWidth = buttonContainerRef.current.getBoundingClientRect().width
      const iconWidth = iconRef.current.getBoundingClientRect().width
      const labelWidth = labelRef.current.getBoundingClientRect().width

      /* Obtener el ancho adicional por el gap y el padding del botón */
      const computedStyles = window.getComputedStyle(buttonContainerRef.current)
      const gapWidth = parseFloat(computedStyles.getPropertyValue('gap'))
      const paddingWidth = parseFloat(computedStyles.getPropertyValue('padding-left')) +
        parseFloat(computedStyles.getPropertyValue('padding-right'))

      /* Calcular el ancho combinado de los elementos */
      const combinedWidth = iconWidth + labelWidth + gapWidth + paddingWidth

      console.log('buttonContainerWidth: ', buttonContainerWidth)
      console.log('combinedWidth: ', combinedWidth)

      setShowLabel(true)
      setShowLabel(parseInt(combinedWidth) <= parseInt(buttonContainerWidth))
    }
  }

  useLayoutEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <button
      {...props}
      className={clsx('flex gap-4 btn flex-shrink-0', props.className)}
      onClick={onClick}
      ref={buttonContainerRef}
    >
      <span ref={iconRef}>{icon}</span>
      {showLabel && (
        <span ref={labelRef}>{props.children}</span>
      )}
    </button>
  )
}

export default IconButtonWithResponsiveLabel
