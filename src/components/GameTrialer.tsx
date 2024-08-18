import useTrialers from "../hooks/useTrialers";

interface Props {
  gameId: number;
}

const GameTrialer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrialers(gameId);

  if (isLoading) return null;
  if (error) throw error;
  const first = data?.results[0];

  console.log(data);
  return first ? (
    <video controls src={first?.data[480]} poster={first?.preview}></video>
  ) : null;
};

export default GameTrialer;
