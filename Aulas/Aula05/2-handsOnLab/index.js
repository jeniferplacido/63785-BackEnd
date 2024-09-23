const fs = require("fs").promises;
const crypto = require('crypto');

const lerArquivo = async () => {
  try {
    const result = await fs.readFile("./data/usuarios.json", "utf-8");
    const resultParsed = JSON.parse(result);
    return resultParsed;
  } catch (error) {
    console.log("Error", error);
  }
};

const gravarDado = async (dado) => {
  try {
    const dataToSave = JSON.stringify(dado);
    await fs.writeFile("./data/usuarios.json", dataToSave)
  } catch (error) {
    console.log("Error", error);
  }
}

const gravaUsuario = async (usuario) => {
  try {
    const listaUser = await lerArquivo();

    usuario.senha = crypto.createHash("sha256").update(usuario.senha).digest("hex");
    console.log(usuario);
    listaUser.push(usuario);
    await gravarDado(listaUser)
  } catch (error) {
    console.log("Error", error);
  }
}

const validaUser = async (user) => {
  try {
    const listaUser = await lerArquivo();
    const findUser = listaUser.find((elem) => {
      return elem.usuario === user.usuario
    })
    if (!findUser) {
      return console.log("Usuário não existe");
    }

    const senhaCriptografada = crypto.createHash("sha256")
    .update(user.senha).digest("hex");

    if (findUser.senha === senhaCriptografada) {
      return console.log("Usuário Logado!");
    } else {
      return console.log("Senha incorreta");
    }
  } catch (error) {
    console.log("Error", error);
  }
};

const main = async() => {
 const user = ({ usuario: "joao@teste.com", senha: "teste" });

//  await gravaUsuario(user);

 await validaUser(user);
}

main();