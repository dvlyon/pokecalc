import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface IPokemonV2TypeResponse {
    data: {
        pokemon_v2_type: IPokemonV2Type[]
    }
}

interface IPokemonV2Type {
    id: number
    name: string
    pokemon_v2_typeefficacies: IPokemonV2TypeEfficacy[]
}

interface IPokemonV2TypeEfficacy {
    damage_factor: number
    pokemonV2TypeByTargetTypeId: {
        id: number
        name: string
    }
}

interface IPokemonV2PokemonResponse {
    data: {
        pokemon_v2_pokemon: IPokemonV2Pokemon[]
    }
}

interface IPokemonV2Pokemon {
    name: string
}

const App: React.FC = () => {
    const [types, setTypes] = useState<IPokemonV2Type[]>([])
    const [type1, setType1] = useState(0)
    const [type2, setType2] = useState(0)
    const [teraType, setTeraType] = useState(0)
    const [pkmnList, setPkmnList] = useState<string[]>([])

    useEffect(() => {
        const getTypes = async () => {
            const { data: types } = await axios.post<IPokemonV2TypeResponse>('https://beta.pokeapi.co/graphql/v1beta', {
                query: `
                    query typesPokeAPIquery {
                        pokemon_v2_type(where: {pokemon_v2_pokemontypes_aggregate: {count: {predicate: {_gt: 0}}}}) {
                            id
                            name
                            pokemon_v2_typeefficacies {
                                damage_factor
                                pokemonV2TypeByTargetTypeId {
                                    id
                                    name
                                }
                            }
                        }
                    }
                `
            })

            if (types.data) {
                setTypes(types.data.pokemon_v2_type)
            }
        }

        getTypes()
    }, [])

    const onClick = async () => {
        const calcTeraType = teraType || type1

        const typePoints = types.map(t => {
            let points = 0

            points = -t.pokemon_v2_typeefficacies.find(te => te.pokemonV2TypeByTargetTypeId.id === calcTeraType)!.damage_factor

            points += types.find(t => t.id === type1)!.pokemon_v2_typeefficacies.find(te => te.pokemonV2TypeByTargetTypeId.id === t.id)!.damage_factor
            if (type2) {
                points += types.find(t => t.id === type2)!.pokemon_v2_typeefficacies.find(te => te.pokemonV2TypeByTargetTypeId.id === t.id)!.damage_factor
            }
            if (calcTeraType !== type1 && calcTeraType !== type2) {
                points += types.find(t => t.id === calcTeraType)!.pokemon_v2_typeefficacies.find(te => te.pokemonV2TypeByTargetTypeId.id === t.id)!.damage_factor
            }

            return ({
                id: t.id,
                name: t.name,
                points: points
            })
        }).sort((a, b) => a.points - b.points)

        let low = typePoints[0].points
        let lowList: number[] = []

        let i = 0
        while (typePoints[i].points <= low) {
            lowList.push(typePoints[i].id)
            i++
        }

        if (lowList.length === 1) {
            const { data: pokes } = await axios.post<IPokemonV2PokemonResponse>('https://beta.pokeapi.co/graphql/v1beta', {
                query: `
                    query pokemonPokeAPIquery {
                        pokemon_v2_pokemon(where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {id: {_eq: ${lowList[0]}}}}, pokemon_v2_pokemontypes_aggregate: {count: {predicate: {_eq: 1}}}}, order_by: {pokemon_v2_pokemonstats_aggregate: {sum: {base_stat: desc}}}) {
                            name
                        }
                    }
                `
            })

            if (pokes.data) {
                setPkmnList([types.find(t => t.id === lowList[0])?.name + ': ' + pokes.data.pokemon_v2_pokemon.map(p => p.name).join(", ")])
            }
        } else {
            let pairs: number[] = []
            let list: string[] = []

            for (let i = 0; i < lowList.length - 1; i++) {
                for (let j = i+1; j < lowList.length; j++) {
                    pairs.push(lowList[i])
                    pairs.push(lowList[j])
                }
            }

            while (pairs.length) {
                const { data: pokes } = await axios.post<IPokemonV2PokemonResponse>('https://beta.pokeapi.co/graphql/v1beta', {
                    query: `
                        query pokemonPokeAPIquery {
                            pokemon_v2_pokemon(where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {id: {_eq: ${pairs[0]}}}}, _and: {pokemon_v2_pokemontypes: {pokemon_v2_type: {id: {_eq: ${pairs[1]}}}}}}, order_by: {pokemon_v2_pokemonstats_aggregate: {sum: {base_stat: desc}}}) {
                                name
                            }
                        }
                    `
                })

                if (pokes.data) {
                    list.push(types.find(t => t.id === pairs[0])?.name + ' + ' + types.find(t => t.id === pairs[1])?.name + ': ' + pokes.data.pokemon_v2_pokemon.map(p => p.name).join(", "))
                }

                pairs.splice(0, 2)
            }

            setPkmnList(list)
        }
    }

  return (
    <div>
        <div>
            <label>
                Type 1:
                <select value={type1} onChange={e => setType1(parseInt(e.target.value))}>
                    <option value={0}>None</option>
                    {types.map(t => <option key={'type1-' + t.id} value={t.id}>{t.name}</option>)}
                </select>
            </label>
            <label>
                Type 2:
                <select value={type2} onChange={e => setType2(parseInt(e.target.value))} disabled={!type1}>
                    <option value={0}>None</option>
                    {types.map(t => <option key={'type2-' + t.id} value={t.id}>{t.name}</option>)}
                </select>
            </label>
            <label>
                Tera Type:
                <select value={teraType} onChange={e => setTeraType(parseInt(e.target.value))}>
                    <option value={0}>None</option>
                    {types.map(t => <option key={'teraType-' + t.id} value={t.id}>{t.name}</option>)}
                </select>
            </label>
            <input type="button" value="Calculate" onClick={onClick} disabled={!type1} />
        </div>
        <div>
            <h5>{ pkmnList.length > 0 && 'Recommended pkmn: ' }</h5>
            { pkmnList.map(l => <p key={l.replaceAll(' ', '')}>{ l }</p>) }
        </div>
    </div>
  )
}

export default App
