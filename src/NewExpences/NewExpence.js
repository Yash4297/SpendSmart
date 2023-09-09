
import ExpenceFrom from './ExpenceForm';
import './NewExpence.css';

const NewExpence = (prop)=>{

    // This function is used to take data from NewExpence from where the ExpenceForm data is coming
    // It is used for child to parent components  : child is ExpenceForm.js and parent is NewExpence.js
    const saveExpenceDataHandler = (enteredExpenceData) =>{
        const expenceData = {
            ...enteredExpenceData,
            id : Math.random().toString()  
        }
       // console.log(expenceData);
        prop.onComing(expenceData);
    }
    return <div>
        {/* onSaveExpenceData can be written anything like onsavetoyou */}
        <ExpenceFrom onSaveExpenceData = {saveExpenceDataHandler}></ExpenceFrom> 
    </div>
};

export default NewExpence;