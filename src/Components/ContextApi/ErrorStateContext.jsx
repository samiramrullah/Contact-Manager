import errorContext from "./ErrorContext";

const state
const ErrorState=(props)=>{
    return(
        <ErrorState.Provider value={state}>
           {props.children}
        </ErrorState.Provider>
    )
}


export default ErrorState;