import { createStore,combineReducers, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth.reducer";
import uiReducer from "../reducers/ui.reducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth:authReducer,
    ui:uiReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

