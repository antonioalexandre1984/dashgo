import { Flex, Box, Divider, Heading, SimpleGrid, VStack, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";
import { Sidebar } from "../../../components/Sidebar";

export function CreateUser() {
    return (
        <Box>
            <Header />
            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >
                <Sidebar />
                <Box
                    flex="1"
                    borderRadius={["6", "8"]}
                    bg="gray.800"
                    p="8"
                >
                    <Heading
                        size="lg"
                        fontWeight="normal"
                    >
                        Criar usuário

                        <Divider
                            my="6"
                            borderColor="gray.700"
                        />

                        <VStack spacing="8">
                            <SimpleGrid
                                minChildWidth="240px"
                                spacing={["6", "8"]}
                                w="100%"
                            >
                                <Input
                                    name="name"
                                    label="Nome completo"
                                />

                                <Input
                                    name="email"
                                    type="email"
                                    label="E-mail"
                                />
                            </SimpleGrid>

                            <SimpleGrid
                                minChildWidth="240px"
                                spacing={["6", "8"]}
                                w="100%"
                            >
                                <Input
                                    name="password"
                                    type="password"
                                    label="Senha"
                                />

                                <Input
                                    name="password_confirmation"
                                    type="password"
                                    label="Confirmação da senha"
                                />
                            </SimpleGrid>
                        </VStack>

                        <Flex
                            mt="8"
                            justify="flex-end"
                        >
                            <HStack
                                spacing="4"
                            >
                                <Link to='/users'>
                                    <Button
                                        colorScheme="whiteAlpha"
                                    >
                                        Cancelar
                                    </Button>
                                </Link>

                                <Button
                                    colorScheme="pink"
                                >
                                    Salvar
                                </Button>
                            </HStack>
                        </Flex>
                    </Heading>
                </Box>
            </Flex>
        </Box>
    )
}