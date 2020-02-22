import 'cross-fetch/polyfill';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

function ApolloWrapper (Component: React.FunctionComponent<any>): Function {
    const isSsrMode = (typeof window !== "undefined");
    
    const client = new ApolloClient({
        cache: new InMemoryCache().restore(
            (!isSsrMode && process.browser) ? (window as any).cache : {}
        ),
        ssrMode: isSsrMode,
        link: createHttpLink({
            uri: 'https://graphql-pokemon.now.sh/'
        })
    });

    if (!isSsrMode && process.browser) {
        (window as any).cache = client.cache.extract();;
    }

    return (props: any): JSX.Element => {
        return (
            <ApolloProvider client={client}>
                <Component props={props} />
            </ApolloProvider>
        );
    }
}

export default ApolloWrapper;
