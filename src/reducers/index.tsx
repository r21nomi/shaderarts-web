import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import windowSize, { WindowSizeState } from './windowSize';
import myProfile, { MyProfileState } from './myProfile';
import userDetail, { UserDetailState } from './userDetail';
import arts, { ArtsState } from './arts';
import artDetail, { ArtDetailState } from './artDetail';
import paneMode, { PaneModeState } from './paneMode';
import postSheetMode, { PostSheetModeState } from './postSheetMode';
import tags, { TagsState } from './tags';
import artData, { ArtDataState } from './artData';
import artInfoData, {ArtInfoDataState} from "./artInfoData";

export interface RootState {
    windowSize: WindowSizeState;
    myProfile: MyProfileState;
    userDetail: UserDetailState;
    arts: ArtsState;
    artDetail: ArtDetailState;
    paneMode: PaneModeState;
    postSheetMode: PostSheetModeState;
    tags: TagsState;
    artData: ArtDataState;
    artInfoData: ArtInfoDataState;
}

const reducers = combineReducers<RootState>({
    router: routerReducer,
    windowSize,
    myProfile,
    userDetail,
    arts,
    artDetail,
    paneMode,
    postSheetMode,
    tags,
    artData,
    artInfoData
});

export default reducers;