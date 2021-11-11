interface BookData {
  name: string;
  url: string;
  state: 'in progress' | 'done' | 'draft';
  description: string;
  year: number;
  publisher: string;
  cover: string;
}

const myBooks: BookData[] = [
  {
    name: 'Programação para quem não tem facilidade',
    url: 'https://arthurassuncao.notion.site/Ebook-Programa-o-para-quem-n-o-tem-facilidade-Cap-tulo-0-Conhecendo-a-metodologia-72ec9a6c409342a3b8314d80677e756f',
    state: 'in progress',
    description:
      'Introdução utilizando um conjunto de metodologias incríveis para o aprendizado de programação.',
    year: 2021,
    publisher: 'Notion',
    cover:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/26c83597-8ec0-4433-93e0-ae8b4fddec72/capa.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211111T131935Z&X-Amz-Expires=86400&X-Amz-Signature=8ce2c8d5cc057dd03cff140a5d8d85ad82a8d3c9962be5cbb33b70e66b1f4f7a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22capa.png%22',
  },

  {
    name: 'Conceitos básicos de Informática',
    url: 'https://arthurassuncao.notion.site/Conceitos-B-sicos-de-Inform-tica-d356a28d68af42b5929eb05011bc8168',
    state: 'done',
    description: 'Abordar os conceitos básicos para uso de um computador.',
    year: 2021,
    publisher: 'Notion',
    cover:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5c3d67c1-f750-4497-97b4-82382576ae4d/capa.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211111T132010Z&X-Amz-Expires=86400&X-Amz-Signature=563e99bf637aa03d54e759403cbbe9f55a31269ac1cbc687ed6a3771ec039090&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22capa.png%22',
  },
];

export type { BookData };
export default myBooks;
