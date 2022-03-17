import { useState } from "react";
import { makeStyles, Button, Typography } from "@material-ui/core";
import { WithDrawer } from "../../Layout/Drawer";
import { TextField } from "../../common";

const useStyles = makeStyles((theme: any) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.custom.colors.nav,
    height: "100%",
  },
  headerButton: {
    borderRadius: "12px",
    width: "100px",
    height: "40px",
    backgroundColor: theme.custom.colors.nav,
    "&:hover": {
      backgroundColor: theme.custom.colors.nav,
    },
  },
  headerButtonLabel: {
    color: theme.custom.colors.fontColor,
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: 500,
    textTransform: "none",
  },
  topHalf: {
    paddingTop: "24px",
    height: "249px",
  },
  bottomHalf: {
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
    background: theme.custom.colors.sendGradient,
    height: "194px",
  },
  buttonContainer: {
    flex: 1,
    display: "flex",
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingBottom: "24px",
    paddingTop: "25px",
    justifyContent: "space-between",
  },
  buttonLabel: {
    color: theme.custom.colors.fontColor,
    textTransform: "none",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
  },
  button: {
    background: "transparent",
    width: "159px",
    height: "48px",
  },
  textRoot: {
    marginTop: "0 !important",
    marginBottom: "0 !important",
    "& .MuiOutlinedInput-root": {
      backgroundColor: `${theme.custom.colors.nav} !important`,
    },
  },
  sendTo: {
    color: theme.custom.colors.fontColor,
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 500,
  },
  addressBook: {
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "16px",
    color: theme.custom.colors.interactiveIconsActive,
  },
  bottomHalfLabel: {
    fontWeight: 500,
    color: theme.custom.colors.secondary,
    fontSize: "12px",
    lineHeight: "16px",
  },
}));

export function SendButton({ token }: any) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Button
        disableElevation
        variant="contained"
        className={classes.headerButton}
        disableRipple
        onClick={() => setOpenDrawer(true)}
      >
        <Typography className={classes.headerButtonLabel}>Send</Typography>
      </Button>
      <WithDrawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        title={`${token.ticker} / Send`}
      >
        <Send token={token} onCancel={() => setOpenDrawer(false)} />
      </WithDrawer>
    </>
  );
}

function Send({ onCancel, token }: any) {
  const classes = useStyles() as any;
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const networkFee = "-"; // TODO
  return (
    <div className={classes.container}>
      <div className={classes.topHalf}>
        <div style={{ marginBottom: "40px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "24px",
              marginRight: "24px",
              marginBottom: "8px",
            }}
          >
            <Typography className={classes.sendTo}>Send to</Typography>
            <Typography className={classes.addressBook}>
              Address Book
            </Typography>
          </div>
          <TextField
            rootClass={classes.textRoot}
            placeholder={"SOL Address"}
            value={address}
            setValue={setAddress}
          />
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "24px",
              marginRight: "24px",
              marginBottom: "8px",
            }}
          >
            <Typography className={classes.sendTo}>Amount</Typography>
            <Typography className={classes.addressBook}>
              {token.nativeBalance} {token.ticker}
            </Typography>
          </div>
          <TextField
            rootClass={classes.textRoot}
            type={"number"}
            placeholder={"Amount"}
            value={amount}
            setValue={setAmount}
          />
        </div>
      </div>
      <div className={classes.bottomHalf}>
        <div
          style={{
            marginLeft: "24px",
            marginRight: "24px",
            marginTop: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography className={classes.bottomHalfLabel}>Network</Typography>
            <Typography className={classes.bottomHalfLabel}>Solana</Typography>
          </div>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography className={classes.bottomHalfLabel}>
              Network Fee
            </Typography>
            <Typography className={classes.bottomHalfLabel}>
              {networkFee}
            </Typography>
          </div>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          ></div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          disableRipple
          disableElevation
          className={classes.button}
          onClick={onCancel}
        >
          <Typography className={classes.buttonLabel}>Cancel</Typography>
        </Button>
        <Button
          variant="contained"
          disableRipple
          disableElevation
          className={classes.button}
        >
          <Typography className={classes.buttonLabel}>Next</Typography>
        </Button>
      </div>
    </div>
  );
}