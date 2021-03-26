import { useDispatch, useSelector } from 'react-redux';
import '../Assets/styles/App.css';
import Nav from '../Components/Reusable/Nav';
import { loggedin, loggedout } from '../redux/ducks/logger';

function App() {
  const log = useSelector(state => state.userlogged.logged)
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loggedin());
  }
  const handleLogout = () => {
    dispatch(loggedout());
  }

  return (
    <div className="app">
        <Nav />
        <h1>{ log }</h1>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default App;
