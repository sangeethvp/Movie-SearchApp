import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage";

import MoviePage from "./pages/MoviePage";

import './styles/styles.css'

function App() {
  return (
    <div className="App">
<Router>
  <Routes>
    <Route path="/"Component={HomePage}/>
    <Route path="/movies/:id" Component={MoviePage}/>
      
  </Routes>
</Router>
    </div>
  );
}

export default App;
