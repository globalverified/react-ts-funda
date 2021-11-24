import { useState } from "react";

interface IUserForm{
    name: string,
    age: number
}
const defaultFormValue: IUserForm = {
    name: '',
    age: 0
}

export function UserForm() {
    const [form, setForm] = useState<IUserForm>(defaultFormValue);
    const onChangeName = (e:any )=>{
        setForm({
            ...form,
            name: e.target.value
        });
    }
    const onChangeAge = (e:any )=>{
        setForm({
            ...form,
            age: e.target.value
        });
    }
    const onSubmitForm = ()=>{
        console.log('Form - ', form);
        //call api
    }
    return (<div>
        User Name: <input type="input" name="username" value={form.name} onChange={onChangeName}/><br />
        User Age: <input type="input" name="userage" value={form.age} onChange={onChangeAge}/> <br />
        <button onClick={onSubmitForm}>Submit Form</button>
    </div>)
} 