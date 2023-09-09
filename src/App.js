import logo from './logo.svg';
import './App.css';
import ExpenceItem from './components/ExpenceItem';
import NewExpence from './NewExpences/NewExpence';
function App() {
  const expences = [
    {id : 2 , title : 'SSD' , amount : 2940.50 , date : new Date(2022, 2 , 28)}, 
    {id : 3 , title : 'Btn Gaming Chair' , amount : 7243.50 , date : new Date(2022, 5 , 28)},
    {id : 4 , title : 'Dell G15' , amount : 32121.50 , date : new Date(2022, 9 , 28)}
  ]  

  // This function is used to take data from NewExpence from where the ExpenceForm data is coming
  // It is used for child to parent components  :
  const comingExpenceData = (expenceData) =>{
    console.log("App.js")
    console.log(expenceData);
  }

  return (
    <div className="App"> 
      <header className="App-header">
        {/*  It is used for child to parent components */}
        <NewExpence onComing = {comingExpenceData}></NewExpence> 
        {/* Props data pass in arguments as a parmater */}
        <ExpenceItem title = {expences[0].title} amount = {expences[0].amount} date ={expences[0].date}></ExpenceItem>
        <ExpenceItem title = {expences[1].title} amount = {expences[1].amount} date ={expences[1].date}></ExpenceItem>
        <ExpenceItem title = {expences[2].title} amount = {expences[2].amount} date ={expences[2].date}></ExpenceItem>  
      </header>
    </div>
  );
}

export default App;
