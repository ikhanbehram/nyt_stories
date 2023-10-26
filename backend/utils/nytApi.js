module.exports = {
    getNytStories: async (query)=> {
        const baseUrl = `${process.env.API_URL}/${query}.json?api-key=${process.env.API_KEY}`
        const response = await fetch(baseUrl);
        const data = await response.json();
        return data;
    }
}