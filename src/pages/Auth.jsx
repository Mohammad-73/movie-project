import React, { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Container from "../components/layout/Container";
import { UserContext } from "../context/UserContext";
import authService from "../service/authService";
import Seo from "../components/seo/Seo";
import accountService from "../service/accountService";
import { message } from "antd";

export default function Auth() {
  const { setSessionId } = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();
  const requestToken = new URLSearchParams(location.search).get(
    "request_token"
  );

  useEffect(() => {
    if (requestToken) {
      authService.createSession(requestToken).then((data) => {
        setSessionId(data.session_id);
        history.replace("/");

        accountService.getDetails().then((data) => {
          message.success(
            `${data.name || data.username} welcome to anduril movie!`
          );
        });
      });
    }
  }, [requestToken]);

  return (
    <Container>
      <Seo title="auth" />
      <div>
        <h1>"hi :)"</h1>
      </div>
    </Container>
  );
}
