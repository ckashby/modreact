import { createStore, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import { storage } from "redux-persist/lib/storage";
import storageSession from "redux-persist/es/storage/session";
import { autoMergeLevel2 } from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { todos } from "./Todos/reducers";

const reducers = {
  todos,
};

const persistConfig = {
  key: "root",
  storage: storageSession,
  stateReconciler: autoMergeLevel2,
};
const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(persistedReducer);
