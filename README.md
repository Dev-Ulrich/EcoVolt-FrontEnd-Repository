# ⚡ EcoVolt — Transformando ações sustentáveis em impacto real

> Plataforma gamificada desenvolvida como parte do **FIAP Challenge SoulUp 2026**, que incentiva usuários a praticarem ações sustentáveis reais, acumularem pontos, subirem em rankings mensais e concorrerem a recompensas concretas — como subsídio na conta de energia.

---

## Sumário

- [Visão Geral](#visão-geral)
- [Contexto e Problema](#contexto-e-problema)
- [Solução Proposta](#solução-proposta)
- [Funcionalidades](#funcionalidades)
- [Mecânica de Gamificação](#mecânica-de-gamificação)
- [Sistema de Validação](#sistema-de-validação)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Páginas da Aplicação](#páginas-da-aplicação)
- [Como Executar](#como-executar)
- [Credenciais de Teste](#credenciais-de-teste)
- [Roadmap](#roadmap)
- [Equipe](#equipe)
- [Licença](#licença)

---

## Visão Geral

O **EcoVolt** é uma solução web gamificada que se integra à plataforma **SoulUp**, com o objetivo de aumentar o engajamento contínuo dos usuários em ações sustentáveis. A proposta combina **gamificação**, **validação inteligente de evidências** e **recompensas reais** para gerar impacto socioambiental tangível, alinhado às **ODS (Objetivos de Desenvolvimento Sustentável)** da ONU.

Este repositório contém o **front-end completo** da aplicação, desenvolvido com tecnologias web nativas (HTML5, CSS3 e JavaScript), incluindo design responsivo, suporte a tema claro/escuro e todas as telas do fluxo de uso.

---

## Contexto e Problema

A SoulUp identificou a necessidade de aumentar o **engajamento recorrente** dos usuários em práticas sustentáveis, indo além de campanhas pontuais. O desafio é manter o usuário ativo, recompensando comportamentos reais e mensuráveis, sem abrir margem para fraudes ou ações artificiais.

**Principais dores endereçadas:**

- Baixa retenção em iniciativas sustentáveis tradicionais
- Falta de validação confiável das ações realizadas
- Ausência de recompensas concretas ligadas ao impacto gerado
- Dificuldade em gerar comunidade e disputa saudável entre usuários

---

## Solução Proposta

O EcoVolt resolve esses pontos por meio de uma **plataforma gamificada com validação híbrida**:

1. O usuário escolhe uma ação sustentável dentro do catálogo da plataforma.
2. Envia um **vídeo comprobatório** da ação realizada.
3. O sistema valida a ação combinando **regras determinísticas**, **análise contextual**, **apoio de IA** e **revisão manual** quando necessário.
4. O usuário recebe **pontos (0–100)** e **XP**, sobe de nível e progride no **ranking mensal**.
5. Os melhores colocados em cada *tier* concorrem a **recompensas reais**, incluindo **subsídio na conta de luz de até R$ 300**.

---

## Funcionalidades

### Para o usuário
- ✅ **Cadastro e login** seguro na plataforma
- ✅ **Dashboard personalizado** com nível, tier, pontuação mensal e sequência de logins
- ✅ **Envio de ações sustentáveis** com upload de vídeo e seleção de categoria
- ✅ **Acompanhamento de envios** (em análise, aprovada, recusada, em revisão manual)
- ✅ **Solicitação de revisão manual** para envios recusados
- ✅ **Missões semanais** divididas por dificuldade (Fácil, Médio, Difícil)
- ✅ **Ranking mensal** com posição dentro do tier
- ✅ **Catálogo de recompensas** com itens desbloqueáveis e recompensa principal
- ✅ **Perfil do usuário** com conquistas, ODS favoritas e estatísticas de impacto
- ✅ **FAQ** e **formulário de contato**
- ✅ **Modo claro / escuro** com persistência via `localStorage`

### Para o projeto institucional
- 📄 Página **Sobre** descrevendo o contexto, solução, tecnologias e roadmap
- 👥 Página **Quem Somos** apresentando a equipe responsável
- 🤖 Integração planejada com **Watson Assistant** (chatbot de apoio)

---

## Mecânica de Gamificação

### Pontuação
- Cada ação sustentável vale de **0 a 100 pontos**, conforme o tipo, complexidade e ODS associada.
- Ações **repetidas** dentro de um curto intervalo recebem **redução progressiva de pontos**, evitando *spam*.
- **Missões** semanais ajudam a **recuperar** pontuação reduzida e oferecem bônus de XP.

### Tiers (progressão mensal)
1. 🔩 **Ferro**
2. 🥉 **Bronze**
3. 🥈 **Prata**
4. 🥇 **Ouro**
5. 💎 **Diamante**
6. 🌱 **Sustentabilístico**

> A cada fechamento mensal, o **top 10%** sobe de tier e os **últimos 20%** descem. Usuários com 0 pontos no mês também descem de tier.

### Missões
- 🟢 **Fáceis** — login diário, curtir publicações
- 🟡 **Médias** — enviar ações validadas, comentar conteúdos relevantes
- 🔴 **Difíceis** — completar várias ações distintas dentro da semana

### Recompensas
- 💡 **Conta de luz subsidiada** (até R$ 300) — para o 1º lugar de cada tier
- 🌟 **Selos** e **conquistas** desbloqueáveis
- 🎫 **Cupons de parceiros sustentáveis**
- 🖼️ **Molduras de perfil** especiais
- 🏆 **Troféus** para tiers superiores
- ⚡ **Bônus de XP 2x** em missões completas

---

## Sistema de Validação

A validação dos envios segue um **modelo híbrido** para garantir confiabilidade e mitigar fraudes:

| Etapa | Descrição |
|-------|-----------|
| **1. Regras determinísticas** | Verificação de formato de vídeo, duração mínima, metadados e limites de repetição |
| **2. Análise contextual** | Conferência se o conteúdo do vídeo corresponde à categoria selecionada |
| **3. Apoio de IA** | Modelos de visão computacional auxiliam na classificação automática |
| **4. Revisão manual** | Casos ambíguos são analisados por um avaliador humano |
| **5. Recurso do usuário** | Envios recusados podem receber **solicitação de revisão** com justificativa |

---

## Tecnologias Utilizadas

| Camada | Tecnologia | Uso |
|--------|------------|-----|
| Estrutura | **HTML5** | Marcação semântica das páginas |
| Estilo | **CSS3** | Layout responsivo, grid, animações e tema claro/escuro |
| Comportamento | **JavaScript (Vanilla)** | Interações, autenticação client-side, formulários e troca de tema |
| Tipografia | **Google Fonts — Inter** | Identidade visual moderna e legível |
| Banco de Dados *(modelagem)* | **Oracle SQL Developer** | Modelagem das entidades do sistema |
| Chatbot *(planejado)* | **IBM Watson Assistant** | Atendimento automatizado e dúvidas sobre o EcoVolt |

> ⚠️ Este repositório contém **somente o front-end estático**. Não há *back-end* nem persistência real — os dados de demonstração e o login são simulados via `localStorage`.

---

## Estrutura do Projeto

```
EcoVolt-FrontEnd-Repository/
├── index.html                  # Landing page institucional
├── login.html                  # Tela de autenticação
├── README.md
│
├── pages/                      # Páginas internas da aplicação
│   ├── dashboard.html          # Painel do usuário logado
│   ├── enviar-acao.html        # Envio de ação sustentável
│   ├── validacoes.html         # Lista de envios e seus status
│   ├── revisao.html            # Solicitação de revisão manual
│   ├── missoes.html            # Missões da semana
│   ├── ranking.html            # Ranking mensal por tier
│   ├── recompensas.html        # Catálogo de recompensas
│   ├── perfil.html             # Perfil, conquistas e estatísticas
│   ├── sobre.html              # Sobre o projeto
│   ├── quem-somos.html         # Equipe do projeto
│   ├── faq.html                # Perguntas frequentes
│   └── contato.html            # Formulário de contato
│
└── assets/
    ├── css/                    # Folhas de estilo (uma por página + base.css)
    │   ├── base.css            # Variáveis, reset, header, footer e tema
    │   ├── index.css
    │   ├── login.css
    │   ├── dashboard.css
    │   └── ... (demais páginas)
    │
    ├── js/                     # Scripts da aplicação
    │   ├── theme.js            # Toggle de tema claro/escuro
    │   ├── menu.js             # Menu hambúrguer responsivo
    │   ├── auth.js             # Autenticação e proteção de rotas
    │   ├── login.js            # Lógica do formulário de login
    │   ├── enviar-acao.js      # Validação e envio de ação
    │   ├── revisao.js          # Envio de recurso/revisão
    │   ├── faq.js              # Acordeão do FAQ
    │   └── contato.js          # Formulário de contato
    │
    └── image/                  # Imagens (avatares da equipe e ícones sociais)
```

---

## Páginas da Aplicação

### Áreas públicas (não logadas)
- **`index.html`** — Landing page com hero, *features*, fluxo da jornada e CTA para login.
- **`login.html`** — Autenticação com validação client-side.
- **`pages/sobre.html`** — Descrição do projeto, tecnologias e roadmap.
- **`pages/quem-somos.html`** — Apresentação da equipe.
- **`pages/faq.html`** — Perguntas frequentes em formato acordeão.
- **`pages/contato.html`** — Formulário de contato com a equipe.

### Áreas internas (requerem login)
- **`pages/dashboard.html`** — Visão geral: nível, tier, pontuação, missões em andamento, ranking atual e recompensa em disputa.
- **`pages/enviar-acao.html`** — Formulário de envio com seleção de ação, ODS associada, upload de vídeo e regras.
- **`pages/validacoes.html`** — Listagem dos envios do usuário com badges de status (Em análise, Aprovada, Recusada, Em revisão manual).
- **`pages/revisao.html`** — Justificativa para recurso de envio recusado.
- **`pages/missoes.html`** — Missões semanais por dificuldade, com progresso individual.
- **`pages/ranking.html`** — Ranking mensal do tier, pódio e posição do usuário atual.
- **`pages/recompensas.html`** — Recompensa principal e demais itens desbloqueáveis.
- **`pages/perfil.html`** — Perfil completo: conquistas, ODS favoritas e estatísticas de impacto.

---

## Como Executar

O projeto é **estático** e **não requer instalação de dependências**.

### Opção 1 — Abrir diretamente no navegador
1. Clone o repositório:
   ```bash
   git clone https://github.com/<seu-usuario>/EcoVolt-FrontEnd-Repository.git
   cd EcoVolt-FrontEnd-Repository
   ```
2. Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

### Opção 2 — Servidor local (recomendado)
Para evitar restrições de carregamento de recursos relativos:

```bash
# Usando Python 3
python -m http.server 8000

# Ou usando a extensão "Live Server" no VS Code
```

Depois acesse `http://localhost:8000` no navegador.

---

## Credenciais de Teste

A autenticação é simulada (mock) e armazenada via `localStorage`. Use qualquer das credenciais abaixo:

| Usuário | Senha |
|---------|-------|
| `admEcoVolt` | `EcoVolt2026` |
| `Matheus Pereira` | `569315` |
| `Victor Ulrich` | `568634` |
| `Matheus Luca` | `572228` |
| `Arthur da Silva` | `571075` |

> Após o login, o usuário é redirecionado para `pages/dashboard.html` e tem acesso às áreas internas. O logout limpa o `localStorage` e retorna à tela de login.

---

## Roadmap

- [x] **1. Ideação da solução** — Definição do conceito e escopo do projeto
- [x] **2. Prototipação da interface** — Wireframes e *design system*
- [x] **3. Modelagem do banco de dados** — Estruturação de entidades e relacionamentos (Oracle SQL Developer)
- [x] **4. Desenvolvimento front-end** — Implementação de todas as telas e fluxos
- [ ] **5. Chatbot e integração** — Integração com IBM Watson Assistant
- [ ] **6. Validação com usuários** — Testes, feedbacks e ajustes finais
- [ ] **7. Integração com back-end** — Persistência real, API e validação automática

---

## Equipe

Projeto desenvolvido pela equipe **EcoVolt** — turma **1TDSPW** da **FIAP**.

| Integrante | RM | Responsabilidades |
|------------|----|-----|
| **Victor Ulrich Costa Alves da Silva** | 568634 | Desenvolvimento, banco de dados e documentação |
| **Matheus Pereira da Silva Franco** | 569315 | Desenvolvimento, banco de dados e documentação |
| **Matheus Luca Fouad Barragão** | 572228 | Desenvolvimento e prototipação |
| **Arthur da Silva Santana** | 571075 | Desenvolvimento e documentação |

---

## Licença

Projeto acadêmico desenvolvido para fins educacionais como parte do **FIAP Challenge SoulUp 2026**. O uso, redistribuição e adaptação devem respeitar as diretrizes da instituição e dos integrantes da equipe.

---

<p align="center">
  <strong>EcoVolt</strong> — Transformando ações sustentáveis em impacto real.<br/>
  © 2026 EcoVolt — FIAP Challenge SoulUp
</p>
