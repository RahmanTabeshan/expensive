import { useEffect, useState } from "react";
import TransActionComponent from "./TransActionComponent";
import OverViewComponent from "./OverViewComponent" ;

const ExpenseApp = () => {

    
    const [expense , setExpense] = useState(0) ;
    const [income , setIncome] = useState(0) ;
    const [transAction , setTransAction] = useState([]) ;

    useEffect(()=>{

        let inc = 0 ;
        let exp = 0 ;

        transAction.forEach(t=>{
            t.type === "Expense" ? exp = exp + parseFloat(t.amount) : inc = inc + parseFloat(t.amount) ;
        })

        setExpense(exp) ; 
        setIncome(inc) ;

    } , [transAction])
    
    const addTransaction = (form)=>{
        const Data = {...form , id:Date.now()} ;
        setTransAction([...transAction , Data]) ;
    }

    return (
        <section className="container">
            <OverViewComponent 
                income={income} 
                expense={expense}
                addTransaction={addTransaction}
            />
            <TransActionComponent transaction={transAction} />
        </section>
    );
}
 
export default ExpenseApp;