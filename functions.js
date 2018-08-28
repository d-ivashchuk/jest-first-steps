const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkVal: n => n,
  createUser: () => {
    const user = { firstName: 'Dimitri' };
    user['lastName'] = 'Ivashchuk';
    return user;
  }
};

module.exports = functions;
