import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main.js';
import Home from './Home.js';
import Login from './components/auth/Login.js';
import Product from './components/product/Product.js';
import Result from './components/result/Result.js';
import HorizontalProducts from './components/horizontal-products/HorizontalProducts.js';
import VerticalProducts from './components/vertical-products/VerticalProducts.js';

function App() {
	const API = 'http://192.168.1.3:8000';

	return (
		<BrowserRouter>
			<Routes>
				<Route path='Store/' element={<Main API={API} />}>
					<Route path='Store/' element={<Home API={API} />}>
						<Route path='search/:keyword/' element={<Result API={API} />} />
						<Route path='category/:uuid/products/' element={<VerticalProducts API={API} />} />
					</Route>
					<Route path='Store/auth/' element={<Login />} />
					<Route path='Store/product/:uuid/' element={<Product API={API} />} />
					<Route path='*' element={<div>Page Not Found</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App;
