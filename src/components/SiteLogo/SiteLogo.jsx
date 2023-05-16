import { Link } from 'react-router-dom'

function SiteLogo () {
  const styles = `flex flex-col items-center justify-center gap-0 
                  p-4 text-white border-8 border-white rounded-full aspect-square 
                  bg-gradient-to-t from-blue-700 to-blue-300`

  return (
    <Link className={styles} to='/'>
      <span className='text-xl normal-case'>tuPortátil</span>
      <span className='block mx-1 text-xs text-center'>TECHSTORE</span>
    </Link>
  )
}

export default SiteLogo
