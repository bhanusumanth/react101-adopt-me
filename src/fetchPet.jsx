const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiResponse = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (apiResponse && !apiResponse.ok) {
    throw new Error(`details/${id} fetch not okay`);
  }

  return apiResponse.json();
};

export default fetchPet;