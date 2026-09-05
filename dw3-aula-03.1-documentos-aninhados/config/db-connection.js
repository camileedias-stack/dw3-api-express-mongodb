import mongoose from "mongoose";

const dbUser = "camilemvdias_db_user";
const dbPassword = "1HkPqIP9ekAn5qaG";

const connect = mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.r2xb7u4.mongodb.net/api-thegames?retryWrites=true&w=majority&appName=Cluster0`
);

const connection = mongoose.connection;

connection.on("error", () => {
    console.log("Erro ao conectar com o MongoDB.");
});

connection.on("open", () => {
    console.log("Conectado ao MongoDB com sucesso!");
});

export default mongoose;