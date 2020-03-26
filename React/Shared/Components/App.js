import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux"

class App extends React.Component {
  render() {
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
  return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
