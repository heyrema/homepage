import * as styles from './style.module.scss';
import './style.scss';

import logo from '../../assets/logo-mini.svg';
import toggler from '../../assets/toggler-bar.svg';

const Header = () => {
	return <>
		<nav data-bs-theme="dark" className={`navbar navbar-expand-md bg-body-tertiary ${styles.header}`}>
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					<img src={logo} className={styles.logo} />
					Rema
				</a>
				<button className="navbar-toggler p-0 border-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
					<img src={toggler} />
				</button>
				<div className="collapse navbar-collapse" id="navbarToggler">
				<ul className="navbar-nav me-auto mb-lg-0">
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="/">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/about">About</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/contact">Contact</a>
					</li>
				</ul>
				</div>
			</div>
		</nav>
	</>;
};

export default Header;