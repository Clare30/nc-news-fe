export default function ArticleSort({
  setSortBy,
  setOrder,
  sortBy,
  button,
  setButton,
}) {
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
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
      <button onClick={toggle}>{button ? "Desc" : "Asc"}</button>
    </div>
  );
}
