import { Flex, Stack, Button } from "@chakra-ui/react";
import { Input } from "../../components/Input";

export function HomePage() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        flexDirection='column'
        borderRadius={8}
      >
        <Stack
          spacing="4"
        >
          <Input
            name="email"
            type="email"
            label='email'
          />

          <Input
            name="password"
            type="password"
            label='password'
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}