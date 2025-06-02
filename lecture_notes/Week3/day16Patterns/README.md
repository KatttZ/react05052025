# Patterns

## useRef

## Custom hook

## HOC
```js
import React, { Component } from "react";
import withCounter from "./WithCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name} Clicked {count} times
        </button>
      </div>
    );
  }
}


export default withCounter(ClickCounter, 5);
class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
      </div>
    );
  }
}
export default withCounter(HoverCounter, 2);


const withCounter = (WrappedComponent, incrementNum) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNum };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;


```


```js
// review debounce throttle
function debounce(cb, delay=1000){
    let timeout;
    return function (...args){
        clearTimeout(timeout);
        timeout = setTimeout(()=> {
            cb(...args)
        },delay)
    }
}

function throttle(cb, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;

    const timeoutFunc = () => {
        if(waitingArgs == null){
            shouldWait = false;
        }else {
            cb(...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFunc, delay);
        }
    }
    return function (...args){
       if(shouldWait){
        waitingArgs = args
        return
       }
       cb(...args)
       shouldWait = true

       setTimeout(timeoutFunc,delay)
    }
}
```