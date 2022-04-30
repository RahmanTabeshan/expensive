import { useEffect, useState } from "react";

const TransActionComponent = ({transaction}) => {

    const [search , setSearch] = useState("") ;
    const [filter , setFilter ] = useState(transaction) ;

    useEffect(()=>{
        setFilter(transaction) ;
    },[transaction])

    const filterItem = (inputValue)=>{
        if(inputValue === "" || !inputValue ){
            setFilter(transaction) ;
            return ;
        }
        const filtered = transaction.filter( t => t.desc.toLowerCase().includes(inputValue.toLowerCase()) ) ;
        setFilter(filtered) ;
    }

    const changeHandler = (e)=>{
        setSearch(e.target.value) ;
        filterItem(e.target.value) ;
    }
    
    if(!transaction.length) return <section className="trx">Add some trx</section> ;

    return (
        <section className="trx">
            <input type="text"className="search" placeholder="Search ... " value={search} onChange={changeHandler} />
            {filter.length ? filter.map(t => 
                <div className="transaction" key={t.id} style={{borderRight: t.type === "Expense" && "4px solid red "}}>
                    <span>{t.desc}</span>
                    <span>$ {t.amount}</span>
                </div>
            ) : <p>no match </p>}
        </section>
    );
}
 
export default TransActionComponent;