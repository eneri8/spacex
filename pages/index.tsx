import type { GetServerSideProps, NextPage } from 'next';
import { Mission } from '../components/MissionCard';
import missionsService from './api/missionsService';
import {
  MissionList,
  Page,
} from '../components';

export interface HomeProps {
  missions: Mission[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await missionsService.getMissions();

  return {
    props: {
      missions: data.missions || []
    },
  };
};

const Home: NextPage<HomeProps> = ({ missions }: HomeProps) => {
  return (
    <Page>
      <MissionList missions={missions} />
    </Page>
  )
}

export default Home;
