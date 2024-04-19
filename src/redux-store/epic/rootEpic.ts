import {combineEpics} from "redux-observable";
import { allContactRequestEpic } from "./allContacttEpic";

export const rootEpic = combineEpics(
    allContactRequestEpic,
);