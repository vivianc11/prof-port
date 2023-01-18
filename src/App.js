import 'bootstrap/dist/css/bootstrap.min.css';
import GuidedPage from './Pages/GuidedPage';
import HomePage from './Pages/HomePage';
import { themeContext } from './Context';
import './App.css';
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App" style={{background : darkMode? 'black': ''}}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/guidedaboutme" element={<GuidedPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
