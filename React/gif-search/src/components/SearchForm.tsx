import React from "react";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onSearch?: (query: string) => void;
}

const SearchForm = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => {

  const [query, setQuery] = useState('');
  // const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.stopPropagation();
    event.preventDefault();

    if (props.onSearch) {
      props.onSearch(query);
    }
  };

  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input ref={ref} required={true} value={query} onChange={handleChange} type="search" placeholder="clouds"/>
    </form>
  );
});

export default SearchForm;