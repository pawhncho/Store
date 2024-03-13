import { Outlet } from 'react-router-dom';
import Header from './components/header/Header.js';
import Search from './components/search/Search.js';
import Categories from './components/category/Categories.js';
import Banner from './components/banner/Banner.js';
import Footer from './components/footer/Footer.js';

function Home({ API }) {
	return (
		<div className="home">
			<Header />
			<Search />
			<Categories API={API} />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Home;
