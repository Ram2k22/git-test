import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardText, Media } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);
    }
    CommentDetails() {

    }
    DishImg() {
        if (this.props.dishDetails != null) {
            return (
                <div className='row'>
                    <div className='col-12 col-md-6 mt-5'>
                        <Card>
                            <CardImg src={this.props.dishDetails.image} />
                            <CardBody>
                                <CardText>{this.props.dishDetails.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-6 mt-5'>
                        {/* <p>{this.CommentDetails()}</p> */}
                        {this.props.dishDetails.comments.map((comment) => {
                            return (
                                <Media>
                                    <p>{comment.comment}</p>
                                    <p>{comment.author}</p>
                                    <p>{comment.date}</p>
                                </Media>
                                
                            )
                        })}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }


    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {this.DishImg()}
                </div>
            </div>
        )
    }

}

export default DishDetail;