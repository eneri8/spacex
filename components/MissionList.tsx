import { SimpleGrid } from '@chakra-ui/react';
import MissionCard, { Mission } from './MissionCard';

interface Props {
  missions: Mission[]
} 

const MissionList = ({ missions }: Props): JSX.Element => {
  return (
    <>
      <SimpleGrid columns={[1, 2, 3, 4, 5]}>
        {
          missions.map((mission) => (
              <MissionCard
                  key={mission.id}
                  mission={mission}
              />
          ))
        }
      </SimpleGrid>
    </>
  );
}

export default MissionList;