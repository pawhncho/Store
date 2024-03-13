import { useState, useEffect } from 'react';
import { CiHeart } from "react-icons/ci";
import axios from 'axios';
import './horizontal-products.css';

function HorizontalProducts({ API, url }) {
	const [products, setProducts] = useState([])

	const request = async () => {
		await axios.get(API + url).then(res => {
			setProducts(res.data)
		})
	}

	useEffect(() => {
		request()
		// eslint-disable-next-line
	}, [])

	return (
		<div className="horizontal-list">
			{
				products.map(product => {
					return (
						<div className="product">
							<div className="heart">
								<CiHeart className="icon" />
							</div>
							<div className="image">
								<img src={API + product.picture} alt="..." />
							</div>
							<div className="detail">
								<h2>{product.name}</h2>
								<p>{product.price}</p>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default HorizontalProducts;
