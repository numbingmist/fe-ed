const API_URL = '//api.giphy.com/v1/gifs/search';

type Request = {
  query: string;
  limit?: number;
  offset?: number;
};

export type SearchResponse = {
  data: any[];
  pagination: {
    count: number;
    offset: number;
    total_count: number;
  };
};

export const search = ({
                        query, limit = 10, offset = 0
                      }: Request): Promise<SearchResponse> => {
  return fetch(`${API_URL}?q=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}&api_key=${process.env.REACT_APP_API_KEY}`).then((response) => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
};