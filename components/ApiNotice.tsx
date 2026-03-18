'use client'

import { useState } from 'react'

export default function ApiNotice() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div 
      className="fixed top-20 left-1/2 -translate-x-1/2 z-50 max-w-2xl w-full mx-4"
      style={{
        animation: 'slideDown 0.3s ease-out'
      }}
    >
      <div 
        className="relative px-4 py-3 backdrop-blur-md border rounded-lg shadow-lg"
        style={{
          background: 'rgba(219, 230, 76, 0.95)',
          borderColor: '#00804C',
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
          style={{
            background: 'rgba(0, 31, 63, 0.2)',
            color: '#001F3F'
          }}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="flex items-center gap-3 pr-6">
          {/* Icon */}
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: '#00804C' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DBE64C" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1">
            <p 
              className="text-sm font-bold"
              style={{ color: '#001F3F' }}
            >
              Demo Mode - API keys required for AI features (Claude + Resend)
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