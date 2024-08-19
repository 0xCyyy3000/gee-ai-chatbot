import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Terms and conditions",
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen w-full bg-secondary p-16 flex flex-col gap-3">
      <p className="text-xl font-black">Gee Chatbot</p>
      <p>
        This AI chatbot is designed for educational purposes only. The
        information and responses provided by this chatbot are intended to
        assist and facilitate learning, but should not be considered as
        professional advice or a substitute for expert opinion.
      </p>
      <p className="text-lg font-semibold">LIMITATIONS AND DISCLAIMERS</p>
      <ol className="flex flex-col gap-3">
        <li>
          <strong>Accuracy and Reliability</strong>
          <p>
            While we strive to provide accurate and reliable information, the
            chatbot&apos;s responses may contain errors, inaccuracies, or
            outdated information. Users should verify the information through
            multiple sources before relying on it.
          </p>
        </li>
        <li>
          <strong>No Professional Advice</strong>
          <p>
            The chatbot is not a substitute for professional advice or guidance.
            Users should consult qualified professionals for advice on specific
            topics, such as medical, financial, or legal matters.
          </p>
        </li>
        <li>
          <strong>No Liability</strong>
          <p>
            We disclaim any liability for damages or losses arising from the use
            of this chatbot, including but not limited to, direct, indirect,
            incidental, or consequential damages.
          </p>
        </li>
        <li>
          <strong>No Warranty</strong>
          <p>
            This chatbot is provided on an &ldquo;as-is&rdquo; and
            &ldquo;as-available&rdquo; basis, without any warranty of any kind,
            express or implied.
          </p>
        </li>
        <li>
          <strong>User Responsibility</strong>
          <p>
            Users are responsible for their own actions and decisions based on
            the information provided by the chatbot. We are not responsible for
            any consequences arising from the use of this chatbot.
          </p>
        </li>
        <li>
          <strong>Data Protection</strong>
          <p>
            We do not collect or store any personal data from users. However,
            users should be aware that their interactions with the chatbot may
            be logged for analytical and improvement purposes.
          </p>
        </li>
      </ol>

      <p className="text-lg font-semibold mt-8">
        BY USING THIS CHATBOT, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD,
        AND AGREED TO THESE DISCLAIMERS AND LIMITATIONS
      </p>
    </div>
  );
}
