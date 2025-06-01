import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => (
  <nav className={styles.navbar}>
    <div className={styles.navbarInner}>
      <NavLink className={styles.logo} to="/">
        <img src="/logo192.png" alt="Logo" /> RanBOT
      </NavLink>
      <ul className={styles.navbarNav}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? styles.activeNav : undefined} end>Home</NavLink></li>
        <li><NavLink to="/logo" className={({ isActive }) => isActive ? styles.activeNav : undefined}>Logo</NavLink></li>
        <li><NavLink to="/screenshot" className={({ isActive }) => isActive ? styles.activeNav : undefined}>Screenshot</NavLink></li>
        <li><NavLink to="/insights" className={({ isActive }) => isActive ? styles.activeNav : undefined}>Insights</NavLink></li>
        <li><NavLink to="/meta" className={({ isActive }) => isActive ? styles.activeNav : undefined}>Meta</NavLink></li>
        <li><NavLink to="/pdf" className={({ isActive }) => isActive ? styles.activeNav : undefined}>PDF</NavLink></li>
      </ul>
      <div className={styles.navbarActions}>
        <a href="#pricing" className={styles.btnMain}>Get Started</a>
      </div>
    </div>
  </nav>
);

export default Navbar;