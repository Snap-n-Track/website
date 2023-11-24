import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import {Container} from "@/components/Container";

export default function accountDeletion() {
    return (
        <>
            <Header />
            <main>
                <section
                    id="account-deletion"
                    aria-labelledby="account-deletion"
                    className="pb-16 pt-20"
                >
                    <Container>
                        <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 uppercase">
                            Account Deletion
                        </h1>
                        <p className="mt-2 text-lg text-gray-600">Just as a golf pro feels the sting of losing a crucial tournament, it&apos;s with a heavy heart that we bid you farewell from Snap &apos;n Track.<br />We respect your decision, and here&apos;s a smooth swing to guide you through the departure process.</p>

                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 uppercase mt-5">
                            1. Sending us an Email
                        </h2>
                        <p className="mt-2 text-lg text-gray-600">
                            a. Draft an email to support@snapandtrack.app with the subject &quote;Membership Termination Request.&quote;<br />
                            b. In the email, share your username and the email linked to your account.<br />
                            c. Our support team, while feeling the loss, will assist you in gracefully navigating the deletion of your account.<br />
                        </p>

                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 uppercase mt-5">
                            2. Within the Snap &apos;n Track app
                        </h2>

                        <p className="mt-2 text-lg text-gray-600">
                            a. Open the Snap &apos;n Track app.<br/>
                            b. Click on the profile menu icon and locate &quote;Delete your Account&quote; in the menu- options.<br/>
                            c. Follow the on-screen instructions.<br/>
                            d. Once confirmed, your account will be marked for deletion. Keep in mind, it&apos;s a permanent move, and your journey with us will be erased.<br/>
                        </p>
                        <p className="mt-2 text-lg text-gray-600">
                            Please be patient as it can take up to 72 hours for your account to be entirely removed. During this period, your golfing data will be methodically cleared from our systems.
                        </p>
                        <p className="mt-2 text-lg text-gray-600">
                            We&apos;ll miss having you on the training sessions, but we wish you the best in your golf journey.
                        </p>
                        <p className="mt-2 text-lg text-gray-600">
                            If you have inquiries or require assistance, connect with our support team at support@snapandtrack.app. We&apos;re here to address any concerns you may have, and should you ever decide to rejoin us, we&apos;ll welcome you back with open arms.
                        </p>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    )
}
