import React from 'react'
import SideBar from './components/SideBar'

class App extends React.Component { 

  state = {
    isDrawerOpen: false
  }

  toggleDrawerState = () => this.setState({ isDrawerOpen: !this.state.isDrawerOpen })

  render(){
    return(
      <div>
        <SideBar
        isDrawerOpen={this.state.isDrawerOpen}
        toggleDrawerState={this.toggleDrawerState}
        >
        </SideBar>
      </div>
    )
  }
}

export default App;
