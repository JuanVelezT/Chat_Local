import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UserSpace from "./UserSpace";
import ChatSpace from "./ChatSpace";

function Chat(props) {
  const [messages, setMessages] = useState([]);

  function saveMessage(message, number, timestamp, url, nickname) {
    let messagesCopy = [...messages];
    messagesCopy.push({
      message: message,
      number: number,
      timestamp: timestamp,
      url: url,
      nickname: nickname,
    });
    setMessages(messagesCopy);
  }

  return (
    <Box sx={{ flexGrow: 1, padding: "10vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <ChatSpace
            messages={messages}
            isFirstUserTurn={props.isFirstUserTurn}
          />
        </Grid>
        <Grid container item xs={4}>
          <Grid item xs={12}>
            <UserSpace
              isFirstUserTurn={props.isFirstUserTurn}
              number={1}
              saveMessage={saveMessage}
              url={props.usuarios[0].url}
              nickname={props.usuarios[0].nickname}
              changeTurn={props.changeTurn}
            />
          </Grid>
          <Grid item xs={12}>
            <UserSpace
              isFirstUserTurn={props.isFirstUserTurn}
              number={2}
              saveMessage={saveMessage}
              url={props.usuarios[1].url}
              nickname={props.usuarios[1].nickname}
              changeTurn={props.changeTurn}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Chat;
