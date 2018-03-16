import * as React from 'react';
import { connect } from 'react-redux';
import { ArtInfoData } from '../../models/data';
import { TagData } from '../../models/data';
import { RootState } from '../../reducers/index';
import { TagsState } from '../../reducers/tags';
import { AddTag, DeleteTag } from '../../actions/updateTags';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { WithContext as ReactTags } from 'react-tag-input';
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

    tagsState: TagsState;
    onTagAdded: (tag: TagData) => void
    onTagDeleted: (id: number) => void
}

const mapStateToProps = (state: RootState) => ({
    tagsState: state.tags
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onTagAdded: (tag: TagData) => {
        dispatch(AddTag(tag));
    },
    onTagDeleted: (id: number) => {
        dispatch(DeleteTag(id));
    }
});

class PostSheet extends React.Component<WithStyles<'textField'> & Props, object> {
    title: string;
    description: string;

    render() {
        const {
            classes,
            onDaveAsDraftButtonClick,
            onSubmitButtonClick,
            tagsState,
            onTagAdded,
            onTagDeleted
        } = this.props;

        console.log(this.props);

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
                        <ReactTags tags={tagsState.tags}
                            handleDelete={onTagDeleted}
                            handleAddition={(tag: string) => {
                                let id = tagsState.tags.length == 0
                                    ? 0
                                    : tagsState.tags[tagsState.tags.length - 1].id + 1
                                onTagAdded({
                                    id: id,
                                    text: tag
                                })
                            }} />
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
                                tags: tagsState.tags.map((tag: TagData) => { return tag.text })
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