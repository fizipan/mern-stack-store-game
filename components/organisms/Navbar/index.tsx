// Core nextjs modules
import Image from 'next/image';

// Components
import NavLink from './NavLink';
import NavAuth from './NavAuth';
import ToggleMenu from './ToggleMenu';

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src="/icon/logo.svg" width={60} height={60} alt="Logo" />
          </a>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <NavLink title="Home" isActive />
              <NavLink title="Games" />
              <NavLink title="Rewards" />
              <NavLink title="Discover" />
              <NavLink title="Global Rank" />
              <NavAuth />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
