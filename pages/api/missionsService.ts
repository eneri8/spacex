import { ApolloQueryResult, gql } from '@apollo/client';
import client from './client';

export interface MissionsService {
    getMissions(): Promise<ApolloQueryResult<any>>;
}

const missionsService: MissionsService = {
    getMissions: () => {
        return client.query({
            query: gql`
                query {
                    missions {
                        id
                        name
                        twitter
                        website
                        wikipedia
                        description
                    }
                }
            `
        });
    }
}

export default missionsService;