import React from 'react';

// var About = React.createClass({
//   render(){
//     return(
//       <h3>About component</h3>
//     );
//   }
// });

var About = (props) => {
  return(
    <div>
      <h1 className='text-center page-title'>About</h1>
      <p>This is a weather application built on React. I have build this
      for The Complete React Web App Developer Course</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for
            weather data by city name.
        </li>
        <li>
          <a href="https://github.com/">GitHub</a> - I used GitHub as the version control
        </li>
        <li>
          <a href="http://heroku.com">Heroku</a> - I used Heroku to deploy the Web App
        </li>
      </ul>
    </div>
  );
}

export default About;
