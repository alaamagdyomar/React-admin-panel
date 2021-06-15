import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar.jsx';
import './app.css'


function App() {
  return (
    <div className="App">
          <Topbar/>
          <div className="container">
              <Sidebar />
              <div className="others">
                    others
              </div>
          </div>
    </div>
  );
}

export default App;
