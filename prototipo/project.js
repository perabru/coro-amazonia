window.PROTOTYPE_CONFIG = {
  "id": "coro",
  "name": "CORO",
  "initial": "map",
  "dark": false,
  "avatar": "CP",
  "roles": [
    {
      "id": "field",
      "name": "Campo",
      "screens": [
        "map",
        "record",
        "field"
      ]
    },
    {
      "id": "community",
      "name": "Comunidade",
      "screens": [
        "record",
        "classify",
        "consensus"
      ]
    },
    {
      "id": "review",
      "name": "Revisão",
      "screens": [
        "review",
        "map"
      ]
    }
  ],
  "nav": [
    [
      "Mapa",
      "map"
    ],
    [
      "Classificar",
      "classify"
    ],
    [
      "Revisar",
      "review"
    ]
  ],
  "screens": [
    {
      "id": "map",
      "title": "Mapa de registros",
      "note": "Abra um ponto no mapa ou registre uma nova observação."
    },
    {
      "id": "record",
      "title": "Evidência",
      "note": "Leia o contexto da observação antes de classificar."
    },
    {
      "id": "field",
      "title": "Novo registro",
      "note": "Salve uma observação fictícia e acompanhe seu percurso."
    },
    {
      "id": "classify",
      "title": "Classificação",
      "note": "Escolha uma hipótese antes de ver os votos do grupo."
    },
    {
      "id": "consensus",
      "title": "Consenso",
      "note": "Compare as respostas de demonstração e encaminhe à revisão."
    },
    {
      "id": "review",
      "title": "Revisão especializada",
      "note": "Registre uma decisão e veja o registro atualizado no mapa."
    }
  ]
};
