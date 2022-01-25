import axios from "axios";



export const climaGet = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3968d4053f61c5c59e7a254eb8c2680b&units=metric`
    
    const info = await axios.get(url)

    return info.data
}