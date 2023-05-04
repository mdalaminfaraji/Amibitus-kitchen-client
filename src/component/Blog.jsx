import React from 'react';
import banner5 from "../images/banner5.png";
import ReactDOM from 'react-dom';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blog = () => {


    return (
        <>
        <div className='btn-primary text-center'>
        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
        </div>
        <div ref={ref}>
            
    
            <div className='h-screen my-4 brightness-100 relative  w-full rounded-lg' style={{backgroundImage: `url(${banner5}) `,backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
              
            </div>
            <h1 className='text-center py-16 text-4xl font-bold'>Blogs Section</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pb-10'>
            <div className="card mx-5 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title"> Differences between uncontrolled and controlled components.</h2>
                <p className='text-lg'><span className='font-bold'>Answer:</span>The main difference between controlled components are :<br/>
                1.Controlled components are state managed by React<br/> 2.while uncontrolled components are state managed by the DOM<br/>
                Controlled components are easier to manage and are recommended for most cases, while uncontrolled components may be useful in some cases. 
                </p>
                
            </div>
            </div>
            <div className="card mx-5 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">How to validate React props using PropTypes</h2>
                <p className='text-lg'><span className='font-bold'>Answer:</span>The propTypes object is a collection of key-value pairs, where the key is the name of the prop, and the value is the PropTypes validator function<br/>
                The PropTypes library provides several validator functions to validate the props of a component. Some of the commonly used validator functions are:<br/>
                1.PropTypes.string 
                2.PropTypes.number 
                3.PropTypes.bool 
                4.PropTypes.object 
                5.PropTypes.func 
                6.PropTypes.node 
                </p>
                
            </div>
            </div>
            <div className="card mx-5 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title"> Difference between nodejs and express js.</h2>
                <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Nodejs</th>
        <th>Express js</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Node.js is a runtime environment for executing JavaScript code on the server-side, </td>
        <td>Express.js is a web application framework that runs on top of Node.js</td>
       
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Node.js provides basic routing capabilities</td>
        <td>To provide additional features and functionality to build web applications faster and more efficiently. </td>
        
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Node.js supports both synchronous and asynchronous programming, </td>
        <td>Express.js provides advanced routing features </td>
      </tr>
    </tbody>
  </table>
</div>
               
            </div>
            </div>
            <div className="card mx-5 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">What is a custom hook, and why will you create a custom hook?</h2>
                <p className='text-lg'><span className='font-bold'>Answer:</span> A custom hook is react js function that uses existing react hooks to provide a reusable piece of logic that can be used in multiple components. Custom hooks allow you to encapsulate complex logic and share it between components, making your code more reusable, maintainable, and simpler.custom hooks are a powerful tool in React that can help you write better code faster and more efficiently.<br/>Some reasons why you might want to create a custom hook include:<br/>

Encapsulating reusable logic<br/>
Simplifying component logic<br/>
Sharing code between components
Abstracting API calls</p>
                
            </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default Blog;