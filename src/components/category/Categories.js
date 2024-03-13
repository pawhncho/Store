import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './categories.css';

function Categories({ API }) {
	const navigate = useNavigate()

	const [categories, setCategories] = useState([])

	async function request() {
		await axios.get(API + '/api/categories/').then(res => {
			setCategories(res.data)
		})
	}

	useEffect(() => {
		request()
		// eslint-disable-next-line
	}, [])

	return (
		<div className="categories">
			<div className="list">
				{
					categories.map(category => {
						return <a href={'/category/' + category.uuid + '/products/'}><p>{category.name}</p></a>
					})
				}
			</div>
		</div>
	)
}

export default Categories;
