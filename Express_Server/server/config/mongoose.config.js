const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Restful-server", {
	useNewUrlParser: true,// optional code for get rid of deprecation msg from terminal
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));