import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';

import * as styles from './style.module.scss';
import vectorLogo from '../../assets/logo.svg';

import Header from "../../components/header";
import Footer from '../../components/footer';
import getMessage from '../../data/messages';

const formLoading = `
<p style="text-align: center; font-family: Mukta, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
sans-serif, Kaithi, Mahajani, 'Meetei Mayek';"><b>Loading...</b></p>
`;
const formLink = 'https://docs.google.com/forms/d/e/1FAIpQLSddK84wAZkdMFfVuTu3BtJ3JhR2eg7Z7nZbMe5-1hWo3vglMw/viewform?embedded=true';

function Contact() {
	const iFrameRef = useRef();

	return <>
		<Header/>
		<div className={`${styles.container}`}>
			<Helmet>
				<title>Rema - Contact</title>
			</Helmet>
			<h1>Contact</h1>
			<h4>
				For requesting a quote or any other enquiries, contact us on <a href="mailto:contact@heyrema.com">contact@heyrema.com</a>, or fill the form below:
			</h4>
			<div className="mt-3">
				<iframe ref={iFrameRef} srcDoc={formLoading} onLoad={() => iFrameRef.current?.removeAttribute('srcDoc')} src={formLink} className={styles.form} frameborder="0" marginheight="0" marginwidth="0" />
			</div>
			<img src={vectorLogo} className={styles.logo} />
			<i className={`${styles.msg}`}>
				{getMessage('fun')}
			</i>
		</div>
		<Footer/>
	</>;
}

export default Contact;