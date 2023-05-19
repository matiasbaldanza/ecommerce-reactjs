function Badge ({ children }) {
  return (
    <span
      className={`font-extrabold border-0 text-brand bg-background badge badge-sm indicator-item
                  sm:text-background sm:bg-foreground`}
    >
      {children}
    </span>
  )
}

export default Badge
