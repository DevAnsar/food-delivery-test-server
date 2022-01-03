var axios = require('axios');

const getAllUser = async (req, res) => {
	// const users =await User.find()
	res.send([])
}


const getAuthUserAddresses = async (req , res )=>{
	// let { token } =req.body;
	let user = { id : 1};

	try{
		let {data} = await axios.get(`/addresses?userId=${user.id}`);
		console.log(data)
		res.json({
			status : true,
			addresses : data,
			message :"آدرس های شما"
		})

	}catch(error){
		res.json({
			status : false,
			message : 'متاسفانه سرور قادر به پاسخگویی به درخواست شما نیست'
		})
	}


}


const createNewAddress = async (req , res )=>{
	
	let user = { id : 1};

	try{
		let addressData =req.body;
		addressData.userId=user.id;
		// console.log(addressData);
		let {data} = await axios.post(`/addresses`,addressData);
		// console.log(data)
		res.json({
			status : true,
			addresse : data,
			message :"آدرس جدید ثبت شد"
		})

	}catch(error){
		res.json({
			status : false,
			message : 'متاسفانه سرور قادر به پاسخگویی به درخواست شما نیست'
		})
	}


}
const getSearch = async (req,res)=>{

	try{
		let {search} =req.query;
		
		// console.log(search);
		let {data} = await axios.get(`/providers`);
		console.log(data)
		res.json({
			status : true,
			searchResults : data,
			message :"نتایج جستجو"
		})

	}catch(error){
		res.json({
			status : false,
			message : 'متاسفانه سرور قادر به پاسخگویی به درخواست شما نیست'
		})
	}

}
module.exports={getAllUser , getAuthUserAddresses , createNewAddress ,getSearch}