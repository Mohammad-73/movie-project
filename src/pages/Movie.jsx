import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieDB from "../hooks/useMovieDB";
import Seo from "../components/seo/Seo";
import MovieInfo from "../components/movieInfo/MovieInfo";
import SimpleSwiper from "../components/simpleSwiper/SimpleSwiper";
import Container from "../components/layout/Container";
import PersonSwiper from "../components/personSwiper/PersonSwiper";
import { Tabs, Divider } from "antd";
const { TabPane } = Tabs;

export default function Movie() {
  const { id } = useParams();
  const { data = {}, loading, reFetch } = useMovieDB(`movie/${id}`);
  const similarMovie = useMovieDB(`movie/${id}/similar`);
  const credits = useMovieDB(`movie/${id}/credits`);

  useEffect(() => {
    reFetch();
    similarMovie.reFetch();
    credits.reFetch();
  }, [id]);

  return (
    <>
      <Seo title={data.title} />
      <MovieInfo data={data} />
      <Container>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Cast" key="1">
            <PersonSwiper slides={credits?.data?.cast} />
          </TabPane>
          <TabPane tab="Trailers" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </Container>
      <Divider />
      <Container>
        <div>
          <p
            style={{
              fontFamily: "Zen Tokyo Zoo , cursive",
              fontSize: 20,
              letterSpacing: 2,
              color: "#ef233c",
            }}
          >
            SIMILAR MOVIES
          </p>
        </div>
        <SimpleSwiper slides={similarMovie?.data?.results} />
      </Container>
    </>
  );
}

// import React from "react";
// import { useParams } from "react-router-dom";
// import useMovieDB from "../hooks/useMovieDB";
// // import antd
// import { Col, Row, Image, Typography, Divider, Rate } from "antd";
// const { Title, Text } = Typography;

// export default function Movie() {
//   const { id } = useParams();
//   const { data: movieData = {} } = useMovieDB(`movie/${id}`);
//   console.log(movieData);
//   return (
//     <div
//       className="movie-bg"
//       style={{
//         background:
//           "linear-gradient(rgb(255,255,255,0.9)100%,rgba(255,255,255,0.9)100%)," +
//           "url(" +
//           `https://image.tmdb.org/t/p/w500/${movieData.poster_path}` +
//           ")",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       <Row>
//         <Col xs={24} sm={24} md={8} lg={8} xl={10}>
//           <Image
//             width={350}
//             src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
//             placeholder={
//               <Image
//                 preview={false}
//                 src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
//                 width={350}
//               />
//             }
//           />
//           <Divider />
//           <Text className="zenTokyoZoo-title">
//             <Rate disabled allowHalf value={movieData.vote_average / 2} />{" "}
//             {movieData.vote_average / 2}
//           </Text>
//         </Col>
//         <Col xs={24} sm={24} md={16} lg={16} xl={14}>
//           <Title
//             className="zenTokyoZoo-title"
//             style={{
//               fontFamily: "Zen Tokyo Zoo , cursive",
//               color: "#f3523f",
//               letterSpacing: 3,
//               textShadow: " 2px 2px 4px #000000",
//             }}
//             level={2}
//           >
//             {movieData.original_title}
//           </Title>
//           {movieData?.genres?.map((genre) => (
//             <Text
//               italic
//               style={{ color: "whitesmoke" }}
//               className="genres-text montserrat-text"
//             >
//               {genre.name}
//             </Text>
//           ))}
//           <Divider />
//           <Text className="montserrat-text" style={{ color: "black" }}>
//             Budget: {movieData.budget}$
//           </Text>
//           <Divider />
//           <Text className="montserrat-text" style={{ color: "black" }}>
//             Production companies:{" "}
//             {movieData?.production_companies?.map((comp) => comp.name)}
//           </Text>
//           <Divider />
//           <Text className="montserrat-text" style={{ color: "black" }}>
//             Production countries:{" "}
//             {movieData?.production_countries?.map((coun) => coun.name)}
//           </Text>
//           <Divider />
//           <Text className="montserrat-text" style={{ color: "black" }}>
//             Release date: {movieData.release_date}
//           </Text>
//           <Divider />
//           <Text className="montserrat-text" style={{ color: "black" }}>
//             {movieData.overview}
//           </Text>
//         </Col>
//         <Col style={{ padding: 200 }} xs={24} sm={24} md={24} lg={24} xl={24}>
//           video
//         </Col>
//       </Row>
//     </div>
//   );
// }
