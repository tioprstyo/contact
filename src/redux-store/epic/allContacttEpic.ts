import {catchError, from, map, mergeMap, of} from "rxjs";
import {ofType} from "redux-observable";
import FakeBackendService from "../../service/FakeBackendService";
import {
    getAllContactFailedAction,
    getAllContactRequestAction,
    getAllContactSuccessAction,
} from "../reducer/allContactSlice";

export const allContactRequestEpic = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(getAllContactRequestAction),
        mergeMap((action: any) =>
            from(
                FakeBackendService.getContact()
            ).pipe(
                map((response: any) => {
                    if (response.data) {
                        return getAllContactSuccessAction(response.data.data);
                    } else {
                        throw response;
                    }
                }),
                catchError((err) => {
                    let result = {
                        message: err
                    }
                    return of(getAllContactFailedAction(result));
                })
            )
        )
    );
};