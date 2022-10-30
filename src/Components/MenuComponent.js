import React, {Component} from 'react';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

import {Media} from 'reactstrap';
import {Card,CardImg,CardImgOverlay,CardBody,CardHeader,CardTitle} from 'reactstrap';

class Menu extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            dishes : DISHES,
            selectedDish : null,
        }
    }
    onDishSelect(dish){
        this.setState({selectedDish:dish});
    }

  

    render(){
        const menu = this.state.dishes.map((dish) => {
            return(
                <div className="col-12 col-md-6 mt-5">
                    <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                        <CardImg width='100%' src={dish.image}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
                
            )
        });
        
        return(
            <div className='container'>
                <div className='row'>
                    {menu}
                    <DishDetail dishDetails = {this.state.selectedDish} />
                </div>
            </div>
        )
    }
}

export default Menu;