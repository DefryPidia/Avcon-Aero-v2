import Image from "next/image";
import AvconAeroImage from "@public/image/avcon-aero-white.svg"
import EmailIcon from "@public/icon/email.svg"
import MobilePhoneIcon from "@public/icon/mobile-phone.svg"
import LinkedinIcon from "@public/icon/linkedin.svg"

const Footer = () => {
    return (
        <footer style={{
            background: "linear-gradient(to right, #d4112b 50%, #1d5fa8 50%)",
            color: "white",
            padding: "40px 0",
        }}  >
            <div className="container" style={{ padding: "0 40px 0 40px" }}>
                <div className="row">
                    <div className="col-md-8">
                        <Image src={AvconAeroImage} alt="avcon aero" height={100} width={285} />
                    </div>
                    <div className="col-md-4">
                        <div className="text-end">
                            <div className="fw-bold">Avcon Headquarter</div>
                            HQ Bella Terra Lifestyle CenterJI. Boulevard Raya Kav. 1 Kel. Kelapa Gading Timur, Kec. Kelapa Gading, Jakarta Utara 14240
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6 d-flex flex-column justify-content-end">
                        <div>
                            <div className="d-flex align-items-center">
                                <Image src={EmailIcon} alt="email" height={24} width={24} className="me-1" />
                                contact@avconaero.com
                            </div>
                            <div className="d-flex align-items-center">
                                <Image src={MobilePhoneIcon} alt="phone" height={24} width={24} className="me-1" />
                                +62 818-0740-0663
                            </div>
                            <div className="d-flex align-items-center">
                                follow us on :
                                <Image src={LinkedinIcon} alt="linkedin" height={80} width={106} className="ms-3" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.208209901744!2d106.878961!3d-6.1906422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4df4dd3a493%3A0x54d601d5b41b42f7!2sBella%20Terra%20Lifestyle%20Center%20Kelapa%20Gading!5e0!3m2!1sen!2sid!4v1738897062640!5m2!1sen!2sid"
                            width="295"
                            height="180"
                            style={{
                                borderRadius: "20px"
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="bg-white my-3" style={{ height: '1px' }}></div>

                <div className="d-flex justify-content-between">
                    <span>© 2025 by Avcon Aero, All rights reserved.</span>
                    <span>Term of services | Privacy Policy | Cookie Policy</span>
                </div>
            </div>
        </footer>
    );
};
export default Footer