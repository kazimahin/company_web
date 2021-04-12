import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore ,compose ,applyMiddleware } from "redux";
import allReducer from "./redux/reducer/allReducer";
import { Provider  } from "react-redux";
import thunk from 'redux-thunk';

const middleware = [thunk]
  
 const store = createStore(


        allReducer,
        (process.env.REACT_APP_MODE == "DEV")?
        compose(    applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 
            :
        applyMiddleware(...middleware)



     );


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

 