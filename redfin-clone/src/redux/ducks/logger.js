// Create Action Name
const LOGGEDIN = "LOGGEDIN";
const LOGGEDOUT = "LOGGEDOUT";


// Create 
export const loggedin = () => ({
    type: LOGGEDIN
})
export const loggedout = () => ({
    type: LOGGEDOUT
})

// Create init state
const initState = {
    logged: "true"
}


const logger = (state = initState, action) => {
    switch(action.type){
        case LOGGEDIN:  
            return { ...state, logged: "true" }
        case LOGGEDOUT:  
            return { ...state, logged: "false" }
        default:
            return state;
    }
};

export default logger;