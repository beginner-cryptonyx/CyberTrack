import { useState } from "react";
import * as Icons from "lucide-react";
import { TrendingUp, Globe, Settings, ShieldCheck } from "lucide-react";

import "../App.css";

interface FormType {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

function ContactInfo({
  icon,
  label,
  content,
  href,
}: {
  icon: string;
  label: string;
  content: string;
  href?: string;
}) {
  const Icon = Icons[icon as keyof typeof Icons] as React.ElementType;

  return (
    <div className="group cursor-pointer flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-blue-500/20 transition-all duration-200">
      {/* Icon bubble */}
      <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/20 transition-colors duration-200">
        <Icon className="w-4.5 h-4.5" strokeWidth={1.75} />
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold tracking-[0.18em] text-gray-600 uppercase mb-0.5">
          {label}
        </p>
        <p className="text-sm text-white font-medium group-hover:text-blue-300 transition-colors duration-200">
          {content}
        </p>
      </div>
    </div>
  );
}
const items = [
  { icon: TrendingUp, text: "150K+ hours of expertise" },
  { icon: Globe, text: "Trusted across 7 countries" },
  { icon: Settings, text: "Tailored IT solutions" },
  { icon: ShieldCheck, text: "Enterprise-grade security" },
];

function TrustStrip() {
  return (
    <div className="grid gap-3 grid-cols-2 p-5 mx-auto">
      {items.map(({ icon: Icon, text }, i) => (
        <>
          <div key={text} className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center shrink-0">
              <Icon className="w-3.5 h-3.5 text-blue-400" strokeWidth={1.75} />
            </div>
            <span className="text-sm text-gray-300 whitespace-nowrap">
              {text}
            </span>
          </div>

          {/* {i < items.length - 1 && (
            <div key={`sep-${i}`} className="w-px h-4 bg-white/15" />
          )} */}
        </>
      ))}
    </div>
  );
}

export default function ReachUs() {
  const [form, setForm] = useState<FormType>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<
    undefined | keyof FormType
  >();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col">
      <div className="px-10 mt-25 z-10 min-h-screen flex flex-row align-middle items-start">
        <div className="w-[60%]">
          <form action="" className="grid grid-cols-2 gap-x-7">
            {/* <div className="flex flex-col justtify-center items-center"> */}
            <h1 className="text-center text-xl font-bold col-span-2 mb-5">
              Lets get in touch
            </h1>
            <div className="form-element">
              <label
                className={`opacity-0 ${(focusedField === "name" || form.name !== "") && "opacity-100"}`}
              >
                Full Name
              </label>
              <input
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(undefined)}
                name="name"
                type="text"
                onChange={handleChange}
                placeholder="Name"
                className="form-input"
                value={form.name}
              />
            </div>
            <div className="form-element">
              <label
                className={`opacity-0 ${(focusedField === "email" || form.email !== "") && "opacity-100"}`}
              >
                Email
              </label>
              <input
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(undefined)}
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Email"
                className="form-input"
                value={form.email}
              />
            </div>
            <div className="form-element">
              <label
                className={`opacity-0 ${(focusedField === "phone" || form.phone !== "") && "opacity-100"}`}
              >
                Phone Number
              </label>
              <input
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(undefined)}
                type="text"
                name="phone"
                onChange={handleChange}
                placeholder="Phone Number"
                className={`form-input`}
                value={form.phone}
              />
            </div>
            <div className="form-element">
              <label
                className={`opacity-0 ${(focusedField === "subject" || form.subject !== "") && "opacity-100"}`}
              >
                Subject
              </label>
              <input
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField(undefined)}
                type="text"
                name="subject"
                onChange={handleChange}
                placeholder="Subject"
                className="form-input"
                value={form.subject}
              />
            </div>
            <div className="form-element col-span-2">
              <label
                className={`opacity-0 ${(focusedField === "message" || form.message !== "") && "opacity-100"}`}
              >
                Message
              </label>
              <textarea
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(undefined)}
                name="message"
                onChange={handleChange}
                placeholder={`Message\nTell us your problem`}
                className="form-input "
                value={form.message}
              />
            </div>
            <button className="mt-10 group col-span-2 bg-cyber-blue hover:bg-blue-600 px-4 py-3 mx-auto w-1/2 rounded-lg font-semibold shadow-xl shadow-cyber-teal/10 cursor-pointer hover:scale-[101%] transition-all duration-300 hover:-translate-y-0.5">
              Send us a message
              <span className="group-hover:translate-x-3 inline-block transition-all duration-300">
                →
              </span>
            </button>
          </form>
        </div>
        <div className="w-[40%] px-5 flex flex-col ">
          <h1 className="text-center text-xl font-bold">
            We are all ears for you
          </h1>
          <p className="text-center text-sm text-gray-500">
            We respond within 24 hours
          </p>
          <div className="flex flex-col gap-4 px-7 mt-6">
            <ContactInfo
              content="info@cybertrack.co.in"
              label="Email Address"
              icon="MailCheck"
            ></ContactInfo>
            <ContactInfo
              content="+91 - 976 976 9337"
              label="Phone Number"
              icon="PhoneOutgoing"
            ></ContactInfo>
            <ContactInfo
              content="#153, Bhagabanpur, Patrapada, Bhubaneswar, Odisha"
              label="Registered Office Address"
              icon="MapPinHouse"
            ></ContactInfo>
          </div>
          <div className="h-px bg-linear-to-r from-cyber-blue/10 via-cyber-blue/40 to-cyber-blue/10 mt-3 mx-4"></div>
          <TrustStrip></TrustStrip>
        </div>
      </div>
    </div>
  );
}
