import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { userProvider } from "../../../AuthProvider/AuthProvider";
const Register = () => {
const {createUser,updateName,verifyEmail} = useContext(userProvider);


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const fullName = firstName + " " + lastName;


    if (!/(?=.*?[A-Z])/.test(password)) {
      toast.error("please enter One Uppercase");
      return;
    } else if (!/(?=.*?[0-9])/.test(password)) {
      toast.error("At least one digit");
      return;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      toast.error("At least one special character");
      return;
    } else if (password.length < 8) {
      toast.error("password must be 8 character");
      return;
    } else if (password !== confirmPassword) {
      toast.error("confirm password not matched");
      return;
    }
    createUser(email,password)
    .then(result => {
      const currentUser = result.user;
      updateName(result.user,fullName);
      verifyEmail(result.user);
      console.log(currentUser);
    })
    .catch(err => {
      toast.error(err.message)
    })






  };

  return (
    <div className="container my-5">
      <div className="w-50 mx-auto">
        <h1>Register</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              required
            />
          </Form.Group>

          <Form.Group controlId="lastName" />
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            name="lastName"
          />

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              required
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              required
            />
          </Form.Group>

          <div className="mt-3">
            <Button variant="primary" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
