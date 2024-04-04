import {combineReducers} from "redux";
import folderSlice from "@/state/features/folder/folderSlice";

const appReducers = {
    folder: folderSlice
}
export const rootReducers = combineReducers(appReducers)