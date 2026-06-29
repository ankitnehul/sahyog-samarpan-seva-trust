import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sahayog Samarpan Seva Trust.",
};

export default function ContactPage() {
  const { contact } = siteConfig;
  const whatsappCommunity = contact.whatsappCommunity;

  return (
    <div className="bg-white">
      {/* Page header */}
      <section className="bg-brand-navy py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-marathi text-brand-gold">संपर्क</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Reach out to Sahayog Samarpan Seva Trust or join our WhatsApp
            community to stay connected with our seva activities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* WhatsApp Community — primary CTA */}
          {whatsappCommunity && (
            <div className="rounded-2xl border border-brand-green/20 bg-brand-cream p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15">
                  <FaWhatsapp className="h-6 w-6 text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-brand-navy">
                    WhatsApp Community
                  </h2>
                  <p className="font-marathi mt-1 text-sm text-brand-saffron">
                    व्हॉट्सअॅप समुदाय
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    Join our WhatsApp community to receive updates about events,
                    seva activities and announcements from Sahayog Samarpan Seva
                    Trust.
                  </p>
                  <a
                    href={whatsappCommunity}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Join WhatsApp Community
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Other contact details */}
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-brand-navy">
              Contact Details
            </h2>
            <p className="font-marathi mt-1 text-sm text-gray-500">
              संपर्क माहिती
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-saffron" />
                <div>
                  <p className="text-sm font-medium text-brand-navy">Address</p>
                  <p className="text-sm text-gray-600">
                    {contact.addressLine
                      ? `${contact.addressLine}, `
                      : ""}
                    {contact.city}, {contact.state}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-saffron" />
                <div>
                  <p className="text-sm font-medium text-brand-navy">Phone</p>
                  <p className="text-sm text-gray-600">
                    {contact.phone || "Coming soon"}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-saffron" />
                <div>
                  <p className="text-sm font-medium text-brand-navy">Email</p>
                  <p className="text-sm text-gray-600">
                    {contact.email || "Coming soon"}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
