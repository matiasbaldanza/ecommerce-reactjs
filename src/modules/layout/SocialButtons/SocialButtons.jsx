import IconWhatsApp from '../../ui/Icons/IconWhatsApp'
import IconInstagram from '../../ui/Icons/IconInstagram'
import { SOCIAL_ACCOUNTS } from '../../../utils/globalConstants'

function SocialButtons () {
  return (
    <div className='flex self-center gap-2'>
      {
      SOCIAL_ACCOUNTS.map((account) => {
        return (
          <a
            key={account.name}
            href={account.url}
            alt={account.name}
            title={account.name}
            target='_blank'
            rel='noreferrer'
            className='flex items-center justify-center w-10 h-10 text-white rounded-full cursor-pointer bg-brand'
          >
            {account.name === 'Instagram' && <IconInstagram />}
            {account.name === 'WhatsApp' && <IconWhatsApp />}
          </a>
        )
      })
    }
    </div>
  )
}

export default SocialButtons
