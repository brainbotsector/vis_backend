const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

const shopifyCustomerRoutes = require("./routes/customerroutes");
const orderRoutes = require("./routes/ordersRoutes"); // Import the order routes

app.use("/api/customers", shopifyCustomerRoutes);
app.use("/api/orders", orderRoutes); // Use the order routes

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());

// const shopifyCustomerRoutes = require("./routes/customerroutes");
// const orderRoutes = require("./routes/ordersRoutes"); // Import the order routes

// app.use("/api/customers", shopifyCustomerRoutes);
// app.use("/api/orders", orderRoutes); // Use the order routes

// // const mongoURI = 'mongodb://127.0.0.1:27017/RQ_Analytics';
// const mongoURI =
//   "mongodb+srv://db_user_read:LdmrVA5EDEv4z3Wr@cluster0.n10ox.mongodb.net/RQ_Analytics?retryWrites=true&w=majority";

// mongoose
//   .connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connection successful"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
