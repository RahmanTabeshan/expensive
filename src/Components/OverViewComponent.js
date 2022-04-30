import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({income , expense , addTransaction}) => {
    const [isShow , setIsShow] = useState(false)
    return (
        <>
            <div className="top-section">
                <p>Balance : {income - expense}</p>
                <button 
                    className={`btn ${isShow && "cancel"}`} 
                    onClick={()=>{setIsShow(!isShow)}}
                >
                    {isShow ? "Cancel" : "Add"}
                </button>
            </div>
            {isShow && <TransActionForm addTransaction={addTransaction} setIsShow={setIsShow} />}
            <div className="result">
                <div className="expense-box">
                    Expense : <span>{expense} $</span>
                </div>
                <div className="income-box">
                    Income : <span>{income} $</span>
                </div>
            </div>
        </>
    );
}
 
export default OverViewComponent;