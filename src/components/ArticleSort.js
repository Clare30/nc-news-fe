export default function ArticleSort({
  setSortBy,
  setOrder,
  sortBy,
  button,
  setButton,
}) {
  const dropDown = [
    { query: "created_at", name: "Date" },
    { query: "comment_count", name: "Comments" },
    { query: "votes", name: "Votes" },
  ];

  const toggle = (event) => {
    setButton((currOpen) => !currOpen);
    setOrder(event.target.innerHTML.toUpperCase());
  };
  return (
    <div className="sort">
      <label>Sort By </label>
      <select
        defaultValue={sortBy}
        onChange={(event) => {
          setSortBy(event.target.value);
        }}
      >
        {dropDown.map(({ name, query }) => {
          return (
            <option value={query} key={query}>
              {name}
            </option>
          );
        })}
      </select>
      <button onClick={toggle}>{button ? "Desc" : "Asc"}</button>

      <button
        onClick={() => {
          setSortBy(null);
          setOrder(null);
        }}
      >
        Clear
      </button>
    </div>
  );
}
