import { Paper, styled } from "@mui/material";

type Src ={
    src: string
}


export default function Img({src}:Src) {
  const Imagen = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        
      }}
    >
      <Imagen src={src} alt="ingresar-sistema" />
    </Paper>
  );
}
