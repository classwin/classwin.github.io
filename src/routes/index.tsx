import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import UserLayout from '../layouts/UserLayout'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/user/login" />
        </Route>
        <Route path="/user">
          <UserLayout />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes