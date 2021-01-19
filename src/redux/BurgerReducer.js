const burgerState = {
    burger:{salad: 2, cheese: 1, beef:1}, 
    menu: {
        salad:10,
        cheese: 20,
        beef: 30
    }, 
    total: 60
}
export const BurgerReducer = (state = burgerState, action)=> {
    switch (action.type) {
        case "TANG_GIAM_SO_LUONG":
            let burgerMidName = action.name; 
            let burgerMidQuantity = action.value; 
            let burgerStateUpdate = {...state.burger};
            //  burgerStateUpdate[burgerMidName] += burgerMidQuantity; 
            //  state.burger = burgerStateUpdate; 
            if(burgerMidQuantity=== -1 && state.burger[burgerMidName] < 1){
                return {...state}
            }
            for (let burger in burgerStateUpdate){
                if(burger === burgerMidName){
                     burgerStateUpdate[burger] += burgerMidQuantity
                   
                }
            }
            state.burger = burgerStateUpdate; 
            //tính tổng tiền 
            state.total += state.burger[burgerMidName] * state.menu[burgerMidName]; 

           return {...state}  
        default:
            break;
    }
    return {...state} 
}
export default BurgerReducer; 