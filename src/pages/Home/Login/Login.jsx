import React, { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { userProvider } from "../../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import ForgeModal from "../forgeModal/ForgeModal";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {loginUser} = useContext(userProvider);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname




  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email,password)
    .then(result => {
        const currentUser = result.user;
        if(!currentUser.emailVerified){
            toast.error("please verify your mail")
            

        }
        else{
          navigate(from,{replace:true})
          console.log(currentUser);
        }
        form.reset()
    })
    .catch(err => {
        toast.error(err.message)
    })


  };

  return (
    <div className="w-25 mx-auto mt-5">
      <Container className="border px-3 py-3">
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label> 
            <Form.Control type="email" name="email" required placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Form.Group>
          <div className="text-end">
          <button onClick={handleShow} type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btn btn-link">Forgot password?</button>
          </div>
          <div className="mt-3">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>



<ForgeModal handleClose={handleClose} show={show}></ForgeModal>

      </Container>
    </div>
  );
};

export default Login;
