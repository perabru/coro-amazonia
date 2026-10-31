# Tecnologias propostas

O HTML do briefing usa JavaScript e CSS nativos. A stack abaixo descreve o produto a desenvolver.

### React + TypeScript + Vite

Uma interface com contratos tipados e componentes reaproveitáveis.

- **Onde entra:** Aplicativo web responsivo; UI com CSS próprio e primitivas Radix.
- **Contrato:** Estados de carregamento, vazio, falha e foco visível em todas as rotas.
- [Documentação](https://react.dev/)

### Python + FastAPI + Pydantic

Validar entradas e publicar contratos REST/OpenAPI.

- **Onde entra:** Servidor da aplicação; processamento pesado fora da requisição.
- **Contrato:** IDs obtidos da sessão; validação, paginação e erros legíveis.
- [Documentação](https://fastapi.tiangolo.com/)

### PostgreSQL + SQLAlchemy + Alembic

Relacionar registros, versões, permissões e auditoria.

- **Onde entra:** Banco transacional; migrações versionadas.
- **Contrato:** Chaves únicas, transações, backup e restauração testada.
- [Documentação](https://www.postgresql.org/docs/)

### Keycloak + OIDC + sessão no servidor

Reutilizar identidade, verificação de e-mail, recuperação e MFA da equipe.

- **Onde entra:** BFF Python com Authlib; JWT verificado na API.
- **Contrato:** Cookie HttpOnly/Secure/SameSite; CSRF; papéis e propriedade conferidos no servidor.
- [Documentação](https://www.keycloak.org/securing-apps/oidc-layers)

### S3 compatível + checksums

Guardar originais e derivados sem transformar o banco em repositório de mídia.

- **Onde entra:** Armazenamento privado por projeto e URLs temporárias.
- **Contrato:** Chaves e permissões geradas no servidor; tamanho, MIME e integridade validados.
- [Documentação](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)

### Redis + Celery

Executar importações e análises demoradas sem bloquear a tela.

- **Onde entra:** Workers separados da API com fila e status persistido.
- **Contrato:** Tarefa identificada por arquivo/versão; repetição idempotente e cancelamento cooperativo.
- [Documentação](https://docs.celeryq.dev/)

### Linux + Docker Compose + Caddy

Reproduzir o piloto e servir a interface por HTTPS.

- **Onde entra:** Ambientes de desenvolvimento, homologação e piloto separados.
- **Contrato:** Segredos fora do repositório, volumes persistentes e recuperação documentada.
- [Documentação](https://docs.docker.com/compose/)

### Git + CI + pytest + Vitest + Playwright

Verificar cálculo, contrato e percurso completo antes da entrega.

- **Onde entra:** Testes de API Python, componentes e navegador.
- **Contrato:** Versões fixadas no lockfile; testes de falha, autorização e retomada.
- [Documentação](https://playwright.dev/docs/intro)

### OpenTelemetry + Prometheus + Grafana

Observar recepção, latência, falhas e consumo.

- **Onde entra:** Instrumentação no servidor, métricas dos workers e logs estruturados.
- **Contrato:** Sem credenciais nos logs; alertas acionáveis e registro das interrupções.
- [Documentação](https://opentelemetry.io/docs/languages/python/)

### PostGIS + GeoPandas + Shapely

Relacionar pontos, células, campanhas e fragmentos.

- **Onde entra:** Consultas espaciais no banco e processamento Python.
- **Contrato:** CRS e precisão documentados; área calculada em projeção adequada.
- [Documentação](https://postgis.net/documentation/)

### Rasterio + GDAL + NumPy

Ler GeoTIFF e máscaras de habitat mantendo referência espacial.

- **Onde entra:** Worker de reprojeção, recorte, nuvens e mosaicos.
- **Contrato:** Preservar resolução, nodata, data, sensor e histórico do processamento.
- [Documentação](https://rasterio.readthedocs.io/en/stable/)

### INPE / TerraBrasilis + catálogo de arquivos

Importar camadas com procedência e versão.

- **Onde entra:** Adaptador para os produtos realmente acessíveis e autorizados.
- **Contrato:** Não pressupor uma API universal; registrar licença, produto e checksum.
- [Documentação](https://terrabrasilis.dpi.inpe.br/)

### MapLibre GL JS + GeoJSON / tiles

Visualizar habitat e prioridades por escala.

- **Onde entra:** Mapa web com camadas, legenda e filtros de campanha.
- **Contrato:** Coordenadas sensíveis agregadas; tile base e cache com atribuição e licença.
- [Documentação](https://maplibre.org/maplibre-gl-js/docs/)

### Python + NumPy + scikit-learn

Comparar voto simples, ponderado e revisão de referência.

- **Onde entra:** Apoio à identificação com pesos aprendidos em dados de treinamento.
- **Contrato:** Separar eventos e observadores entre treino/teste; medir abstenção e cobertura.
- [Documentação](https://scikit-learn.org/stable/modules/model_evaluation.html)

### PyMC / modelo de ocupação e detecção

Considerar a chance de a espécie estar presente sem ser registrada.

- **Onde entra:** Modelo por visitas repetidas, protocolo e condições de observação.
- **Contrato:** Estimar ψ e p com incerteza; documentar hipóteses e testar identificabilidade.
- [Documentação](https://www.pymc.io/projects/docs/en/stable/)

### Catálogo taxonômico + SALVE / listas oficiais

Relacionar identificação revisada à avaliação de ameaça correta.

- **Onde entra:** Importação curada com sinônimo, táxon, escala, categoria, data e fonte.
- **Contrato:** Nunca converter índice de triagem em categoria oficial de ameaça.
- [Documentação](https://salve.icmbio.gov.br/)

### IndexedDB + fila de sincronização

Permitir rascunho de campo em rede instável.

- **Onde entra:** PWA futura com armazenamento local explícito e reenvio autorizado.
- **Contrato:** IDs estáveis, conflitos visíveis e confirmação do servidor; navegador não é backup.
- [Documentação](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
