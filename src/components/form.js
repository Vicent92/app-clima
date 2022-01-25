import { useValueInput } from "../hooks/useValueInput"
import { ContainerForm } from "../style/Container"
import { Button, FormStyle, Input } from "../style/formStyle"

export const Form = () => {
    const { handleValue, value } = useValueInput()
    

    return(
        <>
        <ContainerForm>
            <FormStyle onSubmit={handleValue}>
            <Input name='valor'></Input>
            <Button>Buscar</Button>
        </FormStyle>
        </ContainerForm>
        </>
    )
}