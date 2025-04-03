import { Button, useTheme, useMediaQuery, Grid2 } from "@mui/material";
import TableLista from "../components/docs/TableList";
import Typography from "@mui/material/Typography";
import Img from "../components/docs/Img";
import { useRef, useEffect, useState } from "react";
import { RfDetalle } from "../components/docs/JsonRf";

export default function Docs() {
  const refs = RfDetalle.reduce(
    (
      acc: { [key: string]: React.RefObject<HTMLDivElement | null> },
      section
    ) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      acc[section.titulo] = useRef<HTMLDivElement>(null);
      return acc;
    },
    {}
  );

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const scrollToSection = (titulo: string) => {
    if (refs[titulo].current) {
      refs[titulo].current.scrollIntoView({
        behavior: "smooth",
      });
      window.location.hash = titulo; // Actualiza la URL
    }
  };

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      if (refs[id] && refs[id].current) {
        refs[id].current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [refs]);
  useEffect(() => {
    if (isSmUp) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isSmUp]);

  return (
    <Grid2
      container
      spacing={1}
      sx={{
        maxWidth: 2450,
        height: "100vh",
        mt: 6,
      }}
    >
      {isSmUp ? (
        <Grid2
          sx={{
            position: "fixed",
            height: "auto",
            width: { xs: "auto", sm: "auto", md: "auto" },
            display: { xs: "block", sm: "flex", md: "flex" },
            border: "none",
            bgcolor: "#383535",
            borderRadius: 2,
            boxShadow: 5,
            p: 2,
          }}
        >
          <Grid2
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Button
              sx={{
                minHeight: 35,
                bgcolor: "#383535",
                transition: "all 150ms ease",
                textTransform: "initial",
                pl: 2,
                color: "#f2faf6",
              }}
            >
              Caso de uso
            </Button>

            <Grid2 sx={{}}>
              {RfDetalle.map((section) => (
                <Button
                  key={section.titulo}
                  onClick={() => {
                    scrollToSection(section.titulo);
                    handleClose();
                  }}
                  sx={{
                    display: "block",
                    width: "100%",
                    textAlign: "start",
                    pl: 2,
                    textTransform: "initial",
                    color: "#b5bfba",
                  }}
                >
                  {section.titulo}
                </Button>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>
      ) : (
        <Grid2
          sx={{
            position: "fixed",
            height: "auto",
            width: { xs: "auto", sm: "auto", md: "auto" },
            display: { xs: "block", sm: "flex", md: "flex" },
            border: "none",
            bgcolor: "#383535",
            borderRadius: 2,
            boxShadow: 5,
            p: 1,
          }}
        >
          <Grid2
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Button
              sx={{
                minHeight: 35,
                bgcolor: "#383535",
                transition: "all 150ms ease",
                textTransform: "initial",
                pl: 2,
                color: "#f2faf6",
              }}
              onClick={handleClick}
            >
              Caso de uso
            </Button>
            {open ? (
              <Grid2>
                {RfDetalle.map((section) => (
                  <Button
                    key={section.titulo}
                    onClick={() => {
                      scrollToSection(section.titulo);
                      handleClose();
                    }}
                    sx={{
                      display: "block",
                      width: "100%",
                      textAlign: "start",
                      pl: 2,
                      textTransform: "initial",
                      color: "#b5bfba",
                    }}
                  >
                    {section.titulo}
                  </Button>
                ))}
              </Grid2>
            ) : (
              <></>
            )}
          </Grid2>
        </Grid2>
      )}

      <Grid2
        size={{ xs: 12, sm: 8, md: 9, xl: 9 }}
        sx={{ ml: { xs: 0, sm: 25, md: 25, lg: 25, xl: 25 } }}
      >
        {RfDetalle.map((section) => (
          <Grid2
            container
            size={{ xs: 12, md: 12, xl: 12 }}
            key={section.titulo}
            ref={refs[section.titulo]}
            sx={{ pt: 12, height: { xs: 1000, md: 580, lg: 700, xl: 700 } }}
          >
            <Grid2
              size={{ xs: 12, sm: 12, md: 12, xl: 7 }}
              sx={{ p: 2, height: "auto" }}
            >
              <Typography
                variant="h1"
                sx={{
                  m: 1,
                  textAlign: "left",
                  fontSize: { xs: "2rem", sm: "2rem" },
                  fontWeight: 700,
                  height: "15%",
                  color: "#e6faf6",
                }}
              >
                {section.titulo}
              </Typography>
              <Typography
                sx={{
                  p: 2,
                  textAlign: "justify",
                  minWidth: 300,
                  fontSize: { xs: "0.9rem", sm: "0.9rem" },
                }}
              >
                {section.descripcion}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 7, xl: 7 }} sx={{ p: 2 }}>
              <Img src={section.imagen} />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 5, xl: 5 }} sx={{ p: 2 }}>
              <TableLista
                data={section.rfLista.map((item, index) => ({
                  ...item,
                  idR: typeof item.id === "number" ? item.id : index, // Ensure idR is always a number
                }))}
                title={section.titulo}
              />
            </Grid2>
          </Grid2>
        ))}
      </Grid2>
    </Grid2>
  );
}
