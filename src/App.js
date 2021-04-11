import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import ButtonAppBar from './components/HeaderComponent';
//import ListUserComponent from './components/ListUserComponent';
import CreateUserComponent from './components/CreateUserComponent';
import Login from './components/Login';
import UserContainer from './components/UserContainer';
import UserListComponent from './components/UserListComponent';
import MainManager from './components/MainManager';
function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <MainManager />
     {/* <Login/> */}
     {/* <IsLoggedIn /> */}
      {/* <UserListComponent /> */}
     {/* <UserContainer/> */}
    </div>
    // </Provider>
  );
}

export default App;
