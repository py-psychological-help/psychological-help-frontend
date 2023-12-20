import React from 'react';
import cls from './Principles.module.scss';

function Principles() {
	return (
		<>
			{/* <Sidebar /> */}
			<main className={cls.principles}>
				<h1 className={cls.title}>Наши принципы</h1>
				<ul className={cls.list}>
					<li className={cls.item}>
						<h2 className={cls.itemTitle}>Принцип 1</h2>
						<p className={cls.itemText}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.
						</p>
					</li>
					<li className={cls.item}>
						<h2 className={cls.itemTitle}>Принцип 2</h2>
						<p className={cls.itemText}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.
						</p>
					</li>
					<li className={cls.item}>
						<h2 className={cls.itemTitle}>Принцип 3</h2>
						<p className={cls.itemText}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.
						</p>
					</li>
					<li className={cls.item}>
						<h2 className={cls.itemTitle}>Принцип 4</h2>
						<p className={cls.itemText}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.
						</p>
					</li>
				</ul>
			</main>
		</>
	);
}

export default Principles;
