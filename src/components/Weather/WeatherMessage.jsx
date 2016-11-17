import React from 'react';

// var WeatherMessage = React.createClass({
//   render(){
//     var {temp, location} = this.props;
//
//     return(
//       <h3>It it's {temp} in {location}.</h3>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return(
    <h3>It it's {temp} in {location}.</h3>
  );
}

export default WeatherMessage;
