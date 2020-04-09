import { put, takeEvery, call } from 'redux-saga/effects';
import { getReports, getReportsSuccess, getReportsFailure } from './reducer';
import { setOpen } from '../Notifications/reducer';
import { request } from '../../utils';
import { BASE_URL } from '../../constants';

const reportsUrl = `${BASE_URL}/csvData?ndays=50&fileUpload&filename&sourcename`

function* getReportsSaga() {
  try {
    const response = yield call(request.getRequest, reportsUrl); 
    yield put(getReportsSuccess(response.data))
    yield put(setOpen({ message: 'Got Reports Successfully!', isSuccess: true }));
  } catch(error) { 
    console.log('Error in getReportSaga: ', error);
    yield put(getReportsFailure());
    yield put(setOpen({ message: 'Got Error in Fetching Reports!', isSuccess: false }));
  }
}

function* reportsSaga() {
  yield takeEvery(getReports.type, getReportsSaga);
}

export default reportsSaga;
