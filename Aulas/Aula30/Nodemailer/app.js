const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

const transport = nodemailer.createTransport({
    service:'gmail',
    port: 587,
    auth:{
    user: 'jenifer.sdti@gmail.com',
    pass: 'zxtn vxpf qubu glsx'
    }
});

    app.get('/mail', async (req, res) =>{
        try{
        let result = await transport.sendMail({
            from: 'Jenifer <jenifer.sdti@gmail.com>', // remetente
            to: 'jenifer.sdti@gmail.com, m.nantes7@gmail.com, alessandra.rosarezende@gmail.com', // destinatários
            subject: 'Teste de envio de email', // assunto
            text: 'Testando o envio de email com o nodemailer', // corpo do email
            html: '<h1>Testando o envio de email com o nodemailer</h1>', // corpo do email em HTML
            attachments: [{ //anexos do email
                filename: "code.png", // nome do arquivo
                path: path.join(__dirname,'img', 'code.png'), // caminho para o arquivo
                cid: 'code' // id conteudo do arquivo
            }]
        });

        console.log(result);
        res.send({status:"sucesso", result: "Email enviado com sucesso"});
    } catch(error){
        res.status(500).send({status:"erro", result: "Erro ao enviar email"});
    }
    })

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
})