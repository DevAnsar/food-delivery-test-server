var axios = require("axios");

const getCategories = async (req, res) => {
  try {
    let { data: categories } = await axios.get(`/categories`);
    let firstTab = categories[0];
    let { data: providers } = await axios.get(
      `/providers?categoryId=${firstTab.id}`
    );
    console.log(providers);
    res.json({
      status: true,
      categories,
      providers,
      message: "",
    });
  } catch (error) {
    res.json({
      status: false,
      message: "متاسفانه سرور قادر به پاسخگویی به درخواست شما نیست",
    });
  }
};

const getDelivers = async (req, res) => {
  let { categoryId, subCategoryId } = req.query;
  let user = { id: 1 };

  try {
    let query = `categoryId=${categoryId}`;
    if (subCategoryId !== undefined && subCategoryId !== 0) {
      query += `&subCategoryId=${subCategoryId}`;
    }
    let { data } = await axios.get(`/providers?${query}`);
    console.log(data);
    res.json({
      status: true,
      providers: data,
      message: "",
    });
  } catch (error) {
    res.json({
      status: false,
      message: "متاسفانه سرور قادر به پاسخگویی به درخواست شما نیست",
    });
  }
};

const getDelivery = async (req,res)=>{
  try {
    let deliveryId=req.params.deliveryId;
    console.log('deliveryId:',deliveryId)
    let { data } = await axios.get(`/providers/${deliveryId}`);
    console.log(data);
    if(data){
      res.json({
        status: true,
        delivery: data,
        message: "",
      });
    }else{
      res.json({
        status: false,
        message: "اطلاعات درخواست شده موجود نیست",
      });
    }
  } catch (error) {
    res.json({
      status: false,
      message: "متاسفانه سرور قادر به پاسخگویی به درخواست شما نیست",
    });
  }
}
module.exports = { getCategories, getDelivers,getDelivery };
