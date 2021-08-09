import React from "react";
import useMovieDB from "../hooks/useMovieDB";
import { Link } from "react-router-dom";
import slugify from "../helper/slugify";
import Container from "../components/layout/Container";
import { Pagination, Row, Col, Card, Spin } from "antd";
import Seo from "../components/seo/Seo";
const { Meta } = Card;

export default function TvNowPlaying() {
  const {
    data: latestTvData = {},
    reFetch,
    loading,
  } = useMovieDB("tv/on_the_air");

  const { results = [], page, total_pages, total_results } = latestTvData;

  function handleChangePage(page) {
    reFetch({ page });
  }

  return (
    <Container>
      <Seo title="Now Playing" />
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
            page={latestTvData.page}
            defaultCurrent={1}
            total={latestTvData.total_results}
            showSizeChanger={false}
            defaultPageSize={20}
            onChange={handleChangePage}
          />
        </Col>
      </Row>
    </Container>
  );
}
