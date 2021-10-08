import React, { useState } from "react";
import UserForm from "./components/UserForm";
import { styled } from "@mui/material/styles";
import Chat from "./components/Chat";

const Container = styled("div")({
  justifyContent: "center",
  display: "flex",
  paddingTop: "2em",
});

function App() {
  const [usuarios, setUsuarios] = useState([
    { nickname: "", url: "" },
    { nickname: "", url: "" },
  ]);
  const [isFirstUserTurn, setIsFirstUserTurn] = useState(true);
  const [isChat, setIsChat] = useState(false);

  function onChange(e, id) {
    let copyUsuarios = [...usuarios];
    let user = copyUsuarios[id];
    user[e.target.name] = e.target.value;
    setUsuarios(copyUsuarios);
  }

  function changeTurn() {
    setIsFirstUserTurn(!isFirstUserTurn);
    if (!isChat && !isFirstUserTurn) {
      setIsChat(true);
    }
  }

  return (
    <Container>
      {
        // condicion ? caso verdadero : caso falso
        // condicion && caso verdadero    -> corto circuito, no necesita else
        isFirstUserTurn && !isChat ? (
          <UserForm
            number={1}
            onChange={onChange}
            changeTurn={changeTurn}
            userInfo={usuarios[0]}
          />
        ) : (
          !isChat && (
            <UserForm
              number={2}
              onChange={onChange}
              changeTurn={changeTurn}
              userInfo={usuarios[1]}
            />
          )
        )
      }
      {isChat && (
        <Chat
          usuarios={usuarios}
          isFirstUserTurn={isFirstUserTurn}
          changeTurn={changeTurn}
        />
      )}
    </Container>
  );
}

export default App;
