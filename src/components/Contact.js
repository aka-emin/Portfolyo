import React, { useState } from 'react';

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        alert("Mesaj gönderildi!");
    };

    return (
        <section id="contact">
            <h2>İletişim</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Ad Soyad" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <textarea name="message" placeholder="Mesajınız" onChange={handleChange} required />
                <button type="submit">Gönder</button>
            </form>
        </section>
    );
}

export default Contact;
