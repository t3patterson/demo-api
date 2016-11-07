import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

const AppViewController = React.createClass({

   render: function(){
      return (
         <div>
            <h2>Check the postman:</h2>

            <h3> GET requests</h3>
            <p>For fetching data</p>
            <img src="./images/get-request.png" style={{maxWidth: '800px', display: 'block'}}/>

            <hr/>

            <h3> POST requests</h3>
            <p>For creating data</p>
            <img src="./images/post-request.png" style={{maxWidth: '800px', display: 'block'}}/>



         </div>
      )
   }
})

ReactDOM.render( <AppViewController/> ,document.querySelector('#app-container'))
