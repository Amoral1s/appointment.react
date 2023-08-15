import logo from '../../assets/img/logo.svg';
import './Header.sass';

function Header() {

  return (
    <header className='header container'>
      <div className='header-logo'><img src={logo} height="70" width="70" alt="logo"></img></div>
    </header>
  )
}

export default Header;