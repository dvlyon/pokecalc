import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled, { IStyledComponent } from 'styled-components'

interface IPokemonV2TypeResponse {
    data: IPokemonV2TypeResponseData
}

interface IPokemonV2TypeResponseData {
    pokemon_v2_type: IPokemonV2Type[]
}

interface IPokemonV2Type {
    id: number
    pokemon_v2_typeefficacies: IPokemonV2TypeEfficacy[]
    pokemon_v2_typenames: IPokemonV2TypeName[]
}

interface IPokemonV2TypeEfficacy {
    damage_factor: number
    pokemonV2TypeByTargetTypeId: IPokemonV2TypeByTargetTypeId
}

interface IPokemonV2TypeByTargetTypeId {
    id: number
}

interface IPokemonV2TypeName {
    name: string
}

interface IPokemonV2PokemonResponse {
    data: IPokemonV2PokemonResponseData
}

interface IPokemonV2PokemonResponseData {
    pokemon_v2_pokemon: IPokemonV2Pokemon[]
}

interface IPokemonV2Pokemon {
    pokemon_v2_pokemonspecy: IPokemonV2PokemonSpecy
    pokemon_v2_pokemonforms: IPokemonV2PokemonForm[]
}

interface IPokemonV2PokemonForm {
    pokemon_v2_pokemonformnames: IPokemonV2PokemonFormName[]
}

interface IPokemonV2PokemonFormName {
    name: string
}

interface IPokemonV2PokemonSpecy {
    pokemon_v2_pokemonspeciesnames: IPokemonV2PokemonSpeciesName[]
}

interface IPokemonV2PokemonSpeciesName {
    name: string
}

const getPokemonName = (p: IPokemonV2Pokemon) => {
    return `${p.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesnames[0].name}${p.pokemon_v2_pokemonforms[0].pokemon_v2_pokemonformnames.length ? ' (' + p.pokemon_v2_pokemonforms[0].pokemon_v2_pokemonformnames[0].name + ')' : ''}`
}

const StyledDiv = styled.div``
const StyledTitle = styled.h4``
const StyledLabel = styled.label``
const StyledSelect = styled.select``
const StyledOption = styled.option``
const StyledButton = styled.input``
const StyledSubTitle = styled.h5``
const StyledList = styled.ul``
const StyledListItem = styled.li``

interface ITeraRaidCalc {
    Box?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>
    Title?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>
    Form?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>
    Result?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>
    Label?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLLabelElement>, HTMLLabelElement>>
    Select?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLSelectElement>, HTMLSelectElement>>
    Option?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLOptionElement>, HTMLOptionElement>>
    Button?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement>>
    SubTitle?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>
    List?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>>
    ListItem?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement>>
}

const TeraRaidCalc: React.FC<ITeraRaidCalc> = ({
    Box = StyledDiv,
    Title = StyledTitle,
    Form = StyledDiv,
    Result = StyledDiv,
    Label = StyledLabel,
    Select = StyledSelect,
    Option = StyledOption,
    Button = StyledButton,
    SubTitle = StyledSubTitle,
    List = StyledList,
    ListItem = StyledListItem,
}) => {
    const [types, setTypes] = useState<IPokemonV2Type[]>([])
    const [type1, setType1] = useState(0)
    const [type2, setType2] = useState(0)
    const [teraType, setTeraType] = useState(0)
    const [pkmnList, setPkmnList] = useState<string[]>([])

    useEffect(() => {
        const getTypes = async () => {
            const { data } = await axios.post<IPokemonV2TypeResponse>('https://beta.pokeapi.co/graphql/v1beta', {
                query: `
                    query typesPokeAPIquery {
                        pokemon_v2_type(where: {pokemon_v2_pokemontypes_aggregate: {count: {predicate: {_gt: 0}}}}) {
                            id
                            pokemon_v2_typeefficacies {
                                damage_factor
                                pokemonV2TypeByTargetTypeId {
                                    id
                                }
                            }
                            pokemon_v2_typenames(where: {language_id: {_eq: 9}}) {
                                name
                            }
                        }
                    }
                `
            })

            setTypes(data.data.pokemon_v2_type)
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
                            pokemon_v2_pokemonspecy {
                                pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 9}}) {
                                    name
                                }
                            }
                            pokemon_v2_pokemonforms {
                                pokemon_v2_pokemonformnames(where: {language_id: {_eq: 9}}) {
                                    name
                                }
                            }
                        }
                    }
                `
            })

            if (pokes.data) {
                setPkmnList([types.find(t => t.id === lowList[0])?.pokemon_v2_typenames[0].name + ': ' + pokes.data.pokemon_v2_pokemon.map(getPokemonName).join(", ")])
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
                                pokemon_v2_pokemonspecy {
                                    pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 9}}) {
                                        name
                                    }
                                }
                                pokemon_v2_pokemonforms {
                                    pokemon_v2_pokemonformnames(where: {language_id: {_eq: 9}}) {
                                        name
                                    }
                                }
                            }
                        }
                    `
                })

                if (pokes.data) {
                    list.push(types.find(t => t.id === pairs[0])?.pokemon_v2_typenames[0].name + ' + ' + types.find(t => t.id === pairs[1])?.pokemon_v2_typenames[0].name + ': ' + pokes.data.pokemon_v2_pokemon.map(getPokemonName).join(", "))
                }

                pairs.splice(0, 2)
            }

            setPkmnList(list)
        }
    }

  return (
    <Box>
        <Title>Tera Raid Pkmn Calculator</Title>
        <Form>
            <Label>
                Type 1:
                <Select value={type1} onChange={e => setType1(parseInt(e.target.value))}>
                    <Option value={0}>None</Option>
                    {types.map(t => <Option key={'type1-' + t.id} value={t.id}>{t.pokemon_v2_typenames[0].name}</Option>)}
                </Select>
            </Label>
            <Label>
                Type 2:
                <Select value={type2} onChange={e => setType2(parseInt(e.target.value))} disabled={!type1}>
                    <Option value={0}>None</Option>
                    {types.map(t => <Option key={'type2-' + t.id} value={t.id}>{t.pokemon_v2_typenames[0].name}</Option>)}
                </Select>
            </Label>
            <Label>
                Tera Type:
                <Select value={teraType} onChange={e => setTeraType(parseInt(e.target.value))}>
                    <Option value={0}>None</Option>
                    {types.map(t => <Option key={'teraType-' + t.id} value={t.id}>{t.pokemon_v2_typenames[0].name}</Option>)}
                </Select>
            </Label>
            <Button type="button" value="Calculate" onClick={onClick} disabled={!type1} />
        </Form>
        <Result>
            <SubTitle>{ pkmnList.length > 0 && 'Recommended Pkmn: ' }</SubTitle>
            <List>
                { pkmnList.map(l => <ListItem key={l.replaceAll(' ', '')}>{ l }</ListItem>) }
            </List>
        </Result>
    </Box>
  )
}

export default TeraRaidCalc
