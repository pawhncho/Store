import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import axios from 'axios';
import './result.css';

function Results({ API }) {
	const { keyword } = useParams()

	const navigate = useNavigate()

	const [results, setResults] = useState([])

	const request = async () => {
		await axios.get(API + '/api/search/' + keyword + '/').then(res => {
			setResults(res.data)
		})
	}

	useEffect(() => {
		request()
		// eslint-disable-next-line
	}, [])

	return (
		<div className="results">
			<div className="label">
				<h2>Results for {keyword}</h2>
			</div>
			<div className="products">
				{
					results.length > 0 ?
					results.map(result => {
						return (
							<div className="result" onClick={() => navigate('/product/' + result.uuid)}>
								<img src={API + result.picture} alt="..." />
								<div className="detail">
									<p className="name">{result.name}</p>
									<p className="price">${result.price}</p>
								</div>
								<div className="heart">
									<CiHeart className="icon" />
								</div>
							</div>
						)
					}) :
					<p className="no-result">No Results</p>
				}
			</div>
		</div>
	)
}

export default Results;
