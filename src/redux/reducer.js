const initialState = {name: "", KEY: ""}

function reducer(state= initialState, action){
    switch (action.type) {
        case 'LOGIN':
            return {...state, name: action.payload.name, KEY: action.payload.KEY}
        case 'LOGOUT':
            return {name: "", KEY: ""}
        default:
            break;
    }
}

export default reducer