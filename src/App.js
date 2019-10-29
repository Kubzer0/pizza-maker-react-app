import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import SideBar from './components/SideBar'
class App extends React.Component {

  state = {
    isDrawerOpen: false,
    meatPizzaComponents: ['bacon', 'beef', 'chicken', 'pepperoni'],
    cheesyPizzaComponents: ['mozzarella', 'vegan cheese', 'cheddar'],
    veggiePizzaComponents: ['tomatoe', 'broccolli', 'basil'],
    isMeatCheckboxChecked: false,
    isCheeseCheckboxChecked: false,
    meatyComponentsArrayLength: null,
    cheesyComponentsArrayLength: null,
    randomMeatyComponentIndex: 0,
    randomCheeseComponentIndex: 0
  }

  updateMeatCheckboxChecked = () => {
    this.setState((oldState) => {
      return {
        isMeatCheckboxChecked: !oldState.isMeatCheckboxChecked,
      }
    })
  }

  updateCheeseCheckboxChecked = () => {
    this.setState((oldState) => {
      return {
        isCheeseCheckboxChecked: !oldState.isCheeseCheckboxChecked,
      }
    })
  }

  makeRandomPizza = () => {
    this.setState({ meatyComponentsArrayLength: this.state.meatPizzaComponents.length })
    this.setState({ cheesyComponentsArrayLength: this.state.cheesyPizzaComponents.length })
    if (this.state.isMeatCheckboxChecked) {
      this.setState({ randomMeatyComponentIndex: Math.floor((Math.random() * this.state.meatyComponentsArrayLength)) })
    }
    if (this.state.isCheeseCheckboxChecked) {
      this.setState({ randomCheeseComponentIndex: Math.floor((Math.random() * this.state.cheesyComponentsArrayLength)) })
    }
  }

  toggleDrawerState = () => this.setState({ isDrawerOpen: !this.state.isDrawerOpen })

  render() {
    return (
      <div>
        <RaisedButton
          label="Make a random pizza"
          onClick={this.makeRandomPizza}
          primary={true}
          fullWidth={true}
        />
        <SideBar
          isDrawerOpen={this.state.isDrawerOpen}
          toggleDrawerState={this.toggleDrawerState}
          isMeatCheckboxChecked={this.state.isMeatCheckboxChecked}
          updateMeatCheckboxChecked={() => this.updateMeatCheckboxChecked()}
          isCheeseCheckboxChecked={this.state.isCheeseCheckboxChecked}
          updateCheeseCheckboxChecked={() => this.updateCheeseCheckboxChecked()}
        >
        </SideBar>
        
        {this.state.isMeatCheckboxChecked ? 
        <p>{this.state.meatPizzaComponents[this.state.randomMeatyComponentIndex]}</p>
        :
        null}
        
        {this.state.isCheeseCheckboxChecked ? 
        <p>{this.state.cheesyPizzaComponents[this.state.randomCheeseComponentIndex]}</p>
        :
        null}

      </div>
    )
  }
}

export default App;
