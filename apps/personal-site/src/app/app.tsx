import './app.scss';

import { Route, Link } from 'react-router-dom';
import { NavBar } from '../components';

export function App() {
  return (
    <>
      <NavBar />
      {/* START: routes */}
      <Route path="/" exact render={() => <div>Home</div>} />
      <Route
        path="/contact"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </>
  );
}

export default App;
