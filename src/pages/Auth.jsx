import React, { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Container from "../components/layout/Container";
import { UserContext } from "../context/UserContext";
import authService from "../service/authService";

export default function Auth() {
  const { setSessionId } = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();
  const requestToken = new URLSearchParams(location.search).get(
    "request_token"
  );

  useEffect(() => {
    if (requestToken) {
      const url =
        "https://api.themoviedb.org/3/authentication/session/new?api_key=afd6ea76f8c05c6675803101b0b04f2a";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ request_token: requestToken }),
      })
        .then((r) => r.json())
        .then((data) => {
          setSessionId(data.session_id);
          history.replace("/");
        });

      authService.createSession(requestToken).then((data) => {
        setSessionId(data.session_id);
        history.replace("/");
      });
    }
  }, [requestToken]);

  return (
    <Container>
      <div>
        <h1>"hi :)"</h1>
      </div>
    </Container>
  );
}
