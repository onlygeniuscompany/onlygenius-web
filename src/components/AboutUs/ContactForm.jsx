// src/components/ContactForm.jsx
import React from "react";

export default function ContactForm() {
  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-500">Contact us</p>
          <h2 className="text-3xl font-bold">Get in touch</h2>
          <p className="text-white/70 mt-2">
            We’d love to hear from you. Please fill out this form.
          </p>
        </div>

        <form className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="First name"
              className="flex-1 px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
            />
            <input
              type="text"
              placeholder="Last name"
              className="flex-1 px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
            />
          </div>

          <input
            type="email"
            placeholder="you@company.com"
            className="w-full px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
          />

          <input
            type="tel"
            placeholder="+[34] 0000-1234567"
            className="w-full px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
          />

          <textarea
            rows="5"
            placeholder="Leave us a message..."
            className="w-full px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
          />

          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" id="privacy" className="mt-1" />
            <label htmlFor="privacy">
              You agree to our friendly{" "}
              <a href="#" className="text-blue-500 underline">
                privacy policy
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
