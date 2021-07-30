import React from 'react'
import Net from '../utils/network'
import { useState, useEffect } from 'react'
import HotTopic from '../component/search/hot-search'

const App = () => {
    const [words, setWords] = useState([]);//top_search words

    useEffect(() => { // 走一次
        console.log('===============走一次================');
        Net.getTopSearchWords()
            .then(resp => {
                console.log(resp);
                setWords(resp['top_search']['words']); // 异步
            });
    }, []);

    const selectTopicItem = (item) => {
        console.log('点击了', item.display_query);
    }

    return (
        <div>
           <HotTopic title='热门话题' words={words} selectItem={(item) => selectTopicItem(item)} btnTitle='查看詳情'/>
        </div>
    );
}

export default App;