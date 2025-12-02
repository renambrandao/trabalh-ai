# 🚀 GUIA COMPLETO: Publicar trabalh.ai no Netlify

**Tempo estimado**: 20 minutos

---

## 📋 O que você vai fazer

```
1. Preparar arquivos na sua máquina
2. Enviar para GitHub
3. Conectar ao Netlify
4. Adicionar segurança (API Key)
5. Seu site estará online! 🎉
```

---

## ✅ FASE 1: Preparar os Arquivos (5 minutos)

### 1.1 Criar uma pasta para o projeto

Abra seu terminal/prompt e execute:

```bash
# Cria uma pasta chamada trabalh-ai
mkdir trabalh-ai
cd trabalh-ai
```

Ou manualmente:
- Clique direito no seu computador
- Novo → Pasta
- Nomeie como `trabalh-ai`
- Abra a pasta

### 1.2 Copiar os arquivos para a pasta

Você recebeu estes arquivos:
- `index.html`
- `messages.js`
- `netlify.toml`
- `README.md`

**Copie todos eles para a pasta `trabalh-ai`**

Estrutura final deve ser:
```
trabalh-ai/
├── index.html
├── netlify.toml
├── README.md
└── functions/
    └── messages.js
```

⚠️ **IMPORTANTE**: O arquivo `messages.js` DEVE estar dentro de uma pasta chamada `functions`

Se não tiver a pasta `functions`, crie:
- Abra a pasta `trabalh-ai`
- Clique direito
- Novo → Pasta
- Nomeie como `functions`
- Coloque o `messages.js` dentro

### 1.3 Inicializar Git

No terminal, dentro da pasta `trabalh-ai`:

```bash
git init
```

Isso transforma a pasta em um repositório Git.

---

## ✅ FASE 2: Criar Repositório no GitHub (5 minutos)

### 2.1 Ir para GitHub

1. Acesse https://github.com
2. Faça login (ou crie conta se não tiver)

### 2.2 Criar novo repositório

1. Clique no **"+"** no canto superior direito
2. Selecione **"New repository"**

### 2.3 Preencher informações

Você vai ver um formulário. Preencha assim:

| Campo | Valor |
|-------|-------|
| **Repository name** | `trabalh-ai` |
| **Description** | `Sistema de comentários com Netlify` |
| **Public or Private** | Public (mais fácil) |
| **Add .gitignore** | Deixe em branco |
| **Add a license** | Deixe em branco |

NÃO marque:
- ❌ "Initialize this repository with a README"
- ❌ "Add .gitignore"

### 2.4 Criar repositório

Clique em **"Create repository"**

Você verá uma tela com instruções. Copie o código que aparece (vai ser similar a isto):

```bash
git remote add origin https://github.com/seu-usuario/trabalh-ai.git
git branch -M main
git push -u origin main
```

---

## ✅ FASE 3: Enviar Arquivos para GitHub (3 minutos)

### 3.1 No terminal (dentro da pasta `trabalh-ai`)

Execute estes comandos **na ordem**:

```bash
# 1. Adicionar todos os arquivos
git add .

# 2. Criar um "snapshot" (commit)
git config user.email "seu-email@gmail.com"
git config user.name "Seu Nome"

git commit -m "Versão inicial do trabalh.ai"

# 3. Conectar ao GitHub (copie do passo 2.4)
git remote add origin https://github.com/seu-usuario/trabalh-ai.git
git branch -M main

# 4. Enviar para GitHub
git push -u origin main
```

Se tudo deu certo, você verá mensagens verdes sem erros.

Verifique em https://github.com/seu-usuario/trabalh-ai - seus arquivos devem estar lá!

---

## ✅ FASE 4: Conectar Netlify (5 minutos)

### 4.1 Criar conta no Netlify

1. Acesse https://app.netlify.com
2. Clique em **"Sign up"**
3. Selecione **"Continue with GitHub"**
4. Autorize ("Authorize netlify-prod")

### 4.2 Importar seu repositório

Após fazer login:

1. Clique em **"Add new site"**
2. Selecione **"Import an existing project"**
3. Clique em **"GitHub"**
4. Procure por `trabalh-ai` (ou seu repositório)
5. Clique em **"Open"**

Você será levado para configuração de build.

### 4.3 Configurar build settings

Você verá um formulário. **Deixe assim:**

| Campo | Valor |
|-------|-------|
| **Base directory** | (deixe em branco) |
| **Build command** | (deixe em branco) |
| **Publish directory** | `.` (um ponto) |
| **Functions directory** | `functions` |

Clique em **"Deploy site"**

⏳ Aguarde o deploy terminar. Você verá uma URL como:
```
https://trabalh-ai-abc123.netlify.app
```

---

## ✅ FASE 5: Adicionar API Key (IMPORTANTE!) (3 minutos)

Seu site está online, mas ainda não funciona porque falta a segurança.

### 5.1 Ir para Site Settings

No dashboard do Netlify:

1. Clique em **"Site settings"**
2. No menu esquerdo, procure por **"Build & Deploy"**
3. Clique em **"Build & Deploy"**
4. Procure por **"Environment"** ou **"Environment variables"**

### 5.2 Adicionar a variável

Clique em **"Edit variables"** ou **"Add variable"**

Preencha:
- **Key**: `JSONBIN_API_KEY`
- **Value**: Cole sua API Key do JSONBin (a que começa com `$2b$10$`)

Clique em **"Save"** ou **"Add"**

### 5.3 Fazer novo deploy

Seu site precisa ser feito o deploy novamente para usar a variável.

1. Volte para **"Deployments"** ou **"Deploys"**
2. Procure pelo último deploy (estará no topo)
3. Clique nele
4. Procure por um botão **"Trigger deploy"** ou **"Redeploy"**
5. Clique em **"Deploy site"**

Aguarde alguns segundos...

### 5.4 Pronto! ✅

Seu site agora está **100% funcional e seguro**!

---

## 🧪 TESTAR SEU SITE

### 6.1 Acessar o site

Abra sua URL (ex: `https://trabalh-ai-abc123.netlify.app`)

### 6.2 Deixar um comentário

1. Digite seu nome
2. Digite uma mensagem
3. Clique em "ENVIAR"
4. Você deve ver:
   - ✅ Botão muda para "ENVIANDO..."
   - ✅ Depois para "ENVIADO!" (em verde)
   - ✅ Mensagem aparece no carrossel

### 6.3 Testar persistência

1. Atualize a página (F5 ou Ctrl+R)
2. Seu comentário deve continuar lá
3. Se continuar, significa que está salvando no JSONBin! 🎉

---

## 🎓 Agora que você tem um site publicado

### Você pode:

✅ Compartilhar a URL com amigos
✅ Adicionar mais comentários
✅ Editar o HTML e fazer novo deploy
✅ Mudar o domínio para um próprio (pago)
✅ Adicionar mais features

### Para fazer mudanças:

1. Edite um arquivo (ex: `index.html`)
2. Salve
3. Terminal:
```bash
git add .
git commit -m "Descrição da mudança"
git push
```
4. Netlify faz deploy automaticamente! 🚀

---

## 🐛 Solução de Problemas Rápida

### "Site diz que não consegue conectar à API"

**Solução**: A API Key não está configurada.
- Volte ao Passo 5.2
- Verifique se a chave está corrigida
- Faça um novo deploy (Passo 5.3)

### "Console mostra erro 401"

**Solução**: API Key incorreta ou incompleta.
- Copie novamente a chave completa do JSONBin
- Verifique se começa com `$2b$10$`
- Sem espaços antes/depois

### "Nada acontece quando clico em ENVIAR"

1. Abra Console (F12 → Console)
2. Procure por erros em vermelho
3. Copie a mensagem de erro
4. Consulte os logs do Netlify

### "Mensagens não persistem"

1. Verifique se conseguiu enviar (botão deve ficar verde)
2. Abra https://jsonbin.io
3. Faça login
4. Clique no seu Bin
5. Verifique se dados aparecem lá

---

## 📝 Checklist Final

Marque cada item conforme completa:

- [ ] Criei pasta `trabalh-ai` na máquina
- [ ] Copiei todos os arquivos
- [ ] Criei pasta `functions` dentro
- [ ] Inicializei Git (`git init`)
- [ ] Criei repositório no GitHub
- [ ] Enviei arquivos para GitHub (`git push`)
- [ ] Conectei GitHub ao Netlify
- [ ] Configurei Build Settings
- [ ] Adicionei JSONBIN_API_KEY nas variáveis
- [ ] Fiz novo deploy
- [ ] Testei deixando um comentário
- [ ] Atualizei página e comentário persistiu
- [ ] Compartilhei URL com alguém!

---

## 🎉 PARABÉNS!

Você criou, versionou e publicou um projeto full-stack! 

Isso que aprendeu é usado por desenvolvedoras profissionais todo dia. Você já está no caminho certo! 🚀

**Próximas ideias de aprendizado:**
- Adicionar validação de emails
- Criar página de admin
- Adicionar mais dados (like, replies)
- Mudar para um banco de dados real
- Adicionar autenticação

---

**Precisa de ajuda?**
- Leia o `README.md` de novo
- Verifique os logs do Netlify
- Abra a Console do navegador (F12)
- Releia este guia com calma

Você consegue! 💪
