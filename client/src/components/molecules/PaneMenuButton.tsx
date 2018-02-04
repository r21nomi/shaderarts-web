import * as React from 'react';
import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import { PaneMode } from '../../models/index';

const styles = (theme: any) => ({
    root: {
        minWidth: '64px'
    },
    selector: {
        marginTop: '10px!important'
    }
});

interface Props {
    paneMode: PaneMode;
    onModeChanged: (mode: PaneMode) => void;
}

class PaneMenuButton extends React.Component<WithStyles<'root' | 'selector'> & Props, object> {
    handleChange = (event: any) => {
        this.props.onModeChanged(event.target.value);
    }

    render() {
        const { classes, paneMode } = this.props;

        return (
            <FormControl className={classes.root}>
                <InputLabel htmlFor="pane-menu-button">Pane Mode</InputLabel>
                <Select
                    className={classes.selector}
                    value={paneMode}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'pane',
                        id: 'pane-menu-button',
                    }}
                >
                    <MenuItem value={PaneMode.OVERLAY}>Overlay</MenuItem>
                    <MenuItem value={PaneMode.SPLIT}>Split</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

export default withStyles(styles)(PaneMenuButton);