import {useState} from 'react';
import { climaGet } from '../services/climaService';
import { useDispatch } from 'react-redux';
import { newClima } from '../reducer/reducerWeather';

export const useValueInput = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()
    

    const handleValue = (e) => {
        e.preventDefault();
        const {target} = e
        const value = target.valor.value
        setValue(value)
        climaGet(value)
        .then(res => {
            const city = res
            console.log(dispatch(newClima(city)))
        })

    }


    return {
        value,
        handleValue
    }
}