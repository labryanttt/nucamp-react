import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem} from "reactstrap";

class RenderCampsite({campsite})    {
    return(
        <div className="col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={baseUrl + campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
    )
}

class RenderComments({comments})    {
        if(comments)    {
            const comms = comments.map(comment => {
                return(
                    <div key={comment.id}>
                        <p>{comment.text}
                        <br />
                        --{comment.author},&nbsp;
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
                )
            })
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comms}
                </div>
            )
        }
    }
}

class CampsiteInfo(props)    {
    if(props.campsite !== null && props.campsite !== undefined) {
        return(
            <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>{props.campsite.name}</h2>
                    <hr />
                </div>
            </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        )
    }

    return(
        <div></div>
    )
}

export default CampsiteInfo;