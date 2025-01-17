import { DATA_SOURCE } from '../config/constants';
import firebaseService from './firebaseService';
import mongoService from './mongoService';
import mysqlService from './mysqlService';
import apiService from './apiService';

const services = {
  firebase: firebaseService,
  mongo: mongoService,
  mysql: mysqlService,
  api: apiService,
};

const getService = () => {
  if (!services[DATA_SOURCE]) {
    throw new Error(`Data source "${DATA_SOURCE}" is not supported.`);
  }
  return services[DATA_SOURCE];
};

export default getService;
