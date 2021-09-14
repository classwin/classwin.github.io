import { Switch, Route, useRouteMatch } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'

const UserLayout = () => {
  const match = useRouteMatch()
  return (
    <div>
      <div>User Layout</div>
      <Switch>
        <Route path={`${match.url}/login`}>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  )
}

export default UserLayout
