
import clsx from 'clsx'

function IconButton ({ icon, onClick, ...props }) {
  return (
    <button
      {...props}
      className={clsx('flex gap-4 mt-4 btn', props.className)}
      onClick={onClick}
    >
      {icon}
      {props.children}
    </button>
  )
}

export default IconButton
