// components/Hero.tsx
import React from 'react';
import { Mail, Linkedin, Github} from 'lucide-react';

const Hero: React.FC = () => {
 return (
   <div className="min-h-screen flex items-start justify-center pt-16 text-center">
     <div className="max-w-2xl">
       <h1 className="text-5xl font-bold text-white mb-5">My name is Pranav Singh</h1>
       <p className="text-lg font-bold text-white mb-5">
         I am a 2nd Year Data Science Student at UCSD who is interested in data science, data engineering, software engineering, and machine learning.
       </p>
       
       <div className="text-white my-4 flex flex-col items-center">
         <p className="mb-2">Some relevant coursework include:</p>
         <div className="inline-block text-left max-w-md"> {/* Added max-width and adjusted container */}
           <ul className="list-disc pl-5 space-y-1"> {/* Changed ml-4 to pl-5 for better alignment */}
             <li className="ml-1"> {/* Added slight margin to li elements */}
               <span className="font-bold">Linear Algebra</span>
             </li>
             <li className="ml-1">
               <span className="font-bold">Multivariable Calculus</span>
             </li>
             <li className="ml-1">
               <span className="font-bold">Foundations of Data Science</span>
             </li>
             <li className="ml-1">
               <span className="font-bold">Data Structures and Algorithms</span>
             </li>
             <li className="ml-1">
               <span className="font-bold">Theoretical Foundations of Data Science I & II</span>
             </li>
             <li className="ml-1">
               <span className="font-bold">Practice & Application of Data Science</span>
             </li>
           </ul>
         </div>
       </div>

       <p className="text-white my-4">
         Feel free to look through my past research, projects, and experiences!
       </p>
       <p className="text-white my-4">
         If you'd like to discuss potential collaborations or learn more about my work, please reach out:
       </p>
       
       {/* Social Links */}
       <div className="flex justify-center gap-6 mt-6">
         
           <a href="mailto:prs007@ucsd.edu"
           className="text-white hover:text-blue-300 transition-colors duration-300 flex items-center gap-2 hover:scale-110 transform" // Added hover effect
           aria-label="Email"
         >
           <Mail size={40} />
         </a>
         
          <a href="https://www.linkedin.com/in/pranav-singh-usa/"
           target="_blank"
           rel="noopener noreferrer"
           className="text-white hover:text-blue-300 transition-colors duration-300 flex items-center gap-2 hover:scale-110 transform" // Added hover effect
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