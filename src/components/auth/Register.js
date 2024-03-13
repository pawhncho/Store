import { useState } from 'react';

function Register() {
	return (
		<div className="register">
			<header>
				<h1>Sign up</h1>
			</header>
			<form>
				<div className="username">
					<input id="username" type="text" placeholder="Username" required />
				</div>
				<div className="email">
					<input id="email" type="email" placeholder="Email Address" required />
				</div>
				<div className="passwords">
					<div className="password">
						<input id="password" type="password" placeholder="Password" required />
					</div>
					<div className="confirm-password">
						<input id="confirm-password" type="password" placeholder="Confirm Password" required />
					</div>
				</div>
				<div className="submit">
					<button>Create account</button>
				</div>
			</form>
		</div>
	)
}

export default Register;
