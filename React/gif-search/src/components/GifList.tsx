interface Props {
  items: any[];
}

const GifList = (props: Props) => {
  return (
    <ul>
      {props.items.map((i) => {
        return <li key={i.id}>
          <img src={i.images.fixed_height.url} alt="Gif"/>
        </li>
      })}
    </ul>
  );
};

export default GifList;