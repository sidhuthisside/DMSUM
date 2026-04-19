import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, PerspectiveCamera, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// ─── 3D COMPONENTS: ARCHITECTURAL CONSTELLATION ───────────────────────────────
function Constellation() {
  const pointsRef = useRef();
  const [particles] = useState(() => {
    const p = new Float32Array(400 * 3);
    for (let i = 0; i < 400; i++) {
      p[i * 3] = (Math.random() - 0.5) * 12;
      p[i * 3 + 1] = (Math.random() - 0.5) * 12;
      p[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return p;
  });

  useFrame((state) => {
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.04;
    pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.04;
  });

  return (
    <group ref={pointsRef}>
      <Points positions={particles}>
        <PointMaterial
          transparent
          color="#D4AF37"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <mesh>
        <sphereGeometry args={[8, 32, 32]} />
        <meshBasicMaterial color="#D4AF37" transparent opacity={0.01} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

// Hardcoded fallback bypassing Vite env restart requirement
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "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";

const SYSTEM_PROMPT = {
  role: "system",
  content: `You are "The Strategist", a preeminent Digital Marketing Consultant at "The Marketer's Toolkit". 
Your objective is to provide elite, tailored software stack recommendations for sophisticated enterprises.
Maintain a professional, authoritative, yet helpful tone.
If the user hasn't specified their business, politely request details regarding their industry and primary strategic goals.
When recommending tools, refer to them as "Instruments" or "Analytical Platforms" and use those from our repository (e.g., Metricool, Hootsuite, Buffer, Canva, Meta Ads Manager, Sprout Social).
Outline the strategic value of each recommendation.
Formatting:
- Use clean, minimalist formatting.
- Use standard dashes '-' for lists.
- Avoid excessive emojis; use only when they add professional value.
- Be concise and high-impact.`
};

export default function AiConsultant() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Welcome to the Strategy Suite. I am your Senior Marketing Consultant. To begin our session, please provide a brief overview of your enterprise and your primary marketing objective." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
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
          temperature: 0.6,
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices.length > 0) {
        setMessages((prev) => [...prev, data.choices[0].message]);
      } else {
        setMessages((prev) => [...prev, { role: 'assistant', content: "Formal Notification: The AI core encountered a processing exception." }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'assistant', content: "Communication Failure: The network link to the strategy cluster was severed." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatText = (text) => {
    return text.split('\n').map((str, index) => (
      <span key={index}>
        {str}
        <br />
      </span>
    ));
  };

  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '64px',
      display: 'flex',
      background: 'var(--bg-void)',
      overflow: 'hidden'
    }}>
      {/* ── LEFT PANEL: ARCHITECTURAL VISUALIZATION ── */}
      <div style={{
        flex: '1',
        display: 'none',
        borderRight: '1px solid var(--border-soft)',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem',
        background: 'linear-gradient(to bottom, transparent, rgba(212, 175, 55, 0.02))'
      }} className="ai-brain-panel">
        
        <div style={{ width: '100%', height: '400px', marginBottom: '4rem', position: 'relative' }}>
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <ambientLight intensity={0.1} />
            <Stars radius={100} depth={50} count={1000} factor={2} saturation={0} fade speed={1} />
            <Constellation />
          </Canvas>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ color: 'var(--accent-gold)', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Consultation Suite
          </div>
          <h1 style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            color: 'var(--text-bright)', 
            fontSize: '3.5rem', 
            margin: '0 0 2rem', 
            lineHeight: 1.1,
            fontWeight: 400
          }}>
            Strategic <br/> <span style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Intelligence</span>
          </h1>
          <p style={{ 
            color: 'var(--text-mid)', 
            fontSize: '15px', 
            maxWidth: '380px', 
            lineHeight: 1.8, 
            fontWeight: 300,
            fontFamily: "'Inter', sans-serif"
          }}>
            Powered by the Llama-3.3-70B model. Our advisory system analyzes your enterprise parameters to architect an optimal technological foundation.
          </p>
        </div>

        {/* Live status indicators */}
        <div style={{ display: 'flex', gap: '3rem', marginTop: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent-gold)' }}></span>
            <span style={{ color: 'var(--text-dim)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Neural Core Active</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent-gold)' }}></span>
            <span style={{ color: 'var(--text-dim)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Encrypted Link</span>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @media (min-width: 1024px) {
            .ai-brain-panel { display: flex !important; }
          }
        `}} />
      </div>


      {/* ── RIGHT PANEL: CONSULTATION CHAT ── */}
      <div style={{
        flex: '1.2',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 64px)',
        position: 'relative',
        background: 'var(--bg-void)'
      }}>

        {/* Mobile Header Overlay */}
        <div className="mobile-chat-header" style={{
          padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-soft)',
          background: 'rgba(5,5,10,0.8)', backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', gap: '12px'
        }}>
            <h2 style={{ color: 'var(--text-bright)', fontSize: '18px', margin: 0, fontFamily: "'Cormorant Garamond', serif" }}>Senior Consultant</h2>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @media (min-width: 1024px) { .mobile-chat-header { display: none !important; } }
        `}} />

        {/* Chat Thread */}
        <div style={{ flex: 1, padding: '3rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {messages.map((m, idx) => {
            const isUser = m.role === 'user';
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: isUser ? 'flex-end' : 'flex-start',
                }}
              >
                <div style={{
                  maxWidth: '75%',
                  background: isUser ? 'rgba(212, 175, 55, 0.05)' : 'transparent',
                  border: isUser ? '1px solid var(--border-gold)' : 'none',
                  color: isUser ? 'var(--text-bright)' : 'var(--text-mid)',
                  padding: isUser ? '20px 24px' : '0',
                  borderRadius: '2px',
                  lineHeight: 1.8,
                  fontFamily: isUser ? "'Inter', sans-serif" : "'Cormorant Garamond', serif",
                  fontStyle: isUser ? 'normal' : 'italic',
                  fontSize: isUser ? '15px' : '19px',
                }}>
                  {formatText(m.content)}
                </div>
              </motion.div>
            );
          })}
          
          {isLoading && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent-gold)' }} />
                  <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent-gold)' }} />
                  <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }} style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent-gold)' }} />
                </div>
            </div>
          )}
          <div ref={messagesEndRef} style={{ height: '40px' }}></div>
        </div>

        {/* Strategic Input Interface */}
        <form onSubmit={handleSend} style={{
          padding: '3rem',
          borderTop: '1px solid var(--border-soft)',
          display: 'flex',
          justifyContent: 'center',
          background: 'rgba(255,255,255,0.01)'
        }}>
          <div style={{
             width: '100%',
             maxWidth: '900px',
             position: 'relative',
             display: 'flex',
             gap: '1.5rem'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Submit enterprise details for analysis..."
              style={{
                flex: 1,
                background: 'transparent',
                border: '1px solid var(--border-gold)',
                borderRadius: '2px',
                padding: '16px 24px',
                color: 'var(--text-bright)',
                fontSize: '14px',
                outline: 'none',
                fontFamily: "'Inter', sans-serif",
                transition: 'all 0.4s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--accent-gold)';
                e.target.style.background = 'rgba(212, 175, 55, 0.03)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--border-gold)';
                e.target.style.background = 'transparent';
              }}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="btn-premium"
              style={{
                background: 'var(--accent-gold)',
                color: '#000',
                opacity: (isLoading || !input.trim()) ? 0.3 : 1,
                padding: '0 32px'
              }}
            >
              Consult
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
