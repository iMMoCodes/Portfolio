import React, {useState} from 'react'
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MailIcon from '@material-ui/icons/Mail';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import GitHubIcon from '@material-ui/icons/GitHub';

import "./styles.css"

const Contact = ({language}) => {
  const [formStatus, setFormStatus] = useState("")

  const submitMessage = () => {
    if(language && formStatus === "SUCCESS") return <h1>Thank you for contacting.</h1>
    if(language && formStatus === "ERROR") return <h1>Oops.There was an error. Please try again.</h1>
    if(!language && formStatus === "SUCCESS") return <h1>Kiitos yhteydenotosta.</h1>
    if(!language && formStatus === "ERROR") return <h1>Tapahtui virhe. Yritä uudestaan.</h1>
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept","application/json")
    xhr.onreadystatechange = () => {
      if(xhr.readyState !== XMLHttpRequest.DONE) return
      if(xhr.status === 200) {
        form.reset()
        setFormStatus("SUCCESS")
      } else {
        setFormStatus("ERROR")
      }
    }
    xhr.send(data)
  }

    return (
        <main className="contactContainer" id="contact">
            <h1 className="contactsTitle">{language ? "Contact Me" : "Ota Yhteyttä"}</h1>
            <section className="contactsSection">
              <div className="contactsArea">
              <div className="contactsInfo">
                <div>
                  <h2 className="contactsSubTitle">{language ? "Contact Info" : "Yhteystiedot"}</h2>
                  <ul className="contactInfo">
                    <li>
                      <span><LocationCityIcon/></span>
                      <span>Tampere, 33850</span>
                    </li>
                    <li>
                      <span><MailIcon/></span>
                      <span>matti-makela@hotmail.com</span>
                    </li>
                    <li>
                      <span><ContactPhoneIcon/></span>
                      <span>+358 40 524 8245</span>
                    </li>
                  </ul>
                  <ul className="contactsIconLinks">
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/iMMoCodes"><GitHubIcon/></a></li>
                  </ul>
                </div>
              </div>
              <div className="contactForm">
                <h2>{language ? "Send a message" : "Lähetä viesti"}</h2>
                <form className="formArea" action="https://formspree.io/f/xwkwgenq" method="POST" onSubmit={(e) =>handleSubmit(e)}>
                  <div className="contactInput contactInputInfo">
                    <input type="text" name="firstName" required autoComplete="off" />
                    <span>{language?"First Name":"Etunimi"}</span>
                  </div>
                  <div className="contactInput contactInputInfo">
                    <input type="text" name="lastName" required autoComplete="off" />
                    <span>{language?"Last Name" : "Sukunimi"}</span>
                  </div>
                  <div className="contactInput contactInputInfo">
                    <input type="text" name="email" required autoComplete="off" />
                    <span>{language?"Email" : "Sähköposti"}</span>
                  </div>
                  <div className="contactInput contactInputInfo">
                    <input type="text" name="phoneNumber" required autoComplete="off" />
                    <span>{language ?"Phone":"Puhelinnumero"}</span>
                  </div>
                  <div className="contactInput contactInputText">
                    <textarea name="message" required></textarea>
                    <span>{language?"Your Message...":"Kirjoita viestisi..."}</span>
                  </div>
                  <div className="contactInput">
                    <input type="submit" value={language?"Send":"Lähetä"}/>              
                  {submitMessage()}
                  </div>
                </form>
              </div>
              </div>
            </section>
        </main>
    )
}

export default Contact
