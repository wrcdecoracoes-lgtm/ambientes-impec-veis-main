# 📤 Como Subir seu Projeto para o GitHub

## 📋 Pré-requisitos

### 1. Instalar Git (se ainda não tiver)

1. **Baixar Git:**
   - Acesse: https://git-scm.com/download/win
   - Baixe a versão para Windows
   - Instale o programa (Next, Next, Finish)

2. **Reiniciar o terminal/PowerShell** após a instalação

3. **Configurar Git (primeira vez apenas):**
   ```bash
   git config --global user.name "Seu Nome"
   git config --global user.email "seu.email@exemplo.com"
   ```

---

## 🚀 Passo a Passo

### Passo 1: Criar repositório no GitHub

1. **Acesse o GitHub:**
   - Vá para: https://github.com
   - Faça login (ou crie uma conta se não tiver)

2. **Criar novo repositório:**
   - Clique no botão **"+"** no canto superior direito
   - Escolha **"New repository"**
   - Preencha:
     - **Repository name:** `ambientes-impecaveis` (ou outro nome)
     - **Description:** (opcional) "Site Elite Acabamentos"
     - **Public** ou **Private** (escolha)
     - ⚠️ **NÃO marque** "Initialize with README" (já temos arquivos)
   - Clique em **"Create repository"**

3. **Copie a URL do repositório:**
   - Aparecerá algo como: `https://github.com/seu-usuario/ambientes-impecaveis.git`
   - **Copie essa URL!**

---

### Passo 2: Inicializar Git no projeto (se ainda não tiver)

Abra o PowerShell na pasta do projeto e execute:

```powershell
# Navegar para a pasta do projeto
cd "C:\Users\Jhow\Desktop\ambientes-impec-veis-main"

# Inicializar repositório Git (se ainda não tiver)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Primeiro commit: Site Elite Acabamentos"
```

---

### Passo 3: Conectar com o GitHub e enviar

```powershell
# Adicionar o repositório remoto do GitHub
# SUBSTITUA pela URL que você copiou no Passo 1
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# Verificar se foi adicionado corretamente
git remote -v

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

**Nota:** Na primeira vez, o GitHub pode pedir autenticação:
- Se pedir usuário/senha, use um **Personal Access Token** (veja instruções abaixo)
- Ou use o **GitHub Desktop** (mais fácil para iniciantes)

---

## 🔐 Autenticação no GitHub

O GitHub não aceita mais senhas normais. Você precisa de um **Personal Access Token**:

### Criar Personal Access Token:

1. **GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)**
2. Clique em **"Generate new token"**
3. Dê um nome: `Meu Token`
4. Marque: **repo** (todos os privilégios)
5. Clique em **"Generate token"**
6. **COPIE O TOKEN** (você só verá uma vez!)

### Usar o Token:

Quando pedir senha, **cole o token** (não use sua senha do GitHub)

---

## 🎯 Alternativa Mais Fácil: GitHub Desktop

Se os comandos acima forem complicados, use o **GitHub Desktop**:

1. **Baixar GitHub Desktop:**
   - https://desktop.github.com/
   - Instale o programa

2. **No GitHub Desktop:**
   - File → Add Local Repository
   - Selecione a pasta: `C:\Users\Jhow\Desktop\ambientes-impec-veis-main`
   - Se pedir, inicialize o repositório
   - Faça o commit inicial
   - Publish repository
   - Escolha nome, descrição e se é público/privado
   - Clique em "Publish repository"

**Pronto!** Seu código estará no GitHub! 🎉

---

## 📝 Comandos Úteis (Após o primeiro upload)

```bash
# Ver status dos arquivos
git status

# Adicionar arquivos modificados
git add .

# Fazer commit
git commit -m "Descrição das alterações"

# Enviar para o GitHub
git push

# Ver histórico de commits
git log
```

---

## ❓ Problemas Comuns

### "Git não é reconhecido"
→ Instale o Git: https://git-scm.com/download/win

### "remote origin already exists"
→ Use: `git remote set-url origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git`

### "Authentication failed"
→ Use um Personal Access Token (veja instruções acima)

### "Failed to push"
→ Verifique se o repositório no GitHub foi criado corretamente

---

## 💡 Dica

Se for a primeira vez usando Git, recomendo usar o **GitHub Desktop** - é muito mais fácil e visual!
