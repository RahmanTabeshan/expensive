import { useState } from "react";

const TransActionForm = ({addTransaction , setIsShow}) => {
    const [form , setForm] =useState({
        desc : "" ,
        amount : 0 ,
        type : "Expense"
    }) ;

    const changeHandler = (e)=>{
        setForm({...form , [e.target.name] : e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault() ;
        addTransaction(form) ;
        setIsShow(false) ;
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="desc" value={form.desc} onChange={changeHandler} />
            <input type="number" name="amount" value={form.amount} onChange={changeHandler} />
            <div className="radio-box">
                <input 
                    id="Expense" 
                    type="radio" 
                    name="type" 
                    value="Expense" 
                    onChange={changeHandler}
                    checked={form.type === "Expense"} 
                />
                <label htmlFor="Expense">Expense</label>
                <input 
                    id="Income" 
                    type="radio" 
                    name="type" 
                    value="Income" 
                    onChange={changeHandler}
                    checked={form.type === "Income"} 
                />
                <label htmlFor="Income">Income</label>
            </div>
            <button className="btn primary" type="submit">Add Transaction</button>
        </form>
    );
}
 
export default TransActionForm;