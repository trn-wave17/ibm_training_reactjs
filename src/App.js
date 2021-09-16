import './App.css';
import Employees from './components/Employees';
import Header from './components/Header';
import Demo from './components/Demo';
import { useState, useEffect } from 'react'
import AddEmployee from './components/AddEmployee';
import Footer from './components/Footer';
import { BrowserRouter, Route} from 'react-router-dom'
import About from './components/About';
import EmployeeDescription from './components/EmployeeDescription';
import axios from 'axios';

function App() {

  const [employees, setEmployees]  = useState([])

  const [showForm, setShowForm] = useState(false);

  useEffect(()=>{
    const getEmployees = async() =>{
        let employees = await fetchEmployeesFromServer();
        setEmployees(employees);
    }

    getEmployees();

  },[])

  const fetchEmployeesFromServer = async () => {
    let response = await fetch('http://localhost:5000/employees',{
      method: 'GET'
    })
    return response.json();
  }

  const addEmployee = async (employee)=>{
    let response = await fetch('http://localhost:5000/employees',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(employee)
    })

    const data = await response.json();
    setEmployees([...employees, data]);
  }

  const addEmployeeAxios = async (employee)=>{
    let response = await axios.post('http://localhost:5000/employees', employee);
    const data = await response.data;
    setEmployees([...employees, data]);
  }

  const deleteEmployee = async (id)=>{
    let response = await fetch(`http://localhost:5000/employees/${id}`,{
      method: 'DELETE'
    })
    response.status === 200 ? setEmployees(employees.filter((employee)=>employee.id !== id)):alert("Error deleting the record");
  }

  const toggleEmployeeActiveState = async (employee)=>{
    employee.active = !employee.active;
    let response = await fetch(`http://localhost:5000/employees/${employee.id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(employee)
    })
    let data = await response.json();
    setEmployees(employees.map((emp)=>emp.id===employee.id?data:emp))
  }

  const toggleAddEmployeeForm = ()=>{
    setShowForm(!showForm);
  }
   


  return (
    <BrowserRouter>
      <div className='container'>
        <Header isFormVisible={showForm} onToggleForm={toggleAddEmployeeForm}/>
        <Route path='/' exact
          render={(props) => (
              <>
                {showForm && <Demo onAdd={addEmployeeAxios}/>}
                {/*showForm && <AddEmployee onAdd={addEmployee}/>*/}
                <Employees employees={employees} onDelete={deleteEmployee} onToggle={toggleEmployeeActiveState}/>
              </>
          )}/>
        <Route path='/about' component={About}/>
        <Route path="/employee/:id" component={EmployeeDescription}/>
        <Footer/>
      </div>
      </BrowserRouter>
  );
}

export default App;
