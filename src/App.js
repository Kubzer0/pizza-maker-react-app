import React from 'react'
import SideBar from './components/SideBar'

class App extends React.Component {

  state = {
    isDrawerOpen: false,
    meatPizzaComponents: ['bacon', 'beef', 'chicken', 'pepperoni'],
    cheesyPizzaComponents: ['mozzarella', 'vegan cheese', 'cheddar'],
    veggiePizzaComponents: ['tomatoe', 'broccolli', 'basil'],
    isMeatCheckboxChecked: false
  }

  updateMeatCheckboxChecked() {
    this.setState((oldState) => {
      return {
        isMeatCheckboxChecked: !oldState.isMeatCheckboxChecked,
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
        >
        </SideBar>
  
      </div>
    )
  }
}

export default App;
