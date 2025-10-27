// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from './reducers/counterSlice';

// const store = configureStore({
//     reducer:{
//         counter: counterReducer
//     }
// })


// export default store;


import { configureStore } from "@reduxjs/toolkit";

import themeReducer from './reducers/themeSlice';
import counterReducer from './reducers/counterSlice';


const store= configureStore({
    reducer: {
        theme: themeReducer,
        counter: counterReducer
    }
})

export default store;