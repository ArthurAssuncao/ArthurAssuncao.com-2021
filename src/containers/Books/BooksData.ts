interface BookData {
  name: string;
  url: string;
  state: 'in progress' | 'done' | 'draft';
  description: string;
  year: number;
  publisher: string;
}

const myBooks: BookData[] = [
  {
    name: 'Programação para quem não tem facilidade',
    url: 'https://arthurassuncao.gitbook.io/programacao-para-quem-nao-tem-facilidade/',
    state: 'in progress',
    description:
      'Introdução utilizando um conjunto de metodologias incríveis para o aprendizado de programação.',
    year: 2021,
    publisher: 'GitBook',
  },

  {
    name: 'Introdução à Informática',
    url: 'https://arthurassuncao.gitbook.io/introducao-a-informatica/',
    state: 'done',
    description: 'Abordar os conceitos básicos para uso de um computador.',
    year: 2021,
    publisher: 'GitBook',
  },
];

export type { BookData };
export default myBooks;
