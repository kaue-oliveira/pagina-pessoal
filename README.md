# Página Pessoal - Kauê de Oliveira

Projeto de Atividade Prática 2 da disciplina Programação Web - UFLA.

## 📋 Descrição

Página pessoal responsiva desenvolvida com **HTML5**, **CSS3** e **JavaScript**, apresentando duas versões diferentes de frameworks CSS:

1. **Versão Bootstrap** - Utilizando Bootstrap 5
2. **Versão Tailwind CSS** - Utilizando Tailwind CSS

Ambas as versões possuem:
✅ Design responsivo (mobile-first)
✅ Tema claro e escuro com alternância por botão
✅ Animações suaves e elegantes
✅ Estrutura semântica de HTML5
✅ Acessibilidade básica
✅ Links para projetos e redes sociais

## 📁 Estrutura de Pastas

```
atv2/
├── index.html              # Página inicial com links para as versões
├── bootstrap/
│   └── index.html         # Versão Bootstrap
├── tailwind/
│   └── index.html         # Versão Tailwind CSS
├── css/
│   └── style.css          # Estilos compartilhados (tema, variáveis, etc)
├── js/
│   └── script.js          # JavaScript (toggle de tema, animações)
├── assets/                # Pasta para imagens/recursos
├── README.md             # Este arquivo
└── respostas_pagina_pessoal.txt # Respostas do formulário preenchido
```

## 🚀 Como Usar

### Opção 1: Abrir no navegador (Local)
1. Navegue até a pasta do projeto
2. Abra `index.html` no seu navegador preferido
3. Escolha entre as versões (Bootstrap ou Tailwind)

### Opção 2: Usar GitHub Pages
1. Crie um repositório público no GitHub
2. Faça upload de todos os arquivos
3. Vá em Settings → Pages
4. Selecione a branch `main` e salve
5. Seu site estará disponível em `https://seu-usuario.github.io/seu-repositorio`

### Opção 3: Usar Live Server (VS Code)
1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

## 🎨 Funcionalidades

### Tema Claro/Escuro
- Botão de alternância no topo de cada página
- Preferência salva em `localStorage`
- Transições suaves entre temas
- **Tema Escuro (Padrão)**: #1a1a1a com detalhes em verde #6b9f7f
- **Tema Claro**: #f5f1ed (bege) com verde floresta #4a7c59

### Responsividade
- Breakpoints: 480px, 768px, 1200px
- Menu adaptável para mobile
- Imagens e cards fluidos

### Seções
- **Hero**: Apresentação com foto de perfil
- **Sobre**: Resumo pessoal e localização
- **Formação**: Timeline com formação acadêmica
- **Habilidades**: Cards com tecnologias e ferramentas
- **Projetos**: 3 projetos principais com links
- **Contato**: Links para email, GitHub e LinkedIn
- **Rodapé**: Informações finais

## 🛠️ Tecnologias Utilizadas

### Ambas as Versões
- HTML5 (estrutura semântica)
- CSS3 (custom properties, animations)
- JavaScript (toggle de tema, smooth scroll, interações)

### Versão Bootstrap
- [Bootstrap 5 CDN](https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/)
- Sistema de grid 12 colunas
- Componentes pré-estilizados

### Versão Tailwind CSS
- [Tailwind CSS CDN](https://cdn.tailwindcss.com)
- Utility-first approach
- Classes customizadas com @layer

## 📝 Customização

### Alterar Cores
Edite em `css/style.css`:
```css
:root {
  --accent: #6b9f7f;        /* Cor principal */
  --accent-light: #8db99a;  /* Mais clara */
  --accent-dark: #4a7c59;   /* Mais escura */
}
```

### Alterar Foto de Perfil
Coloque uma imagem chamada `image.png` no diretório raiz. Ela será automaticamente exibida em ambas as versões.

### Alterar Conteúdo
Edite diretamente os arquivos HTML:
- `bootstrap/index.html` - Versão Bootstrap
- `tailwind/index.html` - Versão Tailwind

## 📱 Compatibilidade

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Responsivo em dispositivos móveis

## ✨ Destaques

1. **Design Elegante**: Minimalista mas sofisticado
2. **Tema Dinâmico**: Sistema claro/escuro funcional
3. **Sem Dependências Pesadas**: Usa CDN para frameworks
4. **Semântico**: HTML estruturado corretamente
5. **Acessível**: Estrutura adequada para leitores de tela

## 📊 Comparação Bootstrap vs Tailwind

| Aspecto | Bootstrap | Tailwind |
|---------|-----------|----------|
| **Abordagem** | Componentes pré-prontos | Utility-first |
| **Tamanho CSS** | ~200KB | ~60KB (com purge) |
| **Curva Aprendizado** | Média | Mais Alta |
| **Customização** | Variáveis SCSS | Classes utilitárias |
| **Componentes** | Muitos inclusos | Você constrói |

## 🔧 Requisitos da Atividade

✅ Desenvolvida em HTML, CSS e JavaScript
✅ Totalmente funcional no navegador
✅ Contém informações reais do estudante
✅ Possui layout responsivo
✅ Disponível em duas versões (Bootstrap e Tailwind)
✅ Implementa tema claro e escuro com toggle
✅ Estrutura de pastas organizada
✅ Pronta para GitHub Pages

## 📚 Recursos Utilizados

- [Bootstrap Documentation](https://getbootstrap.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [MDN Web Docs](https://developer.mozilla.org)

## 👨‍💻 Autor

**Kauê de Oliveira**
- Email: kaueolivsil@gmail.com
- GitHub: [@kaue-oliveira](https://github.com/kaue-oliveira)
- LinkedIn: [Kauê Oliveira](https://www.linkedin.com/in/kauê-oliveira-577441258/)

## 📄 Licença

Todos os direitos reservados © 2026 Kauê de Oliveira

---

**Desenvolvido para a disciplina de Programação Web - UFLA**
