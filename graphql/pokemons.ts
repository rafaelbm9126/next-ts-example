import gql from 'graphql-tag';

const QUERY = gql`
    query {
        pokemons(first: 10) {
            name
            image
            classification
        }
    }
`;

export default QUERY;
