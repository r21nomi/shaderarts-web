import { CodeType } from '../models';

export interface UpdateCodeErrorLineAction {
    type: UpdateCodeErrorLineActionType;
    codeType: CodeType;
    errorLine: number;
}

export enum UpdateCodeErrorLineActionType {
    UPDATE_CODE_ERROR_LINE = 'UPDATE_CODE_ERROR_LINE'
}