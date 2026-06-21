
# Conversor de Moedas - CI Pipeline

Este projeto é uma ferramenta de conversão de moedas desenvolvida como parte da disciplina de Automação de Testes. O objetivo principal é demonstrar a implementação de uma esteira de Integração Contínua (CI) utilizando GitHub Actions.

## Estrutura do Projeto
O projeto foi estruturado seguindo boas práticas de organização de software:
- `/src`: Contém a lógica principal da aplicação (`moeda.js`).
- `/tests`: Contém os testes unitários (`moeda.test.js`) desenvolvidos com Jest.
- `/.github/workflows`: Contém a configuração da pipeline de CI.

## Pipeline de CI
A pipeline automatiza o processo de validação do código a cada alteração. As configurações incluem:

### Gatilhos (Triggers)
1. **Push:** Execução automática a cada envio de código para a branch `main`.
2. **Manual:** Disponível na aba "Actions" para execução sob demanda (`workflow_dispatch`).
3. **Agendado (Cron):** Execução configurada para ocorrer diariamente às 00:00 (UTC).

### Relatórios de Testes
O projeto utiliza o `jest-junit` para gerar relatórios detalhados em formato XML. Após cada execução, a pipeline armazena o relatório como um **Artifact**, permitindo a rastreabilidade histórica da qualidade do software.

## Como rodar localmente
1. Clone o repositório.
2. Instale as dependências: `npm install`
3. Execute os testes: `npm test`

---

## Evidência de Execução

<img width="899" height="906" alt="Screenshot_3" src="https://github.com/user-attachments/assets/9fff7535-6e4c-4c17-b9ff-ff7949d8fd85" />
