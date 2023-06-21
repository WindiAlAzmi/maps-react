/* eslint-disable no-unused-vars */
import { useState } from "react";

const comments = {
    id:1,
    items:[
        {id:1, text:'ni'}
    ]
};



export default function Comments() {
  const [commentsData, setCommentsData] = useState(comments);
  console.log(commentsData, 'ini comment data');

  
  return (
    <div>
        ini commetns data  ht
    </div>
  )
}
