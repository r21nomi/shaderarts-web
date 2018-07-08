import { PaneMode } from '../models/index';

export interface UpdatePaneModeAction {
    type: string;
    mode: PaneMode;
}