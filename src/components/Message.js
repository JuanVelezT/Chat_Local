import React from "react";
import { createStyles, makeStyles, Theme } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    messageRow: {
      display: "flex",
    },
    messageRowRight: {
      display: "flex",
      justifyContent: "flex-end",
    },
    messageBlue: {
      position: "relative",
      marginLeft: "20px",
      marginBottom: "20px",
      padding: "10px",
      backgroundColor: "#A8DDFD",
      width: "60%",
      wordWrap: "break-word",
      minWidth: "150px",
      //height: "50px",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #97C6E3",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #A8DDFD",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        left: "-15px",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #97C6E3",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        left: "-17px",
      },
    },
    messageOrange: {
      position: "relative",
      marginRight: "20px",
      marginBottom: "15px",
      padding: "10px",
      backgroundColor: "#f8e896",
    //   width: "60%",
      minWidth: "100px",
      wordWrap: "break-word",
      //height: "50px",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #dfd087",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #f8e896",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        right: "-15px",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #dfd087",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        right: "-17px",
      },
    },

    messageContent: {
      padding: 5,
      margin: 0,
      minWidth: "fit-content"
    },
    messageTimeStampRight: {
      position: "absolute",
      fontSize: ".85em",
      fontWeight: "300",
      bottom: "-1.5em",
    },

    orange: {
      color: "orange",
      backgroundColor: "orange",
      width: "32px",
      height: "32px",
    },
    avatarNothing: {
      color: "transparent",
      backgroundColor: "transparent",
      width: "32px",
      height: "32px",
    },
    displayName: {
      marginLeft: "20px",
    },
  })
);

export const MessageLeft = (props) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp;
  const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  const displayName = props.displayName ? props.displayName : "";
  const classes = useStyles();
  return (
    <>
      <div className={classes.messageRow}>
        <Avatar src={photoURL} />
        <div>
          <div className={classes.displayName}>{displayName}</div>
          <div className={classes.messageBlue}>
            <div>
              <p className={classes.messageContent}>{message}</p>
              <div className={classes.messageTimeStampRight}>{timestamp}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const MessageRight = (props) => {
  const classes = useStyles();
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  const displayName = props.displayName ? props.displayName : "";
  return (
    <div className={classes.messageRowRight}>
      <div>
        <div className={classes.displayName}>{displayName}</div>
        <div className={classes.messageOrange}>
          <p className={classes.messageContent}>{message}</p>
          <div className={classes.messageTimeStampRight}>{timestamp}</div>
        </div>
      </div>
      <Avatar src={photoURL} />
    </div>
  );
};
