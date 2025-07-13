import { Route, Switch } from 'wouter'
import Home from './pages/Home.jsx'
import Entry from './pages/Entry.jsx'

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/entry" component={Entry} />
    </Switch>
  )
}
