# Trilha de estudos - CORO

Da observação ao consenso verificável.

Fevereiro a julho de 2027. 88 horas estimadas de leitura e prática; não é a estimativa total do produto. O progresso fica no navegador e tem backup próprio na aba Trilha de estudos.

[Baixar kit de exercícios](../materiais/kit-estudos-coro.zip)

## E01 - Definir a pergunta e o que conta como evidência

2027-02-01 a 2027-02-07 | 8 h | Base

Base recomendada: início da trilha.

**Aprender:** Git; Táxon; Ocorrência; Risco oficial; Proveniência.

**Prática:** Delimitar espécie e área de estudo. Registrar a avaliação oficial em campo separado das hipóteses do modelo.

**Conferir:**
- [ ] Táxon e versão citados
- [ ] Pergunta delimitada
- [ ] Fonte do risco registrada

**Fontes:**
- [Pro Git em português](https://git-scm.com/book/pt-br/v2) - Git / autores do Pro Git | PT-BR | Leitura gratuita. Commits, branches, revisão e recuperação do trabalho.
- [SALVE: avaliação oficial da fauna](https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/fauna-brasileira/salve) - ICMBio | PT-BR | Leitura gratuita. Consultar a avaliação oficial de risco, versão e táxon correspondente.

Entregas: P01, P02.

Arquivos: [protocolo_campo.md](../materiais/protocolo_campo.md), [matriz_referencias.csv](../materiais/matriz_referencias.csv).

## E02 - Aprender Python e dados de campo

2027-02-08 a 2027-02-21 | 12 h | Base

Base recomendada: E01.

**Aprender:** CSV; Tipos; Valores ausentes; Validação; Reprodutibilidade.

**Prática:** Ler as observações sintéticas e detectar observador duplicado para a mesma evidência.

**Conferir:**
- [ ] Duplicata recusada
- [ ] Ausência distinguida de zero
- [ ] Origem sintética explícita

**Fontes:**
- [Tutorial oficial de Python](https://docs.python.org/pt-br/3/tutorial/) - Python Software Foundation | PT-BR | Leitura gratuita. Funções, arquivos, exceções, módulos e ambientes. Para quem já conhece lógica.
- [NumPy para começar](https://numpy.org/doc/stable/user/absolute_beginners.html) - NumPy | EN | Leitura gratuita. Arrays, eixos, máscaras e operações vetorizadas.

Entregas: P03, P04.

Arquivos: [observacoes_demo.csv](../materiais/observacoes_demo.csv), [consenso.py](../materiais/consenso.py).

## E03 - Entender mapas e resolução das imagens

2027-02-22 a 2027-03-07 | 12 h | Aplicação

Base recomendada: E02.

**Aprender:** CRS; WGS84; Raster e vetor; Resolução; Escala.

**Prática:** Abrir o GeoJSON no QGIS, comparar o CRS e registrar o produto remoto usado como contexto de habitat.

**Conferir:**
- [ ] CRS declarado
- [ ] Data do produto
- [ ] Limite de resolução explicado

**Fontes:**
- [QGIS: manual de treinamento](https://docs.qgis.org/3.44/en/docs/training_manual/) - QGIS | EN | Leitura gratuita. CRS, camadas, atributos, raster, vetores e análise espacial.
- [INPE: introdução ao sensoriamento remoto](https://www.dpi.inpe.br/spring/portugues/tutorial/introducao_sen.html) - INPE / DPI | PT-BR | Leitura gratuita. Resolução espacial, espectral e temporal; interpretação de imagens.
- [TerraBrasilis: dados de cobertura](https://terrabrasilis.dpi.inpe.br/) - INPE / TerraBrasilis | PT-BR | Leitura gratuita. Contexto de habitat e cobertura do solo; registrar produto, data e escala.

Entregas: P02, P05.

Arquivos: [amostra_demo.geojson](../materiais/amostra_demo.geojson).

## E04 - Combinar satélite e observação terrestre

2027-03-08 a 2027-03-28 | 12 h | Aplicação

Base recomendada: E03.

**Aprender:** GeoPandas; Rasterio; Nodata; Junção espacial; Catálogo.

**Prática:** Relacionar pontos de observação com cobertura do solo sem tratar a imagem orbital como identificação direta do indivíduo.

**Conferir:**
- [ ] Bandas registradas
- [ ] Nodata tratado
- [ ] Junção espacial conferida

**Fontes:**
- [Introdução ao GeoPandas](https://geopandas.org/en/stable/getting_started/introduction.html) - GeoPandas | EN | Leitura gratuita. Geometrias, projeções, junções espaciais e GeoJSON.
- [Rasterio: rasters geográficos](https://rasterio.readthedocs.io/en/stable/) - Rasterio | EN | Leitura gratuita. Bandas, janelas, nodata, CRS e GeoTIFF.
- [TerraBrasilis: dados de cobertura](https://terrabrasilis.dpi.inpe.br/) - INPE / TerraBrasilis | PT-BR | Leitura gratuita. Contexto de habitat e cobertura do solo; registrar produto, data e escala.

Entregas: P05, P06.

Arquivos: [amostra_demo.geojson](../materiais/amostra_demo.geojson), [protocolo_campo.md](../materiais/protocolo_campo.md).

## E05 - Construir consenso com votos independentes

2027-03-29 a 2027-04-18 | 10 h | Aplicação

Base recomendada: E04.

**Aprender:** Voto ponderado; Calibração; Dependência entre avaliadores; Abstenção; Auditoria.

**Prática:** Executar a votação ponderada e comparar o resultado ao consenso sem pesos.

**Conferir:**
- [ ] Pesos explícitos
- [ ] Votos independentes
- [ ] Baixa concordância sinalizada

**Fontes:**
- [Tutorial oficial de Python](https://docs.python.org/pt-br/3/tutorial/) - Python Software Foundation | PT-BR | Leitura gratuita. Funções, arquivos, exceções, módulos e ambientes. Para quem já conhece lógica.
- [Métricas e avaliação de modelos](https://scikit-learn.org/stable/modules/model_evaluation.html) - scikit-learn | EN | Leitura gratuita. Matriz de confusão, precisão, revocação, F1 e métricas conforme o alvo.

Entregas: P06, P08.

Arquivos: [consenso.py](../materiais/consenso.py), [observacoes_demo.csv](../materiais/observacoes_demo.csv).

## E06 - Modelar detecção, ocupação e incerteza

2027-04-19 a 2027-05-16 | 12 h | Aplicação

Base recomendada: E05.

**Aprender:** Probabilidade; Esforço de amostragem; Falso negativo; Priors; Validação.

**Prática:** Escrever um modelo que separe presença e probabilidade de detecção e declarar o que não é identificável no conjunto.

**Conferir:**
- [ ] Esforço medido
- [ ] Ausência não presumida
- [ ] Incerteza relatada

**Fontes:**
- [PyMC: modelagem bayesiana](https://www.pymc.io/projects/docs/en/stable/learn.html) - PyMC | EN | Leitura gratuita. Probabilidade, priors, checagem preditiva e incerteza.
- [Métricas e avaliação de modelos](https://scikit-learn.org/stable/modules/model_evaluation.html) - scikit-learn | EN | Leitura gratuita. Matriz de confusão, precisão, revocação, F1 e métricas conforme o alvo.

Entregas: P08, P10, P12.

Arquivos: [protocolo_experimento.md](../materiais/protocolo_experimento.md).

## E07 - Entregar coleta offline e mapa auditável

2027-05-17 a 2027-05-30 | 12 h | Validação

Base recomendada: E06.

**Aprender:** IndexedDB; Fila de sincronização; GeoJSON; Permissões; Privacidade espacial.

**Prática:** Prototipar coleta sem rede e um mapa com filtros de qualidade, sem expor coordenadas sensíveis ao público.

**Conferir:**
- [ ] Reenvio não duplica
- [ ] Qualidade visível
- [ ] Localização sensível controlada

**Fontes:**
- [IndexedDB: armazenamento no navegador](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) - MDN Web Docs | EN | Leitura gratuita. Fila offline, IDs locais, persistência e sincronização posterior.
- [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/) - MapLibre | EN | Leitura gratuita. Mapas interativos, camadas, legendas e GeoJSON.
- [FastAPI: tutorial guiado](https://fastapi.tiangolo.com/tutorial/) - FastAPI | EN | Leitura gratuita. Rotas, validação, dependências e respostas de API.
- [Playwright: primeiros testes](https://playwright.dev/docs/intro) - Playwright / Microsoft | EN | Leitura gratuita. Testes do percurso do usuário e evidências de falha.

Entregas: P07, P09, P11, P14.

Arquivos: [amostra_demo.geojson](../materiais/amostra_demo.geojson).

## E08 - Transformar evidências em monografia e artigo

2027-06-01 a 2027-07-16 | 10 h | Validação

Base recomendada: E07.

**Aprender:** Busca e fichamento; Método reproduzível; Figuras e tabelas; Citações e referências; Modelo INIC.

**Prática:** Preencher a matriz de referências, redigir um resultado sustentado pelos dados e fechar o primeiro texto integral do artigo em junho.

**Conferir:**
- [ ] Cada número tem origem
- [ ] Referências revisadas
- [ ] Modelo do evento conferido

**Fontes:**
- [Zotero: guia inicial](https://www.zotero.org/support/quick_start_guide) - Zotero | EN | Leitura gratuita. Coleções, metadados, citações e biblioteca compartilhada.
- [Normas e guias de normalização](https://biblioteca.ufes.br/normalizacao) - Sistema Integrado de Bibliotecas / UFES | PT-BR | Leitura gratuita. Conferir normas de apresentação, citações, referências e resumos.
- [INIC: modelo e submissão](https://www.univap.br/inic/submissao_trabalhos.php) - UNIVAP / INIC | PT-BR | Leitura gratuita. Consultar o modelo da edição de 2027 quando divulgado. A consulta atual identifica 2026.

Entregas: M08, M13, M15, A01, A05, A09.

Arquivos: [matriz_referencias.csv](../materiais/matriz_referencias.csv), [protocolo_experimento.md](../materiais/protocolo_experimento.md).

## Hardware e recursos de bancada

| Item | Quantidade | Uso | Etapa / observação |
| --- | --- | --- | --- |
| Computador para GIS e Python | 1 | Mapas, análise e painel | Essencial. 8 a 16 GB de RAM como referência de exercícios pequenos. |
| Smartphone com câmera e GNSS | 1 | Formulário de campo e registro de evidências | Campo. Registrar precisão e contexto da coleta. |
| Armazenamento para cópias e power bank | 1 conjunto | Continuidade de coleta e backup | Campo. Planejar conforme duração da campanha. |
| Câmera terrestre ou armadilha fotográfica | Conforme desenho amostral | Registro independente por campanha | Opcional. Definir esforço de amostragem e autorizações antes da campanha. |
| Dados orbitais e camadas de cobertura | Conforme recorte | Contexto do habitat | Essencial. Não exige possuir satélite ou câmera orbital. |
| Revisão por especialista em taxonomia | Equipe parceira | Conferência de rótulos e referência | Campo. Votação e modelo não substituem a avaliação oficial de risco. |

## Drive de Pobre: consulta registrada

[Drive de Pobre](https://drivedepobre.com/) | 31/10/2026 | Consulta bloqueada por verificação humana

O catálogo exigiu verificação humana nesta consulta. Nenhum curso ou arquivo do acervo foi validado ou redistribuído. Use os termos como roteiro de busca e confira autoria e permissão na origem. Os materiais desta trilha estão ligados diretamente às fontes e aos exercícios do projeto.

Termos de busca: Python, estatística, geoprocessamento, ecologia.

## Uso dos arquivos

Os exercícios e dados do kit são autorais e sintéticos. Fontes externas permanecem no endereço do autor. Conferir versão, autoria e permissão antes de reutilizar material externo. A aplicação não depende do catálogo para abrir os recursos da trilha.
