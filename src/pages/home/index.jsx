import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import * as styles from './style.module.scss';

import homeLogo from '../../assets/home-logo.png';
import ganesh from '../../assets/ganesh.png';
import noPadLogo from '../../assets/logo-no-pad.png';
import certImg from '../../assets/cert.png';
import diplomaImg from '../../assets/diploma.svg';
import testimonials from '../../data/testimonials';

import Header from "../../components/header";
import Footer from '../../components/footer';

function Home() {
	return <>
		<Header/>
		<Helmet>
			<title>Rema - Home</title>
		</Helmet>
		<div className={`${styles.container} ${styles.part_1}`}>
			<img src={ganesh} className={styles.ganesh} />
			<img src={homeLogo} className={styles.logo} />
			<div>
				<div className={styles.desc}>
					Managing and distributing
					<br/>
					certifications for all, since 2021.
				</div>
				<Link to="/contact">
					<button data-bs-theme="dark" className={`btn ${styles.button}`}>
						Request a Quote
					</button>
				</Link>
			</div>
		</div>
		<div className={`${styles.container} ${styles.part_2}`}>
			<img src={noPadLogo} className={styles.logo_2} />
			<div className={styles.card}>
				<img src={noPadLogo} className={styles.img} />
				<span className={styles.caption}>
					One of its kind
				</span>
			</div>
			<div className={styles.card}>
				<img src={certImg} className={styles.img} />
				<span className={styles.caption}>
					Customizable
				</span>
			</div>
			<div className={styles.card}>
				<img src={diplomaImg} className={styles.img} />
				<span className={styles.caption}>
					Easy to use
				</span>
			</div>
		</div>
		<div id="testimonial-carousel" className={`carousel slide ${styles.container} ${styles.part_3}`}>
			<div className={`carousel-inner ${styles.testimonial_wrapper}`}>
				{
					testimonials.map(({ content, author, position, eventOrOrg, time }, i) => (
						<div key={i} className={`carousel-item ${i === 0 ? 'active' : ''} ${styles.testimonial}`}>
							<div className={styles.testimonial_content}>
								“{content}”
								<br/>
								<br/>
								– {author} ({position}, {eventOrOrg} {time}).
							</div>
						</div>
					))
				}
			</div>
			<a className={`carousel-control-prev ${styles.prev} ${styles.arrow}`} data-bs-target="#testimonial-carousel" data-bs-slide="prev">
				{'<'}
			</a>
			<a className={`carousel-control-next ${styles.next} ${styles.arrow}`} data-bs-target="#testimonial-carousel" data-bs-slide="next">
				{'>'}
			</a>
		</div>
		<Footer/>
	</>;
}

export default Home;