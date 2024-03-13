import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CiTurnL1, CiHeart, CiShoppingCart } from "react-icons/ci";
import './product.css';

function Product({ API }) {
	const { uuid } = useParams()

	const navigate = useNavigate()

	const [product, setProduct] = useState({})

	const request = async () => {
		await axios.get(API + '/api/product/' + uuid + '/').then(res => {
			setProduct(res.data)
		})
	}

	useEffect(() => {
		request()
		// eslint-disable-next-line
	}, [])

	return (
		<div className="product" style={{ height: window.innerHeight }}>

			<div className="navbar">
				<CiTurnL1 className="icon" onClick={() => navigate(-1)} />
				<CiHeart className="icon" />
			</div>

			<div className="image">
				<img src={API + product.picture} alt="..." />
			</div>

			<div className="details">
				<h2>{product.name}</h2>
				<p>${product.price}</p>
			</div>

			<div className="buttons">
				<div className="buy">
					<button className="buy">Buy Now</button>
				</div>
				<div className="cart">
					<button className="cart"><CiShoppingCart className="icon" /></button>
				</div>
			</div>

		</div>
	)
}

export default Product;
