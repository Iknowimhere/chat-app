import {Container,Box,Text,Tabs,TabList,TabPanels,Tab,TabPanel} from '@chakra-ui/react'
import Login from '../components/authentication/Login';
import Signup from '../components/authentication/Signup';

const HomePage = () => {
  return (
    <Container maxW={'xl'} centerContent>
      <Box
        display='flex'
        justifyContent={'center'}
        backgroundColor={'white'}
        p={3}
        margin={'40px 0 15px 0'}
        width={'100%'}
        borderRadius={'lg'}
      >
        <Text fontSize={'2xl'}>Chatter Box</Text>
      </Box>
      <Box width={'100%'} borderRadius={'lg'} padding={4} bg={'white'}>
        <Tabs variant='soft-rounded'>
          <TabList>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
