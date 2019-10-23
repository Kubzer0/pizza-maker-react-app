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

  updateMeatCheckboxChecked= ()=> {
    this.setState((oldState) => {
      return {
        isMeatCheckboxChecked: !oldState.isMeatCheckboxChecked,
      }
    })
  }

  updateCheeseCheckboxChecked= ()=> {
    this.setState((oldState) => {
      return {
        isCheeseCheckboxChecked: !oldState.isCheeseCheckboxChecked,
      }
    })
  }

  

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
          updateCheeseCheckboxChecked={()=>this.updateCheeseCheckboxChecked()}
        >
        </SideBar>
  
      </div>
    )
  }
}

export default App;
