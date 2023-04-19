import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5'>
           <footer className="bg-dark text-light">
  <div className="container py-5">
    <div className="row">
      <div className="col-md-3">
        <h5>About Us</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="col-md-3">
        <h5>Our Services</h5>
        <ul className="list-unstyled">
          <li><a href="#">Service 1</a></li>
          <li><a href="#">Service 2</a></li>
          <li><a href="#">Service 3</a></li>
          <li><a href="#">Service 4</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5>Recent Posts</h5>
        <ul className="list-unstyled">
          <li><a href="#">Post 1</a></li>
          <li><a href="#">Post 2</a></li>
          <li><a href="#">Post 3</a></li>
          <li><a href="#">Post 4</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5>Contact Us</h5>
        <ul className="list-unstyled">
          <li><i className="bi bi-geo-alt-fill"></i> 123 Main St, Anytown USA</li>
          <li><i className="bi bi-phone-fill"></i> 555-555-5555</li>
          <li><i className="bi bi-envelope-fill"></i> info@example.com</li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <p>&copy; 2023 My Company</p>
      </div>
      <div className="col-md-6">
        <ul className="list-inline text-md-end">
          <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
          <li className="list-inline-item"><a href="#">Terms of Use</a></li>
          <li className="list-inline-item"><a href="#">Cookie Policy</a></li>
          <li className="list-inline-item"><a href="#">Sitemap</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;