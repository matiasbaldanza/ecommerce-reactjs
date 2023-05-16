// Data
import { CATEGORIES } from '../../../utils/globalConstants'

// Componentes
import TopBanner from '../TopBanner'
import SiteLogo from '../SiteLogo'
import Greeting from '../Greeting'
import SocialButtons from '@/modules/layout/SocialButtons'
import CartWidget from '@/modules/cart/CartWidget'
import CategoriesMenu from '@/modules/store/CategoriesMenu'

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
        <div className='justify-between flex-1 px-8 sm:mt-2'>
          <CategoriesMenu menuItems={CATEGORIES} />
          <CartWidget
            className={`fixed z-50 bg-brand text-background rounded-full shadow-lg bottom-4 right-4
                        sm:static sm:rounded-none sm:shadow-none sm:bottom-0 sm:right-0 sm:bg-background sm:text-foreground`}
            cart={cart}
          />
        </div>
      </div>

    </>
  )
}

export default Header
