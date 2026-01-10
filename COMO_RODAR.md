# Como Ver a Página na Internet

## 📍 Opção 1: Rodar Localmente (no seu computador)

### Passo 1: Instalar Node.js (se ainda não tiver)
1. Acesse: https://nodejs.org/
2. Baixe a versão **LTS** (Long Term Support)
3. Instale o arquivo baixado
4. Reinicie o terminal/PowerShell

### Passo 2: Abrir o terminal na pasta do projeto
- Navegue até a pasta: `C:\Users\Jhow\Desktop\ambientes-impec-veis-main`
- Ou clique com botão direito na pasta e escolha "Abrir no Terminal"

### Passo 3: Instalar as dependências
```bash
npm install
```

### Passo 4: Rodar o servidor de desenvolvimento
```bash
npm run dev
```

### Passo 5: Abrir no navegador
- O terminal mostrará uma URL como: `http://localhost:8080`
- Abra essa URL no seu navegador (Chrome, Edge, Firefox, etc.)

---

## 🌐 Opção 2: Publicar na Internet (Deploy)

Para que outras pessoas vejam sua página na internet, você precisa fazer o **deploy**. Aqui estão as opções mais fáceis:

### A) Vercel (Recomendado - Grátis e Fácil)

1. **Criar conta na Vercel:**
   - Acesse: https://vercel.com
   - Clique em "Sign Up" e crie uma conta (pode usar GitHub)

2. **Instalar Vercel CLI (opcional):**
   ```bash
   npm install -g vercel
   ```

3. **Fazer deploy:**
   - Faça upload do projeto para o GitHub (se ainda não tiver)
   - Na Vercel, clique em "Add New Project"
   - Importe seu repositório do GitHub
   - Clique em "Deploy"
   - Pronto! Você terá uma URL como: `https://seu-projeto.vercel.app`

### B) Netlify (Também Grátis)

1. **Criar conta:**
   - Acesse: https://www.netlify.com
   - Crie uma conta

2. **Fazer deploy:**
   - Arraste e solte a pasta `dist` (após rodar `npm run build`)
   - Ou conecte com GitHub para deploy automático

### C) GitHub Pages

1. **Gerar build:**
   ```bash
   npm run build
   ```

2. **Publicar:**
   - Faça upload da pasta `dist` para o GitHub Pages
   - Ou use o GitHub Actions para deploy automático

---

## 🚀 Passos Rápidos (Resumo)

### Para ver localmente:
```bash
# 1. Instalar Node.js (se não tiver)
# 2. No terminal, na pasta do projeto:
npm install
npm run dev
# 3. Abrir http://localhost:8080 no navegador
```

### Para publicar na internet:
```bash
# 1. Gerar build de produção:
npm run build

# 2. Fazer deploy na Vercel/Netlify
# (Seguir instruções acima)
```

---

## ❓ Precisa de Ajuda?

- **Node.js não instalado?** → https://nodejs.org/
- **Erro ao rodar?** → Verifique se está na pasta correta do projeto
- **Quer ajuda com deploy?** → Vercel é a opção mais fácil e rápida!
