const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name : {
		type : String,
		required : [true, "Name is required"]
	},
	description : {
		type : String,
		required : [true, "Password is required"]
	},
	price : {
		type : Number,
		required : [true, "Price is required"]
	},
	isActive : {
		type : Boolean,
		default : true
	},
	createdOn : {
		type : Date,
		default : new Date()
	},
	userOrders : [
		{
			userID : {
				type : String,
				required : [true, "UserID is Required"]
			}
		}
	]
})

module.exports = mongoose.model("Product", productSchema);