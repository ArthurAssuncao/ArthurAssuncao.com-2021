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
    name: 'A mais didática introdução à programação de computadores',
    url: 'https://arthurassuncao.gitbook.io/a-mais-didatica-introducao-a-programacao-de-comput/',
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
