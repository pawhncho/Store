import { CiShoppingCart, CiHome, CiHeart } from "react-icons/ci";
import './footer.css';

function Footer() {
	return (
		<footer>
			<nav className="shadow">
				<span>
					<CiShoppingCart className="icon" />
				</span>
				<span>
					<a href="/"><CiHome className="icon" /></a>
				</span>
				<span>
					<CiHeart className="icon" />
				</span>
			</nav>
		</footer>
	)
}

export default Footer;
