import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'contacts'}>Contacts</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer style={{ backgroundColor: 'gray' }}>
        <h4>This is footer</h4>
      </footer>
    </>
  );
};

export default Layout;
