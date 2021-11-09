import { Container } from '@chakra-ui/react';
import Header from './Header';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Page = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <Container maxW="100vw" paddingTop="50" centerContent>
        { children }
      </Container>
    </>
  );
}

export default Page;
