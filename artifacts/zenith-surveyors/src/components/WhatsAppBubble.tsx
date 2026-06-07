import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "353872957666";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function WhatsAppBubble() {
  const [dismissed, setDismissed] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {tooltipVisible && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative flex items-center gap-2 bg-white text-gray-800 text-sm font-medium px-4 py-2.5 rounded-2xl shadow-lg border border-gray-100 max-w-[220px]"
          >
            <span>Chat with Mike on WhatsApp</span>
            <button
              onClick={() => setTooltipVisible(false)}
              aria-label="Dismiss"
              className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            {/* tail */}
            <span className="absolute -bottom-2 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white drop-shadow-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!dismissed && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              style={{ backgroundColor: "#25D366" }}
            >
              {/* WhatsApp SVG icon */}
              <svg
                viewBox="0 0 32 32"
                className="w-8 h-8"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M16.003 3C9.374 3 4 8.373 4 15.003c0 2.147.573 4.258 1.662 6.112L4 29l8.085-1.644A12.94 12.94 0 0016.003 28c6.628 0 11.997-5.373 11.997-12.003C28 9.373 22.631 3 16.003 3zm0 21.867a10.81 10.81 0 01-5.532-1.523l-.397-.235-4.797.976.994-4.703-.26-.414A10.83 10.83 0 015.133 15c0-5.99 4.88-10.867 10.87-10.867C21.993 4.133 26.867 9.01 26.867 15c0 5.989-4.874 10.867-10.864 10.867zm5.96-8.137c-.327-.164-1.935-.955-2.235-1.064-.3-.11-.518-.164-.737.164-.219.327-.847 1.064-1.038 1.283-.191.218-.382.246-.71.082-.327-.164-1.38-.508-2.629-1.624-.97-.867-1.627-1.937-1.817-2.264-.19-.328-.02-.505.144-.668.147-.147.327-.382.49-.573.165-.191.22-.328.33-.546.11-.219.055-.41-.027-.574-.082-.164-.737-1.777-1.01-2.433-.265-.638-.536-.552-.737-.562l-.628-.011c-.218 0-.573.082-.873.41-.3.328-1.146 1.119-1.146 2.73 0 1.612 1.173 3.17 1.337 3.389.163.218 2.31 3.524 5.597 4.941.782.338 1.393.54 1.869.692.785.25 1.5.214 2.065.13.63-.094 1.935-.79 2.208-1.554.273-.764.273-1.42.19-1.556-.08-.136-.3-.218-.627-.382z" />
              </svg>
            </a>

            {/* dismiss X badge */}
            <button
              onClick={() => setDismissed(true)}
              aria-label="Close WhatsApp bubble"
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-900 transition-colors"
            >
              <X className="w-2.5 h-2.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
