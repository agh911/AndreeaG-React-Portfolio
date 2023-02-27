import contactImage from '../assets/images/contact.png'


function Contact() {
    return (
        <div id="contact-page">
            <h1 className="contact-header text-center">Let's get in touch!</h1>
            <p className="contact-para">Drop me an email at <code>andreeaghenea98@yahoo.com</code> OR fill out the form below with your message. I am eager to hear from you and look forward to the opportunity to assist you in any way I can!</p>
            <div className="d-flex align-items-end justify-content-evenly flex-wrap">
                <img className="contact-img" src={contactImage} alt="contact illustration" />
                <div>
                    <form action="mailto:andreeaghenea98@yahoo.com" method="post" enctype="multipart/form-data" name="EmailForm" id="contact-form">
                        <label id="name-label"><input type="text" id="name" placeholder="Name" required /></label>
                        <label id="email-label"><input type="email" id="email" placeholder="Email" required /></label>
                        <textarea name="message" id="message" rows="5" cols="50" placeholder="Write your message here..."></textarea>
                        <button className="contact-form-btn btn btn-light" type="submit" value="Submit">Send</button>
                    </form>
                </div>
            </div>

            <div className="social-media">
                <h4 className="text-center">
                    <span className="clash">FIND ME ON SOCIALS</span>
                </h4>
                <div className="socials d-flex flex-column align-items-center justyfy-content-center">
                    <p>Go ahead & connect with me</p>
                    <div>
                        <a className="sm-icon" href="https://www.linkedin.com/in/andreea-ghenea/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in" /></a>
                        <a className="sm-icon" href="https://www.instagram.com/byagdesign/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" /></a>
                        <a className="sm-icon" href="https://github.com/agh911" target="_blank" rel="noreferrer"><i className="fa-brands fa-github" /></a>
                    </div>
                </div>
                <div className="resume d-flex flex-column align-items-center justyfy-content-center">
                    <h4 className="clash">OR</h4>
                    {/* <p>If you'd like to find out even more about me</p> */}
                    <button className="btn btn-outline-light"><a className="download" href="assets/resume/Resume.pdf" download="Andreea Ghenea - Resume">Download my resume</a></button>
                </div>
            </div>
        </div>
    )
}

export default Contact;
