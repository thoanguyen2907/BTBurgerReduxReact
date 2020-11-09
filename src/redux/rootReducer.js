import {combineReducers} from 'redux'; 
import BaiTapBurgerReducer from './BaiTapBurgerReducer'; 
import BurgerReducer from './BTBurgerSuaReducer'; 
import ToDoListReducer from './ToDoListReducer'; 
const rootReducer = combineReducers({
    BaiTapBurgerReducer,
    BurgerReducer, 
    ToDoListReducer
}); 
export default rootReducer; 
