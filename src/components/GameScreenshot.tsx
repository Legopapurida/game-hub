import { Img, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data: screenShots, error, isLoading } = useScreenshots(gameId);
  if (error) throw error;
  if (isLoading) return <Spinner />;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {screenShots?.results.map((schreenShot) => (
        <Img src={schreenShot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
