import Cache from 'spiceutils/dist/Cache'

const apiURL = 'https://pokeapi.co/api/v2'

const _getURL = async (url) => {
  const response = await fetch(url)
  const json = await response.json()

  return json
}

let cache = window.cache
if(!cache) {
  cache = new Cache({
    getter: async (...args) => _getURL(...args),
    maxLength: 200,
  })
  window.cache = cache
}

export const getURL = cache.get.bind(cache)

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
