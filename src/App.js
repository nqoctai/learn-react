import { Link } from "react-router-dom";
import './App.scss';
import Header from './component/Header/Header';


const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <div>Test Link</div>
      <div>
        <button>
          <Link to="/users">Go to user page</Link>
        </button>
        <button>
          <Link to="/admins">Go to admin page</Link>
        </button>

      </div>
    </div>
  )
}

export default App;
