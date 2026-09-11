import getUser from "./user.service.js";

const getAllUser = async (req, res) => {
  const users = await getUser();
  res.send(users);
};

export default getAllUser;
