import { useEffect, useState } from "react";
import { Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {useHistory,useParams } from "react-router-dom"
const Edit = () =>
{
const {id} = useParams();
 let history = useHistory();
  const [user, setUser] = useState(
      {
        name: "",
        description: " ",
        date: " ",
        price: " ",
        address: " "
      }
  );
const { name, description, date, price, address} = user;

const onInputChange = e => {
    setUser({ ...user, [e.target.name]:e.target.value});
};

  useEffect(() => { 
  loadUser();
  },[]);

  const onUpdate =  (e) => 
  {
    console.log("welcome");
    e.preventDefault()
        axios.put(`http://localhost:8080/jobs/` +id ,user)
        .then(res => {
            window.location.reload(false);
            console.log(res.data);
            alert(JSON.stringify(res.data));
          })
      history.push("/profile")
  }


  //This is how we created the createBooks function!
  

    const loadUser = async() =>
    {
        const result = await axios.get(`http://localhost:8080/jobs/${id}`)
        setUser(result.data)
    }
    


    return(
    
            <div className="container">
                <div className="w-75 mx-auto shadow p-5"> 
                <h2 className = "text-center mb-4" > Edit Job </h2>
                      <form>
                      <div className = "form-group">
                        < input
                        className = "form-control form-control-lg"
                            type="text"
                            placeholder="Provide id"
                            name="id"
                            value={id}
                            onChange={e => onInputChange(e)}
                          />
                       </div>
                          <div className = "form-group">
                        < input
                        className = "form-control form-control-lg"
                            type="text"
                            placeholder="Provide task"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                          />
                       </div>
                       <div className = "form-group">
                        < input
                        className = "form-control form-control-lg"
                            type="text"
                            placeholder="Provide description"
                            name="description"
                            value={description}
                            onChange={e => onInputChange(e)}
                          />
                     </div>
                     <div className = "form-group">
                        < input
                        className = "form-control form-control-lg"
                             type="date"
                             placeholder="Provide date"
                             name="date"
                            value={date}
                            onChange={e => onInputChange(e)}
                          />
                        </div>
        
                        <div className = "form-group">
                        < input
                        className = "form-control form-control-lg"
                           type="text"
                           placeholder="Provide Service charge"
                           name="price"
                            value={price}
                            onChange={e => onInputChange(e)}
                          />
                            
                            </div>
        
                        <div className = "form-group">
                        < input
                        className = "form-control form-control-lg"
                           type="text"
                           placeholder="Provide address charge"
                           name="address"
                            value={address}
                            onChange={e => onInputChange(e)}
                          />
                            
                            </div>
                        
                        <Button className = "btn btn-warning btn-block" onClick = {(e) => onUpdate(e) } >
                          Update
                        </Button>
                      </form>
            
            </div>
            </div>
    )
}



export default Edit;