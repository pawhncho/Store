import './alert.css';

function Alert({ alert }) {
	return (
		<aside className="alert">
			<p className="shadow rounded-4" style={{ color: alert.color, backgroundColor: alert.bg }}>
				{alert.message}
			</p>
		</aside>
	)
}

export default Alert;
