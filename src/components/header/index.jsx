import { Link, NavLink } from 'react-router-dom';

import * as styles from './style.module.scss';
import './style.scss';

import logo from '../../assets/logo-mini.svg';
import toggler from '../../assets/toggler-bar.svg';

const Header = () => {
	return <>
		<nav data-bs-theme="dark" className={`navbar navbar-expand-md bg-body-tertiary ${styles.header}`}>
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img src={logo} className={styles.logo} />
					Rema
				</Link>
				<button className="navbar-toggler p-0 border-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
					<img src={toggler} />
				</button>
				<div className="collapse navbar-collapse" id="navbarToggler">
				<ul className="navbar-nav me-auto mb-lg-0">
					<li className="nav-item">
						<NavLink className="nav-link p-0" to="/">Home</NavLink>
					</li>
					<li className="nav-item">
						<a className="nav-link p-0" href="https://rema.js.org" target="_blank">Docs</a>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link p-0" to="/about">About</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link p-0" to="/contact">Contact</NavLink>
					</li>
				</ul>
				</div>
			</div>
		</nav>
	</>;
};

export default Header;