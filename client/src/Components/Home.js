import React, { Component } from 'react';
import Search from "../containers/Search"


class Home extends Component {

  render () {
    return (
      <>      
        <div className="home">
          <div className="home__background-image"></div>
        </div>
        
          <Search/>
      </>
    );
  }
}

export default Home;
