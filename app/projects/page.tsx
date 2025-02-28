'use client'

import Navbar from '@/components/navbar';
import React from 'react';
import { experiences, researchProjects } from '../data/timelineData';
import TimelinePage from '@/components/TimelinePage'; // Ensure the correct component is imported

export default function ProjectsPage() { // Ensure default export
    const projects = [
      {
        id: "5",
        title: "ResearchKG",
        link: "https://github.com/ps1526/researchkg_interactive",
        description: [
          "Developed Python citation network generator using Semantic Scholar API to map 1000+ research relationships across academic disciplines",
          "Implemented spaCy NLP processing to extract and analyze relationships between academic papers from a single source document",
          "Built interactive Next.js/D3.js visualization platform with advanced filtering capabilities and cycle detection algorithms",
          "Integrated OpenAI API to analyze citation networks, identify research gaps, and predict emerging research opportunities",
          "Created comprehensive knowledge graph system to visualize complex academic interconnections and reveal undiscovered research pathways"
          ],
        date: "2025",
        skills: ["Next.js", "SemanticScholar", "Neo4j", "spaCyNLP", "D3.js", "Graphology", "WebGL", "OpenAI", "Graph RAG"],
        icon: "Network" // Passing icon name as string
      }
        ,{
          id: "4",
          title: "Yaadein",
          link: "https://github.com/ajagtapdev/yaad",
          description: [
            "Built scalable backend for AI-driven memory preservation platform",
            "Created vector-based memory retrieval system for contextual recall",
            "Integrated MFA and passwordless login with Clerk and audio signatures",
            "Implemented encryption and secure storage for user data protection",
            "*Currently integrating Yaad into smart home hardware for easier use and activation"
          ],
          date: "2024",
          skills: ["Next.js", "Deepgram", "LangChain", "Pinecone", "Clerk", "Security"],
          icon: "BrainCircuit" // Passing icon name as string
        },
        {
          id: "3",
          title: "Classify.Ai",
          link:"https://www.loom.com/share/b309dc0b9f964e048b2e687f748350f2?sid=eba2b9ec-e098-4883-bf8c-86b964d9ad63",
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
          link:"https://github.com/ps1526/SustainableShoppingAssitant",
          description: [
            "Developed Javascript extension for calculating product carbon emissions across 250 retailers",
            "Integrated WikiRate API for brand ethics scores and Firebase for user emissions tracking",
            "Enabled real-time emissions tracking with personalized sustainability insights",
            "Designed clean UI for instant sustainability feedback",
            "*Currently working to integrate sustainable alternatives through agent-based recommendation system"
          ],
          date: "2024",
          skills: ["React.js", "Firebase", "WikiRate API", "UI Design"],
          icon: "Leaf" // Passing icon name as string
        },
        {
          id: "1",
          title: "SoundSearch",
          link:"https://www.loom.com/share/1120a9d1cac347408ef541d2e869df31?sid=6c3d9f45-79be-4e75-aab4-8b723766077b",
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
