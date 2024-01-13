import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerInfoBlock}>
				<div className={styles.footerInfo}>
					<h2 className={styles.footerTitle}>Project name</h2>
					<p className={styles.footerText}>About project</p>
				</div>

				<div className={styles.footerLinksBlock}>
					<nav className={styles.footerNav}>
						<h3 className={styles.footerNavTitle}>Клиентам</h3>
						<ul className={styles.footerNavList}>
							{[
								{
									id: 'yandex',
									text: 'Яндекс.Практикум',
									url: 'https://practicum.yandex.ru/',
								},
								{
									id: 'github',
									text: 'Github',
									url: 'https://github.com/',
								},
								{
									id: 'linkedin',
									text: 'LinkedIn',
									url: 'https://www.linkedin.com/',
								},
								{
									id: 'linkedin',
									text: 'LinkedIn',
									url: 'https://www.linkedin.com/',
								},
							].map((item) => (
								<li
									key={item.id}
									className={styles.footerNavElement}
								>
									<a
										className={styles.footerNavlink}
										href={item.url}
										target="_blank"
										rel="noreferrer"
									>
										{item.text}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<nav className={styles.footerNav}>
						<h3 className={styles.footerNavTitle}>Психологам</h3>

						<ul className={styles.footerNavList}>
							{[
								{
									id: 'yandex',
									text: 'Яндекс.Практикум',
									url: 'https://practicum.yandex.ru/',
								},
								{
									id: 'github',
									text: 'Github',
									url: 'https://github.com/',
								},
								{
									id: 'linkedin',
									text: 'LinkedIn',
									url: 'https://www.linkedin.com/',
								},
								{
									id: 'linkedin',
									text: 'LinkedIn',
									url: 'https://www.linkedin.com/',
								},
							].map((item) => (
								<li
									key={item.id}
									className={styles.footerNavElement}
								>
									<a
										className={styles.footerNavlink}
										href={item.url}
										target="_blank"
										rel="noreferrer"
									>
										{item.text}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<nav className={styles.footerNav}>
						<h3 className={styles.footerNavTitle}>Фондам</h3>

						<ul className={styles.footerNavList}>
							{[
								{
									id: 'yandex',
									text: 'Яндекс.Практикум',
									url: 'https://practicum.yandex.ru/',
								},
								{
									id: 'github',
									text: 'Github',
									url: 'https://github.com/',
								},
								{
									id: 'linkedin',
									text: 'LinkedIn',
									url: 'https://www.linkedin.com/',
								},
								{
									id: 'linkedin',
									text: 'LinkedIn',
									url: 'https://www.linkedin.com/',
								},
							].map((item) => (
								<li
									key={item.id}
									className={styles.footerNavElement}
								>
									<a
										className={styles.footerNavlink}
										href={item.url}
										target="_blank"
										rel="noreferrer"
									>
										{item.text}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
			<div className={styles.copyrightBlock}>
				<p className={styles.footerYear}>© 2023</p>
				<p className={styles.location}>Location: Russia</p>
			</div>
		</footer>
	);
};

export default Footer;
