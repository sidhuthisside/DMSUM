import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Fallback bypasses Vite's .env hot-reloading requirements so it works instantly without a restart.
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "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";

const SYSTEM_PROMPT = {
  role: "system",
  content: `You are "Guide", a world-class Digital Marketing AI built into "The Marketer's Toolkit". 
Your goal is to help students and professionals discover the right tools.
First, ask the user to describe their business and their main marketing goal. 
Once they answer, act as a consultant. Recommend 2 or 3 tools from our platform (e.g., Metricool, Hootsuite, Buffer, Canva, Meta Ads Manager, Sprout Social).
Explicitly outline exactly how those specific tools will benefit their exact business model.
Keep formatting clean, use bullet points (using standard dash '-') and emojis. Keep answers concise.`
};

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "👋 Hi! I'm your AI Marketing Guide. What kind of business do you run, and what's your biggest marketing goal right now?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Groq (Llama 3) API expects the flow to be System -> User -> Assistant. 
      // If we send 'Assistant' immediately after 'System', it creates a 400 Bad Request.
      // So we filter out the initial hardcoded frontend greeting.
      const conversationHistory = messages.filter((m, idx) => idx !== 0);
      const apiMessages = [SYSTEM_PROMPT, ...conversationHistory, userMessage];

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: apiMessages,
          temperature: 0.7,
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices.length > 0) {
        setMessages((prev) => [...prev, data.choices[0].message]);
      } else {
        console.error("GROQ API FULL RESPONSE:", data);
        throw new Error('Invalid response from AI');
      }
    } catch (error) {
      console.error("Groq API Error:", error);
      setMessages((prev) => [...prev, { role: 'assistant', content: "🚨 Sorry, I encountered a network error. Ensure the Groq API key is valid and try again!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Simple formatter to handle basic \n newlines
  const formatText = (text) => {
    return text.split('\n').map((str, index) => (
      <span key={index}>
        {str}
        <br />
      </span>
    ));
  };

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
      
      <AnimatePresence>
        {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              style={{
                width: '380px',
                height: '550px',
                background: 'rgba(10,10,10,0.98)',
                backdropFilter: 'blur(20px)',
              border: '1px solid var(--border-soft)',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(212, 175, 55, 0.1)',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, transparent 100%)',
              borderBottom: '1px solid var(--border-gold)',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>🤖</span>
                <div>
                  <h3 className="font-display" style={{ color: 'var(--text-bright)', fontSize: '15px', margin: 0, fontWeight: 700 }}>AI Marketer Guide</h3>
                  <span style={{ color: 'var(--accent-gold)', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-gold)', display: 'inline-block' }} /> Powered by Groq
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'transparent', border: 'none', color: 'var(--text-dim)', fontSize: '20px', cursor: 'pointer', padding: '4px'
                }}
              >
                ×
              </button>
            </div>

            {/* Chat History */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {messages.map((m, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
                }}>
                  <div style={{
                    maxWidth: '85%',
                    background: m.role === 'user' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                    border: m.role === 'user' ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    color: m.role === 'user' ? '#000' : 'var(--text-mid)',
                    padding: '12px 16px',
                    borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    fontSize: '14px',
                    lineHeight: 1.5,
                  }}>
                    {formatText(m.content)}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    padding: '12px 16px', borderRadius: '16px 16px 16px 4px', display: 'flex', gap: '6px', alignItems: 'center'
                  }}>
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity }} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--text-dim)' }} />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--text-dim)' }} />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--text-dim)' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} style={{
              borderTop: '1px solid var(--border-soft)',
              padding: '1rem',
              display: 'flex',
              gap: '10px',
              background: 'rgba(0,0,0,0.2)'
            }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="I run a local bakery..."
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  color: 'var(--text-bright)',
                  fontSize: '14px',
                  outline: 'none',
                  fontFamily: "'DM Sans', sans-serif"
                }}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                style={{
                  background: 'var(--accent-gold)',
                  border: 'none',
                  borderRadius: '12px',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: (isLoading || !input.trim()) ? 'not-allowed' : 'pointer',
                  opacity: (isLoading || !input.trim()) ? 0.5 : 1,
                  color: '#000',
                  fontSize: '18px'
                }}
              >
                ↑
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '30px',
          background: 'linear-gradient(135deg, var(--accent-gold), #8D6E63)',
          border: 'none',
          color: '#fff',
          fontSize: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(212, 175, 55, 0.4)',
        }}
      >
        {isOpen ? '×' : '🤖'}
      </motion.button>
    </div>
  );
}
