import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

const dummyUser = {
  email: "test@example.com",
  password: "password123"
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || email.trim() === "") {
    return res
      .status(400)
      .json({ message: "Email cannot be empty", success: false });
  }

  if (!password || password.trim() === "") {
    return res
      .status(400)
      .json({ message: "Password cannot be empty", success: false });
  }

  if (email === dummyUser.email && password === dummyUser.password) {
    return res
      .status(200)
      .json({ message: "Login successful", success: true });
  } else {
    return res
      .status(401)
      .json({ message: "Invalid credentials", success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
