// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

import { useState } from 'react';
import { 
  CheckCircle2, XCircle, Award, ArrowRight, 
  RotateCcw, Home, BookOpen, Dices, ArrowLeft, 
  RefreshCw, Check 
} from 'lucide-react';

// Expanded question bank based strictly on the provided AWS summary
const allQuizData = [
  {
    id: 1,
    question: 'According to the Shared Responsibility Model, which of the following is the Customer responsible for ("Security IN the Cloud")?',
    options: [
      'Managing the physical hardware and data centers.',
      'Securing the foundational software that runs networking services.',
      'Configuring virtual infrastructure and securing data with encryption.',
      'Maintaining the global infrastructure of Availability Zones.'
    ],
    correctAnswer: 2,
    explanation: 'Customer\'s Responsibility ("Security IN the Cloud"): You are responsible for securing your data (client and server-side encryption), configuring your virtual infrastructure, and managing user access and third-party software.'
  },
  {
    id: 2,
    question: 'Which of the following is one of the six primary advantages of AWS?',
    options: [
      'Increasing capital expenses (CAPEX).',
      'Guessing your capacity needs accurately.',
      'Managing your own local data centers to save money.',
      'Going global in minutes with extremely low latency.'
    ],
    correctAnswer: 3,
    explanation: 'Go Global in Minutes: Deploy applications globally with extremely low latency. You also trade CAPEX for variable expenses, stop guessing capacity, and stop spending money on data centers.'
  },
  {
    id: 3,
    question: 'What does "Elasticity" refer to in AWS cloud architecture?',
    options: [
      'Eliminating single points of failure by running workloads across multiple AZs.',
      'The ability to automatically scale resources based on tracked metrics.',
      'Recovering from disasters with minimal data loss (RTO/RPO).',
      'Democratizing advanced technologies.'
    ],
    correctAnswer: 1,
    explanation: 'Elasticity is the ability to automatically scale resources based on tracked metrics, primarily using Auto Scaling Groups.'
  },
  {
    id: 4,
    question: 'Which EC2 pricing model allows you to bid on unused capacity for up to 90% savings, though AWS can interrupt it?',
    options: [
      'On-Demand Instances',
      'Reserved Instances',
      'Spot Instances',
      'Dedicated Hosts'
    ],
    correctAnswer: 2,
    explanation: 'Spot Instances let you bid on unused capacity for up to 90% savings, but AWS can interrupt and terminate these instances at any time.'
  },
  {
    id: 5,
    question: 'Which Amazon S3 storage class is best for cheap, long-term archival storage with slow retrieval times?',
    options: [
      'S3 Standard',
      'S3 Intelligent-Tiering',
      'S3 One Zone-IA',
      'S3 Glacier / Deep Archive'
    ],
    correctAnswer: 3,
    explanation: 'S3 Glacier / Deep Archive is meant for cheap, long-term archival storage with slow retrieval times.'
  },
  {
    id: 6,
    question: 'Which AWS service is described as the flagship NoSQL service, capable of scaling to billions of records with consistent, microsecond latency?',
    options: [
      'Amazon RDS',
      'Amazon Aurora',
      'Amazon DynamoDB',
      'Amazon Redshift'
    ],
    correctAnswer: 2,
    explanation: 'Amazon DynamoDB is the flagship NoSQL (Non-Relational) service. RDS and Aurora are relational (SQL) databases.'
  },
  {
    id: 7,
    question: 'What is a primary difference between Security Groups and Network Access Control Lists (NACLs)?',
    options: [
      'Security Groups act at the subnet level; NACLs act at the instance level.',
      'Security Groups are stateful; NACLs are stateless.',
      'Security Groups process both allow and deny rules; NACLs process only allow rules.',
      'There is no functional difference between them.'
    ],
    correctAnswer: 1,
    explanation: 'Security Groups operate at the individual instance level and are stateful. NACLs act as a firewall at the subnet level, are stateless, and evaluate both allow and deny rules.'
  },
  {
    id: 8,
    question: 'Which service protects infrastructure, specifically Route 53 and CloudFront, against Distributed Denial of Service (DDoS) attacks?',
    options: [
      'AWS WAF (Web Application Firewall)',
      'Amazon GuardDuty',
      'AWS Shield',
      'Amazon Inspector'
    ],
    correctAnswer: 2,
    explanation: 'AWS Shield protects infrastructure against DDoS attacks. WAF protects against common web attacks like SQL injections.'
  },
  {
    id: 9,
    question: 'Which application integration service acts as a fully managed queueing system where messages sit until they are processed?',
    options: [
      'Amazon SNS (Simple Notification Service)',
      'Amazon SQS (Simple Queue Service)',
      'Amazon Kinesis',
      'Amazon EventBridge'
    ],
    correctAnswer: 1,
    explanation: 'Amazon SQS (Simple Queue Service) is a fully managed queueing system where messages sit until they are processed and then deleted.'
  },
  {
    id: 10,
    question: 'Which logging and monitoring service answers the question "Who did it?" by recording all API calls across your account?',
    options: [
      'Amazon CloudWatch',
      'AWS CloudTrail',
      'Amazon Athena',
      'AWS Config'
    ],
    correctAnswer: 1,
    explanation: 'AWS CloudTrail ("Who did it?") records all API calls across your account, documenting the source IP, user, time, and specific action taken.'
  },
  {
    id: 11,
    question: 'Cloud computing allows consumers to trade capital expenses (CAPEX) for what?',
    options: [
      'Operating expenses (OPEX).',
      'Physical hardware expenses.',
      'Fixed infrastructure costs.',
      'Economies of scale.'
    ],
    correctAnswer: 0,
    explanation: 'It allows consumers to trade capital expenses (CAPEX), such as buying physical hardware upfront, for operating expenses (OPEX).'
  },
  {
    id: 12,
    question: 'What is the purpose of AWS Edge Locations?',
    options: [
      'To cluster data centers to prevent single points of failure.',
      'To provide geographical locations for deploying core services.',
      'To cache data in crowded urban areas for ultra-fast delivery to end users.',
      'To host highly available databases.'
    ],
    correctAnswer: 2,
    explanation: 'Edge Locations are sites located in crowded urban areas used primarily by services like CloudFront to cache data for ultra-fast delivery to end users.'
  },
  {
    id: 13,
    question: 'Which AWS service allows you to run code based on triggers, paying only for the exact memory and time used, without managing servers?',
    options: [
      'Amazon EC2',
      'AWS Lambda',
      'Elastic Beanstalk',
      'AWS Fargate'
    ],
    correctAnswer: 1,
    explanation: 'AWS Lambda is a serverless compute service that allows you to run code based on triggers, paying only for the exact memory and time used.'
  },
  {
    id: 14,
    question: 'Which database service is built specifically for massive online analytical processing (OLAP) queries (data warehousing)?',
    options: [
      'Amazon RDS',
      'Amazon DocumentDB',
      'Amazon ElastiCache',
      'Amazon Redshift'
    ],
    correctAnswer: 3,
    explanation: 'Amazon Redshift is a data warehousing service built for massive online analytical processing (OLAP) queries.'
  },
  {
    id: 15,
    question: 'Which service establishes a direct, private, ultra-fast physical fiber connection between your on-premises data center and AWS?',
    options: [
      'AWS VPN',
      'AWS Direct Connect',
      'VPC Peering',
      'AWS Transit Gateway'
    ],
    correctAnswer: 1,
    explanation: 'AWS Direct Connect establishes a direct, private, ultra-fast physical fiber connection, whereas VPN uses the public internet.'
  },
  {
    id: 16,
    question: 'Which IAM identity is best practice for granting permissions to an AWS service so it can talk to another AWS service?',
    options: [
      'IAM Users',
      'IAM Groups',
      'IAM Roles',
      'The Root User'
    ],
    correctAnswer: 2,
    explanation: 'Roles are used to grant permissions to AWS services to talk to other AWS services. Groups are used for assigning permissions to human users.'
  },
  {
    id: 17,
    question: 'Which AWS service allows you to define your architecture as code using templates to ensure rapid, automated deployments?',
    options: [
      'AWS Config',
      'AWS Artifact',
      'AWS CloudFormation',
      'AWS License Manager'
    ],
    correctAnswer: 2,
    explanation: 'AWS CloudFormation allows you to define your architecture as code using templates, ensuring rapid, automated, and error-free infrastructure deployment.'
  },
  {
    id: 18,
    question: 'What is the most comprehensive support plan that adds a dedicated Technical Account Manager (TAM) to optimize your architecture?',
    options: [
      'Basic',
      'Developer',
      'Business',
      'Enterprise'
    ],
    correctAnswer: 3,
    explanation: 'Enterprise Support adds a dedicated Technical Account Manager (TAM) to optimize your architecture.'
  },
  {
    id: 19,
    question: 'Which service provides a central portal to download on-demand AWS security and compliance reports?',
    options: [
      'AWS Artifact',
      'AWS Config',
      'AWS Trusted Advisor',
      'AWS CloudTrail'
    ],
    correctAnswer: 0,
    explanation: 'AWS Artifact is a central portal to download on-demand AWS security and compliance reports.'
  },
  {
    id: 20,
    question: 'Which service visually graphs costs down to a daily or monthly granular level and heavily leverages resource tags?',
    options: [
      'AWS Pricing Calculator',
      'AWS Budgets',
      'Cost and Usage Reports',
      'AWS Cost Explorer'
    ],
    correctAnswer: 3,
    explanation: 'AWS Cost Explorer is a visually friendly dashboard to filter and graph costs down to a daily or monthly granular level, heavily leveraging tags.'
  }
];

// Utility to shuffle an array
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function App() {
  const [view, setView] = useState('menu'); // 'menu', 'quiz', 'flashcards'
  const [activeQuestions, setActiveQuestions] = useState([]);
  
  // Quiz State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Flashcard State
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const startQuiz = () => {
    // Generate Random 60 questions (or max available in the bank)
    const shuffled = shuffleArray(allQuizData);
    const selected = shuffled.slice(0, 60);
    setActiveQuestions(selected);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
    setView('quiz');
  };

  const startFlashcards = () => {
    // Flashcards usually go through all available data or a shuffled version
    const shuffled = shuffleArray(allQuizData);
    setActiveQuestions(shuffled);
    setCurrentCard(0);
    setIsFlipped(false);
    setView('flashcards');
  };

  const backToMenu = () => {
    setView('menu');
  };

  // ----- QUIZ LOGIC -----
  const handleOptionClick = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === activeQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < activeQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  // ----- FLASHCARD LOGIC -----
  const nextCard = () => {
    if (currentCard < activeQuestions.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentCard(currentCard + 1), 150);
    }
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setIsFlipped(false);
      setTimeout(() => setCurrentCard(currentCard - 1), 150);
    }
  };

  // ----- VIEWS -----
  if (view === 'menu') {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4 font-sans text-slate-800">
        <div className="max-w-2xl w-full text-center mb-10">
          <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Award className="text-white w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            AWS Cloud Practitioner Prep
          </h1>
          <p className="text-lg text-slate-600 max-w-lg mx-auto">
            Master the core concepts of AWS. Choose your preferred study method below to get started.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl">
          {/* Quiz Button */}
          <button 
            onClick={startQuiz}
            className="group bg-white p-8 rounded-3xl shadow-sm border-2 border-transparent hover:border-blue-500 hover:shadow-xl transition-all duration-300 text-left flex flex-col items-start"
          >
            <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Dices className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Random Quiz</h2>
            <p className="text-slate-500 mb-6">
              Test your knowledge with up to 60 randomized multiple-choice questions.
            </p>
            <span className="mt-auto font-semibold text-blue-600 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
              Start Quiz <ArrowRight className="w-4 h-4" />
            </span>
          </button>

          {/* Flashcards Button */}
          <button 
            onClick={startFlashcards}
            className="group bg-white p-8 rounded-3xl shadow-sm border-2 border-transparent hover:border-purple-500 hover:shadow-xl transition-all duration-300 text-left flex flex-col items-start"
          >
            <div className="bg-purple-100 text-purple-600 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Study Flashcards</h2>
            <p className="text-slate-500 mb-6">
              Review concepts with active recall. Flip cards to reveal answers and explanations.
            </p>
            <span className="mt-auto font-semibold text-purple-600 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
              Start Studying <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    );
  }

  if (view === 'flashcards') {
    const card = activeQuestions[currentCard];
    
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col p-4 md:p-8 font-sans text-slate-800">
        <header className="max-w-4xl w-full mx-auto flex items-center justify-between mb-8">
          <button onClick={backToMenu} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium transition-colors">
            <Home className="w-5 h-5" /> Back to Menu
          </button>
          <div className="bg-purple-100 text-purple-800 px-4 py-1.5 rounded-full text-sm font-bold">
            Card {currentCard + 1} of {activeQuestions.length}
          </div>
        </header>

        <main className="flex-grow flex flex-col items-center justify-center max-w-3xl w-full mx-auto">
          {/* Flashcard Area */}
          <div className="w-full relative perspective-1000">
            <div 
              onClick={() => setIsFlipped(!isFlipped)}
              className={`w-full min-h-[400px] bg-white rounded-3xl shadow-lg border-2 border-slate-100 p-8 md:p-12 cursor-pointer transition-all duration-500 flex flex-col items-center justify-center text-center transform-style-3d hover:shadow-xl ${isFlipped ? 'ring-4 ring-purple-100 border-purple-200' : ''}`}
            >
              {!isFlipped ? (
                // Front of Card
                <div className="animate-in fade-in zoom-in-95 duration-300">
                  <span className="text-purple-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Question</span>
                  <h2 className="text-2xl md:text-3xl font-bold leading-snug text-slate-800">
                    {card.question}
                  </h2>
                  <div className="mt-12 text-slate-400 flex items-center gap-2 text-sm justify-center">
                    <RefreshCw className="w-4 h-4" /> Click card to flip
                  </div>
                </div>
              ) : (
                // Back of Card
                <div className="animate-in fade-in zoom-in-95 duration-300 flex flex-col items-center">
                  <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-2 block flex items-center gap-1 justify-center">
                    <Check className="w-4 h-4" /> Answer
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">
                    {card.options[card.correctAnswer]}
                  </h2>
                  <div className="w-16 h-1 bg-slate-100 rounded-full mb-6"></div>
                  <p className="text-slate-600 md:text-lg leading-relaxed max-w-xl">
                    {card.explanation}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Flashcard Controls */}
          <div className="flex items-center gap-6 mt-10">
            <button 
              onClick={prevCard} 
              disabled={currentCard === 0}
              className={`p-4 rounded-full flex items-center justify-center transition-all ${currentCard === 0 ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-700 hover:bg-slate-100 shadow-sm hover:shadow-md'}`}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <span className="text-slate-400 font-medium w-24 text-center">
              {currentCard + 1} / {activeQuestions.length}
            </span>
            <button 
              onClick={nextCard} 
              disabled={currentCard === activeQuestions.length - 1}
              className={`p-4 rounded-full flex items-center justify-center transition-all ${currentCard === activeQuestions.length - 1 ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-700 hover:bg-slate-100 shadow-sm hover:shadow-md'}`}
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </main>
      </div>
    );
  }

  if (view === 'quiz') {
    if (showResults) {
      return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans text-slate-800">
          <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center">
            <Award className="w-24 h-24 text-blue-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-3">Quiz Complete!</h2>
            <p className="text-slate-500 mb-8">Let's see how you did on your randomized AWS exam.</p>
            
            <div className="bg-blue-50 rounded-2xl p-8 mb-8 border border-blue-100">
              <div className="text-6xl font-extrabold text-blue-600 mb-3">
                {Math.round((score / activeQuestions.length) * 100)}%
              </div>
              <p className="text-lg font-medium text-blue-800">
                You scored {score} out of {activeQuestions.length}
              </p>
            </div>
  
            <div className="flex flex-col gap-3">
              <button 
                onClick={startQuiz}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200"
              >
                <RotateCcw className="w-5 h-5" /> Retake Random Quiz
              </button>
              <button 
                onClick={backToMenu}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-4 px-6 rounded-xl transition-colors duration-200"
              >
                <Home className="w-5 h-5" /> Back to Menu
              </button>
            </div>
          </div>
        </div>
      );
    }

    const question = activeQuestions[currentQuestion];

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col p-4 md:p-8 font-sans text-slate-800">
        
        <header className="max-w-3xl w-full mx-auto flex items-center justify-between mb-6">
          <button onClick={backToMenu} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium transition-colors">
            <Home className="w-5 h-5" /> Exit Quiz
          </button>
        </header>

        <div className="bg-white rounded-3xl shadow-lg max-w-3xl w-full mx-auto overflow-hidden flex flex-col flex-grow md:flex-grow-0">
          {/* Header */}
          <div className="bg-slate-800 text-white p-6 md:p-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold hidden md:block">AWS Practitioner Quiz</h1>
              <span className="bg-slate-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
                Question {currentQuestion + 1} of {activeQuestions.length}
              </span>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-slate-600 rounded-full h-2.5 mt-2">
              <div 
                className="bg-blue-400 h-2.5 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${((currentQuestion + 1) / activeQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>
  
          {/* Question Area */}
          <div className="p-6 md:p-8 flex-grow">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-relaxed">
              {question.question}
            </h2>
  
            <div className="space-y-4 mb-8">
              {question.options.map((option, index) => {
                let buttonStyle = "border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50 text-slate-700";
                let icon = null;
  
                if (isAnswered) {
                  if (index === question.correctAnswer) {
                    buttonStyle = "border-green-500 bg-green-50 text-green-800 ring-1 ring-green-500";
                    icon = <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />;
                  } else if (index === selectedOption) {
                    buttonStyle = "border-red-300 bg-red-50 text-red-800";
                    icon = <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />;
                  } else {
                    buttonStyle = "border-slate-100 bg-slate-50 text-slate-400 opacity-60";
                  }
                }
  
                return (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 md:p-5 rounded-2xl border-2 transition-all duration-200 flex justify-between items-center gap-4 ${buttonStyle} ${!isAnswered ? 'cursor-pointer hover:-translate-y-0.5 shadow-sm' : 'cursor-default'}`}
                  >
                    <span className="font-medium text-[15px] md:text-base leading-relaxed">{option}</span>
                    {icon}
                  </button>
                );
              })}
            </div>
  
            {/* Explanation Area */}
            {isAnswered && (
              <div className={`p-6 rounded-2xl border animate-in fade-in slide-in-from-bottom-4 duration-500 ${selectedOption === question.correctAnswer ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <h3 className={`font-bold mb-2 flex items-center gap-2 ${selectedOption === question.correctAnswer ? 'text-green-800' : 'text-red-800'}`}>
                  {selectedOption === question.correctAnswer ? <CheckCircle2 className="w-5 h-5"/> : <XCircle className="w-5 h-5" />}
                  {selectedOption === question.correctAnswer ? 'Correct!' : 'Incorrect'}
                </h3>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                  {question.explanation}
                </p>
              </div>
            )}
          </div>
  
          {/* Footer */}
          <div className="bg-slate-50 p-6 md:px-8 border-t border-slate-100 flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={!isAnswered}
              className={`flex items-center gap-2 font-bold py-3.5 px-8 rounded-xl transition-all duration-200 ${
                isAnswered 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg translate-y-0' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              {currentQuestion === activeQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
  
        </div>
      </div>
    );
  }

  return null;
}


