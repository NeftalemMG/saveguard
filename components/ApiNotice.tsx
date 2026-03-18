'use client'

import { useState } from 'react'

export default function ApiNotice() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div 
      className="fixed top-20 left-1/2 -translate-x-1/2 z-50 max-w-4xl w-full mx-4"
      style={{
        animation: 'slideDown 0.3s ease-out'
      }}
    >
      <div 
        className="relative p-6 backdrop-blur-md border-2 rounded-xl shadow-2xl"
        style={{
          background: 'rgba(219, 230, 76, 0.95)',
          borderColor: '#00804C',
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
          style={{
            background: 'rgba(0, 31, 63, 0.2)',
            color: '#001F3F'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="flex items-start gap-4">
          {/* Icon */}
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: '#00804C' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DBE64C" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 
              className="text-lg font-bold mb-2"
              style={{ color: '#001F3F' }}
            >
              Demo Mode - API Configuration Required
            </h3>
            <p 
              className="text-sm leading-relaxed mb-3"
              style={{ color: '#001F3F', opacity: 0.9 }}
            >
              This is a hackathon demonstration. To use the full AI-powered email features, you&apos;ll need to configure:
            </p>
            <div className="space-y-2 mb-3">
              <div 
                className="flex items-center gap-2 text-sm"
                style={{ color: '#001F3F', opacity: 0.85 }}
              >
                <span className="font-mono font-bold">•</span>
                <span><strong>Anthropic Claude API</strong> - for AI email generation</span>
              </div>
              <div 
                className="flex items-center gap-2 text-sm"
                style={{ color: '#001F3F', opacity: 0.85 }}
              >
                <span className="font-mono font-bold">•</span>
                <span><strong>Resend API</strong> - for email delivery</span>
              </div>
            </div>
            <p 
              className="text-xs"
              style={{ color: '#001F3F', opacity: 0.7 }}
            >
              Without these keys, negotiation and cancellation features will show placeholder responses. 
              Contact the team for API key setup instructions.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translate(-50%, -100px);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}