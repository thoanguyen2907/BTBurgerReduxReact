import React, { Component } from 'react'
// import BaiTapBurger from './BaiTapBurger/BaiTapBurger'; 
import BTBurger from './BTBurgerSua/BTBurger'; 
import DemoJSS from './JSS_StyledComponent/DemoJSS/DemoJSS'; 
import DemoTheme from './JSS_StyledComponent/Themes/DemoTheme'; 
import ToDoList from './JSS_StyledComponent/BaiTapStyleComponent/ToDoList/ToDoList'; 
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <BTBurger/>
        {/* <DemoJSS/> */}
        {/* <DemoTheme/> */}
        {/* <ToDoList/> */}
      </div>
    )
  }
}
