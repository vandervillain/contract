"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contracts = require("../controllers/contractController");
function apiRoutes(app) {
    app.route('/contracts')
        .get(contracts.get)
        .post(contracts.create);
    app.route('/contracts/:contractId')
        .get(contracts.getOne)
        .put(contracts.update)
        .delete(contracts.remove);
}
exports.apiRoutes = apiRoutes;
;
