# 🚀 Instruções para Subir para o GitHub

## ✅ Passo 1: Configurar Git (se ainda não fez)

Execute estes comandos no PowerShell (substitua pelos seus dados):

```powershell
$env:PATH += ";C:\Program Files\Git\cmd"

# Configure seu nome e email
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

**OU** configure apenas para este repositório (sem --global):

```powershell
$env:PATH += ";C:\Program Files\Git\cmd"
cd "C:\Users\Jhow\Desktop\ambientes-impec-veis-main"

git config user.name "Seu Nome"
git config user.email "seu.email@exemplo.com"
```

---

## ✅ Passo 2: Fazer o Commit (depois de configurar)

```powershell
$env:PATH += ";C:\Program Files\Git\cmd"
cd "C:\Users\Jhow\Desktop\ambientes-impec-veis-main"

git commit -m "Primeiro commit: Site WR Instaladora"
```

---

## ✅ Passo 3: Criar Repositório no GitHub

1. **Acesse:** https://github.com
2. **Faça login** (ou crie uma conta)
3. **Clique no "+"** (canto superior direito) → **"New repository"**
4. **Preencha:**
   - **Repository name:** `wr-instaladora` (ou outro nome)
   - **Description:** "Site WR Instaladora - Pisos e Acabamentos"
   - Escolha **Public** ou **Private**
   - ⚠️ **NÃO marque** "Initialize with README"
   - ⚠️ **NÃO marque** "Add .gitignore"
   - ⚠️ **NÃO marque** "Choose a license"
5. **Clique em "Create repository"**
6. **COPIE A URL** que aparecer (algo como: `https://github.com/seu-usuario/wr-instaladora.git`)

---

## ✅ Passo 4: Conectar e Enviar para o GitHub

Execute estes comandos (SUBSTITUA pela URL que você copiou):

```powershell
$env:PATH += ";C:\Program Files\Git\cmd"
cd "C:\Users\Jhow\Desktop\ambientes-impec-veis-main"

# Conectar com o GitHub
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# Verificar
git remote -v

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

---

## 🔐 Se pedir autenticação:

O GitHub não aceita mais senhas. Você precisa de um **Personal Access Token**:

### Como criar o token:

1. GitHub → **Settings** (no seu perfil)
2. **Developer settings** (no menu lateral)
3. **Personal access tokens** → **Tokens (classic)**
4. **Generate new token** → **Generate new token (classic)**
5. Dê um nome: `Meu Token`
6. Marque: **repo** (todos os privilégios)
7. Clique em **Generate token**
8. **COPIE O TOKEN** (você só verá uma vez!)

### Usar o token:

Quando pedir usuário: digite seu **usuário do GitHub**
Quando pedir senha: **cole o token** (não use sua senha normal)

---

## 🎯 Alternativa Mais Fácil: GitHub Desktop

Se preferir, use o **GitHub Desktop**:

1. **Baixe:** https://desktop.github.com/
2. **Instale** e abra
3. **File** → **Add Local Repository**
4. Selecione: `C:\Users\Jhow\Desktop\ambientes-impec-veis-main`
5. Se pedir, configure nome/email
6. **Publish repository**
7. Escolha nome, descrição, público/privado
8. **Publish**

**Pronto!** 🎉

---

## 📝 Resumo dos Comandos (tudo junto)

```powershell
# 1. Configurar Git (uma vez apenas)
$env:PATH += ";C:\Program Files\Git\cmd"
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"

# 2. Navegar para a pasta
cd "C:\Users\Jhow\Desktop\ambientes-impec-veis-main"

# 3. Fazer commit (já foi feito o init e add)
git commit -m "Primeiro commit: Site WR Instaladora"

# 4. Conectar com GitHub (SUBSTITUA pela sua URL)
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# 5. Enviar
git branch -M main
git push -u origin main
```

---

## ❓ Problemas?

- **"remote origin already exists"** → `git remote set-url origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git`
- **"Authentication failed"** → Use Personal Access Token (veja acima)
- **"Permission denied"** → Verifique se o repositório existe no GitHub
