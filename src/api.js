const apiURL = 'https://pokeapi.co/api/v2'

export const getURL = async (url) => {
  const response = await fetch(url)
  const json = await response.json()

  return json
}

export const get = async (path) => {
  if (path[0] === '/') {
    path = path.substring(1)
  }

  return await getURL(`${apiURL}/${path}`)
}

export const getPokemon = async (key) => (
  await get(`pokemon/${key.toLowerCase()}`)
)

export const getMove = async (id) => (
  await get(`moves/${id}`)
)
