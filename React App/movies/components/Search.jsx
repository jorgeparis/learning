import "./Search.css";

function Search() {
  return (
    <>
      <div className="search-container">
        <input
          type="search"
          name=""
          id="search-input"
          className="search-input"
          placeholder="Search for movies ..."
        />
        <input type="submit" name="" id="search-btn" className="submit-btn" value={"Search"} />
      </div>
    </>
  );
}

export default Search;
