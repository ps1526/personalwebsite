import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const RESUME = `
Purpose: Looking for data engineering, data science, machine learning, or software engineering roles in both the industry and research setting. Driven by building solutions with a positive impact for customers, consumers, or the global community
Pranav Singh
pranavsingh.us@gmail.com | (650) 741-8906 | linkedin.com/in/pranav-singh-usa | www.pranavsingh.dev | https://github.com/ps1526

EDUCATION
University of California, San Diego                                                                                              La Jolla, CA
B.S. in Data Science                                                                                                            Sep 2023 - Jun 2026
- GPA: 3.83 / Credit Hours: 122 of 180

CERTIFICATIONS
- AWS Certified Cloud Practitioner (Oct. 2024)
- IBM - Databases and SQL for Data Science with Python (Jan. 2024)
- UCSD - Data Structures and Algorithms Specialization (Oct. 2023)
Relevant classes:
Linear Algebra, Multivariable Calculus, Foundations of Data Science, Data Structures and Algorithms, Theoretical Foundations of Data Science I & II, Practice & Application of Data Science

SKILLS
Machine Learning: NLP, HuggingFace, LangChain, PyTorch, TensorFlow, Scikit-Learn, Keras, Pandas
Web Development: Django, Flask, React.js, Next.js, D3.js, HTML, CSS, Tailwind
Languages: Python, Java, C++, JavaScript, SQL, SPARQL
Cloud: AWS, AWS Glue, Redshift, GCP, Firebase

EXPERIENCES
National Nanotechnology Initiative                                                                                                 Remote
Data Engineering Intern                                                                                                        May 2024 - Present
- Creating scalable ETL pipeline to enhance EPA's OntoSearcher App ontology mappings across 10+ federal environmental, health, 
  and safety databases, mentored by Dr. Holly Mortensen
- Implemented unified SPARQL infrastructure to simultaneously query and integrate data from 50+ distributed RDF nanomaterial
  databases for cross-database analysis
- Fine-tuning domain-specific LLM using OntoSearcher's RDF graphs and 100+ academic papers for predictive nanotoxicology
  insights, hazard assessment, and unsupervised ontology generation

UCSD Chiba Lab                                                                                                             San Diego, CA
Researcher                                                                                                                  May 2024 - Present
- Building MoE model and a custom data collection pipeline using AWS S3 and Amazon Redshift with over 1TB of audio,
  video, and acoustic data with Prof. Andrea Chiba to predict stress/cortisol levels from audio
- Developed a custom language model to generate text descriptors from audio samples for the SoundSearch project, integrating with
  LLMs in collaboration with PhD candidate Akshay Nagaranjan

HerdHealth                                                                                                                 San Diego, CA
Chief Innovator & Technologist                                                                                            Jan 2024 - Present
- Engineered a data analytics application using the MERN stack to optimize livestock vital-tracking, reducing farmer monitoring
  time by 45% for small-scale agricultural operations
- Led team to the semifinals of UCSD's Triton Innovation Challenge, earning $3000 in seed funding from the Rady School of Business
  and Jacobs School of Engineering

ASDRP.ORG                                                                                                                    Fremont, CA
Student Researcher                                                                                                        Oct 2020 - Apr 2023
- Developed synthetic generative pipeline using GANs/VAEs to reduce dataset bias by 20% and presented @ SCCUR under Dr.
  Phil Mui
- Built a XGBoost classifier to predict synthesis feasibility of compounds under Prof. Downing for drug discovery and chemical
  retrosynthesis prediction
- Developed a CNN-LSTM with 87% accuracy for sentiment analysis using over 150 hours of audio data

PROJECTS
ResearchKG | Full-Stack Research Tool and Knowledge Graph Generator                                                         Feb 2025
- Developed Python citation network generator using Semantic Scholar API and spaCy NLP to map 1000+ research relationships
  across academic disciplines from a single paper
- Built interactive Next.js/D3.js visualization platform with advanced filtering and cycle detection algorithms
- Integrated OpenAI API to analyze citation networks, identify research gaps, and predict emerging research opportunities

Yaadein | AI Memory Preservation Platform                                                                                   Oct 2024
- Built backend architecture and logic leveraging Next.js, Deepgram, Langchain, and Pinecone
- Integrated multi-factor authentication and passwordless login using Clerk to safeguard sensitive memory data

Sustainable Shopping Assistant | Web Extension                                                                              Sep 2024
- Developed a React.js web extension that calculates carbon emissions for products from 250 retailers
- Integrated WikiRate API for brand ethics scores and used Firebase to track users' cumulative emissions

SoundSearch | Audio Search Pipeline                                                                                         May 2024
- Engineered audio-to-audio search pipeline for podcasters using Anthropic, LangChain, GCP, and Librosa
- Developing MVP with Next.js, Supabase, Clerk, and GUI with mentorship from YC alum Yan Lhert
`
;

// Add error checking for API key
// replace process.env.OPENAI_API_KEY with key 
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error('OPENAI_API_KEY is not defined in environment variables');
}

const openai = new OpenAI({
  apiKey: apiKey|| '', // Fallback to empty string to prevent undefined
});

export async function POST(req: Request) {
  // Add debug logging
  console.log('Environment check:', {
    hasApiKey: !!apiKey,
    keyLength: apiKey?.length,
    nodeEnv: process.env.NODE_ENV,
  });

  try {
    const { message } = await req.json();

    // Additional validation for the message
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Verify API key before making the request
    if (!apiKey) {
      console.error('OpenAI API key is missing in the environment');
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant answering questions about Pranav based on his expereinces, info, and reusme. Give a response from the question prompted. Here is the background info: ${RESUME}, limit your response to 4-5 sentences maximum`
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 200,
    });

    if (!response.choices[0]?.message?.content) {
      console.error('No response content from OpenAI');
      return NextResponse.json(
        { error: 'Failed to generate response' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      response: response.choices[0].message.content
    });

  } catch (error) {
    // Enhanced error logging
    console.error('Error in chat API:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });

    // Check for specific error types
    if (error instanceof Error && error.message.includes('API key')) {
      return NextResponse.json(
        { error: 'Authentication error with OpenAI' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to process the request' },
      { status: 500 }
    );
  }
}