import react, {useState} from 'react'; // useState is a React Hook

import ExpenceDate from './ExpenceDate'
import './ExpenceItem.css'; 
function ExpenceItem(props) { 
    const [title ,setTitle] = useState(props.title); // use state return an array with always two value , 
    //first value is the current value and second element is a function for updating that.
    // useState execute the function once more . and at last it always used in function jsx 
    
    function clickHandler(){
        setTitle("SSD 500 GB");
    }   
    return <div className='expense-item'> 
        <ExpenceDate date = {props.date} />
        <div className='expense-item__description'>

        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        </div> 
        <button onClick={clickHandler}>Change Title</button>
        </div>
}

export default ExpenceItem;