import express from "express"

import { connectToDb } from "./middlewares/connect.js";
import authRoutes from "./routers/authRoutes.js";
import { config } from "dotenv";

config()
const app = express();
app.use(express.json());
connectToDb()


app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});