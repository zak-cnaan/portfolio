import { useState } from "react";

const Todos = () => {

    const [categories, setCategories] = useState([]);
    const [catInput, setCatInput] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        const obj = {
            id:Math.random(),
            name:catInput
        }
        const newCategories = [...categories, obj];
        setCategories(newCategories);
    }

    const handleChange = (e) => {
        setCatInput(e.target.value);
    }

    const deleteCategory = (id) => {
        console.log("deleteCategory", id);
    }

    return (
        <div className="container">
            <h1>Todos</h1>
            <h2>Add Category</h2>
            <form onSubmit={submitForm}>
                <input type="text" onChange={handleChange} />
            </form>
            <ul>
                {categories.map((item)=>
                    <li key={item.id}>{item.name} <button onClick={() => deleteCategory(item.id)}>Delete {item.name}</button></li>
                )}
            </ul>
            <h2>Add todo:</h2>
            <form>
                <input type="text"></input>
                <select>
                <option value={0}>Choose:</option>

                    {categories.map((item) => {
                        return (
                            <option value={item.id}>{item.name}</option>
                        )
                    })}
                </select>
            </form>

        </div>
    )
}

export default Todos;