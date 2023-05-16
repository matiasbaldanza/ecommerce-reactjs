// Data
import { CATEGORIES } from '../../utils/globalConstants'

// Componentes
import TopBanner from '../TopBanner/TopBanner'
import SiteLogo from '../SiteLogo/SiteLogo'
import Greeting from '../Greeting/Greeting'
import SocialButtons from '../SocialButtons/SocialButtons'
import CartWidget from '../CartWidget/CartWidget'
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu'

const cart = {
  cantItems: 2,
  items: [
    {
      id: 1,
      title: 'Celular 1',
      price: 429,
      quantity: 1
    },
    {
      id: 2,
      title: 'Celular 2',
      price: 570,
      quantity: 1
    }
  ],
  subTotal: 999
}

function Header () {
  const styles = `flex-col bg-transparent navbar gap-2
                  sm:flex-row sm:justify-between`

  return (
    <>
      <TopBanner />
      <div className={styles}>
        <SiteLogo />
        <Greeting />
        <SocialButtons />
        {/* Menu */}
        <div className='justify-between flex-1 px-8'>
          <div />
          <CartWidget cart={cart} />
        </div>
      </div>
      <CategoriesMenu menuItems={CATEGORIES} />
    </>
  )
}

export default Header
