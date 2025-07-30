# 🌲 Forest - Landing Page

Este projeto é uma landing page desenvolvida com foco total no **Tailwind CSS** e suas funcionalidades avançadas.

## 🎯 Sobre o Projeto

Forest é promove uma experiências de turismo ecológico, oferecendo acomodações em meio a uma natureza com eventos astronômicos e atividades ao ar livre. O projeto foi desenvolvido na exploração completa das classes que o Tailwind CSS oferece.

## ✨ Características Principais

- **Design Responsivo**: Layout adaptável para todas as telas
- **Animações Fluidas**: Transições e efeitos visuais suaves
- **Interatividade**: Menu mobile, carrossel de eventos e galeria interativa
- **Conteúdo Dinâmico**: Clima e vídeo de fundo que mudam dinamicamente
- **Formulário de Contato**: Interface completa para reservas

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **Tailwind CSS v4**: Framework CSS utilitário (migrado da v3)
- **JavaScript**: Interatividade e funcionalidades dinâmicas

## 🎨 Destaques do Tailwind CSS

Este projeto foi desenvolvido com **foco total no Tailwind CSS**, explorando praticamente todos os recursos do framework:

### Recursos Utilizados:

- **Sistema de Grid Avançado**: Layouts complexos como `grid-cols-[2fr_3fr]` e `grid-cols-[repeat(3,minmax(300px,1fr))]`
- **Flexbox Responsivo**: Combinações de flex com breakpoints
- **Cores Customizadas**: Paleta personalizada de verdes (`verde-200` até `verde-950`)
- **Animações Personalizadas**:
  - `slideIn` para elementos do menu
  - `fadeIn` para transições suaves
  - Delays de animação customizados (`animate-1`, `animate-2`, etc.)
- **Gradientes Complexos**:
  - `bg-linear-to-t from-verde-950/80`
  - Gradientes radiais customizados
- **Efeitos Visuais Avançados**:
  - Componente `neon` com box-shadow e bordas iluminadas
  - Hover effects com `hover:scale-110` e `hover:translate-y-10`
  - Backdrop blur com `backdrop-blur-md`
- **Tipografia Personalizada**: Fontes DM Sans e DM Serif Text
- **Componentes Reutilizáveis**: Classes `.btn`, `.input`, `.neon`
- **Responsividade Avançada**: Breakpoints e layouts adaptativos

### Plugins Customizados:

```javascript
// Plugin para delays de animação dinâmicos
plugin(({ addUtilities }) => {
  function animationDelay() {
    const delays = {};
    for (let i = 0; i <= 12; i++) {
      delays[`.animate-${i}`] = {
        'animation-delay': `${i * 100}ms`,
      };
    }
    return delays;
  }
  addUtilities(animationDelay());
});
```

## 🚀 Migração Tailwind v3 → v4

O projeto foi começado com o desenvolvimento na **versão 3 do Tailwind CSS** e sua ultima atualização teve a **migração para a versão 4**, proporcionando experiência prática em:

- Atualização de configurações
- Compatibilidade de sintaxe
- Otimizações de performance
- Novos recursos da v4

Esta migração serve como referência para outros projetos que precisem ser atualizados.

## 🎭 Funcionalidades JavaScript

- **Menu Mobile Responsivo**: Toggle de visibilidade com animações
- **Clima Dinâmico**: Temperatura e condições climáticas aleatórias
- **Vídeo Adaptativo**: Muda conforme as condições climáticas
- **Data Dinâmica**: Exibe o dia da semana atual em português

## 🌟 Seções da Landing Page

1. **Hero Section**: Vídeo de fundo com call-to-action
2. **Acomodações**: Galeria de cabines com nomes temáticos
3. **Eventos**: Cards de eventos astronômicos
4. **Experiências**: Atividades disponíveis com hover effects
5. **Ciclo Natural**: Timeline de atividades diárias
6. **Contato**: Formulário e informações de contato
7. **Parceiros**: Logos de empresas parceiras

## 📱 Responsividade

O projeto é totalmente responsivo, adaptando-se perfeitamente a:

- **Mobile**: Layout em coluna única
- **Tablet**: Layouts híbridos
- **Desktop**: Layouts mais complexos com varias colunas

## 🎯 Aprendizados

Neste projeto aprendi a utilizar Tailwind CSS tanto quanto para:

- Desenvolvimento rápido de interfaces modernas
- Criação de componentes reutilizáveis
- Implementação de animações complexas
- Gestão eficiente de responsividade
- Customização avançada do framework

---

Feito com ❤️ por Danilo Lopes!
