import React from 'react'
import './hot-search.scss'
// import './hot-search.css'

const HotTopic = ({ title, words, selectItem, btnTitle }) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                {words.map((item, index) => {
                    const key = `item-key-${index}`;
                    return (
                        <div key={key} className='top_search_words'>
                            <div className="info">
                                <div className='query'>{item.query}</div>
                                <div className='display_query'>{item.display_query}</div>
                            </div>
                            <div className="btn">
                                <div onClick={() => { if (selectItem) selectItem(item); }}>{btnTitle}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HotTopic;