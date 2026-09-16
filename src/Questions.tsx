interface Pregunta {
  id: number;
  pregunta: string;
  respuestas: Respuesta[];
}

interface Respuesta {
  texto: string;
  puntos: number;
  revelada: boolean;
}

// --- Banco de preguntas ---
export const PREGUNTAS: Pregunta[] = [
  {
    id: 1,
    pregunta: "Menciona algo que los mexicanos le ponen a casi toda la comida",
    respuestas: [
      { texto: "Limón", puntos: 38, revelada: false },
      { texto: "Salsa / Chile", puntos: 32, revelada: false },
      { texto: "Aguacate / Guacamole", puntos: 14, revelada: false },
      { texto: "Tortillas", puntos: 10, revelada: false },
      { texto: "Sal", puntos: 6, revelada: false },
    ],
  },
  {
    id: 2,
    pregunta:
      "Menciona una excusa común para llegar tarde al trabajo o escuela",
    respuestas: [
      { texto: "El tráfico / Embotellamiento", puntos: 45, revelada: false },
      {
        texto: "Se me pegaron las cobijas / Se apagó la alarma",
        puntos: 28,
        revelada: false,
      },
      {
        texto: "El transporte público se retrasó",
        puntos: 15,
        revelada: false,
      },
      {
        texto: "Se me atravesó una marcha / manifestación",
        puntos: 7,
        revelada: false,
      },
      { texto: "Tuve una emergencia familiar", puntos: 5, revelada: false },
    ],
  },
  {
    id: 3,
    pregunta: "¿Qué objeto no puede faltar en una fiesta mexicana?",
    respuestas: [
      { texto: "Piñata", puntos: 40, revelada: false },
      { texto: "Tequila / Cerveza", puntos: 25, revelada: false },
      { texto: "Música / Mariachi / Bocina", puntos: 18, revelada: false },
      { texto: "Pastel", puntos: 10, revelada: false },
      { texto: "Botana / Botanas preparadas", puntos: 7, revelada: false },
    ],
  },
];

export const PREGUNTAS_EMBARAZO: Pregunta[] = [
  {
    id: 101,
    pregunta: "Menciona un antojo muy común durante el embarazo",
    respuestas: [
      {
        texto: "Pepinillos / Cosas agrias o vinagre",
        puntos: 30,
        revelada: false,
      },
      { texto: "Chocolates / Dulces", puntos: 20, revelada: false },
      { texto: "Nieve / Helado", puntos: 19, revelada: false },
      { texto: "Fruta con chile / Chamoy", puntos: 12, revelada: false },
      { texto: "Papas fritas / Salado", puntos: 10, revelada: false },
    ],
  },
  {
    id: 102,
    pregunta: "Menciona un síntoma molesto de los primeros meses de embarazo",
    respuestas: [
      { texto: "Náuseas / Asco a la comida", puntos: 37, revelada: false },
      { texto: "Mucho sueño / Cansancio", puntos: 28, revelada: false },
      { texto: "Cambios de humor / Sensibilidad", puntos: 18, revelada: false },
      { texto: "Ganas frecuentes de orinar", puntos: 10, revelada: false },
      { texto: "Colicos (leves)", puntos: 9, revelada: false },
    ],
  },
  {
    id: 103,
    pregunta:
      "¿Qué es lo primero que hace una mujer al enterarse que está embarazada?",
    respuestas: [
      { texto: "Contarle a la pareja / Esposo", puntos: 38, revelada: false },
      { texto: "Llorar de la emoción o nervios", puntos: 21, revelada: false },
      { texto: "Tomarse otra prueba de embarazo", puntos: 12, revelada: false },
      { texto: "Llamar a su mamá o mejor amiga", puntos: 9, revelada: false },
      { texto: "Agendar cita con el ginecólogo", puntos: 5, revelada: false },
    ],
  },
  {
    id: 104,
    pregunta: "Menciona algo que le prohíben o limitan a una embarazada",
    respuestas: [
      { texto: "Tomar alcohol / Cerveza", puntos: 33, revelada: false },
      { texto: "Comer mariscos crudos / Sushi", puntos: 27, revelada: false },
      { texto: "Tomar café / Cafeína", puntos: 20, revelada: false },
      { texto: "Cargar cosas pesadas", puntos: 8, revelada: false },
      { texto: "Medicamentos sin receta", puntos: 7, revelada: false },
    ],
  },
  {
    id: 105,
    pregunta:
      "Menciona un mito o creencia popular para adivinar el sexo del bebé",
    respuestas: [
      {
        texto: "La forma de la panza (picuda o redonda)",
        puntos: 36,
        revelada: false,
      },
      { texto: "La prueba de la cadena o anillo", puntos: 23, revelada: false },
      { texto: "Si la mamá tiene o no náuseas", puntos: 17, revelada: false },
      { texto: "La tabla o calendario chino", puntos: 10, revelada: false },
      { texto: "La frecuencia cardíaca en el eco", puntos: 4, revelada: false },
    ],
  },
  {
    id: 106,
    pregunta:
      "¿Qué estudio o estudio de ultrasonido esperan con más emoción los papás?",
    respuestas: [
      {
        texto: "Ultrasonido para saber si es niño o niña",
        puntos: 33,
        revelada: false,
      },
      {
        texto: "Ultrasonido 4D / 5D (ver la carita)",
        puntos: 22,
        revelada: false,
      },
      {
        texto: "El primer ultrasonido (escuchar el corazón)",
        puntos: 17,
        revelada: false,
      },
      { texto: "Prueba de sangre / ADN prenatal", puntos: 9, revelada: false },
      { texto: "Ecocardiograma fetal", puntos: 4, revelada: false },
    ],
  },
  {
    id: 107,
    pregunta:
      "Menciona algo indispensable que la mamá empaca en la maleta del hospital",
    respuestas: [
      {
        texto: "Ropa para salir del bebé (primer mameluco)",
        puntos: 30,
        revelada: false,
      },
      { texto: "Pañales para recién nacido", puntos: 21, revelada: false },
      {
        texto: "Bata cómoda o pijamas para la mamá",
        puntos: 14,
        revelada: false,
      },
      { texto: "Cargador de celular", puntos: 12, revelada: false },
      {
        texto: "Artículos de aseo personal / Maquillaje",
        puntos: 10,
        revelada: false,
      },
    ],
  },
  {
    id: 108,
    pregunta:
      "Menciona un malestar físico típico de los últimos meses de embarazo",
    respuestas: [
      { texto: "Dolor de espalda / Cintura", puntos: 30, revelada: false },
      { texto: "Pies o tobillos hinchados", puntos: 28, revelada: false },
      { texto: "Acidez / Reflujo", puntos: 17, revelada: false },
      {
        texto: "Insomnio / Dificultad para acomodarse",
        puntos: 10,
        revelada: false,
      },
      {
        texto: "Contracciones falsas (Braxton Hicks)",
        puntos: 8,
        revelada: false,
      },
    ],
  },
  {
    id: 109,
    pregunta: "¿Qué compra la embarazada en cuanto se entera de la noticia?",
    respuestas: [
      { texto: "Ropita de bebé / Calcetas minis", puntos: 28, revelada: false },
      { texto: "Crema para estrías / Aceites", puntos: 21, revelada: false },
      {
        texto: "Vitaminas prenatales / Ácido fólico",
        puntos: 20,
        revelada: false,
      },
      { texto: "Almohada de embarazo", puntos: 12, revelada: false },
      { texto: "Diario o libro del bebé", puntos: 10, revelada: false },
    ],
  },
  {
    id: 110,
    pregunta: "Menciona una señal clara de que ya inició el trabajo de parto",
    respuestas: [
      { texto: "Rompimiento de fuente / Agua", puntos: 27, revelada: false },
      {
        texto: "Contracciones seguidas y dolorosas",
        puntos: 22,
        revelada: false,
      },
      { texto: "Expulsión del tapón mucoso", puntos: 15, revelada: false },
      { texto: "Dolor intenso en la zona lumbar", puntos: 10, revelada: false },
      { texto: "Sensación de presión pélvica", puntos: 5, revelada: false },
    ],
  },
];

export const PREGUNTAS_PATERNIDAD: Pregunta[] = [
  {
    id: 201,
    pregunta: "Menciona el mayor desafío que enfrentan los papás primerizos",
    respuestas: [
      { texto: "Dormir poco / Desveladas", puntos: 30, revelada: false },
      { texto: "Aprender a calmar el llanto", puntos: 21, revelada: false },
      { texto: "Cambiar pañales sucios", puntos: 13, revelada: false },
      {
        texto: "Saber si el bebé tiene fiebre o dolor",
        puntos: 9,
        revelada: false,
      },
      { texto: "Organizar los tiempos del hogar", puntos: 8, revelada: false },
    ],
  },
  {
    id: 202,
    pregunta:
      "Menciona algo que cambia radicalmente en tu vida cuando tienes un bebé",
    respuestas: [
      { texto: "Las horas de sueño", puntos: 30, revelada: false },
      {
        texto: "Las salidas con amigos / Fiestas",
        puntos: 25,
        revelada: false,
      },
      { texto: "Las finanzas / Gastos del hogar", puntos: 20, revelada: false },
      { texto: "El tiempo a solas en pareja", puntos: 10, revelada: false },
      {
        texto: "Llevar pañalera / maleta al salir",
        puntos: 4,
        revelada: false,
      },
    ],
  },
  {
    id: 203,
    pregunta:
      "¿Qué objeto no puede faltar en la pañalera cuando salen de casa?",
    respuestas: [
      { texto: "Pañales de repuesto", puntos: 21, revelada: false },
      { texto: "Toallitas húmedas", puntos: 20, revelada: false },
      { texto: "Muda de ropa limpia", puntos: 18, revelada: false },
      { texto: "Biberón / Mamila con leche", puntos: 13, revelada: false },
      { texto: "Chupón / Chupones", puntos: 9, revelada: false },
    ],
  },
  {
    id: 204,
    pregunta: "Menciona una habilidad que los papás desarrollan por necesidad",
    respuestas: [
      {
        texto: "Cambiar pañales a ciegas o rapidísimo",
        puntos: 26,
        revelada: false,
      },
      { texto: "Hacer todo con una sola mano", puntos: 21, revelada: false },
      { texto: "Dormir en lapsos de 20 minutos", puntos: 18, revelada: false },
      {
        texto: "Descifrar los distintos tipos de llanto",
        puntos: 10,
        revelada: false,
      },
      {
        texto: "Cantar o inventar canciones infantiles",
        puntos: 8,
        revelada: false,
      },
    ],
  },
  {
    id: 205,
    pregunta:
      "Menciona un regalo de Baby Shower que los papás siempre agradecen",
    respuestas: [
      { texto: "Paquetes grandes de pañales", puntos: 30, revelada: false },
      { texto: "Toallitas húmedas en cantidad", puntos: 20, revelada: false },
      {
        texto: "Mimetas / Mamelucos de varios tamaños",
        puntos: 18,
        revelada: false,
      },
      { texto: "Cochecito / Carriola", puntos: 12, revelada: false },
      { texto: "Tarjetas de regalo / Dinero", puntos: 10, revelada: false },
    ],
  },
  {
    id: 206,
    pregunta:
      "¿A quién le piden consejo primero los papás cuando el bebé no para de llorar?",
    respuestas: [
      {
        texto: "A la abuela / La mamá de alguno de los dos",
        puntos: 22,
        revelada: false,
      },
      { texto: "Al pediatra", puntos: 20, revelada: false },
      {
        texto: "Buscan en Google / YouTube / TikTok",
        puntos: 18,
        revelada: false,
      },
      {
        texto: "A una amiga o familiar con hijos",
        puntos: 10,
        revelada: false,
      },
      { texto: "A un grupo de WhatsApp de papás", puntos: 5, revelada: false },
    ],
  },
  {
    id: 207,
    pregunta:
      "Menciona algo que el papá suele hacer torpemente las primeras veces",
    respuestas: [
      { texto: "Poner el pañal al revés o flojo", puntos: 29, revelada: false },
      {
        texto: "Bañar al bebé con miedo a que se resbale",
        puntos: 22,
        revelada: false,
      },
      {
        texto: "Ponerle la ropita (meter la cabeza o los brazos)",
        puntos: 19,
        revelada: false,
      },
      { texto: "Sacarle los gases o el aire", puntos: 12, revelada: false },
      { texto: "Instalar el portabebé en el auto", puntos: 5, revelada: false },
    ],
  },
  {
    id: 208,
    pregunta:
      "Menciona una frase que dicen las mamás y que jurabas que nunca dirías",
    respuestas: [
      { texto: "¡Te lo dije!", puntos: 27, revelada: false },
      { texto: "Porque soy tu mamá y punto", puntos: 22, revelada: false },
      {
        texto: "Cuando tengas tus hijos me vas a entender",
        puntos: 19,
        revelada: false,
      },
      {
        texto: "Tómate un suéter que va a refrescar",
        puntos: 15,
        revelada: false,
      },
      { texto: "¡A comer que se enfría!", puntos: 10, revelada: false },
    ],
  },
  {
    id: 209,
    pregunta:
      "Menciona un lugar donde los papás pierden la paciencia rápidamente",
    respuestas: [
      { texto: "El supermercado / Tienda", puntos: 30, revelada: false },
      { texto: "El restaurante / Comiendo fuera", puntos: 22, revelada: false },
      {
        texto: "El consultorio del médico / Sala de espera",
        puntos: 20,
        revelada: false,
      },
      {
        texto: "Un viaje largo en coche / Tráfico",
        puntos: 15,
        revelada: false,
      },
      { texto: "En un avión o autobús", puntos: 5, revelada: false },
    ],
  },
  {
    id: 210,
    pregunta:
      "Menciona qué es lo primero que limpian los papás con una toallita húmeda",
    respuestas: [
      { texto: "Las manitas o la cara manchada", puntos: 25, revelada: false },
      { texto: "La pompi / La zona del pañal", puntos: 21, revelada: false },
      {
        texto: "Un juguete o chupón que cayó al suelo",
        puntos: 18,
        revelada: false,
      },
      { texto: "La mesa o silla del restaurante", puntos: 10, revelada: false },
      { texto: "Su propia ropa manchada de leche", puntos: 9, revelada: false },
    ],
  },
];

export const PREGUNTAS_BEBES: Pregunta[] = [
  {
    id: 301,
    pregunta:
      "Menciona algo que hace un bebé y que a los adultos les da mucha risa o ternura",
    respuestas: [
      { texto: "Sonreír o reírse a carcajadas", puntos: 24, revelada: false },
      { texto: "Estornudar o estirarse", puntos: 22, revelada: false },
      { texto: "Hacer caras raras / Muecas", puntos: 14, revelada: false },
      { texto: "Balbucear o intentar hablar", puntos: 13, revelada: false },
      { texto: "Llevarse los pies a la boca", puntos: 5, revelada: false },
    ],
  },
  {
    id: 302,
    pregunta: "Menciona la razón principal por la que empieza a llorar un bebé",
    respuestas: [
      { texto: "Tiene hambre / Quiere leche", puntos: 33, revelada: false },
      { texto: "Tiene el pañal sucio o mojado", puntos: 21, revelada: false },
      { texto: "Tiene sueño o está cansado", puntos: 17, revelada: false },
      { texto: "Tiene cólicos o gases", puntos: 10, revelada: false },
      { texto: "Quiere que lo carguen / Abrazos", puntos: 4, revelada: false },
    ],
  },
  {
    id: 303,
    pregunta:
      "Menciona un objeto aleatorio que los bebés prefieren morder o chupar",
    respuestas: [
      { texto: "Sus propios dedos / Puños", puntos: 28, revelada: false },
      { texto: "Las llaves de la casa o coche", puntos: 21, revelada: false },
      { texto: "El control remoto de la TV", puntos: 20, revelada: false },
      { texto: "El celular de los papás", puntos: 16, revelada: false },
      { texto: "Juguetes", puntos: 10, revelada: false },
    ],
  },
  {
    id: 304,
    pregunta:
      'Menciona el primer logro o "hito" que los papás celebran del bebé',
    respuestas: [
      { texto: "Su primera palabra (mamá/papá)", puntos: 28, revelada: false },
      { texto: "Dar sus primeros pasos", puntos: 27, revelada: false },
      { texto: "Gatear", puntos: 20, revelada: false },
      { texto: "Sentarse solito", puntos: 12, revelada: false },
      { texto: "Que le salga su primer diente", puntos: 10, revelada: false },
    ],
  },
  {
    id: 305,
    pregunta:
      "Menciona un truco o sonido que hacen los papás para calmar a un bebé",
    respuestas: [
      {
        texto: 'Hacer el sonido "Shhh... shhh..."',
        puntos: 29,
        revelada: false,
      },
      { texto: "Cantar una cuna o arrorró", puntos: 23, revelada: false },
      {
        texto: "Poner música suave / Ruido blanco",
        puntos: 18,
        revelada: false,
      },
      { texto: "Mecerlo o pasearlo en brazos", puntos: 11, revelada: false },
      {
        texto: "Hacer ruidos con la boca o sonajas",
        puntos: 5,
        revelada: false,
      },
    ],
  },
  {
    id: 306,
    pregunta:
      "Menciona una textura o alimento que el bebé batea o hace muecas al probar",
    respuestas: [
      { texto: "El limón o frutas ácidas", puntos: 33, revelada: false },
      {
        texto: "Las papillas de verduras (aguacate/brócoli)",
        puntos: 30,
        revelada: false,
      },
      { texto: "La carne o pollo desmenuzado", puntos: 14, revelada: false },
      { texto: "Los yogures sin azúcar", puntos: 10, revelada: false },
      { texto: "La avena / Cereales integrales", puntos: 6, revelada: false },
    ],
  },
  {
    id: 307,
    pregunta:
      "Menciona una travesura común que hace un bebé cuando aprende a gatear",
    respuestas: [
      { texto: "Abrir los cajones o alacenas", puntos: 38, revelada: false },
      {
        texto: "Tirar el alimento o agua de las mascotas",
        puntos: 25,
        revelada: false,
      },
      {
        texto: "Jalar los cables o conectar aparatos",
        puntos: 16,
        revelada: false,
      },
      {
        texto: "Meterse cosas pequeñas a la boca",
        puntos: 10,
        revelada: false,
      },
      { texto: "Desenrollar el papel higiénico", puntos: 6, revelada: false },
    ],
  },
  {
    id: 308,
    pregunta:
      "Menciona un lugar raro o incómodo donde un bebé puede quedarse dormido",
    respuestas: [
      { texto: "En la silla alta / Comiendo", puntos: 39, revelada: false },
      { texto: "En el suelo / Sobre la alfombra", puntos: 27, revelada: false },
      { texto: "En el portabebé / Carriola", puntos: 18, revelada: false },
      { texto: "Sentadito en el sillón", puntos: 11, revelada: false },
      { texto: "A mitad de un juego", puntos: 5, revelada: false },
    ],
  },
  {
    id: 309,
    pregunta:
      "Menciona algo que los bebés hacen justo después de que les pones un pañal limpio",
    respuestas: [
      {
        texto: "Volverse a hacer del baño (hacer caca)",
        puntos: 60,
        revelada: false,
      },
      { texto: "Regurgitar / Repetir la leche", puntos: 20, revelada: false },
      { texto: "Orinarse en la mesa cambiadora", puntos: 12, revelada: false },
      {
        texto: "Jalarse o intentarse quitar el pañal",
        puntos: 5,
        revelada: false,
      },
      { texto: "Quedarse dormidos", puntos: 3, revelada: false },
    ],
  },
  {
    id: 310,
    pregunta:
      "Menciona el juego o gesto con el que más se divierte un bebé de meses",
    respuestas: [
      {
        texto: 'Jugando a "¿Dónde está el bebé? ¡Aquí está!" (Peek-a-boo)',
        puntos: 48,
        revelada: false,
      },
      {
        texto: "Hacerle cosquillitas en el vientre o pies",
        puntos: 25,
        revelada: false,
      },
      {
        texto: "Tirar juguetes al suelo para que los levanten",
        puntos: 14,
        revelada: false,
      },
      {
        texto: "Hacerle caras cómicas o sacar la lengua",
        puntos: 8,
        revelada: false,
      },
      { texto: 'Aplaudir o hacer "tortitas"', puntos: 5, revelada: false },
    ],
  },
];

export const allQuestions = [
  ...PREGUNTAS_BEBES,
  ...PREGUNTAS_EMBARAZO,
  ...PREGUNTAS_PATERNIDAD,
];
