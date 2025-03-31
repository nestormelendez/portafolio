import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Modal as MuiModal } from "@mui/material";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";

type Props = {
  children: React.ReactElement;
};

export default function Modal({ children }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        /* startIcon={<VisibilityTwoToneIcon />} */
        onClick={handleOpen}
        sx={{ bgcolor: "#00994d", color: "#dadbda", textTransform: "initial", gap:1}}
      >
        <VisibilityTwoToneIcon /> Ver
      </Button>
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            borderRadius: 1,
            boxShadow: 4,
            minWidth: 300,
            height: "80vh",
            overflow: "hidden",
            display: "flex",
            bgcolor: "#2b2929",
          }}
        >
          {children}
        </Box>
      </MuiModal>
    </div>
  );
}
