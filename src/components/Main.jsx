import React from 'react';
import Nav from 'Nav';

// var Main = React.createClass({
//   render(){
//     return(
//       <div>
//         <Nav/>
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return(
    <div>
      <Nav/>
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
}

export default Main;
