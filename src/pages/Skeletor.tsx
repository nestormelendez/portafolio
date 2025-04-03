import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Character from "../components/docs/Character";
import CharacterSkelero from "../components/docs/CharacterSkeletor";
import { useEffect, useState } from "react";
const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 4000));

type Props = {
  id: number;
  name: string;
  image: string;
};
export default function Skeletor() {
  const [characters, setCharacters] = useState<Props[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await fakePromise();
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" textAlign="center" mb={3}>
        Rick and Morty
      </Typography>
      <Box sx={{ display: "grid", gap: 2, maxWidth: 250, mx: "auto" }}>
        {loading
          ? [1, 2, 3].map((item) => <CharacterSkelero key={item} />)
          : characters.map((character) => (
              <Character
                key={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
      </Box>
    </Container>
  );
}
