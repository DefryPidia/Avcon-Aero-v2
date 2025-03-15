const Footer = () => {
    return (
        <footer className="footer text-center text-md-start text-white bg-dark py-4 mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Aero Supplies Global</h4>
                        <p>Experience the power of Aviation</p>
                    </div>

                    <div className="col-md-2">
                        <h6>Company</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">About us</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Location</a></li>
                            <li><a href="#" className="text-white text-decoration-none">ASG Careers</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Events</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Quality</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Clients</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Products</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <p className="mb-1"><strong>Aero Supplies Global DWC LLC</strong></p>
                        <p className="mb-1">Ground Floor, Supplier Complex, DWC - Mohammed Bin Rashid Aerospace Hub, United Arab Emirates</p>
                        <p className="mb-1"><strong>UAE | INDIA | RWANDA | USA</strong></p>
                        <p className="text-danger mb-1">24/7 AOG Desk:</p>
                        <p className="mb-1">+971 65263464</p>
                        <p className="mb-0">sales@aeroasg.com</p>
                    </div>
                </div>

                <hr className="bg-light" />

                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="mb-0">Follow us on <span className="fw-bold bg-white text-dark px-2 rounded">LinkedIn</span></p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p className="mb-0">© 2024 by Aero Supplies Global, All rights reserved.</p>
                        <p className="mb-0">
                            <a href="#" className="text-white text-decoration-none">Terms of Service</a> |
                            <a href="#" className="text-white text-decoration-none">Privacy Policy</a> |
                            <a href="#" className="text-white text-decoration-none">Cookie Policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer