const express = require("express");
const mainRouter = require("./routes/mainRouter");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(mainRouter);



require("./routes/userRouter")(app);
app.listen(PORT, ()=>{
    console.log(`Server listen on port ${PORT}`);
})