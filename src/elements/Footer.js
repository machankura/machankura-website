import { Link } from 'react-router-dom';
import { BsTwitter, BsFillEnvelopeFill } from "react-icons/bs";

const Footer = () => {
    return (
        <>
        <div id="hero-bottom">
            <Link to="mailto:" style={{ color: 'inherit', textDecoration: 'none' }}><BsFillEnvelopeFill size="1.3em"></BsFillEnvelopeFill> support@machankura.com</Link>
            <Link to="https://twitter.com/machankura8333" style={{color: 'inherit', textDecoration: 'none' }}><BsTwitter size="1.3em"></BsTwitter> @Machankura8333 </Link>
        </div>
        </>
    )
}

export default Footer;