import { Flex, Avatar, Box, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center">
      {showProfileData && (
        <Box
          mr='4'
          textAlign="right"
        >
          <Text>Antonio Alexandre</Text>
          <Text color="gray.300" fontSize="small">antonioalexandre1984@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Antonio Alexandre" src="https://github.com/antonioalexandre1984.png" />
    </Flex>
  );
}
