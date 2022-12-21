// Write your code here

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  eatMango = () => {
    this.setState(preVal => ({key1: preVal.key1 + 1}))
  }

  eatBanana = () => {
    this.setState(preVal => ({key2: preVal.key2 + 1}))
  }

  render() {
    const {key1, key2} = this.state
    return (
      <div>
        <h1>
          Bob ate {key1} mangoes {key2} bananas
        </h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            alt="mango"
          />
          <div>
            <button onClick={this.eatMango}>Eat Mango</button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            alt="banana"
          />
          <div>
            <button onClick={this.eatBanana}>Eat Banana</button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
