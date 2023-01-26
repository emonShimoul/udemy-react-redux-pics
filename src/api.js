import axios from "axios";

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID iRg4_52ptQxKBxUma13GnpCBZ5nXT99vviRMZJVVbFA'
        },
        params: {
            query: 'cars'
        }
    });

    console.log(response);
    return response;
};

export default searchImages;