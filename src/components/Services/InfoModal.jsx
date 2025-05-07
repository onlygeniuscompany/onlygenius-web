import React from "react";

export default function PerformanceAccessModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-lg bg-[#0F0F11] border border-[#27272A] text-white p-6 shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-semibold">Request access to performance data</h2>
          <button
            onClick={onClose}
            className="text-[#A1A1AA] hover:text-white text-xl"
          >
            &times;
          </button>
        </div>

        <p className="text-sm text-[#A1A1AA] mb-6">This is a dialog description.</p>

        <form
          className="space-y-4 text-left"
          action="https://formsubmit.co/el/kulasa"
          method="POST"
        >
          {/* Hidden input to disable captcha */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={typeof window !== "undefined" ? window.location.href : ""} />

          <div>
            <label className="block text-sm text-[#E4E4E7] mb-1">First name</label>
            <input
              name="first_name"
              type="text"
              required
              placeholder="Enter your first name"
              className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm placeholder-[#52525B]"
            />
          </div>

          <div>
            <label className="block text-sm text-[#E4E4E7] mb-1">Last name</label>
            <input
              name="last_name"
              type="text"
              required
              placeholder="Enter your last name"
              className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm placeholder-[#52525B]"
            />
          </div>

          <div>
            <label className="block text-sm text-[#E4E4E7] mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm placeholder-[#52525B]"
            />
          </div>

          <div>
            <label className="block text-sm text-[#E4E4E7] mb-1">Type of account</label>
            <select
              name="account_type"
              required
              defaultValue=""
              className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm"
            >
              <option value="" disabled>e.g (prop firm / broker / other)</option>
              <option value="prop">Prop Firm</option>
              <option value="broker">Broker</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-[#18181B] border border-[#27272A] hover:bg-[#27272A]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md text-sm font-medium bg-[#2563EB] text-white hover:bg-[#1E40AF]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
