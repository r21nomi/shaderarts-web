import { CodeType } from '../../models';
import { UpdateCodeErrorLineAction, UpdateCodeErrorLineActionType } from '../updateCodeErrorLineAction';

export const updateArtDataCodeErrorLine = (errorLine: number, codeType: CodeType): UpdateCodeErrorLineAction => ({
    type: UpdateCodeErrorLineActionType.UPDATE_CODE_ERROR_LINE,
    errorLine: errorLine,
    codeType: codeType
});