import logoImg from "../assets/logo.svg"
import cartIcon from "../assets/icon-cart.svg"
import avatar from "../assets/image-avatar.png"
import { menuItems } from "./data-text"
import { NavLink, Link } from "react-router-dom"

const Header = () => {
  let menuText = menuItems.map((menuItem) => (
    <li key={menuItem.id}>
      <NavLink to={`/${menuItem.name}`}>{menuItem.name}</NavLink>{" "}
    </li>
  ))
  return (
    <>
      <div className="">
        <header className="container d-flex justify-content-between align-items-center border-bottom">
          <Link to={"/"}>
            <img src={logoImg} alt="Sneakers Logo" className="logo" />
          </Link>
          <nav>
            <ul className="d-flex">{menuText}</ul>
          </nav>
          <div>
            <img src={cartIcon} className="cart" alt="Cart Icon" />
            <span>
              <img src={avatar} className="avatar" alt="User Profile" />
            </span>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
