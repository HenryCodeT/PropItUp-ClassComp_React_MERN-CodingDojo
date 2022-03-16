import './App.css';
import PersonCard from './component/PersonCard/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard nombre={"Doe"} apellido={"Jane"} age={45} hairColor={"black"}/>
        <PersonCard nombre={"Smith"} apellido={"Jon"} age={88} hairColor={"brown"}/>
        <PersonCard nombre={"Fillmore"} apellido={"Millard"} age={50} hairColor={"brown"}/>
        <PersonCard nombre={"Smith"} apellido={"Maria"} age={62} hairColor={"blonde"}/>
    </div>
  );
}

export default App;
