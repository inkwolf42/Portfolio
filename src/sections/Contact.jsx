import Section from "./Section";


import EmailIcon        from "../assets/contactLogos/email.svg?react";
import FacebookIcon     from "../assets/contactLogos/facebook.svg?react";
import GitHubIcon       from "../assets/contactLogos/github.svg?react";
import InstagramIcon    from "../assets/contactLogos/instagram.svg?react";
import LinkedInIcon     from "../assets/contactLogos/linkedin.svg?react";
import PhoneIcon        from "../assets/contactLogos/phone.svg?react";
import TelegramIcon     from "../assets/contactLogos/telegram.svg?react";

import ContactButton from "../components/ContactButton";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();
    return (
        <Section>
            <h1 id="contact">{t("contact")}</h1>
            <div className="flex flex-row flex-wrap justify-center w-full gap-5 mb-50 mt-10">
                <ContactButton Icon={EmailIcon}     label={t("contact_email")}     link="mailto:benyoucef1mahmoud@gmail.com"/>
                <ContactButton Icon={PhoneIcon}     label={t("contact_phone")}     link="tel:+213555770071"/>
                <ContactButton Icon={TelegramIcon}  label={t("contact_telegram")}  link="https://t.me/+213555770071"/>
                <ContactButton Icon={GitHubIcon}    label={t("contact_github")}    link="https://github.com/inkwolf42"/>
                <ContactButton Icon={LinkedInIcon}  label={t("contact_linkedin")}  link="https://www.linkedin.com/in/benyoucef-mahmoud-97a514392"/>
                <ContactButton Icon={FacebookIcon}  label={t("contact_facebook")}  link="https://www.facebook.com/profile.php?id=61593037672137"/>
                <ContactButton Icon={InstagramIcon} label={t("contact_instagram")} link="https://www.instagram.com/mahmoudbenyoucef?igsh=MXhyMmNtOHl4bmh3NQ=="/>
            </div>
        </Section>
    );
}