const express = require("express");

const mongoose = require("mongoose");

const authRoutes =
    require("./routes/authRoutes");

const app = express();

// Middleware

app.use(express.json());

// MongoDB Connection

mongoose.connect(
    "mongodb://127.0.0.1:27017/authDB"
)

.then(() => {

    console.log("MongoDB Connected");
})

.catch((err) => {

    console.log(err);
});

// Routes

app.use("/api/auth", authRoutes);

// Home Route

app.get("/", (req, res) => {

    res.send("Secure Login API");
});

// Server Port

const PORT = 3000;

app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});