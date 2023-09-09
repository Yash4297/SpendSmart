import React, {useState} from "react";
function ExpenceFrom(props){

    const [enteredTitle , setEnterTitle] = useState('');
    const [enteredAmount , setEnterAmount] = useState('');
    const [enteredDate , setEnterDate] = useState('');

    const titleChangeHandler =(event)=>{
        setEnterTitle(event.target.value);
    };
    const AmountChangeHandler =(event)=>{
        setEnterAmount(event.target.value);
    };
    const dateChangerHandler = (event)=>{
        setEnterDate(event.target.value);
    }

    const submitHander =(event)=>{
        event.preventDefault();
        const expenceData = {
            title : enteredTitle,
            amount : enteredAmount ,
            date :  new Date(enteredDate)
        }
        props.onSaveExpenceData(expenceData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');

    }

    return <form onSubmit={submitHander}>
        <div> 
            <div>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01"  value={enteredAmount} onChange={AmountChangeHandler} ></input>
            </div>
            <div>
                <label>Date</label>
                <input type="date" min="2019-01-01" max = "2023-12-30 " value={enteredDate} onChange={dateChangerHandler}></input>
            </div>
            <div><button>Add Expence</button></div>
        </div>
    </form>
}

export default ExpenceFrom;