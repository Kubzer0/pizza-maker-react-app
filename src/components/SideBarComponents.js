import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/MenuItem'

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
}

const SideBarComponents = (props) => {
    return (
        <div style={styles.block}>
            <MenuItem>
                <Checkbox
                    label="Meaty components"
                    checked={props.isMeatCheckboxChecked}
                    onCheck={() => props.updateMeatCheckboxChecked()}
                    style={styles.checkbox}
                />
            </MenuItem>
        </div>
    )
}

export default SideBarComponents