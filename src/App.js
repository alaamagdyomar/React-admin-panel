import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar.jsx';
import './app.css'
import Home from './pages/home/Home';


function App() {
  return (
    <div className="App">
          <Topbar/>
          <div className="container">
              <Sidebar />
              <Home/>
          </div>
    </div>
  );
}

export default App;
