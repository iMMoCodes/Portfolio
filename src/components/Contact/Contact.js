import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

import "./styles.css"

const Contact = ({language}) => {
    const [state, handleSubmit] = useForm("xbjqdnoj");
        if (state.succeeded) {
            return <p>Thanks for joining!</p>;
        }

    return (
        <main className="contactContainer">
            <h1 className="contactsTitle">{language ? "Contact Me" : "Ota Yhteyttä"}</h1>
            <section className="contactsArea">
                <form onSubmit={handleSubmit} className="contactForm">
                    <div>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
        id="email"
        type="email" 
        name="email"
      />
        </div>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
                </form>
                <div className="contactInfoArea">
                    <h1>Matti Mäkelä</h1>
                    <h3>email</h3>
                    <h3>phonenum</h3>
                    <h3>address</h3>
                </div>
            </section>
        </main>
    )
}

export default Contact
