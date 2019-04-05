function initEndpoints(app) {
  app.post('/login', (req, res) => login(req, res));
  app.post('/register/user', (req, res) => registerUser(req, res));
  app.post('/register/owner', (req, res) => registerOwner(req, res));
}

module.exports = initEndpoints;