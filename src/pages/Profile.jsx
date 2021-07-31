import React, { useContext } from "react";
import Container from "../components/layout/Container";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);
  return <Container>{user.name}</Container>;
}
