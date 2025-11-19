# 🎬 trabalh.ai - Explorando o Trabalho da IA através do Cinema

Um projeto inovador que demonstra como inteligência artificial pode colaborar na criação de conteúdo audiovisual. Este repositório contém uma página web interativa que exibe um curta-metragem sobre "O Trabalho da IA" com um sistema comunitário de comentários.

🌐 **[Veja o projeto ao vivo →](https://trabalh-ai.netlify.app/)**

---

## 📖 O Projeto

**trabalh.ai** é um experimento que nasceu de uma pergunta simples: "Como podemos usar IA para criar um curta-metragem sobre IA?"

O resultado é um curta de até 2 minutos que combina:
- 📹 **Gravações de tela** (screencast)
- 🤖 **Dois vídeos de 8 segundos gerados por IA** (middle e final)
- 🎨 **Uma página web interativa** com comentários da comunidade

### O Fluxo Criativo Original

```
1️⃣  IA gera o roteiro
    └─ Você pede um roteiro sobre o trabalho da IA

2️⃣  IA cria o vídeo do meio (8 segundos)
    └─ Primeiro vídeo generativo para entrar no meio do curta

3️⃣  IA cria o vídeo final (8 segundos)
    └─ Segundo vídeo generativo para encerrar o curta

4️⃣  Montagem do curta
    └─ Script CLI para macOS que compila tudo:
       • Gravação de tela (parte 1)
       • + Vídeo IA (8s)
       • + Gravação de tela (parte 2)
       • + Vídeo IA (8s)

5️⃣  Publicação interativa
    └─ Página web com:
       • Vídeo em ⅔ da tela (background)
       • Campo de comentários (esquerda)
       • Carrossel de comentários (direita)
```

---

## 🎯 Funcionalidades

### Frontend
- **Vídeo em Background**: O vídeo ocupa 2/3 da tela superior sem parecer um player tradicional
- **Sistema de Comentários**: Deixe suas impressões sobre o curta
- **Carrossel Dinâmico**: Visualize todos os comentários em uma animação bonita e tipograficamente refinada
- **Design Responsivo**: Funciona em desktop, tablet e celular
- **Controle de Áudio**: Botão para mutar/desmutar o vídeo

### Backend Seguro
- **API Segura**: Comentários salvos em nuvem via JSONBin.io
- **Sem Exposição de Credenciais**: API Key guardada no servidor (Netlify Functions)
- **Persistência de Dados**: Seus comentários ficam salvos permanentemente
- **Validação Automática**: Prevenção de XSS e dados malformados

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Design moderno com gradientes e animações
- **JavaScript vanilla** - Sem dependências, máxima compatibilidade

### Backend
- **Netlify Functions** - Computação sem servidor
- **Node.js** - Runtime para as funções
- **JSONBin.io** - Database em nuvem para comentários

### DevOps & Hospedagem
- **Git + GitHub** - Versionamento de código
- **Netlify** - Deploy automático
- **Environment Variables** - Gerenciamento seguro de credenciais

### 🌐 Projeto ao Vivo
**[https://trabalh-ai.netlify.app/](https://trabalh-ai.netlify.app/)** ← Acesse e deixe um comentário!

---

## 📁 Estrutura do Projeto

```
trabalh-ai/
├── 📄 index.html              # Página principal (frontend)
├── ⚙️ netlify.toml            # Configuração do Netlify
├── 📋 .gitignore              # Arquivos a ignorar
├── 📖 README.md               # Este arquivo
├── 📌 PROMPT-INICIAL.md       # O prompt original que inspirou tudo
├── 🎬 trabalh-ai.mp4          # Seu vídeo (não commitado no Git)
└── functions/
    └── 🔧 messages.js         # API backend (Netlify Function)
```

---

## 🌐 Acesse o Projeto

**Seu curta-metragem está ao vivo:**

🔗 **[https://trabalh-ai.netlify.app/](https://trabalh-ai.netlify.app/)**

---

## 🚀 Como Começar

### Pré-requisitos
- Conta no [GitHub](https://github.com)
- Conta no [Netlify](https://netlify.com)
- Conta no [JSONBin.io](https://jsonbin.io)
- Seu vídeo final (formato MP4)

### Instalação Rápida (5 minutos)

#### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/trabalh-ai.git
cd trabalh-ai
```

#### 2. Adicionar seu vídeo
Coloque seu arquivo `trabalh-ai.mp4` na pasta raiz:
```bash
# O arquivo é ignorado pelo Git (veja .gitignore)
# Mas será publicado pelo Netlify
```

#### 3. Conectar ao Netlify
```bash
# Via interface web:
# 1. Acesse https://app.netlify.com
# 2. Connect a GitHub repository
# 3. Selecione seu repositório
# 4. Deploy automático!
```

#### 4. Configurar Variáveis de Ambiente
No **Netlify Dashboard**:
1. Site settings → Build & Deploy → Environment
2. Adicione: `JSONBIN_API_KEY` (sua chave do JSONBin)
3. Trigger novo deploy

#### 5. Pronto! 🎉
Seu site estará em: `https://seu-site.netlify.app`

---

## 📚 Documentação Completa

- **[PASSO-A-PASSO-NETLIFY.md](PASSO-A-PASSO-NETLIFY.md)** - Guia visual detalhado com screenshots
- **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Solução de problemas comuns
- **[SOBRE-O-VIDEO.md](SOBRE-O-VIDEO.md)** - Como lidar com o arquivo de vídeo
- **[PROMPT-INICIAL.md](PROMPT-INICIAL.md)** - O prompt que originou este projeto

---

## 💡 Como o Projeto Foi Criado

Este projeto é um exemplo prático de **prompt engineering e colaboração humano-IA**.

### O Processo

**1. Ideação** 
```
Usuário: "Quero um roteiro para um curta metragem sobre o trabalho da IA"
IA: [Gera roteiro detalhado]
```

**2. Produção de Vídeos**
```
Usuário: [Executa o roteiro, grava screencast]
IA: [Gera 2 vídeos de 8 segundos via Runway, Midjourney, etc]
```

**3. Montagem**
```
Usuário: [Usa script CLI para montar tudo automaticamente]
Script: [Combina screencast + vídeos IA em um curta final]
```

**4. Publicação**
```
IA: [Gera código web para exibir o curta]
Usuário: [Deploy no Netlify]
Comunidade: [Assiste e deixa comentários]
```

### O Prompt Original

Veja [**PROMPT-INICIAL.md**](PROMPT-INICIAL.md) para entender exatamente como este projeto nasceu.

---

## 🎨 Características do Design

### Página Web
- **2/3 Superior**: Vídeo em background (sem player tradicional)
- **1/3 Inferior**: 
  - **Esquerda**: Campo para deixar comentários
  - **Direita**: Carrossel de comentários da comunidade

### Tipografia
- Font: Helvetica Neue / Arial (universal)
- Cores: Preto com branco e acentos
- Animações suaves e elegantes

### Responsividade
```
Desktop (1200px+)   → Layout lado a lado
Tablet (768-1199px) → Stack vertical
Mobile (<768px)     → Otimizado para toque
```

---

## 🔒 Segurança

### Proteção de Dados
✅ **API Key nunca exposta** - Guardada no Netlify (não no GitHub)
✅ **XSS Prevention** - HTML escapado automaticamente
✅ **Validação de Dados** - Servidor valida tamanho e formato
✅ **CORS Habilitado** - Apenas seu domínio pode acessar

### Boas Práticas
- Não commitamos `.env` ou secrets no GitHub
- Usamos `.gitignore` para excluir arquivos sensíveis
- Variáveis de ambiente via Netlify

---

## 📊 Estatísticas do Projeto

| Métrica | Valor |
|---------|-------|
| Tamanho do HTML | ~17 KB |
| Tamanho do Backend | ~5 KB |
| Dependências Frontend | 0 |
| Dependências Backend | 0 |
| Tempo de Carregamento | <2s (otimizado) |
| Suporte de Navegadores | 95%+ |

---

## 🚀 Deploy & CI/CD

### Fluxo de Deploy Automático

```
1. Você faz push no GitHub
        ↓
2. Netlify detecta mudança
        ↓
3. Build automático
        ↓
4. Deploy em produção
        ↓
5. Seu site atualiza instantaneamente
```

### Comandos Git
```bash
# Clonar
git clone https://github.com/seu-usuario/trabalh-ai.git

# Fazer mudanças
git add .
git commit -m "Descrição da mudança"
git push

# Pronto! Netlify faz o resto
```

---

## 🎓 O que Você Aprendeu

Neste projeto, você pratica:

✅ **Prompt Engineering** - Como comunicar com IA de forma efetiva
✅ **Desenvolvimento Web** - Frontend + Backend real
✅ **Segurança** - Proteger credenciais em aplicações web
✅ **DevOps** - Deployment, CI/CD, variáveis de ambiente
✅ **Git/GitHub** - Versionamento profissional
✅ **APIs REST** - Criar e consumir APIs
✅ **Comunicação Humano-IA** - Colaboração criativa

---

## 🔄 Melhorias Futuras

### Curto Prazo
- [ ] Adicionar busca de comentários
- [ ] Implementar likes/reactions
- [ ] Adicionar replies a comentários
- [ ] Sistema de moderação

### Médio Prazo
- [ ] Autenticação de usuários
- [ ] Perfis de comentaristas
- [ ] Histórico de versões do vídeo
- [ ] Analytics avançado

### Longo Prazo
- [ ] Multi-idiomas
- [ ] App mobile
- [ ] Gerador automático de curtas
- [ ] Marketplace de roteiros

---

## 📝 Como Contribuir

1. **Faça um fork** do repositório
2. **Crie uma branch** para sua feature (`git checkout -b feature/minhaIdeia`)
3. **Commit suas mudanças** (`git commit -m "Adicionar minhaIdeia"`)
4. **Push para a branch** (`git push origin feature/minhaIdeia`)
5. **Abra um Pull Request**

---

## 📞 Suporte

### Documentação
- [PASSO-A-PASSO-NETLIFY.md](PASSO-A-PASSO-NETLIFY.md) - Guia completo
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Problemas comuns
- [SOBRE-O-VIDEO.md](SOBRE-O-VIDEO.md) - Dúvidas sobre o vídeo

### Precisa de Ajuda?
1. Leia a documentação acima
2. Verifique os logs do Netlify
3. Abra uma issue no GitHub

---

## 📄 Licença

Este projeto é **open source** e livre para usar como quiser.

### Você pode:
✅ Usar o código
✅ Modificar
✅ Distribuir
✅ Usar comercialmente

### Peça-se apenas que:
🙏 Cite a fonte original (este repositório)
🙏 Compartilhe melhorias de volta com a comunidade

---

## 🎬 Créditos

### Criação
- **Conceito**: Exploração criativa de IA em produção audiovisual
- **Desenvolvimento**: Full-stack com HTML, CSS, JS, Node.js
- **Hospedagem**: Netlify + JSONBin.io

### Inspiração
Este projeto nasceu da pergunta: **"Como podemos usar IA para criar conteúdo sobre IA?"**

Resposta: **Com criatividade, prompt engineering e um toque de código!**

---

## 🌟 Compartilhe

Se este projeto te ajudou ou inspirou, considere:

⭐ Dar uma estrela no GitHub
🔄 Compartilhar com amigos
💬 Deixar um comentário no curta
📢 Mencionar nas redes sociais

---

## 📊 Estatísticas

![GitHub stars](https://img.shields.io/github/stars/seu-usuario/trabalh-ai?style=social)
![GitHub forks](https://img.shields.io/github/forks/seu-usuario/trabalh-ai?style=social)

---

## 🚀 Vamos começar?

```bash
git clone https://github.com/seu-usuario/trabalh-ai.git
cd trabalh-ai
# Seguir PASSO-A-PASSO-NETLIFY.md
```

**Seu curta-metragem estará online em menos de 20 minutos!**

---

**Feito com ❤️ e IA**

*trabalhando juntos, humano e máquina, para criar algo incrível.*

---

**Última atualização**: Novembro 2025  
**Versão**: 1.0.0  
**Status**: ✅ Em produção
