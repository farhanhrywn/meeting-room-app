// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import HomeScreen from './components/HomeScreen'
import RoomUsageScreen from './components/RoomUsageScreen';
import ClientScreen from './components/ClientScreen';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <HomeScreen />
        </Route>
        <Route path='/usage'>
          <RoomUsageScreen />
        </Route>
        <Route path='/client'>
          <ClientScreen />
        </Route>
      </Switch>
    </Router>
  </Provider>
  );
}

export default App;
