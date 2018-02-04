import * as React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';

const styles = (theme: any) => ({
    root: {
        margin: 0,
    }
});

interface Props {
    // no-op
}

class PaneMenuButton extends React.Component<WithStyles<'root'> & Props, object> {
    private initialAnchorEl: HTMLElement;

    state = {
        anchorEl: this.initialAnchorEl
    };

    handleClick = (event: any) => {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleClose = () => {
        this.setState({ anchorEl: null });
    }

    render() {
        const { anchorEl } = this.state;
        const { classes } = this.props;

        return (
            <div>
                <div>
                    <Button
                        aria-owns={anchorEl ? 'pane-menu-button' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                    >
                        Pane
                        <ArrowDropDown className={classes.root}/>
                    </Button>
                </div>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Split</MenuItem>
                    <MenuItem onClick={this.handleClose}>Overlay</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(PaneMenuButton);