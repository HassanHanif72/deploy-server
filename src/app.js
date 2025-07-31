const { connectDB } = require('./config/database');
const express = require('express');
const User = require('./models/user');
require('dotenv').config();

const app = express();

app.use(express.json());


app.post('/signup', async (req, res) => {
  try {
    const user = new User(req.body);  // new keyword zaroori hai
    await user.save();                // await lagao taake save ho jaye
    res.send("User Added Successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding user");
  }
});

// FIND USER WITH EMAIL

app.post('/findUserWithEmail', async (req, res) => {
  const email = req.body.email;

  const findByEmail = await User.find({ email: email })

  if (findByEmail.length === 0) {
    res.status(400).send("User not found!")
  } else {
    res.send("User found")
  }
})

app.delete('/deleteById/:id', async (req, res) => {
  const id = req.params.id

  const deleteUser = await User.deleteOne({ _id: id })
  console.log("User Deleted ", deleteUser)

  res.send("User Deleted")

})

app.use('/', (req, res)=>{
  res.send("Server Created");
})

connectDB().then(() => {
  console.log('Successfully connected to the Database');
}).catch((err) => {
  console.log(err);
});

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3000');
})


