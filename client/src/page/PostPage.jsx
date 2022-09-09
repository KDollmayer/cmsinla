import React, {useEffect, useState} from 'react'




export default function PostPage() {
    
    const [list, setList] = useState([])

    useEffect(() => {
        
        let url = process.env.REACT_APP_API_KEY
        console.log(url)
        fetch(url)
          .then((res) => res.json())
          .then((data) => setList(data.posts))
          
          

        
      }, []);
      
      
  return (
    <div>
     <h1>Posts</h1> 
    {
        list && list.map((item) => {
            return ( <div>
             <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
             <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
           
            </div>
            
            )
        })
    }

    </div>
  )
}
