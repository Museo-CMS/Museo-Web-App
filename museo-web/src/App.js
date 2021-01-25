// import React, { useReducer } from 'react';
// import './App.css';
// import { Button } from '@material-ui/core';

// const initialState = {
//   firstCounter: 0,
//   secondCounter: 10,
// };
// const myState = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { ...state, firstCounter: state.firstCounter + action.value };
//     case 'decrement':
//       return { ...state, firstCounter: state.firstCounter - action.value };
//     case 'increment2':
//       return { ...state, secondCounter: state.secondCounter + action.value };
//     case 'decrement2':
//       return { ...state, secondCounter: state.secondCounter - action.value };
//     case 'reset':
//       return initialState;

//     default:
//       return state;
//   }
// };

// const App = () => {
//   const [count, dispatch] = useReducer(myState, initialState);
//   return (
//     <div>
//       <div>First counter - {count.firstCounter}</div>
//       <div>Second counter - {count.secondCounter}</div>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => dispatch({ type: 'increment', value: 1 })}
//       >
//         Increment
//       </Button>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => dispatch({ type: 'decrement', value: 1 })}
//       >
//         Decrement
//       </Button>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => dispatch({ type: 'reset' })}
//       >
//         Reset
//       </Button>

//       <div>
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={() => dispatch({ type: 'increment2', value: 1 })}
//         >
//           Increment2
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={() => dispatch({ type: 'decrement2', value: 1 })}
//         >
//           Decrement2
//         </Button>
//       </div>
//     </div>
//   );
// };
// export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
