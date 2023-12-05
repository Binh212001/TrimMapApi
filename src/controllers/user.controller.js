const User = require("../models/users.model");

const ResponseData = require("../data/ResponeData");
//@@@@----------------------register--------------------
const register = async (req, res) => {
  const { firstName, lastName, username, password, avatar, phoneNumber } =
    req.body;
  try {
    if (!firstName || !lastName || !username || !password)
      return ResponseData.badRequest(res, {
        message: "Tên đăng nhập , Họ tên đệm , mật khẩu là bắt buộc",
      });

    const oldUser = await User.findOne({ username });
    if (oldUser)
      return ResponseData.badRequest(res, {
        message: "Tài khoản đã tông tại",
      });

    const newUser = new User({
      firstName,
      lastName,
      username,
      password,
      avatar,
    });

    await newUser.save();
    newUser.password = undefined;

    ResponseData.created(res, {
      ...newUser._doc,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

//@@@@----------------------End register----------------

//@@@@----------------------login--------------------
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      username,
      password,
    });
    if (!user) {
      ResponseData.badRequest(
        res,
        "Thông tin tài khoản hooacwj mật khẩu không chính xác"
      );
    }

    user.password = undefined;

    ResponseData.created(res, {
      ...user._doc,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

module.exports = {
  register,
  login,
};
