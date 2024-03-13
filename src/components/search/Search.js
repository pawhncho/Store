import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import './search.css';

function Search() {
	const [keyword, setKeyword] = useState()

	return (
		<div className="search">
			<form action={'/search/' + keyword + '/'} className="search">
				<div className="input">
					<label for="search"><CiSearch className="icon" /></label>
					<input id="search" type="text" placeholder="Search"
						onChange={element => setKeyword(element.target.value)} value={keyword} />
				</div>
			</form>
		</div>
	)
}

export default Search;
