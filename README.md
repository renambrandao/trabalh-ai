# 🎬 trabalh.ai - Sistema de Comentários com Netlify

Este é o repositório do **trabalh.ai**, um sistema interativo de comentários com backend seguro.

---

## 📁 Estrutura do Projeto

```
.
├── index.html           # Arquivo principal (página web)
├── netlify.toml         # Configuração do Netlify
├── functions/
│   └── messages.js      # API backend (Netlify Function)
└── README.md           # Este arquivo
```

---

## 🔒 Segurança

- ✅ **API Key protegida**: Fica no servidor Netlify, nunca é exposta no navegador
- ✅ **Requisições autenticadas**: Backend valida todos os dados
- ✅ **CORS habilitado**: Funciona apenas do seu domínio Netlify
- ✅ **Dados no JSONBin**: Persistência em nuvem

---

## 🚀 Como Publicar (Passo-a-Passo)

### PASSO 1: Preparar o GitHub

#### 1.1. Criar um repositório no GitHub

1. Acesse https://github.com/new
2. Preencha:
   - **Repository name**: `trabalh-ai`
   - **Description**: `Sistema de comentários com Netlify`
   - **Visibility**: Public (grátis) ou Private (se quiser)
3. Clique em **"Create repository"**

#### 1.2. Clonar o repositório localmente

```bash
git clone https://github.com/seu-usuario/trabalh-ai.git
cd trabalh-ai
```

(Substitua `seu-usuario` pelo seu usuário do GitHub)

#### 1.3. Estrutura correta de pastas

Certifique-se que a estrutura ficou assim:

```
trabalh-ai/
├── index.html
├── netlify.toml
├── functions/
│   └── messages.js
└── .gitignore (opcional)
```

Se a pasta `functions` não existir, crie manualmente.

#### 1.4. Adicionar os arquivos

```bash
# Adicionar todos os arquivos
git add .

# Criar um commit (salvar alterações)
git commit -m "Versão inicial do trabalh.ai"

# Enviar para o GitHub
git push -u origin main
```

Se tudo deu certo, você verá uma mensagem de sucesso.

---

### PASSO 2: Conectar Netlify ao GitHub

#### 2.1. Criar conta no Netlify

1. Acesse https://app.netlify.com
2. Clique em **"Sign up"**
3. Selecione **"Continue with GitHub"**
4. Autorize o Netlify a acessar sua conta GitHub

#### 2.2. Importar repositório

1. Após fazer login, clique em **"Add new site"**
2. Selecione **"Import an existing project"**
3. Conecte ao GitHub (se não estiver já conectado)
4. Procure por `trabalh-ai` e selecione
5. Clique em **"Open"**

#### 2.3. Configurar build settings

Na tela que aparecer:

- **Base directory**: deixe em branco (ou .)
- **Build command**: deixe em branco
- **Publish directory**: . (um ponto)
- **Functions directory**: functions

Clique em **"Deploy site"**

O Netlify vai começar a fazer deploy! ⏳

---

### PASSO 3: Configurar a API Key (IMPORTANTE!)

#### 3.1. Aguardar o deploy terminar

Seu site estará em um endereço como:
```
https://seu-site-123abc.netlify.app
```

Mas antes de funcionar, você precisa configurar a API Key.

#### 3.2. Adicionar variável de ambiente

1. No dashboard do Netlify, procure por **"Site Settings"** ou **"Settings"**
2. No menu lateral, clique em **"Build & Deploy"**
3. Procure por **"Environment"** ou **"Environment variables"**
4. Clique em **"Edit variables"** ou **"New variable"**
5. Adicione:
   - **Key**: `JSONBIN_API_KEY`
   - **Value**: Cole sua chave completa do JSONBin (começa com `$2b$10$`)
6. Clique em **"Save"**

#### 3.3. Fazer novo deploy

1. Volte para a aba **"Deploys"**
2. Procure pelo último deploy e clique nele
3. No canto superior direito, clique em **"Trigger deploy"** → **"Deploy site"**

Seu site agora deve funcionar! 🎉

---

### PASSO 4: Testar seu site

1. Acesse `https://seu-site.netlify.app`
2. Deixe um comentário de teste
3. Verifique se aparece no carrossel
4. Atualize a página (F5) - o comentário deve continuar lá
5. Se tudo funcionar, parabéns! ✅

---

## 🔧 Solução de Problemas

### Problema: Site em branco ou com erro

**Solução**:
1. Abra o Console do navegador (F12)
2. Procure por mensagens de erro em vermelho
3. Copie a mensagem de erro completa
4. Verifique em "Netlify → Logs" se há erros no servidor

### Problema: "JSONBIN_API_KEY não configurada"

**Solução**:
1. Você esqueceu de adicionar a variável no PASSO 3.2
2. Verifique se a chave está correta (deve começar com `$2b$10$`)
3. Faça um novo deploy após adicionar a variável

### Problema: "Erro ao enviar mensagem"

**Solução**:
1. Abra Console (F12 → Console)
2. Procure por erros em vermelho
3. Verifique se:
   - A API Key está corrigida
   - O BIN_ID está correto no código
   - A chave do JSONBin é válida

### Problema: Comentários não persistem

**Solução**:
1. Verifique se a API Key está configurada
2. Abra https://jsonbin.io e faça login
3. Clique no seu Bin
4. Verifique se os dados estão sendo salvos lá
5. Se não aparecerem, o problema é na autenticação

---

## 📝 Editar o projeto

### Modificar o HTML

1. Abra `index.html` em um editor
2. Faça as alterações
3. Salve
4. Envie para GitHub:

```bash
git add index.html
git commit -m "Descrição da mudança"
git push
```

O Netlify fará deploy automaticamente!

### Modificar o backend

1. Abra `functions/messages.js`
2. Faça as alterações
3. Salve e envie para GitHub
4. Deploy automático do Netlify

---

## 📚 Tecnologias Usadas

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Netlify Functions (Node.js)
- **Database**: JSONBin.io
- **Hosting**: Netlify
- **Versionamento**: Git + GitHub

---

## 🎓 Conceitos que você aprendeu

✅ Estrutura de um projeto web
✅ Frontend e backend
✅ API REST (GET/POST)
✅ Variáveis de ambiente
✅ Autenticação (API Key)
✅ Deployment automático
✅ Git e GitHub
✅ Segurança (não expor credenciais)

---

## 🚀 Próximas melhorias que você pode fazer

1. Adicionar página de admin para moderar comentários
2. Adicionar validação de email
3. Adicionar limite de mensagens por IP
4. Adicionar banco de dados real (MongoDB, PostgreSQL)
5. Adicionar autenticação de usuários
6. Adicionar temas (light/dark mode)
7. Adicionar busca de comentários

---

## 💡 Dicas Úteis

**Para debugar:**
```
# Ver logs em tempo real
netlify logs
```

**Para testar localmente:**
```
# Instale o Netlify CLI
npm install -g netlify-cli

# Rode localmente
netlify dev
```

**Para alterar a URL:**
1. Vá em Netlify → Site Settings → Site details
2. Clique em "Change site name"
3. Digite um novo nome

---

## 📞 Suporte

Se algo não funcionar:

1. Leia o `README.md` de novo (frequentemente resolvem!)
2. Verifique os logs do Netlify
3. Abra a Console do navegador (F12)
4. Verifique se as variáveis de ambiente foram configuradas
5. Tente fazer um novo deploy

---

## 📄 Licença

Use este projeto como quiser! É seu código.

---

## ✨ Parabéns!

Você publicou um projeto full-stack (com backend)! 🎉

Você aprendeu conceitos importantes de desenvolvimento web que profissionais usam todo dia.

Agora continue aprendendo e criando projetos cada vez mais legais!

---

**Última atualização**: Novembro 2025

Mantido com ❤️ para iniciantes em programação
