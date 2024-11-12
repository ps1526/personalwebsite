import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const RESUME = `
Pranav Singh
pranavsingh.us@gmail.com | (650) 741-8906 | linkedin.com/in/pranav-singh-usa

EDUCATION
University of California, San Diego
B.S. - Data Science
GPA: 3.83 / Credit Hours: 122 of 180
Sep 2023 - Jun 2026

CERTIFICATIONS
- AWS Certified Cloud Practitioner - Oct 2024
- Salesforce Certified AI Associate - Jul 2024
- IBM - Databases and SQL for Data Science with Python - Jan 2024
- UCSD - Data Structures and Algorithms Specialization - Oct 2023

SKILLS
Machine Learning, NLP, HuggingFace, LangChain, PyTorch, Data Mining, TensorFlow, Scikit-Learn, Keras, Pandas, Django, React.js, Next.js, Python, Java, C++, SQL, JavaScript, HTML, CSS, Tailwind, AWS, AWS Glue, Amazon Redshift, GCP, Firebase

EXPERIENCES
Data Engineering Intern, National Nanotechnology Initiative
May 2024 - Present
- Led the creation of a scalable ETL pipeline to enhance EPA's OntoSearcher App, optimizing ontology mappings and improving data flow across federal systems. Engineered interoperable ontology file formats for over 30 federal databases, ensuring seamless integration of environmental, health, and safety data. Worked directly with federal partners under Dr. Branden Brough, Dr. Holly Mortensen, and Dr. Rhema Bjorkland to drive high-quality data outputs and enhancing public safety databases. Resolved key issues to enhance application performance, boosting accuracy and reliability for government-wide ontology mapping efforts.

Chief Innovator & Technologist, HerdHealth - San Diego, CA
Jan 2024 - Present
- Engineered a data analytics application utilizing the MERN stack to enhance livestock vital-tracking systems for real-time data collection and analysis. Led a multidisciplinary team to the semifinals of UCSD's Triton Innovation Challenge, securing $3,000 in seed funding for further development. Collaborated with Keshif Ventures to optimize MVP production using agile methodologies and iterative testing. Implemented advanced data visualization techniques, facilitating actionable insights for farmers to improve livestock health management.

Data Analyst Consultant, Lumnus Consulting - San Diego, CA
Oct 2023 - Present
- Developed consulting frameworks leveraging multi-dataset insights from AI risk assessments and industry metrics for strategic decision-making. Led a cross-functional team to design and implement the Lumnus website, enhancing client engagement through user-centered design. Integrated data visualization and interactive features into the website, improving user experience and facilitating access to insights.

Researcher, UCSD Chiba Lab - San Diego, CA
May 2024 - Present
- Collaborated with Prof. Andrea Chiba to develop advanced machine listening models, creating a pipeline with Librosa and Keras to predict stress levels from classroom audio. Designed a groundbreaking language model for SoundSearch that converts audio vector embeddings into rich text descriptors, integrating seamlessly with LLMs alongside PhD candidate Akshay Nagaranjan. Developed a robust API for real-time voice-based stress detection, enabling transformative applications across diverse industries.

Student Researcher, ASDRP.ORG - Fremont, CA
Oct 2020 - Apr 2023
- Developed and fine-tuned a synthetic generative pipeline using Generative Adversarial Networks and Variational Autoencoders to mitigate facial recognition interclass bias under Dr. Phil Mui. Tested the augmented dataset on a pretrained CNN, achieving a significant 20% accuracy increase for minority classes. Presented compelling research findings at the Southern California Conference for Undergraduate Research at Pepperdine University.

PROJECTS
Yaadein
Oct 2024
- Built scalable backend for AI-driven memory preservation platform. Created vector-based memory retrieval system for contextual recall. Integrated MFA and passwordless login with Clerk and audio signatures. Implemented encryption and secure storage for user data protection. Currently integrating Yaadein into smart home hardware for easier use and activation.

Sustainable Shopping Assistant
Sep 2024
- Developed JavaScript extension for calculating product carbon emissions across 250 retailers. Integrated WikiRate API for brand ethics scores and Firebase for user emissions tracking. Enabled real-time emissions tracking with personalized sustainability insights. Designed clean UI for instant sustainability feedback. Currently working to integrate sustainable alternatives through agent-based recommendation system.

SoundSearch
May 2024
- Built an audio-to-audio search pipeline using Anthropic, LangChain, and Librosa. Created MVP with Next.js, Supabase, and Clerk for usability and search accuracy. Used Librosa for detailed sound analytics to improve search precision. Collaborated with YC alum and SDxAI community for scalability guidance.

RESEARCH
Chiba Lab @ UCSD: Collaborated with Prof. Andrea Chiba to develop advanced machine listening models, creating a pipeline with Librosa and Keras to predict stress levels from classroom audio. Designed a groundbreaking language model for SoundSearch that converts audio vector embeddings into rich text descriptors, integrating seamlessly with LLMs alongside PhD candidate Akshay Nagaranjan. Developed a robust API for real-time voice-based stress detection, enabling transformative applications across diverse industries.
Mui Research Group @ ASDRP: Developed and fine-tuned a synthetic generative pipeline using Generative Adversarial Networks and Variational Autoencoders to mitigate facial recognition interclass bias under Dr. Phil Mui. Tested the augmented dataset on a pretrained CNN, achieving a significant 20% accuracy increase for minority classes. Presented compelling research findings at the Southern California Conference for Undergraduate Research at Pepperdine University.
Downing Lab @ ASDRP: Built a chemical retrosynthesis model under Prof. Downing to predict the synthesis feasibility of various compounds. Prototyped an automated chemical synthesis platform for drug discovery, integrating hardware-software interfacing with computer vision and sensor data.
Johnson Research Group @ ASDRP: Developed an emotion classification model using LSTM architecture trained on data from the 2020 presidential candidates to detect biases in their policies. Created an audio processing pipeline utilizing Mel-Frequency Cepstral Coefficients to extract essential audio features for model training.
Subramaniam Research Group @ ASDRP: Forecasted crime rates in Chicago using time series data with ARIMA and SARIMA models to provide data-driven insights. Analyzed discrepancies in crime rates across neighborhoods, offering explanations based on socioeconomic and political factors. Published research findings in the Journal of Emerging Investigators, contributing to the academic community.
`;

// Add error checking for API key
if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is not defined in environment variables');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '', // Fallback to empty string to prevent undefined
});

export async function POST(req: Request) {
  // Add debug logging
  console.log('Environment check:', {
    hasApiKey: !!process.env.OPENAI_API_KEY,
    keyLength: process.env.OPENAI_API_KEY?.length,
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
    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key is missing in the environment');
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant answering questions about Pranav based on his resume and background. Give a 3-4 sentence response from the question prompted. Here is his resume: ${RESUME}`
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