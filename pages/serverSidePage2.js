
import userSWR from 'swr';



// export async function getServerSideProps() {

//     // const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const response = await fetch("http://localhost:3000/api/names.json");
//     const data = await response.json();

//     console.log(data);

//     return { props: {data}}
    
    
    
    
    
    
    

// }










export default function ServerSidies() {


    const {data, error} = userSWR('/api/rojas', fetch);

    if(error) return <div>failed to load</div>
    if(!data) return <div>loading</div>
    return <div>{data[0].title}</div>


return <>
<h1>Server data</h1>









</>

}









