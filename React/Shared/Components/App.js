import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux"
import reducer from '../Data/reducer'

class App extends React.Component {
  render() {
    { this.props.log() }
    console.log(this.props)
    return (
      <div>
        <Switch>
          {this.props.routes.map((route, i) => (
            <Route key={i + 1} {...route} />
          ))}
        </Switch>
      </div>
    );
  }
}



const mapStateToProps = (state) => { 
  return state;
}

const mapDispatchToProps = (dispatch) => { 
  return {
    log: () => dispatch({ type: "App", do: () => console.log("dispatch called") })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
