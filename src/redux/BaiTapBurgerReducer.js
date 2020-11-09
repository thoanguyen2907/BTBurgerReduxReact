const burgerState = {
    burger: { salad: 0, cheese: 0, beef: 0 },
    menu: {
        salad: 10,
        cheese: 15,
        beef: 20
    }
}

export const BaiTapBurgerReducer = (state = burgerState, action) => {
    let burgerUpdate = { ...state.burger };
    switch (action.type) {
        case "TANG_GIAM_SALAD":     
            burgerUpdate.salad += action.number;
            state.burger = burgerUpdate;
            return { ...state };
        case "TANG_GIAM_CHEESE":      
            burgerUpdate.cheese += action.number;
            state.burger = burgerUpdate;
            return { ...state };
        case "TANG_GIAM_BEEF":    
            burgerUpdate.beef += action.number;
            state.burger = burgerUpdate;
            return { ...state };

        default:
            break;
    }
    return { ...state }
}
export default BaiTapBurgerReducer; 