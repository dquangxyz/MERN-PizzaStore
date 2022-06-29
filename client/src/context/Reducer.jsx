const initState = []

function cartReducer(state, action){
    switch (action.type){
        case "ADD_TO_CART":
            return [...state, {
                name: action.payload.name,
                price: action.payload.price,
                quantity: action.payload.quantity
            }]
        case "CHANGE_QTY":
            return state.filter((item) => 
                item.name === action.payload.name ? (item.quantity = action.payload.quantity) : item.quantity
            )
        default:
            return state
    }
}
export default cartReducer
export { initState }