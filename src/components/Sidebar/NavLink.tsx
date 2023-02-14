import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

//import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (

    //<ActiveLink children={undefined} to={""} >
    <ChakraLink
      display="flex"
      color="pink.400"
      alignItems='center'
      {...rest}
    >
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </ChakraLink>
    //</ActiveLink>
  );
}
