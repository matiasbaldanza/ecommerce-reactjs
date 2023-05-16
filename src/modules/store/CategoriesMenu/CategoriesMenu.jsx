import { NavLink } from 'react-router-dom'

function CategoriesMenu ({ menuItems }) {
  return (
    <ul className={`menu menu-horizontal menu-compact bg-background rounded-box mt-4
                    sm:menu-horizontal sm:menu-normal sm:mt-0`}
    >
      {
        menuItems.map((menuItem) => {
          return (
            <li
              key={`categories-menu-${menuItem.route}`}
            ><NavLink to={`/category/${menuItem.route}`}>{menuItem.title}</NavLink>
            </li>
          )
        })
      }
    </ul>
  )
}

export default CategoriesMenu
