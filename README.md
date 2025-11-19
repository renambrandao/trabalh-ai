# 🎬 trabalh.ai - Explorando o Trabalho da IA através do Cinema

Um projeto inovador que demonstra como inteligência artificial pode colaborar na criação de conteúdo audiovisual. Este repositório contém uma página web interativa que exibe um curta-metragem sobre "O Trabalho da IA" com um sistema comunitário de comentários.

🌐 **[Veja o projeto ao vivo →](https://trabalh-ai.netlify.app/)**

---

## 📖 O Projeto

**trabalh.ai** é um experimento que demonstra como inteligência artificial colabora em cada etapa da produção audiovisual. O resultado é um curta de 2 minutos que integra múltiplas "vozes" (AIs):

- 📹 **Gravação de tela** (screencast) 
- 🎥 **Vídeo IA de 5 segundos** (meio)
- 🎥 **Vídeo IA de 8 segundos** (final)
- 🎵 **Trilha sonora gerada por IA** ⭐
- 🎨 **Página web interativa** com comentários

### As 7 Janelas do MetaPrompt

O processo segue uma jornada poética por 7 "janelas" (interfaces IA), cada uma contribuindo sua parte:

```
🪟 JANELA 1: Roteiro
   └─ IA estrutura as cenas, define ordem, marca pontos de inserção
   
🪟 JANELA 2: Vídeo do Meio (5s)
   └─ IA gera o vídeo inicial que entra na metade da gravação de tela
   
🪟 JANELA 3: Vídeo Final (8s)
   └─ IA gera o vídeo de encerramento com conclusão visual
   
🪟 JANELA 4: Trilha Sonora ⭐ NOVO
   └─ IA produz trilha que termina ANTES dos 8s finais
      (deixa espaço para áudio do vídeo de encerramento)
   
🪟 JANELA 5: Montagem (Script)
   └─ IA orienta script que:
      • Recebe gravação de tela (Gravação de Tela YYYY-MM-DD)
      • Pergunta timestamps: quando termina parte 1? quando começa parte 2?
      • Calcula compressão necessária para exatamente 2 minutos
      • Insere: [Tela Parte 1] + [Vídeo 5s] + [Tela Parte 2] + [Trilha] + [Vídeo 8s]
      • Gera arquivo comprimido, leve e otimizado para web
   
🪟 JANELA 6: Interface Web
   └─ IA gera código HTML/CSS/JS com:
      • Vídeo em ⅔ superior (background sem controles tradicionais)
      • Campo de comentários à esquerda (⅓ inferior)
      • Carrossel tipográfico de comentários à direita (⅓ inferior)
   
🪟 JANELA 7: Publicação
   └─ IA indica caminho mais simples: GitHub + Netlify
      (arquivo .mp4 não entra no git, mas Netlify publica)
```

### O Fluxo Completo

```
mil.IA/                          (pasta do projeto)
│
├── 🪟 JANELA 1: roteiro.txt      (estrutura do curta)
│
├── 🪟 JANELA 2: video-5s-meio.mp4   (gerado por IA)
│
├── 🪟 JANELA 3: video-8s-final.mp4  (gerado por IA)
│
├── 🪟 JANELA 4: trilha-sonora.mp3   (gerado por IA) ⭐
│
├── 📹 Gravação de Tela 2025-11-13...   (gravado pelo humano)
│
├── 🪟 JANELA 5: script-montagem.sh  (IA orienta)
│      ↓ (executa montagem automática)
│
├── 🎬 trabalh-ai.mp4            (arquivo final comprimido)
│
├── 🪟 JANELA 6: index.html       (página web interativa)
│
└── 🪟 JANELA 7: GitHub + Netlify
       ↓
       🌐 https://trabalh-ai.netlify.app/
```

---

## 🎯 Funcionalidades

### Produção Audiovisual (7 Janelas)
- **Roteiro com IA**: Estrutura narrativa gerada
- **Vídeos Generativos**: 5s (meio) + 8s (final) criados por IA
- **Trilha Sonora IA**: Música sincronizada, termina antes do áudio final ⭐
- **Script de Montagem**: Compila tudo automaticamente em 2 minutos exatos
- **Otimização Automática**: Compressão e ajuste de timing automáticos

### Frontend Interativo
- **Vídeo em Background**: Ocupa 2/3 superior sem player tradicional
- **Sistema de Comentários**: Deixe impressões sobre o curta
- **Carrossel Dinâmico**: Animação tipográfica refinada dos comentários
- **Design Responsivo**: Desktop, tablet, mobile
- **Controle de Áudio**: Mutar/desmutar integrado

### Backend Seguro
- **API Segura**: Comentários salvos via JSONBin.io
- **Credenciais Protegidas**: API Key no servidor (Netlify Functions)
- **Persistência**: Comentários salvos permanentemente
- **Validação**: Prevenção de XSS e dados inválidos

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

Este projeto exemplifica **prompt engineering e colaboração humano-IA** em produção audiovisual.

### O Processo (7 Janelas)

O criador abre 7 "janelas" (ferramentas/prompts) em sequência:

1. **Janela 1 - Roteiro (IA estrutura)**
   - Entrada: "Quero um roteiro sobre o trabalho da IA"
   - Saída: Estrutura completa com cenas e timing

2. **Janela 2 - Vídeo Meio (IA gera)**
   - Entrada: "Gere um vídeo mostrando IA tomando forma"
   - Saída: Video 5 segundos

3. **Janela 3 - Vídeo Final (IA gera)**
   - Entrada: "Gere um vídeo de encerramento/conclusão"
   - Saída: Video 8 segundos

4. **Janela 4 - Trilha Sonora (IA compõe)** ⭐
   - Entrada: "Crie trilha com clima [X], duração ~1:52 (antes dos 8s finais)"
   - Saída: MP3 sincronizado

5. **Janela 5 - Montagem (IA guia)**
   - Entrada: "Montar curta com esses elementos em 2 minutos exatos"
   - Saída: Script que automatiza tudo

6. **Janela 6 - Interface (IA codifica)**
   - Entrada: "Crie página com vídeo ⅔ + comentários ⅓"
   - Saída: Código HTML/CSS/JS pronto

7. **Janela 7 - Publicação (IA indica)**
   - Entrada: "Como colocar isso no ar simplesmente?"
   - Saída: GitHub + Netlify (caminho mais direto)

### O Resultado

Cada "janela" contribui seu trabalho. O humano coordena. No final: um curta-metragem ao vivo com comunidade.

Este projeto demonstra que **IA não substitui criatividade** — amplifica.

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
