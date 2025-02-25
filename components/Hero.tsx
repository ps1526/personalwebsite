"use client";
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

// Types
interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface ChatInputProps {
  onSendMessage: (message: string) => Promise<void>;
  isLoading: boolean;
}

// Chat Input Component
const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() && !isLoading) {
      await onSendMessage(inputMessage.trim());
      setInputMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <textarea
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="What relevant certifications and coursework does Pranav have?"
        className="flex-grow min-h-[80px] p-2 rounded-lg bg-gray-800 border border-gray-700 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !inputMessage.trim()}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200 flex items-center justify-center"
      >
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
};

// Message List Component
const MessageList: React.FC<{ messages: Message[], isLoading: boolean }> = ({ messages, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only scroll the messages container when new messages arrive
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div 
      ref={messageListRef}
      className="flex-grow overflow-y-auto mb-4 p-4 scroll-smooth"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-white'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-700 text-white rounded-lg p-3">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = useCallback(async (message: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling API:', error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: "I apologize, but I encountered an error processing your request. Please try again.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    // Remove scroll-behavior from the main container
    <div className="min-h-screen flex flex-col items-center px-4">
      {/* Hero Content */}
      <div className="max-w-2xl w-full text-center mb-12 pt-16">
        <h1 className="text-5xl font-bold text-white mb-5">Welcome!</h1>
        <p className="text-lg font-bold text-white mb-5">
          My name is Pranav Singh and I'm a Data Science Student at UCSD who is interested in data science, data engineering, software engineering, 
          and machine learning. 
        </p>

        <div className="text-white my-4 flex flex-col items-center">
          <p className="mb-2"> As a developer and researcher, my goal is to create ethical, equitable, and impactful data-driven solutions. Whether designing 
          data pipelines, creating custom collection methods, or developing machine learning and deep learning models, I’m driven by a desire to push my boundaries 
          and apply my skills across diverse domains. From cheminformatics and stress prediction to tackling societal data biases, I’ve enjoyed leveraging my experience 
          as a machine learning engineer and data scientist to address real-world challenges.</p>
        </div>
        <div className="text-white my-4 flex flex-col items-center">
          <p className="mb-2"> Additionally, I’ve had the opportunity to build AI-powered applications at a wide variety of hackathons using a broad mix of technologies, 
          integrating language models, agents, and speech generative models to solve complex problems.</p>
        </div>
        <div className="text-white my-4 flex flex-col items-center">
          <p className="mb-2"> Now, I’m eager to find research or industry opportunities where I can grow as a builder, thinker, and person while contributing to projects and ideas that are impactful, fair, and inclusive.</p>
        </div>
      

        <p className="text-white mt-8 mb-6">
          Feel free to look through my past research, projects, and experiences, or ask a question below:
        </p>
      </div>

      {/* Chat Interface */}
      <div className="w-full max-w-4xl bg-gray-900/50 rounded-lg border border-gray-800 p-4 mb-8">
        <div className="flex flex-col h-[400px]">
          <MessageList messages={messages} isLoading={isLoading} />
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center max-w-2xl w-full mb-12">
        <p className="text-white mb-6">
          If you'd like to discuss potential collaborations or learn more about my work, feel free to reach out:
        </p>
        
        <div className="flex justify-center gap-6">
          {[
            { href: "mailto:prs007@ucsd.edu", Icon: Mail, label: "Email" },
            { href: "https://www.linkedin.com/in/pranav-singh-usa/", Icon: Linkedin, label: "LinkedIn" },
            { href: "https://github.com/ps1526", Icon: Github, label: "GitHub" }
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="text-white hover:text-blue-300 transition-colors duration-300 flex items-center gap-2 hover:scale-110 transform"
              aria-label={label}
            >
              <Icon size={40} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;