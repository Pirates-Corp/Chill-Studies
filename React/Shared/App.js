import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'

class App extends React.Component {
    render () {
        return(
            <div>
                <Switch>
                    {routes.map((route, i) => <Route key={i+1} {...route} />)}
                </Switch>                
            </div>
        )
    }
}

export default App