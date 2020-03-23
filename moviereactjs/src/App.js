import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Header {...this.props} />
        <Switch>
          <Route path="/" exact render={()=>(<Redirect to="/home" />)} />
          <Route path="/home" render={(props)=>(<Home {...props} />)} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App