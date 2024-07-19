import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/reshot-icon-like-AGQPTDSLNB.svg";
import recommanded from "../assets/reshot-icon-rating-DBQZA23RHE.svg";
import topRating from "../assets/reshot-icon-top-rated-F5Q2EJBMK4.svg";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: topRating, alt: "meh", boxSize: "25px" },
    4: { src: recommanded, alt: "recommended", boxSize: "35px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "20px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
