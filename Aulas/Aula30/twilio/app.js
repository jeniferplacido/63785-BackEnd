// Importa o módulo express para criar um servidor web
const express = require('express');
// Importa o módulo twilio para enviar SMS
const twilio = require('twilio');
// Cria uma instância do aplicativo express
const app = express();

// Importa as configurações do arquivo config
const config = require('./config');

// Cria um cliente Twilio usando as credenciais da configuração
const client = twilio(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN);

// Define uma rota GET para o caminho '/sms'
app.get('/sms', async (req, res) => {
    try {
        // Usa o cliente Twilio para criar e enviar uma mensagem SMS
        const message = await client.messages.create({
            body: 'Testando o envio de SMS com o Twilio', // Corpo da mensagem
            from: config.TWILIO_PHONE_NUMBER, // Número de telefone de origem (Twilio)
            to: '+5531992782642' // Número de telefone de destino
        });
        // Exibe o SID da mensagem no console
        console.log(message.sid);
        // Envia uma resposta de sucesso
        res.send({status: "sucesso", result: "SMS enviado com sucesso"});
    } catch (error) {
        // Exibe o erro no console
        console.log(error);
        // Envia uma resposta de erro com status 500
        res.status(500).send({status: "erro", result: "Erro ao enviar SMS"});
    }
});

// Inicia o servidor na porta 8080 e exibe uma mensagem no console
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});