import React from 'react';
import { Switch, Route } from "react-router-dom";
import Main from './components/Main';
import Todo from './components/todolist/Todo';

const App = () => {
  return (
    <div>
      <div>
      <Switch>
          <Route exact path={"/"} component={Main} />
          <Route exact path={"/todo"} component={Todo} />
      </Switch>
      </div>
    </div>
  );
};

export default App;