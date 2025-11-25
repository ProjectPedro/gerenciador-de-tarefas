# 📋 Gerenciador de Tarefas com IA
<img width="996" height="648" alt="image" src="https://github.com/user-attachments/assets/bea48299-29e0-44e2-8053-87d97c3f5ce7" />
<img width="1461" height="861" alt="image" src="https://github.com/user-attachments/assets/fb1cd5eb-c1d2-4fa6-868e-934d8ee6c3ac" />
<img width="973" height="684" alt="image" src="https://github.com/user-attachments/assets/49af686f-e881-46f4-981a-8b1dc273f6e9" />



<div align="center">

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com)
[![Groq API](https://img.shields.io/badge/Groq%20API-LLM-FF6B35?style=flat-square)](https://groq.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white&style=flat-square)](https://gerenciador-de-tarefas-sandy.vercel.app/)

Um gerenciador de tarefas moderno e inteligente construído com React, apresentando um assistente de IA que melhora automaticamente as descrições das suas tarefas usando o modelo Llama 3.1 do Groq.

[🚀 Acessar Aplicação](https://gerenciador-de-tarefas-sandy.vercel.app/) • [📖 Documentação](#documentação) • [🐛 Reportar Bug](https://github.com/ProjectPedro/gerenciador-de-tarefas/issues)

</div>

---

## ✨ Características Principais

- **🤖 Assistente de IA Integrado** - Melhore automaticamente as descrições das suas tarefas com sugestões inteligentes
- **💾 Persistência Local** - Suas tarefas são salvas automaticamente no localStorage
- **🎨 Design Moderno** - Interface elegante com tema escuro, gradientes e animações suaves
- **⚡ Performance Otimizada** - Construído com Vite para desenvolvimento rápido
- **📱 Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- **🎯 Experiência Intuitiva** - Interface simples e fácil de usar
- **✅ Gerenciamento Completo** - Adicione, edite, delete e marque tarefas como concluídas

---

## 🛠️ Stack Tecnológico

###
- **React 19** - 
- **Vite** - 
- **Tailwind CSS 4** - 
- **Framer Motion** - 
- **Lucide React** - 
- **UUID** - 

### IA & APIs
- **Groq API** - Acesso ao modelo Llama 3.1 para processamento de linguagem natural
- **Fetch API** - Requisições HTTP nativas

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para qualidade de código
- **PostCSS** - Processador CSS
- **React Router DOM** - Roteamento (preparado para expansão)

---

## 🚀 Como Começar

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn como gerenciador de pacotes
- Uma chave de API do Groq (obtenha em [console.groq.com](https://console.groq.com))

### Instalação Local

1. **Clone o repositório**
```bash
git clone https://github.com/ProjectPedro/gerenciador-de-tarefas.git
cd gerenciador-de-tarefas
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_GROQ_API_KEY=sua_chave_de_api_aqui
```

>  **Importante:** Nunca compartilhe sua chave de API.

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

5. **Abra no navegador**
```
http://localhost:5173
```

---

## 📖 Como Usar

### Adicionar uma Tarefa

1. Digite o **título** da tarefa no primeiro campo
2. Digite a **descrição** no segundo campo
3. Clique em **"Adicionar Tarefa"**

### Melhorar Descrição com IA

1. Clique no ícone **✨ (sparkle)** ao lado da tarefa
2. Veja a sugestão de descrição melhorada no modal
3. Clique **"Aceitar"** para aplicar ou **"Rejeitar"** para descartar

### Gerenciar Tarefas

- **✅ Marcar como Concluída** - Clique no checkbox ou na tarefa
- **➡️ Ver Detalhes** - Clique no botão de seta
- **🗑️ Deletar** - Clique no ícone de lixeira

---

## 📁 Estrutura do Projeto

```
gerenciador-de-tarefas/
├── src/
│   ├── components/
│   │   └── DescriptionModal.jsx      # Modal de sugestão de IA
│   ├── pages/
│   │   └── TaskPage.jsx              # Página de detalhes da tarefa
│   ├── services/
│   │   └── groqService.js            # Integração com API Groq
│   ├── App.jsx                       # Componente principal
│   ├── App.css                       # Estilos da aplicação
│   ├── index.css                     # Estilos globais
│   ├── main.jsx                      # Ponto de entrada
│   ├── Tasks.jsx                     # Componente de lista de tarefas
│   ├── AddTask.jsx                   # Componente de adicionar tarefa
│   ├── TaskSlotButton.jsx            # Componente de card de tarefa
│   ├── Title.jsx                     # Componente de título
│   ├── Input.jsx                     # Componente de input
│   ├── ButtonDetails.jsx             # Botão de detalhes
│   ├── ButtonDelete.jsx              # Botão de deletar
│   └── ButtonBackClick.jsx           # Botão de voltar
├── public/
│   └── vite.svg                      # Ícone do Vite
├── index.html                        # HTML principal
├── package.json                      # Dependências do projeto
├── vite.config.js                    # Configuração do Vite
├── tailwind.config.js                # Configuração do Tailwind
├── postcss.config.js                 # Configuração do PostCSS
├── eslint.config.js                  # Configuração do ESLint
└── README.md                         # Este arquivo
```

---

## 🔧 Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Compila para produção
npm run build

# Visualiza a build de produção localmente
npm run preview

# Executa o linter para verificar qualidade de código
npm run lint
```

---

## 🧠 Como Funciona a IA

### Fluxo de Funcionamento

1. **Usuário clica no botão ✨** - Abre o modal com a sugestão
2. **Requisição para Groq API** - Envia o título e descrição atual
3. **Processamento com Llama 3.1** - A IA analisa e gera uma descrição melhorada
4. **Exibição da Sugestão** - Modal mostra a descrição original e a sugerida
5. **Atualização da Tarefa** - Ao aceitar, a descrição é atualizada

### Modelo de IA Utilizado

- **Modelo:** Llama 3.1 8B Instant
- **Provider:** Groq API
- **Tempo de Resposta:** < 1 segundo (média)
- **Qualidade:** Excelente para português

---

## 🎨 Design & UX

### Paleta de Cores

- **Fundo Principal:** `#0a2e3f` (Cyan-950)
- **Gradiente Primário:** Roxo → Ciano
- **Texto Principal:** Branco
- **Cards:** Glassmorphism com efeito de vidro fosco

### Animações

- Transições suaves em hover
- Animações de entrada com Framer Motion
- Efeitos de escala em botões
- Transições de cor fluidas

---

## 🚀 Deploy

O projeto está **deployado e disponível** na Vercel:

🔗 **[https://gerenciador-de-tarefas-sandy.vercel.app/](https://gerenciador-de-tarefas-sandy.vercel.app/)**

### Como Fazer Deploy na Vercel

1. Push seu código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Selecione seu repositório
5. Configure a variável de ambiente `VITE_GROQ_API_KEY`
6. Clique em "Deploy"

---

## 🔐 Segurança

### Boas Práticas Implementadas

-  Chave de API armazenada em variáveis de ambiente
-  Arquivo `.env.local` adicionado ao `.gitignore`
-  Sem armazenamento de dados sensíveis no localStorage
-  Validação de entrada de dados

### Recomendações Futuras

- Implementar backend Node.js para esconder a chave de API
- Adicionar autenticação de usuários
- Implementar banco de dados para persistência
- Adicionar rate limiting nas requisições

---

## 🐛 Troubleshooting

### Erro: "Failed to fetch" ao usar IA

**Solução:**
- Verifique se a chave de API está correta no `.env.local`
- Reinicie o servidor (`npm run dev`)
- Limpe o cache do navegador (Ctrl + Shift + Delete)
- Verifique sua conexão com a internet

### Tarefas não aparecem após recarregar

**Solução:**
- Verifique se o localStorage está ativado no navegador
- Tente limpar dados de site e recarregar
- Verifique o console do navegador (F12) para erros

### Modal de IA não abre

**Solução:**
- Certifique-se de que a tarefa tem título e descrição
- Verifique se o arquivo `DescriptionModal.jsx` existe
- Verifique imports no arquivo `Tasks.jsx`

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📋 Roadmap

- [ ] Backend Node.js para segurança da chave de API
- [ ] Autenticação de usuários
- [ ] Banco de dados (MongoDB/PostgreSQL)
- [ ] Categorias e tags para tarefas
- [ ] Prioridades de tarefas
- [ ] Datas de vencimento
- [ ] Notificações
- [ ] Modo escuro/claro
- [ ] Exportar tarefas (PDF, CSV)
- [ ] Integração com Google Calendar
- [ ] Suporte a múltiplos idiomas

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Autor

**Pedro** - [@ProjectPedro](https://github.com/ProjectPedro)

---

## 🙏 Agradecimentos

- [Groq](https://groq.com) - 
- [React](https://react.dev) - 
- [Tailwind CSS](https://tailwindcss.com) - 
- [Vercel](https://vercel.com) - 

---

## 📞 Suporte

Se você tiver dúvidas ou encontrar problemas:

- 📧 Abra uma [issue](https://github.com/ProjectPedro/gerenciador-de-tarefas/issues)
- 💬 Deixe um comentário no repositório
- 🐛 Reporte bugs com detalhes

---

<div align="center">

**[⬆ Voltar ao topo](#-gerenciador-de-tarefas-com-ia)**

Made with ❤️ by Pedro

</div>
