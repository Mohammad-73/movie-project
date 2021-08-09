import React from "react";
import useMovieDB from "../hooks/useMovieDB";
import { Link } from "react-router-dom";
import slugify from "../helper/slugify";
import { Pagination, Row, Col, Card, Spin } from "antd";
import Seo from "../components/seo/Seo";
import Container from "../components/layout/Container";
const { Meta } = Card;

export default function Home() {
  const {
    data: latestMovieData = {},
    reFetch,
    loading,
  } = useMovieDB("movie/top_rated");

  const { results = [], page, total_pages, total_results } = latestMovieData;

  function handleChangePage(page) {
    reFetch({ page });
  }

  return (
    <Container>
      <Seo title="Top Rated" />
      <Spin spinning={loading}>
        <Row gutter={[24, 24]}>
          {results?.map((movie) => (
            <Col key={movie.id} xs={12} sm={12} md={8} lg={6} xl={6}>
              <Link to={`/movies/${movie.id}/${slugify(movie?.title)}`}>
                <Card
                  hoverable
                  style={{ overflow: "hidden", height: 560 }}
                  cover={
                    <img
                      alt={movie.original_title}
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                  }
                >
                  <Meta
                    style={{ marginBottom: 5 }}
                    title={movie.original_title}
                  />
                  <Meta description={movie.overview} />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Spin>
      <Row style={{ marginTop: 32 }} justify="center">
        <Col>
          <Pagination
            page={latestMovieData.page}
            defaultCurrent={1}
            total={latestMovieData.total_results}
            showSizeChanger={false}
            defaultPageSize={20}
            onChange={handleChangePage}
          />
        </Col>
      </Row>
    </Container>
  );
}
