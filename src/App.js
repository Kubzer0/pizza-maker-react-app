import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import SideBar from './components/SideBar'
import SideBarComponents from './components/SideBarComponents'

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
        >
            
        </SideBar>
        <SideBarComponents
              isMeatCheckboxChecked={this.state.isMeatCheckboxChecked}
              updateMeatCheckboxChecked={() => this.updateMeatCheckboxChecked()}
            >
            </SideBarComponents>
      </div>
    )
  }
}

export default App;
