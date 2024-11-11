'use client'

import Navbar from '@/components/navbar';
import React from 'react';
import { experiences, researchProjects } from '../data/timelineData';
import TimelinePage from '@/components/TimelinePage'; // Ensure the correct component is imported

export default function ProjectsPage() { // Ensure default export
    const research = [
        {
          id: "1",
          title: "Chiba Lab @ UCSD",
          description: [
            "Collaborated with Prof. Andrea Chiba to develop advanced machine listening models, creating a pipeline with Librosa and Keras to predict stress levels from classroom audio.",
            "Designed a groundbreaking language model for SoundSearch that converts audio vector embeddings into rich text descriptors, integrating seamlessly with LLMs alongside PhD candidate Akshay Nagaranjan.",
            "Developed a robust API for real-time voice-based stress detection, enabling transformative applications across diverse industries."
          ],
          date: "May 2024",
          skills: ["Data Engieering", "Machine Listening", "DL-Based Time Series Forecasting", "Signal Processing", "Praat", "Parselmouth", "Librosa", "AWS S3", "API Development", "Audio Vector Embeddings", "Feature Extractions"],
          icon: "AudioLines" // Passing icon name as string
        },
        {
          id: "2",
          title: "Mui Research Group @ ASDRP",
          description: [
            "Developed and fine-tuned a synthetic generative pipeline using Generative Adversarial Networks and Variational Autoencoders to mitigate facial recognition interclass bias under Dr. Phil Mui.",
            "Tested the augmented dataset on a pretrained CNN, achieving a significant 20% accuracy increase for minority classes.",
            "Presented compelling research findings at the Southern California Conference for Undergraduate Research at Pepperdine University."
          ],
          date: "Jan 2023",
          skills: ["GANs", "VAEs", "CNN", "Deep Learning Architecture", "Data Augmentation"],
          icon: "ScanFace" // Passing icon name as string
        },
        {
          id: "3",
          title: "Downing Lab @ ASDRP",
          description: [
            "Built a chemical retrosynthesis model under Prof. Downing to predict the synthesis feasibility of various compounds.",
            "Prototyped an automated chemical synthesis platform for drug discovery, integrating hardware-software interfacing with computer vision and sensor data."
          ],
          date: "Jan 2022",
          skills: ["Randon Forest", "Keras", "Chemical Retrosynthesis", "Cheminformatics", "Computer Vision"],
          icon: "FlaskConical" // Passing icon name as string
        },
        {
          id: "4",
          title: "Johnson Research Group @ ASDRP",
          description: [
            "Developed an emotion classification model using LSTM architecture trained on data from the 2020 presidential candidates to detect biases in their policies.",
            "Created an audio processing pipeline utilizing Mel-Frequency Cepstral Coefficients to extract essential audio features for model training."
          ],
          date: "Feb 2021",
          skills: ["LSTM", "PyTorch", "Audio Processing", "Mel-Frequency Cepstral Coefficients", "Web Scraping"],
          icon: "Smile" // Passing icon name as string
        },
        {
          id: "5",
          title: "Subramaniam Research Group @ ASDRP",
          description: [
            "Forecasted crime rates in Chicago using time series data with ARIMA and SARIMA models to provide data-driven insights.",
            "Analyzed discrepancies in crime rates across neighborhoods, offering explanations based on socioeconomic and political factors.",
            "Published research findings in the Journal of Emerging Investigators, contributing to the academic community."
          ],
          date: "Oct 2020",
          skills: ["Time Series Forecasting", "ARIMA", "SARIMA", "Statistical Modeling", "Python"],
          icon: "Cctv" // Passing icon name as string
        }
      ];
      
  
    return (

      <TimelinePage
        type="projects"
        items={research}
        title="Research"
        overview="Down below are some of the research projects and groups that I have been involved. As someone who is looking to apply to grad school, being able to apply machine learning and deep learning technoques with various domain expertise is something I have always been passionate about. Currently, I am working with Professor Andrea Chiba and PhD Candidate Akshay Nagaranjan."
        futurePlans="I hope to get involved with research regarding AI infrastructure, recommender systems, LLMs, and other cuttind edge applications of AI to drive change and make the world a more ethical and equitable place."
      />
    );
}
