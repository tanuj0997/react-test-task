import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import reportsSaga from '../containers/ReportsScreen/saga';
import integrationSaga from '../containers/IntegrationScreen/saga';

function* rootSaga() {
  yield all(
    [
      fork(reportsSaga),
      fork(integrationSaga),
    ]
  );
}

const sagaMiddleware = createSagaMiddleware();

export const startSaga = () => {
  sagaMiddleware.run(rootSaga);
};

export default sagaMiddleware;
