import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function FetchData() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState('')
    const [value,setvalue ] = useState('')

    const onChange = (event) =>{
        setvalue(event.target.value)
        setIsLoading(true)
        console.log('value');
        console.log(value);
    }
console.log(value);
console.log('hhhhhh');
    useEffect(() => {
      
        const fetchData = async () => {
            if(value == '' ){
                return console.log(' return');
            }
        try {
            setIsLoading(true)
            setUsers([])
            const res = await axios.get(`http://localhost:3001/customers/${value}`)
            console.log('try')
            console.log(res.data , 'res')
            setUsers(res.data)
            setIsLoading(false)
            setErrors('')
            console.log(users , 'users');
            console.log('send');
        } catch (error) {
            setIsLoading(false)
            setErrors(error.message)
        }
      } 
      fetchData()
    },[value],users)
    return (
        <div>
           
            <select onChange={onChange}>
                <option selected value="5">select your team</option>
                <option value="1">UI team</option>
                <option value="2">React team</option>
                <option value="3">Mobil team</option>
            </select>
            <div>{isLoading && 'Loading...'}</div>
            <div>{errors}</div>
        
         {users ?  users.map((user) => (
        <Card style={{ width: '18rem' }} >
      <Card.Header>your team meetimg</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>time to start: {user.data_from_meeting}</ListGroup.Item>
        <ListGroup.Item>time to finish: {user.data_To}</ListGroup.Item>
        <ListGroup.Item> description: {user.description}</ListGroup.Item>
        <ListGroup.Item>room numder:{user.Room}</ListGroup.Item>
      </ListGroup>
        </Card>
         )) : null} 

        </div>
    )
}

export default FetchData