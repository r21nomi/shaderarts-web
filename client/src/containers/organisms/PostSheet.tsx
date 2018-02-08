import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/index';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import './styles/post_sheet.css';

const styles = (theme: any) => ({
    textField: {
        width: '500px',
        fontSize: '2.4rem'
    }
});

interface Props {
    onCancelButtonClick: () => void;
    onSubmitButtonClick: () => void;
}

const mapStateToProps = (state: RootState) => ({
    // no-op
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    // no-op
});

class PostSheet extends React.Component<WithStyles<'textField'> & Props, object> {

    render() {
        const { classes, onCancelButtonClick, onSubmitButtonClick } = this.props;

        console.log(this.props);

        return <div className="PostSheet-content">
                    <div className="PostSheet-textField">
                        <TextField
                            required
                            id="required"
                            label="Title"
                            className={classes.textField}
                            labelClassName="PostSheet-label"
                            margin="normal"
                        />
                    </div>
                    <div className="PostSheet-textField">
                        <TextField
                            multiline
                            rows="3"
                            id="required"
                            label="Description"
                            className={classes.textField}
                            labelClassName="PostSheet-label"
                            margin="normal"
                        />
                    </div>
                    <div className="PostSheet-textField">
                        <TextField
                            id="required"
                            label="Tags"
                            className={classes.textField}
                            labelClassName="PostSheet-label"
                            margin="normal"
                        />
                    </div>
                    <div className="PostSheet-buttons">
                        <Button
                            className="PostSheet-cancelButton"
                            onClick={() => onCancelButtonClick()}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="PostSheet-submitButton"
                            onClick={() => onSubmitButtonClick()}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(PostSheet));