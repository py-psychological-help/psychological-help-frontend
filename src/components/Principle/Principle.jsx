import React from 'react';
import PropTypes from 'prop-types';
import cls from './Principle.module.scss';

function Principle({ title, text }) {
	return (
		<li className={cls.item}>
			<h2 className={cls.itemTitle}>{title}</h2>
			<p className={cls.itemText}>{text}</p>
		</li>
	);
}

Principle.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default Principle;
