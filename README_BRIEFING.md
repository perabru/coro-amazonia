<div align="center">

![CORO — briefing técnico](docs/banner.svg)

**Muitos olhares. Evidências revisáveis.**

HTML independente · 23 telas · 17 blocos tecnológicos · Fontes incorporadas

[Abrir o HTML](index.html) · [Telas](docs/telas.md) · [Stack](docs/tecnologias.md) · [Arquitetura](docs/arquitetura.md)

</div>

## O projeto

Satélites mostram a mudança do habitat. O campo documenta a espécie. Identificações independentes conectam as duas escalas.

> Identificar registros e priorizar verificação de espécies ameaçadas na Amazônia. Categoria de ameaça vem de avaliações oficiais versionadas; votação ou imagem orbital isolada não determina extinção.

Este repositório contém o **briefing técnico navegável e suas demonstrações locais**. As integrações de produção descritas no projeto são o escopo de desenvolvimento, sem servidor compartilhado ou credenciais nesta versão.

## Experimente agora

1. Baixe o repositório em **Code → Download ZIP** ou clone com o comando abaixo.
2. Abra `index.html` no navegador.
3. Explore as telas, filtre a stack e teste a simulação identificada.
4. Use **Imprimir / salvar PDF** para obter a especificação completa, ou exporte o briefing em JSON.

```bash
git clone https://github.com/perabru/coro-amazonia.git
cd coro-amazonia
```

O arquivo inclui HTML, CSS, JavaScript, fontes e recursos visuais. Não exige instalação, `npm install`, chave de API ou internet para navegar. Os links da documentação oficial exigem conexão.

## O que está disponível

| Recurso | Esta versão |
| --- | --- |
| Inventário de telas | Busca, filtros, objetivo, campos, ações, estados, API e aceite |
| Tecnologias | Responsabilidade, local de uso, contrato e documentação |
| Método | Equações e demonstração com dados locais ou sintéticos |
| Entrega | Responsáveis, testes, pendências e sequência de implementação |
| Impressão | Anexo completo de telas, mesmo com filtro ativo |
| Serviço de produção | Especificado; depende de implementação e homologação |

## Tipografia e identidade

| Papel | Família | Intenção |
| --- | --- | --- |
| Títulos e marca | **Lora** | Títulos de caderno de campo com leitura editorial clara. |
| Texto e controles | **Source Sans 3** | Leitura mais confortável em parágrafos, listas e botões. |
| Código e medidas | **JetBrains Mono** | Alinhamento de valores, rotas e equações. |

As fontes são incorporadas no HTML em WOFF. Textos, controles e rótulos receberam tamanhos maiores e mais espaço entre linhas. Os avisos SIL OFL acompanham o projeto em [créditos de terceiros](THIRD_PARTY_NOTICES.md).

## Percurso principal

1. **Receber:** Cenas orbitais, fotos e esforço de campo.
2. **Preparar:** Qualidade, georreferência e duplicatas.
3. **Identificar:** Avaliações independentes e abstenção.
4. **Confrontar:** Revisão, habitat e ocupação.
5. **Priorizar:** Mapa agregado de áreas a verificar.

## Telas por área

| Área | Telas |
| --- | ---: |
| Público | 4 |
| Campo | 4 |
| Identificação | 3 |
| Revisão | 1 |
| Análise | 5 |
| Gestão | 3 |
| Conta | 3 |
| **Total** | **23** |

[Consultar todas as telas e critérios de aceite →](docs/telas.md)

## Quem participa

| Área | Responsabilidade |
| --- | --- |
| Campo e observadores | Registros, esforço, contexto e autorizações de uso. |
| Especialistas | Revisão taxonômica e desenho da validação. |
| Computação / geoprocessamento | Importação, independência dos votos, modelos e mapas. |
| Coordenação | Protocolo, acesso a localizações sensíveis e retorno às comunidades. |

## Critérios do piloto

- [ ] O mesmo evento não aparece em treino e teste.
- [ ] A primeira identificação é registrada sem ver a maioria.
- [ ] Mapa público não revela um ponto sensível de ocorrência.
- [ ] Categoria oficial mantém data, escala e fonte da avaliação.

Os itens descrevem testes da aplicação final. Marcar o checklist do briefing registra leitura local e não comprova a implementação.

## Decisões abertas

- Escolher espécies e campanha com especialistas e participantes locais.
- Fechar tamanho das células, protocolo, precisão e regras de divulgação.
- Definir referência de validação, esforço mínimo e pesos com dados reais.

## Organização do repositório

| Caminho | Conteúdo |
| --- | --- |
| [`index.html`](index.html) | Briefing completo e independente |
| [`docs/telas.md`](docs/telas.md) | Inventário das telas |
| [`docs/tecnologias.md`](docs/tecnologias.md) | Stack proposta e fontes |
| [`docs/arquitetura.md`](docs/arquitetura.md) | Fluxo e dados do domínio |
| [`docs/banner.svg`](docs/banner.svg) | Identidade aplicada ao README |
| [`font-licenses/`](font-licenses/) | Licenças das fontes incorporadas |
| [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md) | Créditos e limites de licenciamento |

## Validação desta entrega

- Sintaxe dos scripts e integridade dos recursos incorporados.
- Referências entre telas e tecnologias.
- Navegação e tipografia verificadas na prévia do navegador.
- Preservação das demonstrações e dos critérios do briefing anterior.

---

<div align="center">

**CORO** · Projeto de [Bruno Michel Pera](https://github.com/perabru)

Briefing técnico · Documentação em português · 2026

</div>
