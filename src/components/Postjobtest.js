import { useEffect, useState, Fragment } from "react";
import { Button, Tabs, Tab, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import Navigation from "./Navigation";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './css/joblisting.css';

function Postjobtest() {



  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [Jobs, setJobs] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  useEffect(() => {

    axios
      .get("a86c34b8af1be4fd7a3990c49bb5b98e-1786563949.ap-southeast-1.elb.amazonaws.com:8080/jobs")
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


    axios.post("http://ac060b74cd1704a4d8f21dbe32279459-1851138779.ap-southeast-1.elb.amazonaws.com:8080/jobs", {
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



  return (

    <Fragment>
      <MapContainer id="mymapcontainer" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://developers.onemap.sg/commonapi/staticmap/getStaticImage?layerchosen=grey&lat=1.31955&lng=103.84223&zoom=17&height=512&width=512&polygons=&lines=&points=&color=&fillColor="
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      <Navigation />

      <div className="container">
        
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
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Provide description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Provide date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              >
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Provide Service charge"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >

              </Form.Control>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <p>Latitude: {coordinates.lat}</p>
                    <p>Longitude: {coordinates.lng}</p>
                    <Form.Control {...getInputProps({ placeholder: "Type address" })} />

                    <div>
                      {loading ? <div>...loading</div> : null}

                      {suggestions.map(suggestion => {
                        const style = {
                          backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                        };

                        return (
                          <div {...getSuggestionItemProps(suggestion, { style })}>
                            {suggestion.description}
                          </div>
                        );
                      })}
                    </div>
                  </div>)}</PlacesAutocomplete>

            </Form.Group>

            <Button className="btn btn-primary btn-block" type="submit">
              Add
                        </Button>
          </Form>

        </div>
      </div>
    </Fragment>
  )
}



export default Postjobtest;