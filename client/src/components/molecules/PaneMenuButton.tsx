import * as React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { PaneMode } from '../../models/index';
import './styles/pane_menu_button.css';

const styles = (theme: any) => ({
    root: {
        minWidth: '64px'
    },
    selector: {
        marginTop: '10px!important',
        color: '#666!important',
        fontSize: '1.1rem!important',
        fontFamily: 'Roboto Mono, monospace!important'
    },
    label: {
        fontSize: '1.1rem!important',
        fontFamily: 'Roboto Mono, monospace!important'
    }
});

interface Props {
    paneMode: PaneMode;
    onModeChanged: (mode: PaneMode) => void;
}

class PaneMenuButton extends React.Component<WithStyles<'root' | 'selector' | 'label'> & Props, object> {
    handleChange = (event: any) => {
        this.props.onModeChanged(event.target.value);
    }

    render() {
        const { classes, paneMode } = this.props;

        return (
            <FormControl className={classes.root}>
                <InputLabel className={classes.label} htmlFor="pane-menu-button">Pane Mode</InputLabel>
                <Select
                    className={classes.selector}
                    value={paneMode}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'pane',
                        id: 'pane-menu-button',
                    }}
                >
                    <MenuItem className="PaneMenuButton-text" value={PaneMode.OVERLAY}>Overlay</MenuItem>
                    <MenuItem className="PaneMenuButton-text" value={PaneMode.SPLIT}>Split</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

export default withStyles(styles)(PaneMenuButton);