const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
	email : {
		type : String,
		required : [true, "Email is required"]
	},
	password : {
		type : String,
		required : [true, "Password is required"]
	},
	isAdmin : {
		type : Boolean,
		default : false
	},
	orderedProduct : [
		{
			products : [
				{
					productId : {
					type : String,
					required : [true, "ProductID is required."]
					},
					productName : {
					type : String,
					required : [true, "Product name is Required."]
					},
					quantity : {
					type : Number,
					required : [true, "Quantity should be stated."]	
					}

				}
			],
			totalAmount : {
				type : Number,
				required : [true, "Total amount is required."]
			},
			purchasedOn : {
				type : Date,
				default : new Date()
			}
		}
	]
})

module.exports = mongoose.model("users", usersSchema);