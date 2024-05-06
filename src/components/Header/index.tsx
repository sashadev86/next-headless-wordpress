import Link from "next/link";
import NavList from "../NavList";

const Header = () => {
  return (
    <header className={"py-5"}>
      <div className="container flex gap-5 justify-between">
        <Link href="/">
          Logo
        </Link>

        <NavList />

        <button>Войти</button>
      </div>
    </header>
  )
}

export default Header;