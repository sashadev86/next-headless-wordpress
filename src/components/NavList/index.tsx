import { MenuItems } from './menuItems';

const NavList = () => {
  return (
    <nav>
      <ul className={"flex gap-5"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <a href={item.to}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavList