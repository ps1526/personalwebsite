// TimelinePage.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import { 
  Activity,
  Calendar,
  Code,
  Search,
  Lock,
  Leaf,
  AudioLines,
  BrainCircuit,
  ShieldAlert,
  FileJson,
  Handshake,
  Smile,
  ScanFace,
  FlaskConical,
  Cctv,
  Headphones,
  Network,
  type LucideIcon
} from "lucide-react";

// Define a mapping of icon names to components
const IconMap: Record<string, LucideIcon> = {
  Activity,
  Calendar,
  Code,
  Search,
  Lock,
  Leaf,
  AudioLines,
  BrainCircuit,
  ShieldAlert,
  FileJson,
  Handshake,
  Smile,
  ScanFace,
  FlaskConical,
  Cctv,
  Headphones,
  Network
};

interface TimelineItem {
  id: string;
  title: string;
  description?: string | string[];
  date: string;
  skills?: string[];
  icon?: keyof typeof IconMap | LucideIcon;
  link?: string;
}

interface TimelinePageProps {
  type: 'projects' | 'experiences' | 'research';
  items: TimelineItem[];
  title: string;
  link?: string;
  overview?: string;
  futurePlans?: string;
}

const TimelineEvent: React.FC<{ 
  item: TimelineItem; 
  isLeft: boolean; 
  isLast: boolean; 
}> = ({ 
  item, 
  isLeft, 
  isLast 
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  // Handle icon resolution
  let IconComponent: LucideIcon = Activity; // Default icon
  if (item.icon) {
    if (typeof item.icon === 'string') {
      IconComponent = IconMap[item.icon] || Activity;
    } else {
      IconComponent = item.icon;
    }
  }
  
  return (
    <div className="relative flex justify-center items-center mb-12">
      {!isLast && (
        <div className="absolute left-1/2 top-8 h-full w-0.5 -translate-x-1/2 bg-white/70" />
      )}
      
      <div 
        className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`w-5/12 ${isLeft ? 'pr-4' : 'pl-4'} relative`}>
          <div 
            className="absolute top-0 w-8 h-8 rounded-full bg-white shadow-lg z-30
                      flex items-center justify-center"
            style={{ [isLeft ? 'right' : 'left']: '-16px' }}
          >
            <IconComponent 
              className="w-4 h-4 text-blue-800"
            />
          </div>

          {/* Use inline styles for critical visual components */}
          <div 
            className="p-4 rounded-lg shadow-lg"
            style={{
              backgroundColor: 'rgba(74, 86, 141, 0.8)', // Using more opaque background color
              position: 'relative',
              zIndex: 20,
            }}
          >
            <div className="m-3">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-lg mb-2 block break-words hover:underline">
                  {item.title || "Untitled"}
                </a>
              ) : (
                <h3 className="text-white font-bold text-lg mb-2 break-words">
                  {item.title || "Untitled"}
                </h3>
              )}
              <p className="text-white text-sm mb-2">{item.date}</p>
              
              {item.description && (
                Array.isArray(item.description) ? (
                  <ul className="list-disc list-inside text-white mb-2">
                    {item.description
                      .filter(point => point && point.trim() !== '')
                      .map((point, i) => (
                        <li key={i} className="mb-1 break-words">{point}</li>
                      ))
                    }
                  </ul>
                ) : (
                  <p className="text-white mb-2 break-words">{item.description}</p>
                )
              )}

              {item.skills && item.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="text-white text-xs px-2 py-1 rounded break-words"
                      style={{ backgroundColor: 'rgba(98, 114, 164, 0.9)' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <TimelineEvent
          key={item.id || `timeline-${index}`}
          item={item}
          isLeft={index % 2 === 0}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default function TimelinePage({
  type,
  items,
  title,
  link,
  overview,
  futurePlans
}: TimelinePageProps) {
  // State to handle delayed rendering
  const [isVisible, setIsVisible] = useState(false);
  const [suppressHydrationWarning, setSuppressHydrationWarning] = useState(false);

  useEffect(() => {
    // Suppress hydration warnings
    setSuppressHydrationWarning(true);
    
    // Delay rendering to ensure all styles are properly loaded
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col" suppressHydrationWarning={suppressHydrationWarning}>
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        {link ? (
          <h1 className="text-4xl font-bold mb-6 text-white">
            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {title}
            </a>
          </h1>
        ) : (
          <h1 className="text-4xl font-bold mb-6 text-white">{title}</h1>
        )}
        
        {overview && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Overview</h2>
            <p className="text-white">{overview}</p>
          </section>
        )}
        
        {futurePlans && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Future Plans</h2>
            <p className="text-white">{futurePlans}</p>
          </section>
        )}
        
        <div 
          className="p-6 rounded-lg"
          style={{ 
            backgroundColor: 'rgba(30, 41, 59, 0.5)',
            position: 'relative',
            zIndex: 10
          }}
        >
          {isVisible ? (
            <Timeline items={items} />
          ) : (
            <div className="p-10 text-center text-white">Loading timeline...</div>
          )}
        </div>
      </div>
    </main>
  );
}