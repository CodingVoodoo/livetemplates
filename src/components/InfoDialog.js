import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { IconButton } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function InfoDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton style={{ bottom: 3, right: 3 }}>
        <AddCircleRoundedIcon
          style={{ color: "blue", fontSize: "50px" }}
          onClick={handleClickOpen}
        />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"New Intellij Live Template"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please create PR's against repository{" "}
            <Link
              target="_blank"
              href="https://github.com/CodingVoodoo/livetemplates/tree/master/src/pages/intellijlivetemplates"
            >
              GitHub
            </Link>
            <br />
            <br />
            <b>Required : </b> .md file with Live Template details
            <br />
            <br />
            If .md file has a tag <b>image</b> of the file that does not exist
            it should be included into PR
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
