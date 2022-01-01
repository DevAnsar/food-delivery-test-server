var axios = require("axios");

const sendCode = async (req, res) => {
  try {
    let { phone } = req.body;
    let loginCode = null;
    let response = await axios.get(`/users?mobile=${phone}`);
    const { data } = response;
    //   console.log("data:", data);
    if (data.length > 0) {
      let user = data[0];
      loginCode = Math.floor(Math.random() * 10000);
      // console.log("loginCode:", loginCode);
      await axios.patch(`/users/${user.id}`, {
        loginCode,
      });
    } else {
      loginCode = Math.floor(Math.random() * 10000);
      await axios.post(`/users`, {
        loginCode,
        mobile: phone,
      });
    }
    return res.json({
      status: true,
      loginCode: loginCode,
      message: "کد ورود به شماره موبایل ارسال شد",
    });
  } catch (error) {
    return res.json({
      status: false,
      loginCode: null,
      message: "متاسفاده سرور قادر به پاسخگویی نیست!",
    });
  }
};

const loginWithCode = async (req, res) => {
  try {
    let { phone, code } = req.body;

    let response = await axios.get(`/users?mobile=${phone}`);
    const { data } = response;
    //   console.log("data:", data);
    if (data.length > 0) {
      let user = data[0];

	        // console.log("code:", code);
      if (user.loginCode === Number(code)) {
        /* create jwt and send to clien */
        // await axios.patch(`/users/${user.id}`, {
        // 	loginCode,
        //   });
        return res.json({
          status: true,
          user,
          message: "",
        });
      } else {
        return res.json({
          status: false,
          message: "کد وارد شده صحیح نیست",
        });
      }
    } else {
      return res.json({
        status: false,
        message: "شماره موبایل تایید شده نیست",
      });
    }


  } catch (error) {
    return res.json({
      status: false,
      loginCode: null,
      message: "متاسفاده سرور قادر به پاسخگویی نیست!",
    });
  }
};

module.exports = { sendCode, loginWithCode };
