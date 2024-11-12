"use client";

import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Hero: React.FC = () => {
  const [messages, setMessages] = useState<Array<{type: string, content: string}>>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      setMessages(prev => [...prev, {
        type: 'user',
        content: inputMessage
      }]);
      
      setIsLoading(true);
      
      // Simulate AI response - replace with your actual RAG implementation
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: "Based on Pranav's resume, he's a Data Science student at UCSD with experience in various relevant coursework including Linear Algebra and Data Structures."
        }]);
        setIsLoading(false);
      }, 1000);
      
      setInputMessage('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-16 px-4">
      {/* Hero Content */}
      <div className="max-w-2xl w-full text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-5">My name is Pranav Singh</h1>
        <p className="text-lg font-bold text-white mb-5">
          I am a 2nd Year Data Science Student at UCSD who is interested in data science, data engineering, software engineering, and machine learning.
        </p>
        
        <div className="text-white my-4 flex flex-col items-center">
          <p className="mb-2">Some relevant coursework include:</p>
          <div className="inline-block text-left max-w-md">
            <ul className="list-disc pl-5 space-y-1">
              <li className="ml-1"><span className="font-bold">Linear Algebra</span></li>
              <li className="ml-1"><span className="font-bold">Multivariable Calculus</span></li>
              <li className="ml-1"><span className="font-bold">Foundations of Data Science</span></li>
              <li className="ml-1"><span className="font-bold">Data Structures and Algorithms</span></li>
              <li className="ml-1"><span className="font-bold">Theoretical Foundations of Data Science I & II</span></li>
              <li className="ml-1"><span className="font-bold">Practice & Application of Data Science</span></li>
            </ul>
          </div>
        </div>

        <p className="text-white mt-8 mb-6">
          Feel free to look through my past research, projects, and experiences, or ask a question below:
        </p>
      </div>

      {/* Chat Interface */}
      <div className="w-full max-w-4xl bg-gray-900/50 rounded-lg border border-gray-800 p-4 mb-8">
        <div className="flex flex-col h-[400px]">
          {/* Messages Container */}
          <div className="flex-grow overflow-y-auto mb-4 p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
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
          
          {/* Input Area */}
          <div className="flex gap-2">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything about my experience..."
              className="flex-grow min-h-[80px] p-2 rounded-lg bg-gray-800 border border-gray-700 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center max-w-2xl w-full mb-12">
        <p className="text-white mb-6">
          If you'd like to discuss potential collaborations or learn more about my work, feel free to reach out:
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a href="mailto:prs007@ucsd.edu"
            className="text-white hover:text-blue-300 transition-colors duration-300 flex items-center gap-2 hover:scale-110 transform"
            aria-label="Email"
          >
            <Mail size={40} />
          </a>
          
          <a href="https://www.linkedin.com/in/pranav-singh-usa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors duration-300 flex items-center gap-2 hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <Linkedin size={40} />
          </a>
          
          <a href="https://github.com/ps1526"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors duration-300 flex items-center gap-2 hover:scale-110 transform"
          >
            <Github size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;