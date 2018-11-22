import React, { Component } from 'react';
import { Keyframes, animated } from 'react-spring';
import './App.css';

class App extends Component {
  render() {
    const Foo = Keyframes.Spring({
      open: {
        from: {x: -100, opacity: 0},
        to: {x: 0, opacity: 1}
      },
    })

    return (
      <div className="App">
        <header className="header">
        </header>
        <div className="image">
          <svg className="svg">
            <circle cx={50} cy={50} r={10} fill="red" />
            <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
          </svg>
          <Foo state='open'>
            {({x, opacity}) => (
                <animated.div style={{
                  opacity,
                  transform: `translate3d(${x}%,0,0)`,
                }}>
                  42
                </animated.div>
            )}
          </Foo>
        </div>
      </div>
    );
  }
}

export default App;
