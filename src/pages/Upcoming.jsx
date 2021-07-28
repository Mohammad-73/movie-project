import React from "react";
import useMovieDB from "../hooks/useMovieDB";
// import antd
import { Pagination, Row, Col, Card, Spin } from "antd";
import Seo from "../components/seo/Seo";
const { Meta } = Card;

export default function Home() {
  const {
    data: latestMovieData = {},
    reFetch,
    loading,
  } = useMovieDB("movie/upcoming");

  const { results = [], page, total_pages, total_results } = latestMovieData;

  function handleChangePage(page) {
    reFetch({ page });
  }

  return (
    <>
      <Seo title="Upcoming" />
      <Spin spinning={loading}>
        <Row gutter={[24, 24]}>
          {results?.map((movie) => (
            <Col key={movie.id} xs={24} sm={12} md={8} lg={6} xl={4}>
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
                <Meta
                  style={{ marginBottom: 5 }}
                  title={movie.original_title}
                />
                <Meta description={movie.overview} />
              </Card>
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
    </>
  );
}
