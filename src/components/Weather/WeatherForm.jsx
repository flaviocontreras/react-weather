import React from 'react';

var WeatherForm = React.createClass({
  onFormSubmit(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render(){
    return(
      <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="search" ref="location" placeholder="Search weather by city" required/>
            <button className='button expanded hollow'>Get Weather</button>
          </form>
      </div>
    );
  }
});

export default WeatherForm;
