import React,{useContext,useEffect} from 'react';
import { firstContext } from '../../Store/store';
import { searchPokeCard } from '../../Store/actions/actionPokemon';
import { Image,Constainer, Display, Title ,HeaderCardPage} from '../cardPage/style';
import { Header, Loader } from '../../components';
import {AiOutlineArrowRight} from 'react-icons/ai';
import { Button } from '../../components';



const CardPage = () =>{

    const {state,dispatch} = useContext(firstContext)

    useEffect(()=>{
        dispatch({type:'resetCard'})
        //Erros com nomes sirfetchd,
        if(state.pokemon !== 'inicial'){
            if(state.pokemon.name.replace('-',' ').split(" ")[0] === "tapu" || state.pokemon.name.replace('-',' ').split(" ")[0] === "mime"  ){
                searchPokeCard(dispatch,`"${state.pokemon.name.replace('-',' ')}"`)
            }else if(state.pokemon.name.replace('-',' ').split(" ")[0] === 'mr'){
                searchPokeCard(dispatch,`"${state.pokemon.name.replace('-',' ').split(" ")[0]}. ${state.pokemon.name.replace('-',' ').split(" ")[1]}"`)
            }else{
                searchPokeCard(dispatch,state.pokemon.name.replace('-',' ').split(" ")[0])
            }
        }
    },[state.pokemon,dispatch])

    const cardInfo = ()=>{
        return(

            <div>
                <div>
                    <Header/>
                    <HeaderCardPage>
                        <Title>CARTAS</Title>
                        <Button page='pokemon'>ir Para Pokemon<AiOutlineArrowRight/></Button>
                    </HeaderCardPage>


                </div>
                <Display>
                
                    {state.cards.length >0? 
                        <>
                            {state.cards.map((cards)=>{
                                    return(
                                        <Constainer>
                                            <Image src={cards.images.small} alt={cards.id}/>
                                        </Constainer>
                                        )

                                })}
                                
                        </>
                    
                    :<Loader/>}
                </Display>

            </div>
            
        )
    }

    return(
        <>
        {state.def === true ? cardInfo() : <div>Nemhum Card encontrado</div>}
        </>
    )
}

export default CardPage