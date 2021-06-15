import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './screens/Login'
import Home from './screens/Home'
import CreatePoll from './screens/CreatePoll'
import MyPolls from './screens/MyPolls'
import Vote from './screens/VotingScreen'
import VotingScreen from './screens/VotingScreen'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route path='/vote' component={Vote}></Route>
          <Route path='/user/home' component={Home}></Route>
          <Route path='/user/newpoll' component={CreatePoll}></Route>
          <Route path='/user/mypolls' component={MyPolls}></Route>
          <Route path='/user/takepoll' component={VotingScreen}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
