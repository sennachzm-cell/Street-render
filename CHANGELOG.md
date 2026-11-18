# CHANGELOG — STREET ADMIN

## 1.1.0 — 2026-11-18 (homologação)

- Mantida e adaptada a versão real JavaScript/HTML/CSS com rotas de produtos, equipe, caixa, vendas, estoque, financeiro, relatórios e auditoria.
- Criados esquema e adaptador de consultas e transações para PostgreSQL, incluindo migrações de criação, índices e chaves e bloqueio por loja.
- Criado script conservador de importação SQLite -> PostgreSQL para destino vazio e antiga base fechada; **não executado com dados reais**.
- Preparado Blueprint `render.yaml` e variáveis de ambiente para serviço Node.js e banco PostgreSQL central persistente.
- Criado gateway Windows localhost com proxy de API para produção HTTPS, sem usar o banco local. Criados atalhos VBS para iniciar e parar sem CMD visível; **não testados em Windows real**.
- Aplicada camada visual LH STREET com paleta grafite, preto, prata/violeta discreto, logo fornecida e CSS responsivo existente preservado.
- Revisado salvamento no frontend para aguardar confirmação de sincronização com backend antes de emitir sucesso.
- Criados testes estáticos, de adaptação de consultas e rotas simuladas (incluindo login, estoque e venda). Todos passaram no ambiente atual.
- Documentação inicial de implantação, utilização, atualização e segurança.

### Pendente para aceite de produção

- Instalar/rodar `pg` e PostgreSQL real, testar migrações/restauração, real concorrência, autenticação e tokens.
- Testar todos os fluxos e telas em Windows, iPhone, Android, desktop e Render reais.
- Migrar dados reais existentes sem perdas, com contagens, reconciliação e homologação pelo proprietário.
- Auditar segurança, gestão de sessão, perfis, integridade, erros e comportamento offline.
- Construir e assinar instalador Windows (fora desta entrega, se solicitado).
