import * as React from 'react';
import { connect } from 'react-redux';
import { ArtInfoData } from '../../models/data';
import { TagData } from '../../models/data';
import { RootState } from '../../reducers/index';
import { TagsState } from '../../reducers/tags';
import { AddTag, DeleteTag } from '../../actions/actionCreator/updateTags';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { WithContext as ReactTags } from 'react-tag-input';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import './styles/post_sheet.css';

const styles = {
    textField: {
        width: '500px',
        fontSize: '2.4rem'
    }
};

type ClassNames = keyof typeof styles;

interface Props {
    onDaveAsDraftButtonClick: () => void;
    onSubmitButtonClick: (artInfoData: ArtInfoData) => void;

    tagsState: TagsState;
    onTagAdded: (tag: TagData) => void;
    onTagDeleted: (id: number) => void;
}

interface InternalTagData {
    id: number;
    text: string;
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

class PostSheet extends React.PureComponent<Props & WithStyles<ClassNames>, object> {
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
                    <div className="PostSheet-textField PostSheet-title">
                        <TextField
                            required={true}
                            id="required"
                            label="Title"
                            className={classes.textField}
                            InputLabelProps={{
                                className: 'PostSheet-label'
                            }}
                            onChange={event => {
                                this.title = event.target.value;
                            }}
                            margin="normal"
                        />
                    </div>
                    <div className="PostSheet-textField PostSheet-description">
                        <TextField
                            multiline={true}
                            rows="3"
                            id="required"
                            label="Description"
                            className={classes.textField}
                            InputLabelProps={{
                                className: 'PostSheet-label'
                            }}
                            onChange={event => {
                                this.description = event.target.value;
                            }}
                            margin="normal"
                        />
                    </div>
                    <div className="PostSheet-textField PostSheet-tags">
                        <div className="PostSheet-tagsContent">
                            <label className="PostSheet-tagsLabel">Tags</label>
                            <ReactTags tags={toInternalTagDataList(tagsState)}
                                handleDelete={onTagDeleted}
                                handleAddition={(tag: string) => {
                                    onTagAdded({
                                        text: tag
                                    });
                                }} />
                        </div>
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
                                tags: tagsState.tags
                            })}
                        >
                            Submit
                        </Button>
                    </div>
                </div>;
    }
}

function toInternalTagDataList(tagsState: TagsState): InternalTagData[] {
    return tagsState.tags.map((tagData: TagData, index: number) => {
        return {
            id: index,
            text: tagData.text
        };
    });
}

let component = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostSheet);

export default withStyles(styles)(component);