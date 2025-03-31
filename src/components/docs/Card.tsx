import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 650, height: 335 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="src\assets\ingresar-sistema-dark.jpg"
          alt="ingresar-sistema-dark"
    

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="primary">
            Acceso Aplicación
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
