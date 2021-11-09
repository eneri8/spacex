import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

export interface Mission {
  id: string;
  name: string;
  description: string;
  manufacturers: string[];
  twitter: string;
  website: string;
  wikipedia: string;
};

interface Props {
  mission: Mission;
}

const imageUrl = 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80';

const MissionCard = ({ mission }: Props) => {
  return (
    <Center py={6} margin={2}>
      <Box
        maxW={'250px'}
        w={'full'}
        minH={'380px'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'180px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={imageUrl}
            layout={'fill'}
            alt=""
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'md'}
            fontFamily={'body'}
          >
            {mission.name}
          </Heading>
          <Text
            color={'gray.300'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'xs'}
            letterSpacing={1.1}>
            Rocket_Name
          </Text>
          <Text
            color={'gray.500'}
            fontSize={'xs'}
          >
            { `${mission.description.slice(0, 100)}...` }
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}

export default MissionCard;