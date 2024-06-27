const users = [];
let id = 0;
class UserSchema {
  constructor(name, email, password) {
    this.id = ++id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
export const addUser = (data) => {
  const { name, email, password } = data;
  const newUser = new UserSchema(name, email, password);
  users.push(newUser);
  return newUser;
};

export const confirmLogin = (data) => {
  const { email, password } = data;
  let userResult = null;
  users.forEach((user) => {
    if (user.email === email && user.password === password) userResult = user;
  });
  return userResult;
};