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
    <div className="select is-multiple is-align-items-center is-inline-flex">
      <label >Sort By</label>
      <select className="mx-3"
        defaultValue={sortBy}
        onChange={(event) => {
          setSortBy(event.target.value);
        }}
      >
        <option  value="created_at">Date</option>
        <option  value="comment_count">Comments</option>
        <option  value="votes">Votes</option>
      </select>
      <button className=" button" onClick={toggle}>{button ? "Desc" : "Asc"}</button>
    </div>
  );
}
