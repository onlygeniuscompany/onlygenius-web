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

        {/* Description */}
        <p className="text-sm text-[#A1A1AA] mb-6">This is a dialog description.</p>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter your first name"
            className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm placeholder-[#52525B]"
          />
          <input
            type="text"
            placeholder="Enter your last name"
            className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm placeholder-[#52525B]"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm placeholder-[#52525B]"
          />
          <select
            defaultValue=""
            className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm"
          >
            <option value="" disabled>e.g (prop firm / broker / other)</option>
            <option value="prop">Prop Firm</option>
            <option value="broker">Broker</option>
            <option value="other">Other</option>
          </select>

          {/* Action buttons */}
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
