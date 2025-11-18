// netlify/functions/messages.js
// Esta função roda no servidor Netlify (não no navegador)
// A API Key fica segura aqui!

exports.handler = async (event) => {
    // ⚠️ A CHAVE VEM DO SERVIDOR (variável de ambiente)
    // Configure em: Netlify Dashboard → Site Settings → Build & Deploy → Environment
    const apiKey = process.env.JSONBIN_API_KEY;
    const binId = '691cf518d0ea881f40f0d9a2';
    const jsonbinUrl = `https://api.jsonbin.io/v3/b/${binId}`;

    // Validar que a API Key existe
    if (!apiKey) {
        console.error('❌ ERRO: JSONBIN_API_KEY não configurada!');
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Servidor não configurado. Adicione JSONBIN_API_KEY nas variáveis de ambiente.'
            })
        };
    }

    // ============================================
    // REQUISIÇÃO GET - Carregar mensagens
    // ============================================
    if (event.httpMethod === 'GET') {
        try {
            console.log('📥 GET: Carregando mensagens...');
            
            const response = await fetch(`${jsonbinUrl}/latest`, {
                method: 'GET',
                headers: {
                    'X-Master-Key': apiKey
                }
            });

            if (!response.ok) {
                throw new Error(`JSONBin error: ${response.status}`);
            }

            const data = await response.json();
            console.log('✅ GET: Mensagens carregadas com sucesso');
            
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data.record)
            };
            
        } catch (error) {
            console.error('❌ GET: Erro ao carregar:', error.message);
            return {
                statusCode: 500,
                body: JSON.stringify({
                    error: 'Erro ao carregar mensagens',
                    messages: []
                })
            };
        }
    }

    // ============================================
    // REQUISIÇÃO POST - Salvar mensagens
    // ============================================
    if (event.httpMethod === 'POST') {
        try {
            console.log('📤 POST: Salvando mensagens...');
            
            // Parse do corpo da requisição
            let requestBody;
            try {
                requestBody = JSON.parse(event.body);
            } catch (e) {
                return {
                    statusCode: 400,
                    body: JSON.stringify({
                        error: 'JSON inválido no corpo da requisição'
                    })
                };
            }

            // Validar formato
            if (!requestBody || !Array.isArray(requestBody.messages)) {
                return {
                    statusCode: 400,
                    body: JSON.stringify({
                        error: 'Formato inválido. Envie: { messages: [...] }'
                    })
                };
            }

            // Validar tamanho
            if (requestBody.messages.length > 1000) {
                return {
                    statusCode: 400,
                    body: JSON.stringify({
                        error: 'Máximo de 1000 mensagens'
                    })
                };
            }

            // Validar cada mensagem
            for (let msg of requestBody.messages) {
                if (!msg.author || !msg.text) {
                    return {
                        statusCode: 400,
                        body: JSON.stringify({
                            error: 'Todas as mensagens precisam ter autor e texto'
                        })
                    };
                }
            }

            // Enviar para JSONBin
            const response = await fetch(jsonbinUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': apiKey
                },
                body: JSON.stringify({ messages: requestBody.messages })
            });

            if (!response.ok) {
                throw new Error(`JSONBin error: ${response.status}`);
            }

            const data = await response.json();
            console.log('✅ POST: Mensagens salvas com sucesso');
            
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            
        } catch (error) {
            console.error('❌ POST: Erro ao salvar:', error.message);
            return {
                statusCode: 500,
                body: JSON.stringify({
                    error: 'Erro ao salvar mensagens'
                })
            };
        }
    }

    // ============================================
    // Métodos não permitidos
    // ============================================
    return {
        statusCode: 405,
        body: JSON.stringify({
            error: `Método ${event.httpMethod} não permitido. Use GET ou POST.`
        })
    };
};
