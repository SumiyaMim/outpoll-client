import { Helmet } from "react-helmet-async"
import Container from "../components/shared/Container"
import SectionTitle from "../components/shared/SectionTitle"

const Privacy = () => {
  return (
    <div className="pt-36">
       <Helmet>
           <title>OutPoll | Privacy Policy</title>
        </Helmet>    
        <Container>
            <SectionTitle heading="Privacy Policy" subHeading="We collect, use, and protect your information to enhance your survey experience."></SectionTitle>
            <div className="mb-20 text-sm text-zinc-500 leading-5 text-justify">
                <p>Welcome to OutPoll, the polling and survey platform committed to respecting and protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.Our polling and survey website is designed to ensure the confidentiality and protection of your personal information. When you engage with our platform, we collect voluntary information such as your name, email, and demographics to facilitate your participation in surveys and polls. Your responses and opinions within surveys are valuable and are used solely for research and analytical purposes, contributing to the generation of aggregated insights.
                <br /><br />
                We are committed to maintaining the security of your data through industry-standard measures to prevent unauthorized access, misuse, or alteration. Your individual responses remain confidential and are only utilized in an aggregated form to derive statistical findings. Additionally, any sharing of anonymized data with trusted partners or for research purposes ensures that your identity and personal details are protected.
                <br /><br />
                You have the freedom to opt-out of communications or participation in surveys at any time, and you can request access to your personal information for review or correction. As part of our commitment to transparency, any significant updates to our Privacy Policy will be communicated through our platform. For any inquiries, concerns, or to exercise your rights regarding your information, please reach out to us using the contact information provided.
                <br /><br />
                By utilizing the services of OutPoll, you agree to the terms outlined in this Privacy Policy, acknowledging our commitment to safeguarding your privacy.
                </p>
            </div>
        </Container>
    </div>
  )
}

export default Privacy
