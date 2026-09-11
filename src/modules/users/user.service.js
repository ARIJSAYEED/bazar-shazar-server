import User from "./user.model.js";

const getUser = () => {
  return User.find();
};

export default getUser;
