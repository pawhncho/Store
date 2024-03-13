import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Alert from './components/alert/Alert.js';
import './styles.css';

function Main({ API }) {
	const [alert, setAlert] = useState()

	useEffect(() => {
		if (alert) {
			setTimeout(() => {
				setAlert()
			}, 3000)
		}
		// eslint-disable-next-line
	}, [])

	return (
		<main style={{ height: window.innerHeight }}>
			{alert ? <Alert alert={alert} /> : null}
			<Outlet />
		</main>
	)
}

export default Main;
