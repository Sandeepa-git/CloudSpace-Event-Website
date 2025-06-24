"use client";

import React, { useState, useEffect, useRef, FormEvent } from "react";

const API_KEY = "AIzaSyBBKfhEbxxVVRgQJFANQGjfKhrT653GpMk";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

type Message = {
  sender: "bot" | "user";
  text: string;
};

const TYPING_TEXT = "Have any questions? Try our AI assistant.";

export default function GeminiChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  const animatedIndexRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const typeText = (
    element: HTMLElement,
    text: string,
    delay = 20,
    callback?: () => void
  ) => {
    let index = 0;
    element.textContent = "";
    const type = () => {
      if (index < text.length) {
        element.textContent += text.charAt(index++);
        scrollToBottom();
        setTimeout(type, delay);
      } else {
        callback?.();
      }
    };
    type();
  };

  const sendMessageToGemini = async (userMsg: string) => {
    setIsTyping(true);
    setMessages((msgs) => [...msgs, { sender: "user", text: userMsg }]);
    setInput("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: userMsg }] }],
        }),
      });
      const data = await response.json();

      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I didn't get that.";

      setMessages((msgs) => [...msgs, { sender: "bot", text: "" }]);

      setTimeout(() => {
        if (!containerRef.current) return;
        const botMsgs =
          containerRef.current.querySelectorAll(".bot-message p");
        if (!botMsgs.length) return;
        const lastBotMsg = botMsgs[botMsgs.length - 1] as HTMLElement;
        typeText(lastBotMsg, reply, 20, () => setIsTyping(false));
      }, 50);
    } catch {
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: "⚠️ Error contacting the API." },
      ]);
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    sendMessageToGemini(input.trim());
  };

  const clearChats = () => {
    if (window.confirm("Start a new chat? This will clear your current chat.")) {
      setMessages([{ sender: "bot", text: "Hello! How can I help you today?" }]);
      setIsTyping(false);
      setInput("");
      if (containerRef.current) containerRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    if (isOpen) {
      setAnimatedText("");
      animatedIndexRef.current = 0;
      return;
    }

    setAnimatedText("");
    animatedIndexRef.current = 0;

    const interval = setInterval(() => {
      setAnimatedText((prev) => {
        if (animatedIndexRef.current >= TYPING_TEXT.length) {
          setTimeout(() => {
            setAnimatedText("");
            animatedIndexRef.current = 0;
          }, 2000);
          clearInterval(interval);
          return prev;
        }
        return prev + TYPING_TEXT.charAt(animatedIndexRef.current++);
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="chat-button"
          aria-label="Open chat"
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="chat-window" role="dialog" aria-modal="true">
          <header className="chat-header">
            <h2>CloudBot</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="close-button"
              aria-label="Close chat"
            >
              ✕
            </button>
          </header>

          <div ref={containerRef} className="chat-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.sender === "bot" ? "bot-message" : "user-message"}
              >
                <p>{msg.text}</p>
              </div>
            ))}
            {isTyping && <p className="typing-indicator">Typing...</p>}
          </div>

          <form onSubmit={handleSubmit} className="chat-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isTyping}
              aria-label="Message input"
            />
            <button
              type="submit"
              disabled={isTyping || !input.trim()}
              className="send-button"
            >
              Send
            </button>
            <button
              type="button"
              onClick={clearChats}
              className="clear-button"
            >
              Clear
            </button>
          </form>
        </div>
      )}

      <style>{`
        .chat-button {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #0a74da;
          color: white;
          font-size: 28px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
          animation: bounce-glow 1.6s ease-in-out infinite;
          z-index: 1000;
        }

        .chat-button:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(10, 116, 218, 0.8);
        }

        .chat-window {
          position: fixed;
          bottom: 90px;
          right: 24px;
          width: 320px;
          max-height: 480px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          font-family: Arial, sans-serif;
          font-size: 14px;
          color: #222;
          z-index: 999;
        }

        .chat-header {
          padding: 12px;
          background: #0a74da;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        .close-button {
          background: transparent;
          border: none;
          color: white;
          font-size: 20px;
          cursor: pointer;
        }

        .chat-messages {
          flex-grow: 1;
          overflow-y: auto;
          padding: 12px;
          background-color: #f9f9f9;
        }

        .bot-message p, .user-message p {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 12px;
          margin: 4px 0;
          max-width: 75%;
          word-break: break-word;
        }

        .bot-message {
          text-align: left;
        }

        .bot-message p {
          background: #e0e0e0;
          color: black;
        }

        .user-message {
          text-align: right;
        }

        .user-message p {
          background: #0a74da;
          color: white;
        }

        .typing-indicator {
          font-style: italic;
          color: #666;
        }

        .chat-input-area {
          display: flex;
          padding: 12px;
          gap: 6px;
          align-items: center;
          border-top: 1px solid #ddd;
        }

        .chat-input-area input {
          flex-grow: 1;
          padding: 8px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
          min-width: 0; /* fix shrinking issue */
        }

        .chat-input-area button {
          flex-shrink: 0;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
          min-width: 60px;
          padding: 8px 12px;
          font-size: 14px;
          border: none;
          color: white;
          user-select: none;
        }

        .chat-input-area .send-button {
          background: #0a74da;
        }

        .chat-input-area .send-button:hover:not(:disabled) {
          background: #085bb5;
        }

        .chat-input-area .send-button:disabled {
          background: #7aaae5;
          cursor: not-allowed;
        }

        .chat-input-area .clear-button {
          background: #e55353;
          padding: 8px 10px;
          min-width: 54px;
        }

        .chat-input-area .clear-button:hover {
          background: #c93030;
        }

        @keyframes bounce-glow {
          0%, 100% {
            transform: translateY(0) scale(1);
            box-shadow: 0 0 0 0 rgba(10, 116, 218, 0.5), 0 0 10px rgba(10, 116, 218, 0.8);
          }
          50% {
            transform: translateY(-6px) scale(1.05);
            box-shadow: 0 0 0 10px rgba(10, 116, 218, 0), 0 0 25px rgba(10, 116, 218, 1);
          }
        }

        @media (max-width: 480px) {
          .chat-button {
            right: 16px;
            bottom: 16px;
            width: 54px;
            height: 54px;
            font-size: 24px;
          }

          .chat-window {
            width: 95vw;
            right: 2.5vw;
            bottom: 80px;
            max-height: 85vh;
            font-size: 13px;
          }

          .chat-header h2 {
            font-size: 15px;
          }

          .chat-input-area input,
          .chat-input-area button {
            font-size: 12px;
            padding: 7px 8px;
            min-width: auto;
          }

          .chat-input-area .clear-button {
            min-width: auto;
            padding: 7px 10px;
          }
        }
      `}</style>
    </>
  );
}
