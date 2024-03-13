import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiTurnL1, CiUser, CiLock } from "react-icons/ci";
import './login.css';

function Login() {
	const navigate = useNavigate()

	const [username, setUsername] = useState()
	const [password, setPassword] = useState()

	const login = (event) => {}

	return (
		<div onSubmit={login} className="login" style={{ height: window.innerHeight }}>
			<div className="form">
				<div className="navbar">
					<CiTurnL1 className="icon" onClick={() => navigate(-1)} />
				</div>
				<div className="label">
					<h1>Login</h1>
				</div>
				<form>
					<div className="username">
						<div className="input">
							<CiUser className="icon" />
							<input id="username" type="text" placeholder="Username" required
								value={username} onChange={e => setUsername(e.target.value)} />
						</div>
					</div>
					<div className="password">
						<div className="input">
							<CiLock className="icon" />
							<input id="password" type="password" placeholder="Password" required
								value={password} onChange={e => setPassword(e.target.value)} />
						</div>
					</div>
					<small>Forgot password?</small>
					<div className="submit">
						<button className="rounded-pill shadow">LOGIN</button>
					</div>
				</form>
				<div className="link">
					<p>Or SIGN UP</p>
				</div>
			</div>
		</div>
	)
}

export default Login;
