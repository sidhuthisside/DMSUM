import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Mock data generator for analytics
const generateAnalyticsData = (days = 30) => {
  const data = [];
  let followers = 15000;
  let engagement = 3.5;
  for (let i = 0; i < days; i++) {
    followers += Math.floor(Math.random() * 50) + 10;
    engagement += (Math.random() * 0.4) - 0.15;
    data.push({
      day: `Day ${i + 1}`,
      followers: followers,
      engagement: parseFloat(engagement.toFixed(1)),
    });
  }
  return data;
};

// Custom Tooltip for Recharts
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'rgba(5, 5, 5, 0.95)',
        border: '1px solid var(--border-gold)',
        padding: '12px 18px',
        boxShadow: `0 20px 40px rgba(0,0,0,0.6)`,
        backdropFilter: 'blur(20px)',
      }}>
        <p style={{ color: 'var(--text-dim)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{
            color: 'var(--text-bright)', 
            fontSize: '12px',
            fontFamily: "'Inter', sans-serif",
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            marginBottom: index === payload.length - 1 ? 0 : '6px',
            fontWeight: 500
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: entry.color, display: 'inline-block' }} />
            <span style={{ flex: 1, color: 'var(--text-mid)', fontWeight: 300 }}>{entry.name}:</span>
            <span style={{ color: 'var(--accent-gold)' }}>
              {entry.name === 'Engagement Rate' ? `${entry.value}%` : entry.value.toLocaleString()}
            </span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function RotatingGlobe() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
  });

  return (
    <group>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 10, 5]} intensity={1} color="#D4AF37" />
      <Stars radius={100} depth={50} count={2000} factor={2} saturation={0} fade speed={1} />
      
      <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#000"
          wireframe={true}
          transparent={true}
          opacity={0.3}
          distort={0.05}
          speed={1}
          emissive="#D4AF37"
          emissiveIntensity={0.2}
        />
      </Sphere>
      
      {/* Dynamic Golden Pulse */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
         <ringGeometry args={[1.55, 1.57, 64]} />
         <meshBasicMaterial color="#D4AF37" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function AnalyticsChart() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(generateAnalyticsData());
  }, []);

  return (
    <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
      
      {/* 3D Global Data Hub */}
      <div style={{ flex: '1 1 320px', height: '320px', minWidth: '320px', position: 'relative', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-soft)' }}>
        <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
          <RotatingGlobe />
        </Canvas>
        
        <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', pointerEvents: 'none' }}>
          <h4 style={{ color: 'var(--text-dim)', fontSize: '10px', fontWeight: 600, fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            Audience Distribution
          </h4>
          <p style={{ color: 'var(--accent-gold)', fontSize: '28px', margin: '8px 0 0', fontWeight: 300, fontFamily: "'Cormorant Garamond', serif" }}>
            1.2B <span style={{ fontSize: '12px', color: 'var(--text-dim)', fontWeight: 400, fontFamily: "'Inter', sans-serif", letterSpacing: '0.1em' }}>Nodes Coverage</span>
          </p>
        </div>
      </div>

      {/* Modern Line Chart */}
      <div style={{ flex: '2 1 400px', height: '300px', position: 'relative' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorGold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorSlate" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#708090" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#708090" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="1 1" stroke="rgba(255,255,255,0.03)" vertical={false} />
          <XAxis 
            dataKey="day" 
            tick={{ fill: 'var(--text-dim)', fontSize: 9, fontFamily: 'Inter' }} 
            tickLine={false} 
            axisLine={{ stroke: 'var(--border-soft)' }}
            minTickGap={40}
          />
          <YAxis 
            yAxisId="left"
            tick={{ fill: 'var(--text-dim)', fontSize: 9, fontFamily: 'Inter' }} 
            tickLine={false} 
            axisLine={false} 
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            tick={{ fill: 'var(--text-dim)', fontSize: 9, fontFamily: 'Inter' }} 
            tickLine={false} 
            axisLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            yAxisId="left"
            type="monotone" 
            dataKey="followers" 
            name="Audience Base"
            stroke="#D4AF37" 
            strokeWidth={1.5}
            fillOpacity={1} 
            fill="url(#colorGold)" 
          />
          <Area 
            yAxisId="right"
            type="monotone" 
            dataKey="engagement" 
            name="Engagement Depth"
            stroke="#708090" 
            strokeWidth={1}
            fillOpacity={1} 
            fill="url(#colorSlate)" 
          />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}

function SchedulingTimeline() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const [activeDay, setActiveDay] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDay((prev) => (prev + 1) % days.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border-soft)', marginBottom: '3rem' }}>
        {days.map((day, idx) => (
          <div key={day} style={{
            flex: 1, 
            textAlign: 'center', 
            padding: '12px 0',
            color: activeDay === idx ? 'var(--accent-gold)' : 'var(--text-dim)',
            fontWeight: activeDay === idx ? 600 : 400,
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            borderBottom: activeDay === idx ? '1px solid var(--accent-gold)' : '1px solid transparent',
            transition: 'all 0.6s ease',
          }}>
            {day}
          </div>
        ))}
      </div>

      <div style={{ height: '220px', position: 'relative' }}>
        {days.map((day, idx) => (
          <motion.div
            key={`content-${day}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: activeDay >= idx ? 1 : 0.15,
              scale: activeDay === idx ? 1 : 0.95,
            }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              left: `${(idx * 20)}%`,
              width: '18%',
              top: '20px',
              borderLeft: `1px solid ${activeDay >= idx ? 'var(--accent-gold)' : 'var(--border-soft)'}`,
              padding: '0 1.5rem',
              height: '140px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <div style={{ 
              width: '100%', 
              height: '1px', 
              background: activeDay >= idx ? 'var(--accent-gold)' : 'var(--border-soft)',
              marginBottom: '1rem'
            }} />
            <div style={{ 
              color: activeDay >= idx ? 'var(--text-bright)' : 'var(--text-dim)', 
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 500,
              fontFamily: "'Inter', sans-serif"
            }}>
              Node {idx + 1}
            </div>
            <div style={{ 
              color: 'var(--accent-gold)', 
              fontSize: '10px', 
              marginTop: '1rem',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}>
              09:00 GMT
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PerformanceCaseStudy({ caseStudy }) {
  return (
    <div style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 300px' }}>
        <div style={{ 
          background: 'rgba(212, 175, 55, 0.03)', 
          border: '1px solid var(--border-gold)', 
          padding: '2.5rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: 'radial-gradient(circle at 100% 0%, rgba(212, 175, 55, 0.1), transparent 70%)' }} />
          
          <h4 style={{ color: 'var(--accent-gold)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>
            Success Case Study
          </h4>
          <h3 style={{ color: 'var(--text-bright)', fontSize: '24px', margin: '0 0 1rem', fontFamily: "'Cormorant Garamond', serif" }}>
            {caseStudy.company}
          </h3>
          <p style={{ color: 'var(--text-mid)', fontSize: '14px', lineHeight: 1.6, marginBottom: '2rem', fontWeight: 300 }}>
            {caseStudy.context}
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <div style={{ color: 'var(--text-dim)', fontSize: '10px', textTransform: 'uppercase', marginBottom: '4px' }}>Previous</div>
              <div style={{ color: 'var(--text-bright)', fontSize: '20px', fontWeight: 600 }}>{caseStudy.before}x</div>
            </div>
            <div>
              <div style={{ color: 'var(--accent-gold)', fontSize: '10px', textTransform: 'uppercase', marginBottom: '4px' }}>Post-Toolkit</div>
              <div style={{ color: 'var(--accent-gold)', fontSize: '20px', fontWeight: 600 }}>{caseStudy.after}x</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: '2 1 450px', height: '350px' }}>
        <h4 style={{ color: 'var(--text-dim)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', textAlign: 'center' }}>
          Historical Performance Lift: {caseStudy.metricName}
        </h4>
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart data={caseStudy.projections} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="caseStudyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--accent-gold)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--accent-gold)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis 
              dataKey="period" 
              tick={{ fill: 'var(--text-dim)', fontSize: 10 }} 
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: 'var(--text-dim)', fontSize: 10 }} 
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="value" 
              name={caseStudy.label}
              stroke="var(--accent-gold)" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#caseStudyGradient)" 
            />
          </AreaChart>
        </ResponsiveContainer>
        <p style={{ color: 'var(--text-dim)', fontSize: '10px', textAlign: 'center', marginTop: '1rem', fontStyle: 'italic' }}>
          * Verified results across implementation timeline
        </p>
      </div>
    </div>
  );
}

export default function ToolVisualizer({ tool }) {
  if (!tool.visualizationType && !tool.caseStudy) return null;

  return (
    <div style={{
      background: 'rgba(255,255,255,0.01)',
      border: '1px solid var(--border-soft)',
      padding: '4rem 3rem',
      position: 'relative',
      marginTop: '4rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
        <div style={{ width: '40px', height: '1px', background: 'var(--border-gold)' }} />
        <h3 style={{ 
          color: 'var(--text-bright)', 
          fontSize: '18px', 
          margin: 0, 
          fontFamily: "'Cormorant Garamond', serif",
          textTransform: 'uppercase',
          letterSpacing: '0.3em',
          fontWeight: 400
        }}>
          Simulated Interface {tool.visualizationType === 'analytics-chart' ? 'Alpha' : 'Beta'}
        </h3>
        <div style={{ width: '40px', height: '1px', background: 'var(--border-gold)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
        {tool.caseStudy ? (
          <PerformanceCaseStudy caseStudy={tool.caseStudy} />
        ) : (
          <>
            {tool.visualizationType === 'analytics-chart' && <AnalyticsChart />}
            {tool.visualizationType === 'timeline' && <SchedulingTimeline />}
          </>
        )}
      </div>
      
      <p style={{ 
        color: 'var(--text-dim)', 
        fontSize: '10px', 
        textAlign: 'center', 
        marginTop: '4rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        opacity: 0.6
      }}>
        Technical Simulation — Historical Reference Data
      </p>
    </div>
  );
}
