export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuál es el planeta más grande de nuestro sistema solar?",
    options: ["Marte", "Saturno", "Júpiter", "Neptuno"],
    answer: "Júpiter",
    explanation: "Júpiter es más de dos veces más masivo que todos los demás planetas del sistema solar combinados.",
  },
  {
    id: 2,
    question: "¿Qué tipo de objeto es el Sol?",
    options: ["Planeta", "Asteroide", "Galaxia", "Estrella"],
    answer: "Estrella",
    explanation: "El Sol es una estrella de secuencia principal de tipo G, el centro de nuestro sistema solar.",
  },
  {
    id: 3,
    question: "¿Cuál es la galaxia más cercana a la Vía Láctea?",
    options: ["Andrómeda", "Sombrero", "Remolino", "Triángulo"],
    answer: "Andrómeda",
    explanation: "Andrómeda es la galaxia espiral más cercana a nosotros y se encuentra a unos 2.5 millones de años luz.",
  },
  {
    id: 4,
    question: "¿Quién fue el primer ser humano en viajar al espacio?",
    options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"],
    answer: "Yuri Gagarin",
    explanation: "El cosmonauta soviético Yuri Gagarin completó una órbita de la Tierra el 12 de abril de 1961.",
  },
  {
    id: 5,
    question: "¿Qué planeta es conocido como el 'Planeta Rojo'?",
    options: ["Venus", "Marte", "Mercurio", "Plutón"],
    answer: "Marte",
    explanation: "Marte tiene un color rojo distintivo debido al óxido de hierro en su superficie.",
  },
];
