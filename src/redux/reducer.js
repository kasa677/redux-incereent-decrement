import { CHANGE_USER, DECREMENT, INCEREMENT } from "./type";

const initialState = {
    number: 9,
    username: "asmita"
}
const reducer = (state = initialState, action) => {
    // console.log(`previous state`, state);
    // console.log(`Action`, action);
    if (action.type === INCEREMENT) {
        return { ...state, number: state.number + 1 }


    }
    if (action.type === DECREMENT) {
        return { ...state, number: state.number - 1 }
    }
    if (action.type === CHANGE_USER) {
        return { ...state, username: "alfiya" }
    }


    return state;

}
export default reducer;
