"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMessage?: string;
}

export function ContactModal({
  isOpen,
  onClose,
  defaultMessage = "",
}: ContactModalProps) {
  const { t } = useI18n();
  const ct = t.contactModal;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setName("");
      setPhone("");
      setMessage(defaultMessage);
      setStatus("idle");
      setErrorMsg("");
    }
  }, [isOpen, defaultMessage]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !message.trim()) {
      setErrorMsg(ct.errorRequired);
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch {
      setStatus("error");
      setErrorMsg(ct.errorFailed);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Centering wrapper */}
      <div className="min-h-full flex items-center justify-center p-4">
        {/* Modal */}
        <div className="relative w-full max-w-md rounded-2xl border border-[#2a2a3e] bg-[#12121e] shadow-2xl shadow-black/50">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-lg text-[#8b7e6a] hover:text-[#f0e6d3] hover:bg-[#2a2a3e] transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="px-6 pt-6 pb-2">
            <h2 className="text-lg font-bold text-[#f0e6d3]">{ct.title}</h2>
            <p className="text-xs text-[#8b7e6a] mt-1">{ct.desc}</p>
          </div>

          {/* Form */}
          {status === "success" ? (
            <div className="px-6 pb-6 pt-4 text-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
              <p className="text-base font-semibold text-[#f0e6d3]">
                {ct.successTitle}
              </p>
              <p className="text-sm text-[#8b7e6a] mt-1">{ct.successDesc}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-6 pb-6 pt-2 space-y-3">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold text-[#a89a82] mb-1"
                >
                  {ct.nameLabel}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={ct.namePlaceholder}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#0a0a14] border border-[#2a2a3e] text-sm text-[#f0e6d3] placeholder-[#5a5a6e] focus:outline-none focus:border-[#c9a44c]/50 focus:ring-1 focus:ring-[#c9a44c]/20 transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-xs font-semibold text-[#a89a82] mb-1"
                >
                  {ct.phoneLabel}
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={ct.phonePlaceholder}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#0a0a14] border border-[#2a2a3e] text-sm text-[#f0e6d3] placeholder-[#5a5a6e] focus:outline-none focus:border-[#c9a44c]/50 focus:ring-1 focus:ring-[#c9a44c]/20 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-[#a89a82] mb-1"
                >
                  {ct.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={ct.messagePlaceholder}
                  rows={3}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#0a0a14] border border-[#2a2a3e] text-sm text-[#f0e6d3] placeholder-[#5a5a6e] focus:outline-none focus:border-[#c9a44c]/50 focus:ring-1 focus:ring-[#c9a44c]/20 transition-colors resize-none"
                />
              </div>

              {/* Error message */}
              {errorMsg && <p className="text-xs text-red-400">{errorMsg}</p>}

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c9a44c] to-[#8b6914] text-[#0a0a14] text-sm font-semibold tracking-wider shadow-lg shadow-[#c9a44c]/20 hover:shadow-[#c9a44c]/40 hover:scale-[1.02] transition-all disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {ct.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {ct.sendButton}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
