import {
  Box,
  Heading,
  Icon,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiLink2, FiTwitter } from 'react-icons/fi';
import { Mission, imageUrl } from './MissionCard';

interface Props {
  onClose(): void;
  mission: Mission;
}

const MissionDetailModal = ({ onClose, mission }: Props) => {
  return (
    <>
      <Modal
        isOpen={!!mission}
        onClose={onClose}
        onOverlayClick={onClose}
        onEsc={onClose}
      >
        <ModalOverlay />
          <ModalContent>
          <Image
              src={imageUrl}
              layout={'fill'}
              alt="mission image"
              roundedTop={'md'}
            />
            <ModalCloseButton />
            <ModalBody>
              <Box p={3}>
                <Stack>
                  <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'md'}
                    fontFamily={'body'}>
                    <Text
                      color={'blue.500'}
                      textTransform={'uppercase'}
                      fontWeight={800}
                      fontSize={'xs'}
                      letterSpacing={1.1}
                      paddingBottom={2}
                    >
                      Mission Name
                    </Text>
                    { mission.name }
                  </Heading>
                  <Text
                    color={'blue.500'}
                    textTransform={'uppercase'}
                    fontWeight={800}
                    fontSize={'xs'}
                    letterSpacing={1.1}>
                    Description
                  </Text>
                  <Text color={'gray.500'}>
                    { mission.description }
                  </Text>
                  <Box p={3}>
                    <Stack direction={'row'} justify={'center'} spacing={6}>
                      <Link href={mission.twitter} isExternal>
                        <Stack spacing={0} align={'center'}>
                          <Icon as={FiTwitter} h={7} w={7} alignSelf={'center'} />
                        </Stack>
                      </Link>
                      <Link href={mission.website} isExternal>
                        <Stack spacing={0} align={'center'}>
                          <Icon as={FiLink2} h={7} w={7} alignSelf={'center'} />
                        </Stack>
                      </Link>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </ModalBody>
          </ModalContent>
      </Modal>
    </>
  );
}

export default MissionDetailModal;
