import { Card, Skeleton, CardContent } from "@mui/material";

export default function CharacterSkelero() {
  return (
    <Card>
      <Skeleton variant="rectangular" height={250} />
      <CardContent>
        <Skeleton height={25} />
      </CardContent>
    </Card>
  );
}
