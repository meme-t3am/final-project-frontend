import { NavLink, Outlet } from 'react-router-dom';

export default function Auth() {

  return (
    <>
      <Outlet/>
      <NavLink to="about">Meet the devs</NavLink>

    </>
  );
}
