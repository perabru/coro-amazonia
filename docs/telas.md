# Inventário de telas · CORO

23 telas e seus critérios de aceite.

## C01 · Apresentação e método

`/` · Público

Explicar como habitat, espécie e multidão se conectam.

- **Campos:** Objetivo; Método; Limites.
- **Ações:** Explorar; Ver fontes.
- **Estados:** Fonte indisponível; Sem conexão.
- **API:** `GET /v1/public/project`
- **Aceite:** Não prometer que satélites identificam animais sob o dossel.

## C02 · Mapa de prioridades

`/mapa` · Público

Mostrar áreas agregadas que merecem verificação.

- **Campos:** Célula; Campanha; Legenda; Incerteza.
- **Ações:** Filtrar; Comparar; Abrir área.
- **Estados:** Sem dados; Camada desatualizada; Zoom restrito.
- **API:** `GET /v1/map/cells`
- **Aceite:** Coordenadas sensíveis não chegam ao navegador público.

## C03 · Espécies e avaliações

`/especies` · Público

Consultar táxons revisados e categorias oficiais.

- **Campos:** Nome; Sinônimo; Categoria; Data; Escala.
- **Ações:** Buscar; Abrir ficha.
- **Estados:** Táxon ambíguo; Avaliação antiga.
- **API:** `GET /v1/taxa`
- **Aceite:** Toda categoria informa fonte e data; triagem local aparece separada.

## C04 · Ficha de espécie

`/especies/:id` · Público

Contextualizar identificação, habitat e avaliação.

- **Campos:** Fotos autorizadas; Fontes; Área agregada.
- **Ações:** Consultar; Ver avaliação.
- **Estados:** Registro contestado; Imagem retirada.
- **API:** `GET /v1/taxa/:id`
- **Aceite:** Não inferir categoria a partir de uma foto ou votação.

## C05 · Campanhas e estações

`/campo/campanhas` · Campo

Organizar protocolo e esforço de observação.

- **Campos:** Objetivo; Estações; Datas; Protocolo.
- **Ações:** Criar; Atribuir; Encerrar.
- **Estados:** Sem esforço; Campanha fechada.
- **API:** `GET/POST /v1/campaigns`
- **Aceite:** Campanha possui unidade de análise e responsável.

## C06 · Novo registro terrestre

`/campo/registrar` · Campo

Capturar observação com contexto mínimo.

- **Campos:** Foto; Data; Autoria; Local; Esforço.
- **Ações:** Salvar rascunho; Enviar.
- **Estados:** Offline; Local impreciso; Metadado faltante.
- **API:** `POST /v1/observations`
- **Aceite:** Enviar foto não equivale a confirmar espécie ou número de animais.

## C07 · Lote e duplicatas

`/campo/lotes/:id` · Campo

Agrupar sequências do mesmo evento.

- **Campos:** Fotos; Intervalo; Estação; Checksum.
- **Ações:** Agrupar; Separar; Justificar.
- **Estados:** Possível duplicata; Arquivo repetido.
- **API:** `POST /v1/event-groups`
- **Aceite:** Um evento conserva todos os arquivos sem inflar a contagem.

## C08 · Fila offline e sincronização

`/campo/sincronizar` · Campo

Enviar rascunhos sem duplicar observações.

- **Campos:** Pendentes; Erros; Versão.
- **Ações:** Reenviar; Resolver conflito.
- **Estados:** Rede ausente; Conflito; Upload parcial.
- **API:** `POST /v1/sync`
- **Aceite:** Confirmar IDs do servidor antes de marcar como sincronizado.

## C09 · Fila independente

`/identificar` · Identificação

Distribuir registros sem revelar votos anteriores.

- **Campos:** Foto; Contexto permitido; Protocolo.
- **Ações:** Abrir; Pular.
- **Estados:** Sem tarefas; Registro já avaliado.
- **API:** `GET /v1/tasks`
- **Aceite:** A API não entrega contagem de votos antes da avaliação.

## C10 · Avaliar registro

`/identificar/:id` · Identificação

Receber hipótese, justificativa ou abstenção.

- **Campos:** Táxon; Confiança declarada; Justificativa.
- **Ações:** Votar; Abster; Enviar revisão.
- **Estados:** Ambíguo; Conflito de interesse.
- **API:** `POST /v1/identifications`
- **Aceite:** Uma avaliação por pessoa e versão; abstenção não é voto errado.

## C11 · Consenso e discordâncias

`/registros/:id/consenso` · Identificação

Comparar apoios após o voto autorizado.

- **Campos:** Contagens; Pesos; Cobertura.
- **Ações:** Confrontar; Encaminhar.
- **Estados:** Baixa concordância; Poucos votos.
- **API:** `GET /v1/observations/:id/consensus`
- **Aceite:** Mostrar o denominador e não chamar apoio de probabilidade sem calibração.

## C12 · Parecer especializado

`/revisao/:id` · Revisão

Resolver taxonomia com justificativa e histórico.

- **Campos:** Evidência; Hipóteses; Referência.
- **Ações:** Confirmar; Corrigir; Manter inconclusivo.
- **Estados:** Imagem insuficiente; Parecer divergente.
- **API:** `POST /v1/reviews`
- **Aceite:** Correção cria nova versão e não apaga avaliações anteriores.

## C13 · Importar dados orbitais

`/dados/orbitais` · Análise

Registrar produto, cobertura e licença.

- **Campos:** GeoTIFF; CRS; Data; Sensor; Fonte.
- **Ações:** Importar; Validar.
- **Estados:** Sem CRS; Nodata; Arquivo inválido.
- **API:** `POST /v1/rasters`
- **Aceite:** Camadas mantêm origem e checksum; não inventar uma API do INPE.

## C14 · Qualidade e habitat

`/analise/habitat` · Análise

Conferir máscara e comparação temporal.

- **Campos:** Nuvens; Classes; Resolução; Área.
- **Ações:** Revisar máscara; Calcular.
- **Estados:** Cobertura incompleta; Datas incompatíveis.
- **API:** `POST /v1/habitat-runs`
- **Aceite:** Área e fragmentos são calculados em CRS adequado e validados por referência.

## C15 · Ocupação e detecção

`/analise/ocupacao` · Análise

Estimar presença com detecção imperfeita.

- **Campos:** Visitas; Esforço; ψ; Intervalos.
- **Ações:** Ajustar; Diagnosticar; Comparar.
- **Estados:** Poucas visitas; Modelo não identificável.
- **API:** `POST /v1/occupancy-runs`
- **Aceite:** Relatar hipóteses, incerteza e esforço; ausência de registro não vira ausência certa.

## C16 · Validação e matriz de confusão

`/analise/validacao` · Análise

Medir acerto contra revisão isolada.

- **Campos:** Split; Matriz; Precisão; Recall; Abstenção.
- **Ações:** Comparar métodos; Exportar.
- **Estados:** Vazamento de evento; Classe sem suporte.
- **API:** `POST /v1/evaluations`
- **Aceite:** Separação espacial e por evento antecede ajuste de pesos.

## C17 · Cenários de priorização

`/analise/prioridades` · Análise

Comparar pesos e áreas a verificar.

- **Campos:** H; F; D; Pesos; Versão.
- **Ações:** Simular; Salvar; Enviar à vistoria.
- **Estados:** Sem ocupação; Pesos sem validação.
- **API:** `POST /v1/priority-runs`
- **Aceite:** O índice não altera a categoria oficial da espécie.

## C18 · Fontes, restrições e divulgação

`/gestao/fontes` · Gestão

Controlar licença e exposição de dados.

- **Campos:** Autoria; Licença; Precisão; Acesso.
- **Ações:** Aprovar; Agregar; Retirar.
- **Estados:** Sem autorização; Local sensível.
- **API:** `PATCH /v1/assets/:id/access`
- **Aceite:** Retirada impede novas consultas e considera derivados já publicados.

## C19 · Relatório e exportação

`/relatorios` · Gestão

Entregar método e evidência reproduzíveis.

- **Campos:** Campanha; Versões; Fontes; Limites.
- **Ações:** Exportar CSV/GeoJSON; Imprimir.
- **Estados:** Arquivo incompleto; Sem permissão.
- **API:** `POST /v1/reports`
- **Aceite:** O manifesto identifica conjunto, parâmetros, modelo e revisão.

## C20 · Entrar e criar conta

`/conta/entrar` · Conta

Identificar a pessoa antes de abrir recursos privados.

- **Campos:** Nome público; E-mail; Retorno autorizado.
- **Ações:** Entrar via OIDC; Criar conta; Sair.
- **Estados:** E-mail não confirmado; Sessão expirada; Acesso recusado.
- **API:** `GET /auth/login · GET /auth/callback`
- **Aceite:** Nunca aceitar uma URL de retorno externa sem validação; nenhum token no armazenamento local.

## C21 · Verificação e recuperação de acesso

`/conta/recuperar` · Conta

Concluir verificação e redefinição pelo provedor de identidade.

- **Campos:** Solicitação; Expiração; Estado do link.
- **Ações:** Pedir novo link; Confirmar e-mail; Definir senha no provedor.
- **Estados:** Link expirado; Uso anterior; Limite de tentativas.
- **API:** `Fluxos de ação do Keycloak`
- **Aceite:** Respostas de recuperação não revelam se um endereço está cadastrado.

## C22 · Perfil e preferências

`/conta/perfil` · Conta

Editar os próprios dados e preferências de uso.

- **Campos:** Nome; Idioma; Preferências; Sessões.
- **Ações:** Salvar; Encerrar sessão; Solicitar exportação.
- **Estados:** Erro de validação; Sem conexão; Alteração pendente.
- **API:** `GET/PATCH /v1/me`
- **Aceite:** Uma conta nunca consulta o perfil privado de outra alterando um ID.

## C23 · Equipe, acessos e auditoria

`/gestao/equipe` · Gestão

Vincular pessoas ao escopo correto e registrar mudanças.

- **Campos:** Pessoa; Papel; Projeto; Convites; Histórico.
- **Ações:** Convidar; Revogar; Consultar alterações.
- **Estados:** Convite vencido; Sem permissão; Último responsável.
- **API:** `GET/POST /v1/members · GET /v1/audit`
- **Aceite:** Revogação vale no servidor; manter pelo menos um responsável e trilha de alteração.
