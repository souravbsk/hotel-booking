import React, { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { userProvider } from "../../../AuthProvider/AuthProvider";

const ForgeModal = ({ show, handleClose }) => {

    const {resetPassword} = useContext(userProvider);

const handleForgetLinkSubmit =(e) => {
    e.preventDefault()
    const form =e.target;
    const email = form.email.value;
    if(!email){
        toast.error('please enter your mail')
        return
    }
    else{

        resetPassword(email)
        .then(() => {
            toast.success("reset link send in your mail")
        })
        .catch(err => {
            toast.error(err.message);
        })
    }
}

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleForgetLinkSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
              name="email"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send Link
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default ForgeModal;
