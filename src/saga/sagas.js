import {takeEvery, put, call} from 'redux-saga/effects'
import { LOAD_DATA, putData, PUT_DATA } from '../store/mock'
 
function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(response => response.json())
  
}
 
function* workerLoadData(){
    const data = yield call(fetchData)
    console.log(data)
    yield put(putData(data))
}

export function* watchLoadData(){
    yield takeEvery(LOAD_DATA, workerLoadData)
}