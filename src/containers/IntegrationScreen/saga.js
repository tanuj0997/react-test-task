import { put, takeEvery, delay } from 'redux-saga/effects';
import { cardClicked, cardClickedSuccess, cardClickedFailure } from './reducer';
import { setOpen } from '../Notifications/reducer';

function* cardClickedSaga(action) {
  try {
    yield delay(2000);
    yield put(cardClickedSuccess());
    yield put(setOpen({ message: `Card API ${action.payload} Clicked!`, isSuccess: true }));
  } catch(error) { 
    console.log('Error in cardClickedSaga: ', error);
    yield put(cardClickedFailure());
    yield put(setOpen({ message: 'Got Error in Card Clicked!', isSuccess: false }));
  }
}

function* integrationSaga() {
  yield takeEvery(cardClicked.type, cardClickedSaga);
}

export default integrationSaga;
