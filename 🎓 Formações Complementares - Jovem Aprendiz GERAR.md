# 🎓 Formações Complementares - Jovem Aprendiz GERAR

Site com formações gratuitas e certificadas para complementar o programa Jovem Aprendiz da GERAR, preparando jovens para o mercado de trabalho.

## 🌟 Características

- **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- **Identidade Visual GERAR** - Cores e tipografia alinhadas com a marca
- **3 Trilhas Organizadas** - Primeiro Emprego, Office + Dados, Vida & Carreira
- **15+ Cursos Gratuitos** - Links diretos para plataformas confiáveis
- **Performance Otimizada** - Carregamento rápido e experiência fluida
- **Acessibilidade** - Compatível com leitores de tela e navegação por teclado

## 🚀 Deploy no GitHub Pages

### Método 1: Interface Web do GitHub (Recomendado)

1. **Crie um novo repositório no GitHub**
   - Acesse [github.com](https://github.com) e faça login
   - Clique em "New repository"
   - Nome sugerido: `jovem-aprendiz-formacoes`
   - Marque como "Public"
   - Clique em "Create repository"

2. **Faça upload dos arquivos**
   - Na página do repositório, clique em "uploading an existing file"
   - Arraste todos os arquivos desta pasta para a área de upload
   - Escreva uma mensagem de commit: "Adicionar site de formações"
   - Clique em "Commit changes"

3. **Ative o GitHub Pages**
   - Vá para "Settings" do repositório
   - Role até a seção "Pages"
   - Em "Source", selecione "Deploy from a branch"
   - Escolha "main" branch e "/ (root)"
   - Clique em "Save"

4. **Acesse seu site**
   - O GitHub fornecerá uma URL como: `https://seuusuario.github.io/jovem-aprendiz-formacoes`
   - O site estará disponível em alguns minutos

### Método 2: Git Command Line

```bash
# Clone o repositório
git clone https://github.com/seuusuario/jovem-aprendiz-formacoes.git
cd jovem-aprendiz-formacoes

# Adicione os arquivos
cp -r /caminho/para/os/arquivos/* .

# Commit e push
git add .
git commit -m "Adicionar site de formações"
git push origin main

# Ative o GitHub Pages nas configurações do repositório
```

## 📁 Estrutura do Projeto

```
jovem-aprendiz-gerar/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos CSS organizados
├── js/
│   └── main.js             # JavaScript com funcionalidades
├── assets/
│   └── favicon.ico         # Ícone do site (adicionar)
├── images/                 # Imagens (se necessário)
├── README.md               # Este arquivo
└── .gitignore             # Arquivos a ignorar no Git
```

## 🎨 Paleta de Cores GERAR

- **Azul Marinho (Primária):** `#16226D`
- **Aqua/Verde-água:** `#0DB4A7`
- **Magenta/Rosa:** `#A92F7C`
- **Laranja:** `#E7A168`
- **Cinzas:** `#F6F7FB`, `#E2E6F0`, `#5A6A8E`

## 📚 Trilhas de Formação

### 🗣️ Primeiro Emprego (4-6 semanas)
**Foco:** Comunicação e Atendimento
- Comunicação Escrita (Fundação Bradesco)
- Redação Oficial (Escola Virtual do Governo)
- Gmail: Escrever E-mails (Google Workspace)
- Atendimento ao Cliente (SEBRAE)
- Comunicação Não Violenta (Escola Virtual do Governo)

### 💻 Office + Dados (6-8 semanas)
**Foco:** Ferramentas Digitais e Análise
- Excel Básico (Fundação Bradesco)
- Excel na Prática (Fundação Bradesco)
- Tarefas Básicas no Excel (Microsoft)
- Introdução ao Power BI (Microsoft Learn)
- Power BI no Serviço Público (Escola Virtual do Governo)

### 🚀 Vida & Carreira (Flexível)
**Foco:** Desenvolvimento Pessoal e Profissional
- Comunicação Assertiva no Trabalho (Na Prática)
- Fundamentos de Marketing Digital (Google Skillshop)
- 1MiO - Trilhas de Empregabilidade (UNICEF)
- PROPROFISSÃO (Instituto PROA)

## 🏢 Plataformas Parceiras

- **Fundação Bradesco** - Escola Virtual
- **Escola Virtual do Governo** - ENAP
- **Microsoft Learn** - Treinamentos oficiais
- **Google Skillshop** - Certificações gratuitas
- **SEBRAE** - Empreendedorismo
- **Escola do Trabalhador 4.0** - MTE + Microsoft
- **Instituto PROA** - Formações para jovens
- **UNICEF (1MiO)** - Empregabilidade
- **Na Prática** - Fundação Estudar

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com CSS Grid e Flexbox
- **JavaScript ES6+** - Interatividade e funcionalidades
- **Google Fonts** - Tipografia (Montserrat + Inter)
- **Responsive Design** - Mobile-first approach

## 📱 Funcionalidades

- ✅ Navegação suave entre seções
- ✅ Tracking de cliques em cursos
- ✅ Animações de entrada
- ✅ Header com efeito de scroll
- ✅ Acessibilidade completa
- ✅ Performance otimizada
- ✅ SEO-friendly

## 🔧 Personalização

### Alterar Cores
Edite as variáveis CSS no início do arquivo `css/styles.css`:

```css
:root {
    --blue-700: #16226D;    /* Cor principal */
    --aqua-500: #0DB4A7;    /* Cor de destaque */
    --pink-600: #A92F7C;    /* Cor de acento */
    --orange-400: #E7A168;  /* Cor secundária */
}
```

### Adicionar/Remover Cursos
Edite o arquivo `index.html` nas seções das trilhas:

```html
<li class="curso-item">
    <div class="curso-info">
        <strong class="curso-name">Nome do Curso</strong>
        <small class="curso-provider">Instituição</small>
    </div>
    <a href="URL_DO_CURSO" class="curso-link" target="_blank" rel="noopener">
        Acessar curso →
    </a>
</li>
```

### Adicionar Analytics
No arquivo `js/main.js`, descomente e configure:

```javascript
// Google Analytics
gtag('event', 'course_click', {
    course_name: courseName,
    provider: provider,
    trilha: trilha
});
```

## 📊 Analytics e Tracking

O site inclui tracking básico de cliques em cursos, armazenado no localStorage. Para analytics avançados:

1. Adicione Google Analytics ou similar
2. Configure eventos personalizados
3. Monitore as trilhas mais populares

## 🔒 SEO e Meta Tags

O site inclui:
- Meta tags otimizadas
- Open Graph para redes sociais
- Estrutura semântica HTML5
- URLs amigáveis
- Schema.org markup (pode ser adicionado)

## 🚀 Melhorias Futuras

- [ ] PWA (Progressive Web App)
- [ ] Modo escuro
- [ ] Filtros por categoria
- [ ] Sistema de favoritos
- [ ] Integração com APIs das plataformas
- [ ] Certificados de conclusão
- [ ] Gamificação

## 📞 Suporte

Para dúvidas sobre o código ou personalização:
- Abra uma issue no GitHub
- Consulte a documentação inline no código
- Verifique os comentários nos arquivos CSS e JS

## 📄 Licença

Este projeto é de uso livre para fins educacionais e não-comerciais.

---

**Desenvolvido para o Programa Jovem Aprendiz GERAR** 🎯

Preparando jovens para o futuro do trabalho através da educação continuada e formação complementar.

