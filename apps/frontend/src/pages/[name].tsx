import { useRouter } from 'next/router';
import React from 'react';

const Pokemon = () => {
  const router = useRouter();

  const { name } = router.query;

  return <div>Pokemon {name}</div>;
};

export default Pokemon;
