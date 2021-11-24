import { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient();
const fetchAPI = async () => {
    const result = await fetch('https://swapi.dev/api/people');
    return result.json();
}
const RenderData = () => {
    const { data, isError, isFetching } = useQuery('fetchAPI', fetchAPI);
    const [items, setItems] = useState([]);
    setTimeout(() => {
        if (data) {
            setItems(data.results);
        }
    }, 1000);
    /* const addItems = ()=>{
        const item = items.find((i)=>!items.includes(i));
        if(item){
            setItems([...items,item]);
        }
    }
    const removeItem = (item:any)=>{
        setItems(items.filter((i)=>i !== item));
    } */
    if (isFetching) {
        return <div> data is fetching</div>
    } else if (isError) {
        return <div>error in fetching data</div>
    } else {
        return <div>
            {/* <button onClick={addItems}>Add item</button> */}
            Actor Name: {data.results[0].name}
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {/*  eslint-disable-next-line  */}
                {items.map((item, index) => 
                {index === 2 && <li key={index + 1}>
                        {/* <button onClick={()=>removeItem(item)}>remove item</button> */}
                        <label>{index + 1}</label>
                        <input defaultValue='test'></input>
                    </li>
                }
                )}
            </ul>
        </div>
    }
}
export function MultipleItemsAPI() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RenderData />
            </QueryClientProvider>
        </>
    )
}