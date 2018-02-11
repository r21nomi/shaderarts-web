import * as React from 'react';
import { connect } from 'react-redux';
import { ArtInfoData } from '../../models/data';
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
    onDaveAsDraftButtonClick: () => void;
    onSubmitButtonClick: (artInfoData: ArtInfoData) => void;
}

const mapStateToProps = (state: RootState) => ({
    // no-op
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    // no-op
});

class PostSheet extends React.Component<WithStyles<'textField'> & Props, object> {
    title: string;
    description: string;
    // TODO: Fix
    tags: string[] = [''];

    render() {
        const { classes, onDaveAsDraftButtonClick, onSubmitButtonClick } = this.props;

        return <div className="PostSheet-content">
                    <div className="PostSheet-textField">
                        <TextField
                            required={true}
                            id="required"
                            label="Title"
                            className={classes.textField}
                            labelClassName="PostSheet-label"
                            onChange={event => {
                                this.title = event.target.value;
                            }}
                            margin="normal"
                        />
                    </div>
                    <div className="PostSheet-textField">
                        <TextField
                            multiline={true}
                            rows="3"
                            id="required"
                            label="Description"
                            className={classes.textField}
                            labelClassName="PostSheet-label"
                            onChange={event => {
                                this.description = event.target.value;
                            }}
                            margin="normal"
                        />
                    </div>
                    <div className="PostSheet-textField">
                        <TextField
                            id="required"
                            label="Tags"
                            className={classes.textField}
                            labelClassName="PostSheet-label"
                            onChange={event => {
                                // TODO: Fix
                                this.tags[0] = event.target.value;
                            }}
                            margin="normal"
                        />
                    </div>
                    <div className="PostSheet-buttons">
                        <Button
                            className="PostSheet-cancelButton"
                            onClick={() => onDaveAsDraftButtonClick()}
                        >
                            Save as Draft
                        </Button>
                        <Button
                            className="PostSheet-submitButton"
                            onClick={() => onSubmitButtonClick({
                                title: this.title,
                                description: this.description,
                                tags: this.tags
                            })}
                        >
                            Submit
                        </Button>
                    </div>
                </div>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(PostSheet));