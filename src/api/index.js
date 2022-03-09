import axios from "axios";

export const getBooks = async () => {
    try {
        const res = await axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=kdVEX4GXXcASptknaUgngMTcNBcmfHAr')
        return res.data
    } catch (err) {
        console.log(err)
    }


}
export const getInfos = async (list_name_encoded) => {
    try {
        const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${list_name_encoded}.json?api-key=kdVEX4GXXcASptknaUgngMTcNBcmfHAr`)
        return res.data
    } catch (err) {
        console.log(err)
    }


}

