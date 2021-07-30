import axios from "axios";


const topSearchWordsUrl = 'https://www.zhihu.com/api/v4/search/top_search';
 

const getTopSearchWords = () => {
    const request = axios.get(topSearchWordsUrl);
    return request.then(response => response.data);
}
 
export default {getTopSearchWords};