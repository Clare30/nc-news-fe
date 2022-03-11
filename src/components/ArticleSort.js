export default function ArticleSort({ setSortBy, setOrder }) {
  const dropDown = [
    { query: "created_at", name: "Date" },
    { query: "comment_count", name: "Comments" },
    { query: "votes", name: "Votes" },
  ];

  return (
    <div>
      <select
        onChange={(event) => {
          setSortBy(event.target.value);
        }}
      >
        {dropDown.map(({name, query}) => {
          return (
            <option value={query} key={query}>
              {name}
            </option>
          );
        })}
      </select>

      <button
        onClick={() => {
          setOrder("ASC");
        }}
      >
        Ascending
      </button>
      <button
        onClick={() => {
          setOrder("DESC");
        }}
      >
        Decending
      </button>
    </div>
  );
}
