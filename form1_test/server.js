const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect("mongodb://localhost:27017/formularioDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão:"));
db.once("open", () => {
    console.log("Conectado ao MongoDB");
});

// Schema e Modelo de Usuário
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model("User", userSchema);

// Rota para cadastrar usuário
app.post("/register", async (req, res) => {
    const { name, email } = req.body;

    const newUser = new User({ name, email });

    try {
        await newUser.save();
        res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao cadastrar usuário." });
    }
});

// Rota para listar usuários
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar usuários." });
    }
});

// Iniciar o servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
