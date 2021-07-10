import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "antd";
const { Meta } = Card;

export default function Home() {
  const [latestMovieData, setLatestMovieData] = useState({});
  const { results, page, total_pages, total_results } = latestMovieData;

  console.log(latestMovieData);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=afd6ea76f8c05c6675803101b0b04f2a&language=en-US"
    )
      .then((result) => result.json())
      .then(setLatestMovieData);
  }, []);

  return (
    <Row gutter={[24, 24]}>
      {results &&
        results.map((movie) => (
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              hoverable
              style={{ overflow: "hidden", height: 500 }}
              cover={
                <img
                  alt={movie.original_title}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
              }
            >
              <Meta style={{ marginBottom: 5 }} title={movie.original_title} />
              <Meta description={movie.overview} />
            </Card>
          </Col>
        ))}
    </Row>
  );
}
