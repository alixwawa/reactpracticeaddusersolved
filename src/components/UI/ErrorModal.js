import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Button from './Buttton';
import Card from './Card';
import styles from './ErrorModal.module.css';

const Backdrop = (props) => {
	return (
		<div
			className={styles.backdrop}
			onClick={props.onConfirm}
		/>
	);
};

const ModalOverlay = (props) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				<Button onClick={props.onConfirm}>Okay</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = (props) => {
	return (
		<>
			{ReactDom.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById('backdrop-root'),
			)}
			{ReactDom.createPortal(
                <ModalOverlay onConfirm={props.onConfirm} title={props.title} message={props.message} />,
				document.getElementById('overlay-root'),
			)}
		</>
	);
};

export default ErrorModal;
