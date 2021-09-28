import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';




function App() {
  return (
    <>
    <div>
      <Link to="/login">login</Link>
      <Link to="/signup">signup</Link>
      <Link to="/profile">profile</Link>
    </div>
      <Switch>
        <Route path="/login" exact component={(props) => (<Login {...props} />)} />
        <Route path="/signup" render={props => (<Signup {...props} />)} />
        <Route path="/profile" render={props => (<Profile {...props} />)} />

      </Switch>


      {/* <Alert
        show={toast.show}
        text={toast.text}
        closeAlert={() => setToast({ ...toast, show: false })}
      /> */}

      {/* <Footer loggedUser={this.state.loggedUser} /> */}
    </>
  );
}

export default App;
