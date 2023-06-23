import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Heading } from "./Heading";

function Reservations() {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);

/*   const [updatedReservation, setUpdatedReservation] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    date: "",
    destination: "",
    cardno: "",
    carddate: "",
    cvc:""

  }); */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 /*  const updateReservation = (
    id,
    name,
    lastname,
    phone,
    email,
    destination,
    date,
    cardno,
    carddate,
    cvc
    
  ) => {
    setUpdatedReservation((prev) => {
      return {
        ...prev,
        id: id,
        name: name,
        lastname: lastname,
        phone: phone,
        email: email,
        destination: destination,
        date: date,
        cardno: cardno,
        carddate: carddate,
        cvc: cvc

      };
    });
    handleShow();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedReservation((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveUpdatedReservation = () => {
    console.log(updatedReservation);

    axios
      .put(`/updateReservation/${updatedReservation.id}`, updatedReservation)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    //window.location.reload();
  }; */
  useEffect(() => {
    axios
      .get("/reservations")
      .then((res) => {
        console.log(res.data);
        setReservations(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteReservation = (id) => {
    console.log(id);
    axios
      .delete(`/deleteReservaton/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    // document.location.reload(true);
  };

  return (
    <div>
      <Heading />
      <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <h1 className="gradient-headline ">Reservations</h1>
        </div>
      
      </div>
</div>

      {reservations ? (
        <>
            <div className="container">
            <div className="row mt-5 ms-1 me-5">
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr className="blinker font-18">
            <th>Name</th>
            <th>Last name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Date</th>
            <th>Destination</th>
 
          </tr>
        </thead>
        <tbody>
            {reservations.map((reservation) => {
              return (
                <tr className="roboto font-18" key={reservation._id}>
                <td>{reservation.name}</td>
                <td>{reservation.lastname}</td>
                <td>{reservation.phone}</td>
                <td>{reservation.email}</td>
                <td>{reservation.date}</td>
                <td>{reservation.destination}</td>
                <td>
   {/*              <Button
                    
                      className="edit-button custom-button btn text-light border-0 rounded-0 m-2"
                      onClick={() =>
                        updateReservation(
                          reservation._id,
                          reservation.name,
                          reservation.lastname,
                          reservation.phone,
                          reservation.email,
                          reservation.date,
                          reservation.destination,
             
          
                        )
                      }
                    >
                      Edit
                    </Button> */}
                    <Button
                    variant="secondary"
                    className="delete-button custom-button btn text-light border-0 rounded-0 m-2"
                      onClick={() => deleteReservation(reservation._id)}
                    >
                      Delete
                    </Button>
                </td>
              </tr>
           
              );
            })}
          </tbody>
      </table>
            </div>
            </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Reservations;
