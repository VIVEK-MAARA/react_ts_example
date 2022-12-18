import { Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";

const App: React.FC = () => {
	return(
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/weatherApp" element={<h1>Weather App</h1>}></Route>
			<Route path="/calculatorApp" element={<h1>Calculator App</h1>}></Route>
			<Route path="/toDoApp" element={<h1>To Do App</h1>}></Route>
			<Route path="/productApp" element={<h1>Product App</h1>}></Route>
			<Route path="*" element={<h1>404 Not Found</h1>}></Route>
		</Routes>
	)
}

export default App;