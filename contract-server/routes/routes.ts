import * as contracts from '../controllers/contractController';

export function apiRoutes(app) {  

    app.route('/contracts')
      .get(contracts.get)
      .post(contracts.create);
  
    app.route('/contracts/:contractId')
      .get(contracts.getOne)
      .put(contracts.update)
      .delete(contracts.remove);
  };