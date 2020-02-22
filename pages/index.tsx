import React from 'react';
import Card from '@components/card';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import POKEMONS_QUERY from '@graphql/pokemons';
import ApolloWrapper from '@graphql/provider';

const Home = () => {
    const { loading, error, data } = useQuery(POKEMONS_QUERY);
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Hi</h1>
            <div>
            {
                (loading) ?
                    <h1>Loading..!</h1>
                :
                    data.pokemons.map((item: any, index: number) =>
                        <Card
                            key={`card-${index}`}
                            title={item.name}
                            description={item.classification}
                            avatar={item.image}
                        />
                    )
            }
            </div>
        </div>
    );
}

export default ApolloWrapper(Home);
