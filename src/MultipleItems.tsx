import { useState } from "react";

const defaultItems = [
    { id: 1, value: 'one' },
    { id: 2, value: 'two' },
    { id: 3, value: 'three' }
];
export function MultipleItems() {
    const [items, setItems] = useState(defaultItems);
    const addItems = ()=>{
        const item = defaultItems.find((i)=>!items.includes(i));
        if(item){
            setItems([...items,item]);
        }
    }
    const removeItem = (item:any)=>{
        setItems(items.filter((i)=>i !== item));
    }
    return (
        <>
        <button onClick={addItems}>Add item</button>
            <ul style={{listStyle:"none", paddingLeft:0}}>
                {items.map((item) =>
                    <li key={item.id}>
                        <button onClick={()=>removeItem(item)}>remove item</button>
                        <label>{item.id}</label>
                        <input defaultValue={item.value}></input>
                    </li>
                )}
            </ul>
        </>
    )
}