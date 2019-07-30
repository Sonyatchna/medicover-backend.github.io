const { registerClient } = require('../controllers/ClientController');
const { registerMedicalStaff } = require('../controllers/MedicalStaffController');
const { login } = require('../controllers/PersonController');

function initEndpoints(app) {
  app.post('/auth/login', (req, res) => login(req, res));
  app.post('/auth/register/client', (req, res) => registerClient(req, res));
  app.post('/auth/register/medical-staff', (req, res) => registerMedicalStaff(req, res));
  app.post('/client/call-nurse', (req, res) => console.log('fsdf'));
}

module.exports = initEndpoints;
