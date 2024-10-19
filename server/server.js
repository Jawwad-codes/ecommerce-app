const express = require("express");
const mongoose = require("mongoose");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-Routes");
const PORT = process.env.PORT || 5000;
mongoose
  .connect(
    "mongodb+srv://JawwadNadeem:bIc4382qr0V7tbeT@test.5iue3.mongodb.net/"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB connection error:", error));

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    method: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(cookieparser());
app.use(express.json());
app.use("/api/auth/", authRouter);
app.listen(PORT, () => {
  console.log(`server is now running on the port ${PORT}`);
});
