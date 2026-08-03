import Section from "./Section";


import EmailIcon        from "../assets/contactLogos/email.svg?react";
import FacebookIcon     from "../assets/contactLogos/facebook.svg?react";
import GitHubIcon       from "../assets/contactLogos/github.svg?react";
import InstagramIcon    from "../assets/contactLogos/instagram.svg?react";
import LinkedInIcon     from "../assets/contactLogos/linkedin.svg?react";
import PhoneIcon        from "../assets/contactLogos/phone.svg?react";
import TelegramIcon     from "../assets/contactLogos/telegram.svg?react";

import ContactButton from "../components/ContactButton";

export default function Contact() {
    return (
        <Section>
            <h1 id="contact">Contact</h1>
            <div className="flex flex-row flex-wrap justify-center w-full gap-5 mb-50 mt-10">
                <ContactButton Icon={EmailIcon} label="Send me an Email" link="mailto:benyoucef1mahmoud@gmail.com"/>
                <ContactButton Icon={PhoneIcon} label="Call me" link="tel:+213555770071"/>
                <ContactButton Icon={TelegramIcon} label="My Telegram" link="https://t.me/+213555770071"/>
                <ContactButton Icon={GitHubIcon} label="Check Out my Github" link="https://github.com/inkwolf42"/>
                <ContactButton Icon={LinkedInIcon} label="Visite my LinkedIn" link="https://www.linkedin.com/in/benyoucef-mahmoud-97a514392"/>
                <ContactButton Icon={FacebookIcon} label="Here is my Facebook" link="https://www.facebook.com/profile.php?id=61593037672137"/>
                <ContactButton Icon={InstagramIcon} label="And Here is my Instagram" link="https://www.instagram.com/mahmoudbenyoucef?igsh=MXhyMmNtOHl4bmh3NQ=="/>
            </div>
        </Section>
    );
}