import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<AllMeetupsPage />} />
						<Route path="/new-meetup" element={<NewMeetupPage />} />
						<Route path="/favorites" element={<FavoritesPage />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
