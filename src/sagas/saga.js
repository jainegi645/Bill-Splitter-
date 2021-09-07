import {takeLatest,put} from 'redux-saga/effects';
import { billAction,tipAction, personAction } from '../actions';


function* Total(){
    yield put ({
        type:'total_async'
         
    })
}

export function* watchGetPerson(){
    yield takeLatest([billAction,tipAction,personAction],Total );
}