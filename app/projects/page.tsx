'use client'

import Navbar from '@/components/navbar';
import React from 'react';
import { experiences, researchProjects } from '../data/timelineData';
import TimelinePage from '@/components/TimelinePage'; // Ensure the correct component is imported

export default function ProjectsPage() { // Ensure default export
    const projects = [
        {
          id: "4",
          title: "Yaad",
          description: [
            "Built scalable backend for AI-driven memory preservation platform",
            "Created vector-based memory retrieval system for contextual recall",
            "Integrated MFA and passwordless login with Clerk and audio signatures",
            "Implemented encryption and secure storage for user data protection"
          ],
          date: "2024",
          skills: ["Next.js", "Deepgram", "LangChain", "Pinecone", "Clerk", "Security"],
          icon: "BrainCircuit" // Passing icon name as string
        },
        {
          id: "3",
          title: "Classify.Ai",
          description: [
            "Developed full-stack RAG application using Next.js, Pinecone, LangChain, and LlamaIndex",
            "Integrated Clerk API with MFA and client-side encryption for security",
            "Optimized system for secure classification of government documents",
            "Improved document classification speed and accuracy by 95%"
          ],
          date: "2024",
          skills: ["Next.js", "Pinecone", "LangChain", "LlamaIndex", "Clerk", "Security"],
          icon: "ShieldAlert" // Passing icon name as string
        },
        {
          id: "2",
          title: "Sustainable Shopping Assistant",
          description: [
            "Developed React.js extension for calculating product carbon emissions across 250 retailers",
            "Integrated WikiRate API for brand ethics scores and Firebase for user emissions tracking",
            "Enabled real-time emissions tracking with personalized sustainability insights",
            "Designed clean UI for instant sustainability feedback"
          ],
          date: "2024",
          skills: ["React.js", "Firebase", "WikiRate API", "UI Design"],
          icon: "Leaf" // Passing icon name as string
        },
        {
          id: "1",
          title: "SoundSearch",
          description: [
            "Built an audio-to-audio search pipeline using Anthropic, LangChain, and Librosa",
            "Created MVP with Next.js, Supabase, and Clerk for usability and search accuracy",
            "Used Librosa for detailed sound analytics to improve search precision",
            "Collaborated with YC alum and SDxAI community for scalability guidance"
          ],
          date: "2024",
          skills: ["Next.js", "Supabase", "Clerk", "LangChain", "Librosa", "Anthropic"],
          icon: "Headphones" // Passing icon name as string to map in TimelinePage
        }
      ];
      
  
    return (

      <TimelinePage
        type="projects"
        items={projects}
        title="Projects"
        overview="Here are some of the side projects I have worked on, whether by myself or with others at hackathons. I've included links to examples of the work, such as demos or Github repos."
        futurePlans="I'm currently developing Sound Search project, Sustainability Shopping Assistant, and Yaad.ai. I'm also exploring the applications for vector embeddings for audio search and building agent recommender systems."
      />
    );
}
