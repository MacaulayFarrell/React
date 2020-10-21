import React from 'react';
class Header extends React.Component {
    render() {
      const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
      return (
        <div style={mystyle}>
        <h1>My Header element</h1>
        <p>Welcome aboard the React train....</p>
        </div>
      );
    }
  }

export default Header