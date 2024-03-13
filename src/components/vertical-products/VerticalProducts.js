import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import axios from 'axios';
import './vertical-products.css';

function VerticalProducts({ API }) {
	const { uuid } = useParams()

	const navigate = useNavigate()

	const [products, setProducts] = useState([])

	const request = async () => {
		await axios.get(API + '/api/category/' + uuid + '/products/').then(res => {
			setProducts(res.data)
		})
	}

	useEffect(() => {
		request()
		// eslint-disable-next-line
	}, [])

	return (
		<div className="vertical-list">
			{
				products.map(product => {
					return (
						<div className="product" onClick={() => navigate('/product/' + product.uuid)}>
							<div className="heart">
								<CiHeart className="icon" />
							</div>
							<div className="image">
								<img src={API + product.picture} alt="..." />
							</div>
							<div className="detail">
								<p>${product.price}</p>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default VerticalProducts;
