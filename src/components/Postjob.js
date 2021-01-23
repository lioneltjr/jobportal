import { useEffect, useState } from "react";
import { Button, Tabs, Tab,  Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
function Postjob() 
{

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [Jobs, setJobs] = useState([]);


  useEffect(() => {

    axios
      .get("a36cdfde5edb54fc1be39fc625215c59-327723398.ap-southeast-1.elb.amazonaws.com:8080/jobs")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //This is how we created the createBooks function!
  const createJobs = (event) => {
    event.preventDefault();
    // if (localStorage.getItem("token"))  {
    console.log(event);
    console.log("Name", name);
    console.log("description", description);
    console.log("date", date);
    console.log("price", price);
    console.log("address", address);
 

        axios.post("a36cdfde5edb54fc1be39fc625215c59-327723398.ap-southeast-1.elb.amazonaws.com:8080/jobs", {
           name: name,
           description: description,
           date: date,
           price: price,
           address: address,
           status: "NotCompleted"
          }
          )
          .then((res) => {
            window.location.reload(false);
            console.log(res.data);
            alert(JSON.stringify(res.data));
          })
          .catch((err) => console.log(err));
      //}
    }
    


    return(
    
           
            
                  <div className="container">
                      <Link className="btn btn-primary" to="/profile">
        back to Home
      </Link>
                  <div className="w-75 mx-auto shadow p-5"> 
                 
                  <Card className="text-center">
                      <Card.Header>
                     Add Jobs </Card.Header>
                     </Card>
        
                   
                      <Form onSubmit={(event) => createJobs(event)} className="m-3">
                        <Form.Group controlId="name">
                          <Form.Label>Task</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Provide task"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                          />
                        </Form.Group>
        
                        <Form.Group controlId="description">
                          <Form.Label>description</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Provide description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                          />
                        </Form.Group>
        
                        <Form.Group controlId="date">
                          <Form.Label>date</Form.Label>
                          <Form.Control
                             type="date"
                             placeholder="Provide date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                          >
                          </Form.Control>
                        </Form.Group>
        
                        <Form.Group controlId="price">
                          <Form.Label>price</Form.Label>
                          <Form.Control
                           type="text"
                           placeholder="Provide Service charge"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          >
                            
                          </Form.Control>
                        </Form.Group>
        
                        <Form.Group controlId="address">
                          <Form.Label>address</Form.Label>
                          <Form.Control
                           type="text"
                           placeholder="Provide address charge"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          >
                            
                          </Form.Control>
                        </Form.Group>
                      
                        <Button className = "btn btn-primary btn-block" type="submit">
                          Add
                        </Button>
                      </Form>
                  
                    </div>
                    </div>
               
    )
}



export default Postjob;