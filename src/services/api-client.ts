import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params: {
        key:'8f626ab3a87140738f59995aaf21e347'
    }
})