import React from "react";
import { search, SearchResponse } from "../services";

type Options = {
  initialQuery?: string;
  limit?: number;
};

const useGifSearch = ({ limit = 10 }: Options) => {
  const [data, setData] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [offset, setOffset] = React.useState(0);
  const [prevQuery, setPrevQuery] = React.useState('');
  
  const load = React.useCallback((query: string) => {
    setIsLoading(true);
    search({ query, limit }).then((response: SearchResponse) => {
      setData(response.data);
      setPrevQuery(query);
    }).finally(() => {
      setIsLoading(false);
    });
  }, [limit]);

  const loadMore = React.useCallback(() => {
    setIsLoading(true);
    search({ query: prevQuery, limit, offset: offset + limit })
      .then((response: SearchResponse) => {
        setData((prevData: any[]) => {
          return [...prevData, ...response.data];
        });
        setOffset((prevOffset: number) => {
          return prevOffset += response.pagination.count;
        });
      }).finally(() => {
        setIsLoading(false);
      });
  }, [prevQuery, limit, offset]);

  return {
    load, loadMore, data, isLoading
  };
};

export default useGifSearch;