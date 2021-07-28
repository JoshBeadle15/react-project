import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props)
    }

    renderCampsite(campsite) {
        return(
        <div className= "col-md-t m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
        </div>
        );
    }

    renderComments(comments){
        if(comments) {
            return(<div className="col-md-5 m-1">
                <h1>Comments</h1>
                {comments.map(comment => {
                    return (
                        <div key = {comment.id}>
                            <p>{comment.text}</p>
                            <p>{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                    )
                } )}
            </div>);
        }
        else <div></div>
    }

    render() {
        if (this.props.campsite) {
                return (
                    <div className="container">
                        <div className= "row">
                            {this.renderCampsite(this.props.campsite)}
                            {this.renderComments(this.props.campsite.comments)}
                        </div>
                    </div>
                )
            }
            else {
                return <div></div>
            }
    };

}


export default CampsiteInfo;