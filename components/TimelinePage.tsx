import React from 'react';
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
  type LucideIcon,
  type LucideProps
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
  Headphones
};

interface TimelineItem {
  id: string;
  title: string;
  description?: string | string[];
  date: string;
  skills?: string[];
  icon?: keyof typeof IconMap | LucideIcon;
}

interface TimelinePageProps {
  type: 'projects' | 'experiences' | 'research';
  items: TimelineItem[];
  title: string;
  overview?: string;
  futurePlans?: string;
}

const TimelineEvent: React.FC<{ item: TimelineItem; isLeft: boolean; isLast: boolean }> = ({ 
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
            className={`
              absolute top-0 w-8 h-8 rounded-full bg-white shadow-lg 
              flex items-center justify-center
              transform transition-all duration-300 ease-in-out
              ${isHovered ? 'scale-125' : 'scale-100'}
            `}
            style={{ [isLeft ? 'right' : 'left']: '-16px' }}
          >
            <IconComponent 
              className={`
                w-4 h-4 text-blue-800
                transition-transform duration-300
                ${isHovered ? 'rotate-12' : 'rotate-0'}
              `}
            />
          </div>

          <div 
            className={`
              bg-white/10 backdrop-blur-sm p-4 rounded-lg
              transform transition-all duration-300 ease-in-out
              ${isHovered ? 'translate-y-[-4px] shadow-xl bg-white/15' : 'shadow-lg'}
            `}
          >
            <div className="m-3">
              <h3 className="text-white font-bold text-lg mb-2 break-words">
                {item.title}
              </h3>
              <p className="text-white text-sm mb-2">{item.date}</p>
              
              {item.description && (
                Array.isArray(item.description) ? (
                  <ul className="list-disc list-inside text-white mb-2">
                    {item.description.map((point, i) => (
                      <li key={i} className="mb-1 break-words">{point}</li>
                    ))}
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
                      className={`
                        text-white text-xs px-2 py-1 rounded break-words
                        bg-white/20 backdrop-blur-sm
                        transition-all duration-300
                        ${isHovered ? 'bg-white/25' : 'bg-white/20'}
                      `}
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
          key={item.id}
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
  overview,
  futurePlans
}: TimelinePageProps) {
  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#2a0845] via-[#1a1b4b] to-[#006bc6] bg-fixed" />
      
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-white">{title}</h1>
        
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
        
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
          <Timeline items={items} />
        </div>
      </div>
    </main>
  );
}