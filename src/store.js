import { applyMiddleware, createStore } from "redux";
import {reducerWeather} from './reducer/reducerWeather';
import thunk from "redux-thunk";

export const store = createStore(reducerWeather, applyMiddleware(thunk))