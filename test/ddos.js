/**
 * Para rodar o teste acesse C:\PersonalProjects\linkredirect\test> 
 * e digite node ddos.js
 * É preciso também ter o servidor rodando em outra janela do console.
 * 
 * Expectativa, no request 200 a classe ddosDetector deve impedir o request.
 * Ainda deve bloquear esse ip por 15 minutos, então se rodar novamente
 * ddos.js nenhum request deve ser enviado em 15 minutos.
 * 
 * Observar logs no console.
 */
const axios = require('axios');

const targetUrl = 'http://localhost:3000/login';

const numberOfRequests = 250;

// Função para enviar solicitações em massa
async function sendRequests() {
    try {
        // Loop para enviar as solicitações
        for (let i = 0; i < numberOfRequests; i++) {
            await axios.get(targetUrl);
            console.log(`Request ${i + 1} sent`);
        }
        console.log('All requests sent successfully');
    } catch (error) {
        console.error('Error sending requests:', error.response.data);
    }
}

// Chamar a função para enviar as solicitações
sendRequests();
