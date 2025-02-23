import React, { Component } from 'react';
import { ThemeContext } from './ThemeProvider';
export default class ClassComponent extends Component {
  getComputedStyle = (theme) => {
    return {
      width: '200px',
      height: '200px',
      backgroundColor: theme == 'light' ? 'grey' : 'black',
      color: theme == 'light' ? 'black' : 'white'
    };
  };
  render() {
    return (
      <ThemeContext.Consumer>
        {(props) => {
          console.log(props);
          return (
            <>
              <div style={this.getComputedStyle(props.theme)}> Class Component</div>
              <button onClick={props.toggleTheme}>Toggle</button>
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
