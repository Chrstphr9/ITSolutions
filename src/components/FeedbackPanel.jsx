import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "03b7a073-df45-4fd2-a21a-2bb3384d03f0"; // ← put your key here

export default function FeedbackPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const togglePanel = () => {
    setIsOpen((prev) => !prev);
    setStatus({ type: "idle", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus({
        type: "error",
        message: "Missing Web3Forms access key.",
      });
      return;
    }

    setStatus({ type: "loading", message: "Sending your feedback..." });

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      // Parse the JSON returned by Web3Forms
      const data = await response.json();

      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || "Unable to send feedback right now.");
      }

      form.reset();
      setStatus({ type: "success", message: "Thanks! We'll get back soon." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try later.",
      });
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <div className="fixed z-50 flex flex-col items-end gap-4 bottom-6 right-6">
        <button
          onClick={togglePanel}
          className="flex items-center gap-2 px-4 py-3 text-white transition-colors rounded-full shadow-lg bg-primary hover:bg-primary/90"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-semibold">Feedback</span>
        </button>
      </div>

      {/* Slide-in Panel */}
      <aside
        id="feedback-panel"
        className={`fixed z-40 bottom-0 right-0 w-full max-w-sm p-6 transition-transform duration-300 ease-out bg-white border shadow-2xl md:rounded-l-2xl rounded-t-2xl ${
          isOpen
            ? "translate-y-0 md:translate-x-0"
            : "translate-y-[calc(100%+1rem)] md:translate-x-[calc(100%+1rem)]"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-semibold tracking-wide text-primary">
              Quick Feedback
            </p>
            <h3 className="text-xl font-bold text-gray-900">
              Tell us how we're doing
            </h3>
          </div>
          <button
            onClick={togglePanel}
            className="p-2 text-gray-500 rounded-full hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Jane Doe"
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              name="email"
              type="email"
              placeholder="jane@email.com"
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Feedback</label>
            <textarea
              name="message"
              placeholder="Share what's on your mind..."
              rows={4}
              required
              className="w-full px-3 py-2 border rounded-lg resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status.type === "loading"}
            className="w-full px-4 py-2 text-sm font-semibold text-white rounded-lg bg-primary hover:bg-primary/90 disabled:opacity-70"
          >
            <Send className="inline-block w-4 h-4 mr-1" />
            {status.type === "loading" ? "Sending..." : "Send Feedback"}
          </button>
        </form>

        {status.message && (
          <p
            className={`mt-4 text-sm ${
              status.type === "success"
                ? "text-green-600"
                : status.type === "error"
                ? "text-red-600"
                : "text-gray-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </aside>
    </>
  );
}
