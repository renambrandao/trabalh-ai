# 🆘 Troubleshooting & FAQ

Se algo não está funcionando, este guia vai ajudar!

---

## 🔴 ERRO: "Site diz que JSONBIN_API_KEY não configurada"

### Sintomas:
- Site abre mas mostra erro no console
- Mensagem: `JSONBIN_API_KEY não configurada`
- Botão de enviar não funciona

### Causa:
Você esqueceu de adicionar a variável de ambiente no Netlify.

### Solução:

**Passo 1**: Volte ao Netlify Dashboard
- Vá em https://app.netlify.com
- Clique no seu site

**Passo 2**: Ir para variáveis de ambiente
1. Clique em **"Site settings"**
2. No menu esquerdo, clique em **"Build & Deploy"**
3. Procure por **"Environment"** (está debaixo de "Build & Deploy")
4. Clique em **"Edit variables"**

**Passo 3**: Adicionar a variável
1. Se já tem uma variável adicionada, clique em **"Edit"**
2. Se não tem, clique em **"Add variable"**

Preencha:
```
Key: JSONBIN_API_KEY
Value: $2b$10$SUA_CHAVE_AQUI
```

Substitua `SUA_CHAVE_AQUI` pela sua chave completa do JSONBin.

**Passo 4**: Fazer novo deploy
1. Clique em **"Deployments"** ou **"Deploys"**
2. Clique no último deploy
3. Procure por **"Trigger deploy"** e clique
4. Selecione **"Deploy site"**
5. Aguarde alguns segundos

---

## 🔴 ERRO: 401 Unauthorized

### Sintomas:
- Console mostra: `401 (Unauthorized)`
- Site abre mas não consegue salvar comentários
- Botão fica "ENVIANDO..." e trava

### Causa:
A API Key está **errada, incompleta ou com espaços**.

### Solução:

**Passo 1**: Copiar a chave corrigida do JSONBin
1. Acesse https://jsonbin.io
2. Faça login
3. Vá em Account → API Keys
4. **Copie a chave completa** (deve começar com `$2b$10$`)

**Passo 2**: Verificar se tem espaços
- A chave não pode ter espaços antes ou depois
- Se tiver, delete os espaços

**Passo 3**: Atualizar no Netlify
1. Vá em Netlify → Site settings → Build & Deploy → Environment
2. Clique em **"Edit"** na variável `JSONBIN_API_KEY`
3. Delete a chave antiga completamente
4. Cole a nova chave
5. Salve

**Passo 4**: Fazer novo deploy
1. Volte para "Deployments"
2. Trigger deploy → Deploy site
3. Aguarde

---

## 🔴 ERRO: "Erro ao carregar mensagens"

### Sintomas:
- Console mostra mensagem de erro vermelha
- Carrossel mostra "Seja o primeiro a comentar!" mesmo depois de enviar
- Comentários não aparecem

### Causa:
Pode ser várias coisas:
1. API Key não configurada
2. BIN_ID incorreto
3. Problema de conexão com JSONBin
4. Timeout

### Solução:

**Passo 1**: Abrir Console (F12)
1. Abra seu site
2. Pressione F12 ou clique direito → Inspecionar
3. Vá na aba **"Console"**
4. Procure por mensagens vermelhas

**Passo 2**: Se o erro é "401"
- Siga o guia acima (ERRO 401)

**Passo 3**: Se o erro é diferente
- Copie a mensagem de erro exata
- Verifique em:
  1. API Key configurada? (Passo anterior)
  2. BIN_ID correto? (Deve ser: `691cf518d0ea881f40f0d9a2`)

**Passo 4**: Verificar JSONBin manualmente
1. Vá em https://jsonbin.io
2. Faça login
3. Clique no seu Bin
4. Verifique se a estrutura está assim:
```json
{
  "messages": []
}
```

Se não tiver `messages`, o JSONBin está estruturado errado.

---

## 🔴 ERRO: Site em branco ou "404"

### Sintomas:
- Página totalmente em branco
- Mostra "404 Not Found"
- Site não carrega

### Causa:
Os arquivos não foram publicados corretamente.

### Solução:

**Passo 1**: Verificar estrutura
1. Vá em GitHub: https://github.com/seu-usuario/trabalh-ai
2. Verifique se vê:
   - `index.html`
   - `netlify.toml`
   - pasta `functions` com `messages.js` dentro

Se não vê, você não fez push dos arquivos corretamente.

**Passo 2**: Se faltam arquivos
1. Terminal:
```bash
cd trabalh-ai
git add .
git commit -m "Adicionar arquivos faltantes"
git push
```

2. Volte ao Netlify
3. Clique em "Deployments"
4. Procure se tem um novo deploy automático

**Passo 3**: Se ainda está em branco
1. Clique no último deploy
2. Procure por "Deploy logs"
3. Leia o que está escrito

Se ver mensagens de erro em vermelho, copie e procure na internet ou em fóruns.

---

## 🔴 ERRO: Comentários não salvam

### Sintomas:
- Consegue enviar comentário
- Botão fica verde "ENVIADO!"
- Mas quando atualiza a página, sumiu

### Causa:
O dados não estão sendo salvos no JSONBin.

### Solução:

**Passo 1**: Abrir Console (F12)
Procure por erros quando envia.

**Passo 2**: Verificar se é erro 401
Se for, siga o guia de "ERRO 401" acima.

**Passo 3**: Se não é erro 401
1. Vá em https://jsonbin.io
2. Faça login
3. Clique no seu Bin
4. Veja se o JSON mudou depois de enviar um comentário

Se não mudou, o problema é que o backend não está conseguindo conectar.

**Passo 4**: Ver logs do Netlify
1. Volte ao Netlify
2. Clique em "Functions"
3. Clique em "messages"
4. Procure por logs de erro

Se ver algo em vermelho, talvez seja timeout ou problema de conexão.

---

## 🔴 ERRO: "Timeout" ou "Function took too long"

### Sintomas:
- Demora muito tempo para enviar
- Depois diz que deu timeout
- Ou aparece mensagem de erro após 30 segundos

### Causa:
A função está demorando muito para conectar ao JSONBin.

### Solução:

**Passo 1**: Tentar novamente
- Às vezes é problema temporário de internet
- Tente enviar de novo

**Passo 2**: Verificar conexão
- Você está em uma rede estável?
- Tente em WiFi diferente

**Passo 3**: Se continuar
- Pode ser problema do JSONBin (raro)
- Tente fazer login em https://jsonbin.io

---

## ❓ FAQ - Perguntas Frequentes

### P: "Como mudo a URL do site?"

**R**: 
1. Netlify Dashboard
2. Site settings
3. Site details
4. Clique em "Change site name"
5. Digite um novo nome

Sua URL será: `https://novo-nome.netlify.app`

---

### P: "Como faço para adicionar mais funções/APIs?"

**R**: 
1. Crie um novo arquivo em `functions/novaapi.js`
2. Siga o mesmo padrão do `messages.js`
3. Faça `git push`
4. Netlify vai criar a rota automaticamente

---

### P: "Como faço para usar um domínio próprio?"

**R**: 
1. Compre um domínio (namecheap.com, godaddy.com, etc)
2. Vá em Netlify → Site settings → Domain management
3. Siga as instruções para conectar seu domínio
4. Custa entre R$20-50 por ano

---

### P: "Posso deletar um comentário?"

**R**: 
Atualmente o sistema não tem delete. Para adicionar:
1. Você precisaria modificar o backend
2. Adicionar validação de senha ou ID
3. Criar rota DELETE

Isso é mais avançado. Por enquanto, você só pode adicionar comentários.

---

### P: "Os dados ficam seguro no JSONBin?"

**R**: 
- ✅ Sim, JSONBin é um serviço confiável
- ✅ Seus dados são criptografados
- ✅ Você pode fazer backup fazendo download do JSON

Para download:
1. Vá em https://jsonbin.io
2. Clique no seu Bin
3. Procure por botão de download

---

### P: "Quantas mensagens posso ter?"

**R**: 
- JSONBin permite até 1000 registros (comentários)
- Se precisar mais, você teria que:
  1. Usar um banco de dados real (MongoDB, PostgreSQL)
  2. Aumentar o limite no JSONBin (pago)

Por enquanto, você tem bastante espaço!

---

### P: "Posso usar JavaScript/Python em vez de Node.js no backend?"

**R**: 
- ✅ Sim, Netlify suporta Python também
- Mas Node.js é mais simples para começar
- Para mudar, precisaria reescrever `messages.js` em Python

---

## 🧪 Teste seu site de forma segura

Antes de compartilhar com muitas pessoas, teste:

### Checklist de teste:
- [ ] Enviar um comentário
- [ ] Atualizar a página - comentário continua?
- [ ] Enviar outro comentário
- [ ] Abrir em outro navegador - comentários aparecem?
- [ ] Abrir no celular - funciona?
- [ ] Aguardar 10 segundos - comentários atualizam?

Se todos passam ✅, seu site está funcionando perfeitamente!

---

## 📊 Ver estatísticas

### Acessos do site:
1. Netlify Dashboard
2. Site name
3. Analytics
4. Veja quantas pessoas acessaram

### Logs de deploy:
1. Netlify Dashboard
2. Deployments
3. Clique no deploy
4. Veja o que aconteceu

### Logs de função:
1. Netlify Dashboard
2. Functions
3. Clique em "messages"
4. Veja os logs de cada requisição

---

## 🆘 Ainda não conseguiu?

Se nada deste guia resolveu:

1. **Leia o README.md de novo** - muitas respostas estão lá
2. **Verifique todos os passos** - algum pode ter sido pulado
3. **Veja os Logs do Netlify** - eles dizem exatamente qual é o problema
4. **Abra Console (F12)** - procure por erros em vermelho
5. **Tente um browser diferente** - pode ser problema de cache
6. **Limpe cache** - Ctrl+Shift+Del e limpe dados do site

---

## 💡 Próximos passos

Se o site está funcionando perfeito, você pode:

1. **Adicionar validação** - validar email, mensagem mínima
2. **Adicionar moderação** - só mostrar comentários aprovados
3. **Adicionar autenticação** - login de usuários
4. **Adicionar mais dados** - likes, replies, timestamps
5. **Mudar para banco de dados** - MongoDB, PostgreSQL
6. **Adicionar temas** - dark mode, light mode
7. **Mobiliar** - app mobile com React Native

---

**Lembre-se**: Cada problema que você resolver, você aprende algo novo! 🚀

Parabéns por chegar até aqui! 🎉
