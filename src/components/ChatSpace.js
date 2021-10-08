import React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { MessageLeft, MessageRight } from "./Message";
import moment from "moment";

const MyCard = styled(Card)({
  //   alignItems: "center",
  display: "flex",
  flexDirection: "column",
  padding: "1em",
  minHeight: "70vh",
  margin: 10,
  overflowY: "scroll",
  height: "calc( 70vh - 80px )",
});

function ChatSpace(props) {
  const messages = [...props.messages];

  return (
    <MyCard variant="outlined">
      <h2>Conversación</h2>
      {messages.reverse().map((message, idx) => {
        if (message.number === 1) {
          return (
            <MessageLeft
              key={idx}
              displayName={message.nickname}
              timestamp={message.timestamp}
              message={message.message}
              photoURL={message.url}
            />
          );
        } else {
          return (
            <MessageRight
              key={idx}
              displayName={message.nickname}
              timestamp={message.timestamp}
              message={message.message}
              photoURL={message.url}
            />
          );
        }
      })}
    </MyCard>
  );
}

export default ChatSpace;
