import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <HStack
      padding={"10px"}
      // justifyContent={"space-between"}
      flexDirection={"row"}
    >
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
