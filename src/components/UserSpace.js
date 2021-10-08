import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import moment from "moment";

const MyCard = styled(Card)({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  padding: "1em",
});

function UserSpace(props) {
  const [message, setMessage] = useState("");

  function handleClick() {
    props.changeTurn();
    props.saveMessage(
      message,
      props.number,
      moment().format("DD/MM/YYYY HH:mm"),
      props.url,
      props.nickname
    );
    setMessage("");
  }

  return (
    <MyCard variant="outlined" sx={{ minWidth: 275, marginBottom: "20px" }}>
      <h2>Usuario: {props.nickname}</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <label>Mensaje</label>
          <br />
          <TextareaAutosize
            minRows={3}
            onChange={(e) => setMessage(e.target.value)}
            disabled={
                (props.isFirstUserTurn && props.number === 2) ||
                (!props.isFirstUserTurn && props.number === 1)
              }
            style={{
              width: 350,
              marginBottom: "1em",
              maxWidth: 400,
              fontFamily: "Segoe UI",
            }}
            value={message}
          />
        </div>
      </Box>
      <Button
        disabled={
          (props.isFirstUserTurn && props.number === 2) ||
          (!props.isFirstUserTurn && props.number === 1)
        }
        variant="contained"
        onClick={() => handleClick()}
      >
        Enviar
      </Button>
    </MyCard>
  );
}

export default UserSpace;
