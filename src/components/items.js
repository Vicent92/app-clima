import { useSelector } from "react-redux"
import { useValueInput } from "../hooks/useValueInput"
import { Country } from "../style/countryStyled"
import { ContainerTemP } from "../style/itemsStyled"
import { ContainerTemM } from "../style/itemsStyled"
import { ContainerItems } from "../style/itemsStyled"

export const Items = () => {
    const state = useSelector(state => state)
    const { value } = useValueInput()

    return (
        <>
            {
                state.map(el => {
                    return (
                        <>

                        
                    <ContainerItems>
                        <ContainerTemP>
                            <Country>{el.name}</Country>
                            <div>temp {el.main.temp}</div>
                        </ContainerTemP>
                        
                    <ContainerTemM>
                        <div>temp. max {el.main.temp_max}</div>
                        <div>temp. min {el.main.temp_min}</div>
                    </ContainerTemM>
                        
                    </ContainerItems>
                    </>
                    )
                })
            }
        </>
    )
}