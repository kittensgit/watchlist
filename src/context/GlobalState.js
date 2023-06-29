import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//init state
const initialState = {
    watchlist: [],
    watched: [],
}

//create context
export const GlobalContext = createContext(initialState)

//provider component

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //actions
    const addMovieToWatchlist = movie => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie })
    }

    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            addMovieToWatchlist
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}