import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import reports from '../containers/ReportsScreen/reducer';
import integration from '../containers/IntegrationScreen/reducer';
import notifications from '../containers/Notifications/reducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  reports,
  notifications,
  integration,
});

export default createRootReducer;
