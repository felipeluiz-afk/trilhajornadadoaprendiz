# 🚀 Guia de Deploy - GitHub Pages

Este guia fornece instruções passo a passo para hospedar o site no GitHub Pages.

## 📋 Pré-requisitos

- Conta no GitHub
- Arquivos do projeto baixados
- Navegador web atualizado

## 🎯 Opção 1: Deploy Rápido (Interface Web)

### Passo 1: Criar Repositório
1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"New"** (verde) ou **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Configure o repositório:
   - **Repository name:** `jovem-aprendiz-formacoes` (ou nome de sua escolha)
   - **Description:** `Site com formações complementares para Jovem Aprendiz GERAR`
   - **Visibility:** Public ✅
   - **Initialize:** Deixe desmarcado (não adicione README, .gitignore, etc.)
5. Clique em **"Create repository"**

### Passo 2: Upload dos Arquivos
1. Na página do repositório recém-criado, clique em **"uploading an existing file"**
2. **Arraste todos os arquivos** da pasta `jovem-aprendiz-gerar` para a área de upload
3. Aguarde o upload completar (todos os arquivos devem aparecer na lista)
4. Na seção **"Commit changes"**:
   - **Commit message:** `Adicionar site de formações GERAR`
   - **Description:** `Site responsivo com trilhas de formação para jovens`
5. Clique em **"Commit changes"**

### Passo 3: Ativar GitHub Pages
1. No repositório, clique na aba **"Settings"**
2. Role para baixo até encontrar a seção **"Pages"** no menu lateral
3. Em **"Source"**, selecione **"Deploy from a branch"**
4. Em **"Branch"**, selecione **"main"**
5. Em **"Folder"**, deixe **"/ (root)"**
6. Clique em **"Save"**

### Passo 4: Acessar o Site
1. Aguarde 2-5 minutos para o deploy completar
2. Volte à seção **"Pages"** nas configurações
3. Você verá uma mensagem: **"Your site is published at https://seuusuario.github.io/jovem-aprendiz-formacoes"**
4. Clique no link para acessar seu site!

## 🔧 Opção 2: Deploy com Git (Linha de Comando)

### Pré-requisitos Adicionais
- Git instalado no computador
- Conhecimento básico de linha de comando

### Passos
```bash
# 1. Clone o repositório vazio
git clone https://github.com/seuusuario/jovem-aprendiz-formacoes.git
cd jovem-aprendiz-formacoes

# 2. Copie os arquivos do projeto
cp -r /caminho/para/jovem-aprendiz-gerar/* .

# 3. Adicione os arquivos ao Git
git add .

# 4. Faça o commit
git commit -m "Adicionar site de formações GERAR"

# 5. Envie para o GitHub
git push origin main

# 6. Ative o GitHub Pages nas configurações do repositório
```

## 🌐 URLs de Exemplo

Após o deploy, seu site estará disponível em:
- **Formato:** `https://seuusuario.github.io/nome-do-repositorio`
- **Exemplo:** `https://gerar-org.github.io/jovem-aprendiz-formacoes`

## ✅ Verificação do Deploy

### Checklist Pós-Deploy
- [ ] Site carrega corretamente
- [ ] Todas as seções estão visíveis
- [ ] Links dos cursos funcionam
- [ ] Design responsivo funciona no mobile
- [ ] Cores da identidade GERAR estão corretas
- [ ] Navegação suave entre seções funciona

### Teste em Dispositivos
- [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Tablet (iPad, Android)
- [ ] Mobile (iPhone, Android)

## 🔄 Atualizações Futuras

### Para Atualizar o Site:
1. Edite os arquivos localmente
2. Faça upload dos arquivos alterados no GitHub
3. Ou use Git para commit e push das mudanças
4. O GitHub Pages atualizará automaticamente em 2-5 minutos

### Arquivos Mais Comuns para Editar:
- **`index.html`** - Conteúdo e estrutura
- **`css/styles.css`** - Estilos e cores
- **`js/main.js`** - Funcionalidades interativas

## 🎨 Personalização Rápida

### Alterar Cores da Marca
Edite o arquivo `css/styles.css`, seção `:root`:
```css
:root {
    --blue-700: #SUA_COR_PRIMARIA;
    --aqua-500: #SUA_COR_SECUNDARIA;
    --pink-600: #SUA_COR_DESTAQUE;
    --orange-400: #SUA_COR_ACENTO;
}
```

### Adicionar Novo Curso
Edite o arquivo `index.html`, adicione na trilha desejada:
```html
<li class="curso-item">
    <div class="curso-info">
        <strong class="curso-name">Nome do Novo Curso</strong>
        <small class="curso-provider">Instituição Responsável</small>
    </div>
    <a href="URL_DO_CURSO" class="curso-link" target="_blank" rel="noopener">
        Acessar curso →
    </a>
</li>
```

## 🆘 Solução de Problemas

### Site não carrega
- Verifique se o GitHub Pages está ativado
- Aguarde até 10 minutos para propagação
- Verifique se o arquivo `index.html` está na raiz

### Estilos não aparecem
- Verifique se o arquivo `css/styles.css` foi enviado
- Verifique se não há erros no CSS
- Limpe o cache do navegador (Ctrl+F5)

### Links não funcionam
- Verifique se as URLs dos cursos estão corretas
- Teste os links individualmente
- Verifique se há caracteres especiais nas URLs

### Design quebrado no mobile
- Teste em diferentes dispositivos
- Use as ferramentas de desenvolvedor do navegador
- Verifique se a meta tag viewport está presente

## 📞 Suporte

### Recursos Úteis
- [Documentação GitHub Pages](https://docs.github.com/pages)
- [Guia Git Básico](https://git-scm.com/docs/gittutorial)
- [Validador HTML](https://validator.w3.org/)
- [Teste de Responsividade](https://responsivedesignchecker.com/)

### Comunidade
- [GitHub Community](https://github.community/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/github-pages)

---

**🎯 Sucesso no seu deploy!** 

Seu site estará ajudando jovens a encontrarem formações complementares para o programa Jovem Aprendiz da GERAR.

