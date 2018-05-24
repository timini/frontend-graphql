import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default graphql(
    gql`
    query allRewards($page: Int!, $campaign_id: ID!, $capPerAmbassador_lte: Int, $capPerAmbassador_gte: Int, $quantity_lte: Int, $quantity_gte: Int, $points_lte: Int, $points_gte: Int) {
        allRewards(page: $page, filter: {
          campaign_id: $campaign_id,
          capPerAmbassador_lte: $capPerAmbassador_lte,
          capPerAmbassador_gte: $capPerAmbassador_gte,
          quantity_lte: $quantity_lte,
          quantity_gte: $quantity_gte,
          points_lte: $points_lte,
          points_gte: $points_gte
        }) {
          id
          name
          image
          description
          points
          quantity
          capPerAmbassador
        }
    }
    `,
    {
        options: ({
          filters: {
            page,
            campaign_id,
            capPerAmbassador_lte,
            capPerAmbassador_gte,
            quantity_lte,
            quantity_gte,
            points_lte,
            points_gte,
          }
        }) => ({
          variables: {
            page,
            campaign_id,
            capPerAmbassador_lte,
            capPerAmbassador_gte,
            quantity_lte,
            quantity_gte,
            points_lte,
            points_gte,
          }
        }),
        props: ({ data = {}, ownProps: { filters = {} }}) => ({ allRewards: data.allRewards || [], filters }),
    },
);
