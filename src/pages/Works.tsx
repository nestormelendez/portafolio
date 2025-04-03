import {
  Alert,
  AlertTitle,
  Box,
  Collapse,
  Snackbar,
  Button,
} from "@mui/material";
import { useState } from "react";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import { useSnackbar } from "notistack";
export default function Works() {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    enqueueSnackbar("notiSnackbar", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };
  return (
    <>
      <h1>Trabajos realizados</h1>
      <Box sx={{ display: "grid", gap: "1rem", textAlign: "left" }}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Esto es una alerta de error
        </Alert>
        <Alert
          severity="warning"
          variant="outlined"
          action={
            <>
              <Button
                variant="outlined"
                sx={{ color: "inherit", mr: 1 }}
                children={"ok"}
              ></Button>
              <Button
                variant="outlined"
                sx={{ color: "inherit" }}
                children={"Cancelar"}
              ></Button>
            </>
          }
        >
          <AlertTitle>Precaucion</AlertTitle>
          Esto es una alerta de precaucion
        </Alert>
        <Alert severity="info">
          <AlertTitle>informativa</AlertTitle>
          Esto es una alerta de informativa
        </Alert>

        <Button
          variant="contained"
          children={"Abri Snackbar"}
          onClick={() => setOpen(true)}
        />
        <Snackbar
          open={open}
          autoHideDuration={1000}
          onClose={() => setOpen(false)}
        >
          <Alert severity="success" icon={<ScatterPlotIcon />} variant="filled">
            <AlertTitle>Exitó</AlertTitle>
            Esto es una alerta de exito
          </Alert>
        </Snackbar>
        <Button variant="contained" onClick={handleClick}>
          notiSnackbar
        </Button>
        <Collapse in={open}>
          <Alert
            severity="success"
            icon={<ScatterPlotIcon />}
            variant="filled"
            onClose={() => {
              setOpen(false);
            }}
          >
            <AlertTitle>Exitó</AlertTitle>
            Esto es una alerta de exito
          </Alert>
        </Collapse>
      </Box>
    </>
  );
}
