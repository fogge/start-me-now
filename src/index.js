import stores from './stores/index';
import { Provider } from 'mobx-react';

ReactDOM.render(

    <Provider {...stores}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
