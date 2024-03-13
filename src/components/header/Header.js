import { CiUser } from 'react-icons/ci';
import './header.css';

function Header() {
	return (
		<header>
			<nav>
				<span>
					<a href="/auth/"><CiUser className="icon" /></a>
				</span>
			</nav>
		</header>
	)
}

export default Header;
