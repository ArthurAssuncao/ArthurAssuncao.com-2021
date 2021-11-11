// based on API beta: https://developers.forem.com/api/#section/Authentication

import fetch from 'isomorphic-fetch';
import { Article } from './interfaces';

const BASE_API_URL = 'https://dev.to/api';

interface DEV_TO_API_REQUEST {
  articles: () => Promise<Array<Article>>;
  article: (id: number) => Promise<Article>;
}

const DevTo = (
  apiKey = '',
  username = 'arthurassuncao'
): DEV_TO_API_REQUEST => {
  return {
    articles: async (): Promise<Array<Article>> => {
      const url = `${BASE_API_URL}/articles?username=${username}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          ...(apiKey && { 'api-key': apiKey }),
          'Content-Type': 'application/json',
        },
      });
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return await response.json();
    },
    article: async (id: number): Promise<Article> => {
      const url = `${BASE_API_URL}/articles/${id}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          ...(apiKey && { 'api-key': apiKey }),
          'Content-Type': 'application/json',
        },
      });
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return await response.json();
    },
  };
};

export { DevTo };
