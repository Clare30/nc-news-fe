export default function ArticleSort({ setSortBy, setOrder }) {
  const dropDown = ["created_at", "comment_count", "votes"];

  return (
    <div>
      <select
        onChange={(event) => {
          setSortBy(event.target.value);
        }}
      >
        {dropDown.map((sort) => {
          return <option value={sort} key={sort}>
            {sort}
          </option>;
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
