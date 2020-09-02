import React from 'react';
import './Product.css'
import {Button} from 'react-bootstrap';

const Product = (props) => {
    console.log(props);
    const {title, image, body, duration, price, instructors}= props.course;
    return (
        <div className="course">
            <div className="img">
                <img src={image} alt=""/>
            </div>
            <div className="course-title">
                <h3>{title}</h3>
                <p>{body}</p>
                <p><small>By: {instructors}</small></p>
                <p><small>{duration}</small></p>
                <h5>Price: ${price}</h5>
                <Button 
                    variant="success" onClick={()=> props.handleAddCourse(props.course)}>
                Enroll Now ></Button>
                
            </div>
            
        </div>
    );
};

export default Product;
