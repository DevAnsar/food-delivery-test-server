var axios = require("axios");

const getAllUser = async (req, res) => {
  // const users =await User.find()
  res.send([]);
};

const getAuthUserAddresses = async (req, res) => {
  // let { token } =req.body;
  let user = { id: 1 };

  try {
    let { data } = await axios.get(`/addresses?userId=${user.id}`);
    console.log(data);
    res.json({
      status: true,
      addresses: data,
      message: "آدرس های شما",
    });
  } catch (error) {
    res.json({
      status: false,
      message: "متاسفانه سرور قادر به پاسخگویی به درخواست شما نیست",
    });
  }
};

const createNewAddress = async (req, res) => {
  let user = { id: 1 };

  try {
    let addressData = req.body;
    addressData.userId = user.id;
    // console.log(addressData);
    let { data } = await axios.post(`/addresses`, addressData);
    // console.log(data)
    res.json({
      status: true,
      address: data,
      message: "آدرس جدید ثبت شد",
    });
  } catch (error) {
    res.json({
      status: false,
      message: "متاسفانه سرور قادر به پاسخگویی به درخواست شما نیست",
    });
  }
};
const getSearch = async (req, res) => {
  try {
    let { search } = req.query;

    // console.log(search);
    let { data } = await axios.get(`/providers`);
    console.log(data);
    res.json({
      status: true,
      searchResults: data,
      message: "نتایج جستجو",
    });
  } catch (error) {
    res.json({
      status: false,
      message: "متاسفانه سرور قادر به پاسخگویی به درخواست شما نیست",
    });
  }
};

const getAuthUserData = async (req, res) => {
  try {
    let { data } = await axios.get(`/users/1`);
    console.log(data);
    res.json({
      status: true,
      user: data,
      message: "مشخصات کاربر",
    });
  } catch (error) {
    res.json({
      status: false,
      message: "متاسفانه سرور قادر به پاسخگویی به درخواست شما نیست",
    });
  }
};

const updateAuthUserData = async (req, res) => {
  let user = { id: 1 };

  try {
    let addressData = req.body;
    addressData.userId = user.id;
    // console.log(addressData);
    let { data } = await axios.patch(`/users/${user.id}`, addressData);
    console.log("data", data);
    res.json({
      status: true,
      user: data,
      message: "اطلاعات ویرایش شد",
    });
  } catch (error) {
    res.json({
      status: false,
      message: "متاسفانه سرور قادر به پاسخگویی به درخواست شما نیست",
    });
  }
};

const deleteAddress = async (req, res) => {
  try {
    let { addressId } = req.params;
    // console.log(addressId);
    let { data } = await axios.delete(`/addresses/${addressId}`);
    console.log("data", data);
    res.json({
      status: true,
      message: "آدرس حذف شد",
    });
  } catch (error) {
    res.json({
      status: false,
      message: "متاسفانه سرور قادر به پاسخگویی به درخواست شما نیست",
    });
  }
};

const editAddress = async (req,res) => {
  try {
    let addressData = req.body;
    let { addressId } = req.params;
    console.log(addressId);
    let { data } = await axios.patch(`/addresses/${addressId}`,addressData);
    console.log("data", data);
    res.json({
      status: true,
      message: "آدرس حذف شد",
    });
  } catch (error) {
    res.json({
      status: false,
      message: "متاسفانه سرور قادر به پاسخگویی به درخواست شما نیست",
    });
  }
};

module.exports = {
  getAllUser,
  getAuthUserAddresses,
  createNewAddress,
  getSearch,
  getAuthUserData,
  updateAuthUserData,
  deleteAddress,
  editAddress,
};
