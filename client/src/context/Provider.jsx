import { useReducer } from "react";
import Context from "./Context";
import cartReducer, {initState} from "./Reducer";

function Provider({ children }){
    const [state, dispatch] = useReducer(cartReducer, initState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider