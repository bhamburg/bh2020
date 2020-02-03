import React, { Component } from 'react'
import Typed from 'typed.js'

//demo from https://jsfiddle.net/mattboldt/ovat9jmp/

class TypedHero extends Component {
  componentDidMount() {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings: strings,
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 2000,
      loop: false,
      startDelay: 2000,
      smartBackspace: false,
      cursorChar: '_',
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <>
        {this.props.isHomepage && <span className="logo" onClick={()=>this.typed.reset()}>
          <span>bh</span>
        </span>}
        &nbsp;
        <span className="typed"
          ref={(el) => { this.el = el; }}
        />
      </>
    )
  }
}

export default TypedHero