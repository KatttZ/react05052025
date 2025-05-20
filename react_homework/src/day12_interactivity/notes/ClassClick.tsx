import { Component } from "react"



export default class ClassClick extends Component {
    clickHandler() {
        console.log('Class Click Button')
    }
    render() {
        return <div>
            <button onClick={this.clickHandler}>Class Click</button>
        </div>
    }
}