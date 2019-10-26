import React from 'react'
import SideBar from './components/SideBar'

class App extends React.Component {

  state = {
    isDrawerOpen: false,
    meatPizzaComponents: ['bacon', 'beef', 'chicken', 'pepperoni'],
    cheesyPizzaComponents: ['mozzarella', 'vegan cheese', 'cheddar'],
    veggiePizzaComponents: ['tomatoe', 'broccolli', 'basil'],
    isMeatCheckboxChecked: false,
    isCheeseCheckboxChecked: false
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

  /*
  @TODO rewrite to state, figure out what to do when boolean values are falsy(checkbox dependent)
  makeRandomPizza = () => {
    const meatyComponentsArrayLength = this.state.meatPizzaComponents.length
    const cheesyComponentsArrayLength= this.state.cheesyPizzaComponents.length
    if (this.state.isMeatCheckboxChecked){
     const randomMeatyComponentIndex = Math.floor((Math.random()*meatyComponentsArrayLength))
    }
    if (this.state.isCheeseCheckboxChecked){
      const randomCheeseComponentIndex = Math.floor((Math.random()*cheesyComponentsArrayLength))
    }

   } */



  toggleDrawerState = () => this.setState({ isDrawerOpen: !this.state.isDrawerOpen })

  render() {
    return (
      <div>
        <SideBar
          isDrawerOpen={this.state.isDrawerOpen}
          toggleDrawerState={this.toggleDrawerState}
          isMeatCheckboxChecked={this.state.isMeatCheckboxChecked}
          updateMeatCheckboxChecked={() => this.updateMeatCheckboxChecked()}
          isCheeseCheckboxChecked={this.state.isCheeseCheckboxChecked}
          updateCheeseCheckboxChecked={() => this.updateCheeseCheckboxChecked()}
        >
        </SideBar>

      </div>
    )
  }
}

export default App;
