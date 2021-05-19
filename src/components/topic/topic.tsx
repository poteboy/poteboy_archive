import React from 'react';
const style = require("./topic.module.scss")


const Topic = (props: {topic: string}) => {

    function topicName (topic: string) {
        if (topic === 'ContentfulTechEdge') {
            return 'TECH'
        } else if (topic === 'ContentfulPoemEdge'){
            return 'POEM'
        }
    }

    return(
        <div className={topicName(props.topic)=== 'TECH' ? style.tech : style.poem}>
            <p>
            {topicName(props.topic)}
            </p>
        </div>
    )
}

export default Topic