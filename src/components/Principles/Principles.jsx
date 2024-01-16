import React from 'react';
import cls from './Principles.module.scss';
import Principle from '../Principle/Principle';
import principles from '../../utils/principles';

function Principles() {
	return (
		<main className={cls.principles}>
			<h1 className={cls.title}>Памятка</h1>
			<ul className={cls.list}>
				{principles.map((principle) => (
					<Principle
						key={principle.number}
						title={principle.title}
						text={principle.text}
					/>
				))}
			</ul>
		</main>
	);
}

export default Principles;
