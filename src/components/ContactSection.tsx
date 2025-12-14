import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import Twitter from "@/assets/Twitter.png";
import instagram from "@/assets/instagram.png";
import discord from "@/assets/discord.png";

import { useRef, useState } from "react";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);

  const info = [
    [discord, "https://discord.com/users/kushagra_0717", "Discord"],
    [instagram, "https://www.instagram.com/kush_agr07/", "Instagram"],
    [Twitter, "https://x.com/KushagraAg0717", "Twitter X"],
  ];

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSuccess(false);
    const form = formRef.current;
    if (!form) return;
    // Collect all values
    const name = (form.user_name as HTMLInputElement)?.value || "";
    const email = (form.user_email as HTMLInputElement)?.value || "";
    const phone = (form.user_phone as HTMLInputElement)?.value || "";
    const subject = (form.user_subject as RadioNodeList)?.value || "";
    const message = (form.message as HTMLTextAreaElement)?.value || "";
    // Compose a full message
    const fullMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;
    // Set hidden fields for phone/email/subject so they are sent as template variables
    let hiddenPhone = form.querySelector(
      'input[name="hidden_phone"]'
    ) as HTMLInputElement;
    let hiddenEmail = form.querySelector(
      'input[name="hidden_email"]'
    ) as HTMLInputElement;
    let hiddenSubject = form.querySelector(
      'input[name="hidden_subject"]'
    ) as HTMLInputElement;
    if (!hiddenPhone) {
      hiddenPhone = document.createElement("input");
      hiddenPhone.type = "hidden";
      hiddenPhone.name = "hidden_phone";
      form.appendChild(hiddenPhone);
    }
    if (!hiddenEmail) {
      hiddenEmail = document.createElement("input");
      hiddenEmail.type = "hidden";
      hiddenEmail.name = "hidden_email";
      form.appendChild(hiddenEmail);
    }
    if (!hiddenSubject) {
      hiddenSubject = document.createElement("input");
      hiddenSubject.type = "hidden";
      hiddenSubject.name = "hidden_subject";
      form.appendChild(hiddenSubject);
    }
    hiddenPhone.value = phone;
    hiddenEmail.value = email;
    hiddenSubject.value = subject;
    // Set the message textarea value to the full message
    if (form.message) form.message.value = fullMessage;
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSending(false);
        setSuccess(true);
        formRef.current?.reset();
        setTimeout(() => setSuccess(false), 3200);
      })
      .catch((err) => {
        setSending(false);
        setError("Failed to send email. Please try again later.");
        console.error("FAILED...", err?.text || err);
      });
  };

  return (
    <section id="contact-me" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 overflow-hidden rounded-2xl">
          <div className="bg-muted p-6 md:p-8 lg:p-12 space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Contact Information
              </h3>
              <p className="text-muted-foreground text-sm">
                Let’s build something impactful together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-primary" size={20} />
                <span className="text-muted-foreground italic">
                  +91 96720 48846
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-primary" size={20} />
                <span className="text-foreground">
                  kushagraagrawal.9672@gmail.com
                </span>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-primary" size={20} />
                <span className="text-foreground text-sm">
                  Jalandhar City, Punjab, India
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-8">
              {info.map(([image, link, name], i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-muted-foreground flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:scale-110 group-hover:bg-primary/10">
                    <img
                      src={image as string}
                      alt={name as string}
                      className="w-8 h-8 object-contain rounded-full"
                    />
                  </div>

                  <span className="text-white italic text-sm opacity-80 group-hover:opacity-100 transition">
                    {name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-light-gray p-6 md:p-8 lg:p-12">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="text-muted text-sm mb-2 block">Name</label>
                <Input
                  name="user_name"
                  required
                  placeholder="Your name"
                  className="bg-transparent border-0 border-b border-muted rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>

              <div>
                <label className="text-muted text-sm mb-2 block">Email</label>
                <Input
                  type="email"
                  name="user_email"
                  required
                  className="bg-transparent border-0 border-b border-muted rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>

              <div>
                <label className="text-muted text-sm mb-2 block">
                  Phone Number (Optional)
                </label>
                <Input
                  name="user_phone"
                  placeholder="+91 XXXXX XXXXX"
                  className="bg-transparent border-0 border-b border-muted rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>

              <div>
                <label className="text-muted text-sm mb-4 block">
                  Select Subject?
                </label>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  {[
                    "AI / ML Project",
                    "Full-Stack Development",
                    "Startup / SaaS",
                    "Freelance / Collaboration",
                  ].map((subject, i) => (
                    <label key={i} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="user_subject"
                        value={subject}
                        defaultChecked={i === 0}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="text-muted text-xs md:text-sm">
                        {subject}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-muted text-sm mb-2 block">Message</label>
                <Textarea
                  name="message"
                  required
                  placeholder="Write your message.."
                  className="bg-transparent border-0 border-b border-muted rounded-none px-0 resize-none focus-visible:ring-0 focus-visible:border-primary"
                  rows={3}
                />
                {/* Hidden fields removed: all values are now included in the message body */}
              </div>

              <div className="flex justify-end pt-4">
                <Button
                  type="submit"
                  disabled={sending}
                  className="bg-muted hover:bg-primary hover:text-primary-foreground px-8 py-3 transition-all hover:scale-105"
                >
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              {success && (
                <p className="text-green-600 text-sm mt-2">
                  Message sent successfully!
                </p>
              )}
            </form>

            <div className="flex justify-end mt-4">
              <svg
                className="w-12 h-12 text-muted-foreground animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
