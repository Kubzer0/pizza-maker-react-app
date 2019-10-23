import React from 'react'
import Checkbox from 'material-ui/Checkbox'

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
}

const SideBarComponents = (props)=> { 
        return (
            <div style={styles.block}>
                <Checkbox
                    label="Meaty components"
                    checked={props.isMeatCheckboxChecked}
                    onCheck={()=>props.updateMeatCheckboxChecked()}
                    style={styles.checkbox}
                />
            </div>
        )
    }

export default SideBarComponents