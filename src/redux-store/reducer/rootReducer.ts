import allContactSlice from "./allContactSlice";

const rootReducer = () => {
    return {
        allContact: allContactSlice,
    }
}

export default rootReducer;