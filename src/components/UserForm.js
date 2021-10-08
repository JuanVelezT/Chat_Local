import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const MyCard = styled(Card)({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  padding: "1em",
  backgroundColor: "aliceblue",
});

function UserForm(props) {

  return (
    <MyCard variant="outlined" sx={{ minWidth: 275 }}>
      <h2>Información Usuario {props.number}</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            style={{ backgroundColor: "white" }}
            label="Nickname"
            name="nickname"
            value={props.userInfo.nickname}
            onChange={(e) => props.onChange(e, props.number - 1)}
          />
          <br />
          <TextField
            required
            id="outlined-disabled"
            style={{ backgroundColor: "white" }}
            label="Url imagen"
            name="url"
            value={props.userInfo.url}
            onChange={(e) => props.onChange(e, props.number - 1)}
          />
        </div>
      </Box>
      <Button variant="contained" onClick={() => props.changeTurn()}>Continuar</Button>
    </MyCard>
  );
}

export default UserForm;
