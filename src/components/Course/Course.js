import React, { useState , useEffect } from 'react';
import Cart from '../Cart/Cart'

import './Course.css';

import fakedata from '../../fakedata/fakedata'
import Product from '../Product/Product';



const Course = () => {
    const [course, setCourse]= useState(fakedata);
    const [cart, setCart]= useState([]);

    const handleAddCourse=(courses)=>{
        console.log("clicked", courses);
        let newCart=[...cart, courses];
        setCart(newCart);

    }
 return (
     <div className="course">
         <div className="items" id="courses">
             {
                 course.map(course =><Product course={course} handleAddCourse={handleAddCourse}>{course.name}</Product>)
             }
         </div>
         <div className="cart">
             <Cart cart={cart}></Cart>
         </div>
         
         
         

     </div>
    );
};

export default Course;