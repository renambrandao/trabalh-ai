# 🎬 O Arquivo de Vídeo - O que fazer?

## ❓ Por que NÃO colocar o vídeo no GitHub?

### 1. **Tamanho**
- Vídeos MP4 são muito pesados (geralmente 50 MB - 500 MB+)
- GitHub tem limite de 100 MB por arquivo
- Seu repositório fica lento

### 2. **Não é necessário**
- O vídeo não muda (é estático)
- GitHub é para código, não para mídia

### 3. **Custo e performance**
- Carregar vídeo do GitHub é lento
- Bandeja limitada

---

## ✅ Soluções - Como servir o vídeo

Você tem 3 opções:

---

## OPÇÃO 1: Colocar na pasta do Netlify (RECOMENDADO)

### Como funciona:
1. Você coloca o vídeo na pasta `trabalh-ai/`
2. Não precisa fazer commit do vídeo no GitHub
3. Netlify publica o vídeo junto com o site
4. O arquivo fica acessível via URL

### Passo-a-passo:

#### Passo 1: Adicionar ao .gitignore
Edite o arquivo `.gitignore` e adicione:

```
# Vídeos (não enviar para GitHub)
*.mp4
*.mov
*.avi
*.webm
```

#### Passo 2: Criar pasta public (opcional)
Se quiser organizar melhor, crie uma pasta `public/`:

```
trabalh-ai/
├── index.html
├── netlify.toml
├── .gitignore
├── functions/
│   └── messages.js
└── public/
    └── trabalh-ai.mp4  ← Coloque o vídeo aqui
```

#### Passo 3: Atualizar o caminho no HTML
No `index.html`, procure por esta linha:

```html
<source src="trabalh-ai.mp4" type="video/mp4">
```

Se colocou em `public/`, mude para:

```html
<source src="public/trabalh-ai.mp4" type="video/mp4">
```

#### Passo 4: Deploy
Quando fazer deploy no Netlify:
1. O vídeo que está em `trabalh-ai/` (local) será publicado
2. Mas NÃO será commitado no GitHub
3. Seu site vai funcionar normal

### Vantagens:
✅ Simples
✅ Vídeo fica junto com o site
✅ Não toma espaço no GitHub
✅ Funciona imediatamente

### Desvantagens:
❌ Se excluir o vídeo local, desaparece do site
❌ Cada pessoa precisa baixar o vídeo quando clona

---

## OPÇÃO 2: Usar um serviço de hospedagem de vídeo

Existem serviços específicos para isto:

### A. **YouTube** (Grátis, melhor para vídeos)
1. Faça upload do vídeo no YouTube
2. Deixe como "Não listado" (privado para quem tem link)
3. Copie a URL do vídeo
4. Incorpore no HTML:

```html
<iframe 
  src="https://www.youtube.com/embed/ID_DO_VIDEO" 
  width="100%" 
  height="600">
</iframe>
```

### B. **Cloudinary** (Grátis até 25 GB)
1. Crie conta em https://cloudinary.com
2. Faça upload do vídeo
3. Copie a URL
4. Use no HTML

### C. **AWS S3** (Pago, mas barato)
1. Hospede o vídeo no S3
2. Configure acesso público
3. Use a URL do S3

### Vantagens:
✅ Vídeo hospedado em servidor dedicado
✅ Melhor performance
✅ Não toma espaço em lugar nenhum
✅ Fácil atualizar vídeo depois

### Desvantagens:
❌ Mais passos para configurar
❌ Alguns serviços têm limite gratuito

---

## OPÇÃO 3: Usar Git LFS (Large File Storage)

Git LFS é uma extensão do Git para arquivos grandes.

### Como funciona:
1. Você instala Git LFS
2. Rastreia arquivos `.mp4` com LFS
3. GitHub armazena arquivo em servidor separado
4. Tudo funciona transparente

### Passos:
```bash
# 1. Instalar Git LFS
# (depende do seu SO)

# 2. Rastrear arquivos MP4
git lfs track "*.mp4"

# 3. Adicionar e fazer commit normal
git add trabalh-ai.mp4
git commit -m "Adicionar vídeo"
git push

# Pronto! GitHub cuida do resto
```

### Vantagens:
✅ Funciona igual a arquivo normal
✅ GitHub cuida da hospedagem
✅ Você não precisa mudar o código

### Desvantagens:
❌ Requer instalação de Git LFS
❌ GitHub oferece 1 GB grátis (depois é pago)
❌ Um pouco mais complexo

---

## 🎯 RECOMENDAÇÃO FINAL

### Para seu caso (projeto pequeno):

**Use OPÇÃO 1** (colocar na pasta do Netlify + .gitignore)

**Razão:**
- Você tem 1 vídeo único
- Não é muito grande (provavelmente)
- Simples de fazer
- Funciona imediatamente
- Zero configuração extra

---

## 📝 Instruções de Opção 1 (Recomendada)

### Resumo rápido:

1. **Abra `.gitignore`** e adicione:
```
*.mp4
```

2. **Copie o vídeo** `trabalh-ai.mp4` para a pasta `trabalh-ai/`

3. **No terminal**:
```bash
git add .
git commit -m "Preparar para deploy"
git push
```

4. **No Netlify**:
- Quando fizer deploy, selecione a pasta `trabalh-ai/`
- Netlify vai publicar tudo (menos o .mp4 que está no .gitignore)
- Mas o arquivo local será publicado mesmo assim

5. **Pronto!** Seu site estará online com o vídeo

---

## 🧠 Entender o fluxo

```
Seu computador (local):
├── index.html      ← vai para GitHub
├── messages.js     ← vai para GitHub
├── .gitignore      ← vai para GitHub (ignora *.mp4)
├── netlify.toml    ← vai para GitHub
└── trabalh-ai.mp4  ← NÃO vai para GitHub (por causa do .gitignore)

Netlify recebe:
├── Código do GitHub (sem vídeo)
├── Arquivo local trabalh-ai.mp4 (ao fazer deploy)
└── Publica tudo junto no site final
```

---

## ⚠️ Casos especiais

### "E se eu quiser atualizar o vídeo depois?"

**Opção 1:**
1. Substitua o arquivo local `trabalh-ai.mp4`
2. Faça novo deploy no Netlify
3. Pronto!

**Opção 2:**
1. Use YouTube/Cloudinary
2. Mude a URL no HTML
3. Pronto!

### "E se quiser diferentes versões de vídeo?"

Use a **Opção 2** (YouTube/Cloudinary):
1. Upload diferentes versões
2. Escolha qual exibir no HTML
3. Mude facilmente depois

---

## 🎬 Resumo das 3 opções

| Opção | Setup | Peso | Atualizações | Grátis? | Recomendado |
|-------|-------|------|-------------|---------|------------|
| **Pasta local + .gitignore** | ⭐ Fácil | Local | Fácil | ✅ Sim | ✅✅✅ |
| **YouTube/Cloudinary** | ⭐⭐ Médio | Nenhum | Fácil | ✅ Sim | ✅✅ |
| **Git LFS** | ⭐⭐⭐ Difícil | Nenhum | Fácil | ⚠️ Limitado | ✅ |

---

## 🚀 Implementar (Opção 1)

### Passo 1: Editar .gitignore

Abra `.gitignore` e adicione no final:

```
# Vídeos
*.mp4
*.mov
*.avi
*.webm

# Outros arquivos a ignorar
node_modules/
.env
```

### Passo 2: Organizar arquivos

Coloque assim:

```
trabalh-ai/
├── index.html
├── netlify.toml
├── .gitignore        ← com *.mp4
├── README.md
├── trabalh-ai.mp4    ← o vídeo aqui!
└── functions/
    └── messages.js
```

### Passo 3: Fazer commit

```bash
cd trabalh-ai
git add .
git commit -m "Adicionar configuração final"
git push
```

### Passo 4: Deploy no Netlify

1. Vá em Netlify
2. Clique em "Trigger deploy" → "Deploy site"
3. Pronto!

O Netlify vai:
1. Baixar o código do GitHub (sem o vídeo)
2. Ver que existe `trabalh-ai.mp4` localmente
3. Publicar tudo junto

---

## ✅ Teste

Depois de publicado:
1. Acesse seu site
2. O vídeo deve estar carregando
3. Pronto! 🎉

---

## 📞 Dúvidas comuns

### P: "E se o vídeo é muito grande?"
**R**: 
- Se > 100 MB: use YouTube ou Cloudinary
- Se < 100 MB: coloque na pasta local

### P: "Netlify tem limite de tamanho?"
**R**: 
- Limite grátis: até 300 minutos de bandwidth por mês
- Vídeo de 50 MB pode ser assistido ~500 vezes por mês
- Para a maioria dos casos, é suficiente

### P: "Como coloco vídeo a partir de URL?"
**R**: 
No HTML:
```html
<source src="https://exemplo.com/video.mp4" type="video/mp4">
```

### P: "Posso comprimir o vídeo?"
**R**: 
Sim! Ferramentas como:
- HandBrake (desktop)
- FFmpeg (linha de comando)
- Online: https://www.cloudconvert.com

Reduza de 200 MB para 50 MB sem perder qualidade.

---

## 🎯 Sua ação hoje

1. **Edite `.gitignore`** e adicione `*.mp4`
2. **Copie o vídeo** para a pasta `trabalh-ai/`
3. **Siga o passo-a-passo normal** no Netlify
4. **Pronto!** Seu site terá vídeo

---

**Conclusão:**

✅ NÃO coloque vídeo no GitHub
✅ Coloque vídeo na pasta local
✅ Configure `.gitignore` para ignorar
✅ Netlify publica tudo automaticamente

Você consegue! 🚀
