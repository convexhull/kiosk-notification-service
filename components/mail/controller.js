const services = require("./services");
const { response, report } = require("../../app");

const sendMail = async (req, res) => {
  let responseData = {
    success: false,
    message: "",
  };
  try {
    let apiResponse = await services.sendMail(req);
    responseData = {
      success: true,
      message: "MAIL_SENT",
    };
    res.send(responseData);
  } catch (e) {
    let responseData = {
      success: false,
      message: e.message,
    };
    res.status(500).send(responseData);
  }
};

module.exports = {
  sendMail,
};
