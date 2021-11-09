import React from 'react';
import {
  Container,
  Input,
  SimpleGrid,
} from '@chakra-ui/react';
import MissionCard, { Mission } from './MissionCard';
import MissionDetailDialog from './MissionDetailModal'

interface Props {
  missions: Mission[]
} 

const MissionList = ({ missions }: Props): JSX.Element => {
  const [search, setSearch] = React.useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const [selectedMission, setSelectedMission] = React.useState<Mission>();

  return (
    <>
      {
        !!selectedMission && (
          <MissionDetailDialog
            mission={selectedMission}
            onClose={() => setSelectedMission(undefined)}
          />
        )
      }
      <Container width="100vw">
        <Input
          value={search}
          onChange={handleChange}
          placeholder="Quick search"
        />
      </Container>
      <SimpleGrid columns={[1, 2, 3, 4, 5]}>
        {
          missions.reduce((missionsToDisplay: JSX.Element[], mission: Mission) => {
            if(
              !search ||
              mission.description.toLowerCase().includes(search.toLowerCase()) ||
              mission.name.toLowerCase().includes(search.toLowerCase())
            ) {
              
              return [
                ...missionsToDisplay,
                (
                  <MissionCard
                    key={mission.id}
                    mission={mission}
                    onClick={() => setSelectedMission(mission)}
                  />
                )
              ];
            }

            return missionsToDisplay;

          }, [])
        }
      </SimpleGrid>
    </>
  );
}

export default MissionList;