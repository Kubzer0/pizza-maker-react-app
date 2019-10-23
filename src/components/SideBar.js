import React from 'react'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

const SideBar = (props)=> {

        return (
            <div>
                <RaisedButton
                    label="Open menu"
                    onClick={props.toggleDrawerState}
                />
                <Drawer width={200} openSecondary={true} open={props.isDrawerOpen} >
                    <AppBar title="AppBar" />
                </Drawer>
            </div>
        )
    }

export default SideBar