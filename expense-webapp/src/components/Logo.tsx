import logo from "../assets/purse_icon.png"
const Logo = () => {
  return (
    <div className="navbar-brand">
     <img src={logo}
      alt="Logo"
      width={48}
      height={48}
      className="rounded-circle"
      ></img>
    </div>
  )
}

export default Logo
