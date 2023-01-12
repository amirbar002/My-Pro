import React, { useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'


 function AddMeet() {
    const { register, handleSubmit } = useForm();
    const [alldata, setdata] = useState('');

    useEffect(()=>{
         console.log(alldata);
      axios.post('http://localhost:3001/customers/',alldata) 
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
         
    },[alldata])

     const onSubmitt = (data) => {
   if(data.dataFrom === data.dataTo || data.Description ===''|| data.Room === Number ){
    return alert('Maybe something is missing')
   }
      data.dataFrom = new Date().toISOString().slice(0, 19).replace('T', ' ');
      data.dataTo = new Date().toISOString().slice(0, 19).replace('T', ' ');
      console.log('sbmit');
      console.log(data);
      console.log('sbmit');
      setdata(data)
    }


    return (
        <div className='forms'>
            <h1>your meeting bord</h1>
            <h3>add a meet</h3>
            <form onSubmit={handleSubmit(onSubmitt)}>
                <select {...register("id")} >
                    <option value="1">UI team</option>
                    <option value="2">React team</option>
                    <option selected value="3">Mobil team</option>
                </select>
                <input type="datetime-local" placeholder='from' {...register('dataFrom')} />
                <input type="datetime-local" placeholder='to' {...register('dataTo')} />
                <input type="text" placeholder='Description' {...register('Description')} />
                <input type="text" placeholder='Room only numdar plz' {...register('Room')} />
                <input type="submit" />
            </form>

        </div>
    )
}

export default AddMeet