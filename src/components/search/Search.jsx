import React, { useEffect, useState } from "react";
import { Input, AutoComplete, Rate, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import useDebounce from "../../hooks/useDebounce";
import classes from "./Search.module.scss";
import { useHistory } from "react-router-dom";
import slugify from "../../helper/slugify";
const renderTitle = (title) => (
  <span>
    {title}
    <a
      style={{
        float: "right",
      }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);

const renderItem = (title, id, label) => ({
  value: String(id),
  label: (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {title}
      <span>{label}</span>
    </div>
  ),
});

export default function Search() {
  const history = useHistory();
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [searchedItem, setSearchedItem] = useState([]);
  const debounceQuery = useDebounce(query, 500);

  function handleLoadMovie(id) {
    const data = searchedItem.find((d) => d.id == id);
    setInputValue("");

    switch (data.media_type) {
      case "movie":
        return history.push(`/movies/${data.id}/${slugify(data.title)}`);
      case "tv":
        return history.push(`/tv-shows/${data.id}/${slugify(data.name)}`);
      case "person":
        return history.push(`/celebrities/${data.id}/${slugify(data.name)}`);
    }
  }

  useEffect(() => {
    if (debounceQuery) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=afd6ea76f8c05c6675803101b0b04f2a&language=en-US&query=${query}&page=1&include_adult=false`
      )
        .then((res) => res.json())
        .then((data) => setSearchedItem(data.results));
    }
  }, [debounceQuery]);

  function makeOptions() {
    if (searchedItem.length && query) {
      return [
        {
          label: renderTitle("Movies"),
          options: searchedItem
            .filter((item) => item.media_type === "movie")
            .map((i) =>
              renderItem(
                i.title,
                i.id,
                <Rate
                  style={{ fontSize: 13 }}
                  allowHalf
                  value={i.vote_average / 2}
                />
              )
            ),
        },
        {
          label: renderTitle("TV Shows"),
          options: searchedItem
            .filter((item) => item.media_type === "tv")
            .map((i) =>
              renderItem(
                i.name,
                i.id,
                <Rate
                  style={{ fontSize: 13 }}
                  allowHalf
                  value={i.vote_average / 2}
                />
              )
            ),
        },
        {
          label: renderTitle("People"),
          options: searchedItem
            .filter((item) => item.media_type === "person")
            .map((i) =>
              renderItem(
                i.name,
                i.id,
                <Avatar
                  {...(i.profile_path
                    ? {
                        src: `https://image.tmdb.org/t/p/w45/${i.profile_path}`,
                      }
                    : { icon: <UserOutlined /> })}
                />
              )
            ),
        },
      ].filter((type) => type.options.length);
    }

    return null;
  }

  return (
    <div className={classes.root}>
      <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={500}
        options={makeOptions()}
        onSearch={(e) => setQuery(e)}
        onSelect={handleLoadMovie}
        onChange={setInputValue}
        value={inputValue}
      >
        <Input.Search size="large" placeholder="search here" />
      </AutoComplete>
    </div>
  );
}
