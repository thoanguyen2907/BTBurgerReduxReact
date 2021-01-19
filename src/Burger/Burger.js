import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TANG_GIAM_SO_LUONG } from '../redux/Constants/BurgerConst';
import './Burger.css';

class Burger extends Component {
    renderBreadMid = () =>{
        let {burger} = this.props;
      
    return Object.entries(burger).map(([propsBurger,value], index)=>{ 
        let breadMid = []; 
        for (let i = 0; i < value; i++){
            breadMid.push( <div key={i} className={propsBurger}></div>)
        }
        return breadMid; 
    }); 
    }
   
    renderMenu = () =>{
        let {menu, burger} = this.props; 
        return Object.entries(menu).map(([itemMenu, price], index)=>{
            return <tr key={index}>
            <th scope="row">{itemMenu}</th>
            <td><button onClick={()=>{this.props.tangGiam(itemMenu, 1)}} type="button" className="btn btn-primary">+</button></td>
            <td><span>{burger[itemMenu]}</span></td>
            <td><button onClick={()=>{this.props.tangGiam(itemMenu, -1)}} type="button" className="btn btn-danger">-</button></td>
            <td>{price}</td>
            <td>{burger[itemMenu] * price}</td>
        </tr>
        });
    }
    render() {
     

        return (
            <div>            
                <h1 className="my-5 text-center">Burger Menu Order </h1>
                <div className="row my-4">
                    <div className="col-7">
                        <div className="burger__layout">
                            <div className="burger__bread__top">
                            </div>
                            {/* <div className="burger__salad"></div>
                            <div className="burger__cheese"></div>
                            <div className="burger__beef"></div> */}
                            {this.renderBreadMid()}
                            <div className="burger__bread__bottom"></div>
                        </div>
                    </div>
                    <div className="col-5">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Thức ăn</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Thành Tiền </th>
                                </tr>
                            </thead>
                            <tbody>
                            
                                {this.renderMenu()}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="5">Tổng tiền</td>
                                    <td>{this.props.total}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        tangGiam: (name, value) =>{
            let action = {
                type:TANG_GIAM_SO_LUONG,
                name,
                value
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Burger);

