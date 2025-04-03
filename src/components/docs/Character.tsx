import { Card, CardContent, CardMedia, Typography } from "@mui/material";
type Props = {
  name: string;
  image: string;
};
export default function Character({ name, image }: Props) {
  return (
    <Card>
      <CardMedia image={image} sx={{ height: 250, width: 250 }} />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
      </CardContent>
    </Card>
  );
}
