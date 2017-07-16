import React from 'react';
import { Provider } from 'react-redux';

import Store from '/src/Redux/Store'
import Views from '/src/Views';

const App = () => {

    return (
        <Provider store={Store}>
          <Views />
        </Provider>
    );
};

export default App;
