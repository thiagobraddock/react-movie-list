import './Header.css';
import logo from '../../assets/logo-cap.png';

function Header() {
  return (
    <header>
      <div className="container">
        <img src={ logo } alt="" />
        <nav>
          <a href="/">Favoritos</a>
          <a href="/">Add</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
