import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your HealthCare Assistant, focusing on health and Ayurveda. How can I help you today? 👋", sender: "bot" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = 'AIzaSyA_lYY7xjeJ2Yg40rBgz7F6Hj-9Toaxpns'; //GEMINI API KEY

  const doctorContacts = [
    { name: "Dr. Advay Anand (General Physician)", phone: "+91 6386771480" },
    { name: "Dr. Priya Singh (Ayurveda Specialist)", phone: "+91 98765 43210" },
    { name: "Dr. Kritika Sharma (Ayurveda)", phone: "+91 91234 56789" },
    { name: "Dr. Tanish Gupta (Consultant)", phone: "+91 99887 76655" }
  ];

  const handleUserInput = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    // Check for medical consultation intent
    const lowerInput = input.toLowerCase();
    if (
      lowerInput.includes('consult') ||
      lowerInput.includes('doctor') ||
      lowerInput.includes('medical') ||
      lowerInput.includes('appointment')
    ) {
      // Show doctor numbers and a button to redirect
      const doctorList = doctorContacts.map(
        doc => `**${doc.name}**\n📞 [${doc.phone}](tel:${doc.phone.replace(/\s+/g, '')})`
      ).join('\n\n');
      const consultMsg = `Here are some available doctors you can contact for a medical consultation:\n\n${doctorList}\n\n[Click here to book a medical consultation.](#book-consultation)`;
      setMessages(prev => [...prev, { text: consultMsg, sender: 'bot', isConsult: true }]);
      setIsLoading(false);
      return;
    }

    try {
      const prompt = `You are a HealthCare Assistant specializing in health and Ayurveda. Respond to the user's query while strictly staying within the domain of health and redefining health with Ayurveda keep your answers\n short and logical. Also be friendly with user greetings. User query: ${input}`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        })
      });
      const data = await response.json();
      if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
        const botMessage = { text: data.candidates[0].content.parts[0].text, sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        const errorMessage = { text: "Sorry, I couldn't process your request within the health and Ayurveda scope. Please try again later.", sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    } catch (error) {
      console.error('Error fetching response from Gemini:', error);
      const errorMessage = { text: "Sorry, I couldn't process your request. Please try again later.", sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const chatBody = document.getElementById('chatBody');
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }, [messages]);

  return (
    <div>
      <div className="chat-icon" onClick={toggleChat}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2l-.6.6L4 17.2V4h16v12z"/>
        </svg>
      </div>

      {isOpen && (
        <div className="chat-window" style={{ height: '400px', maxHeight: '60vh' }}>
          <div className="chat-header" style={{ position: 'relative' }}>
            HealthCare Assistant (Ayurveda)
            <FontAwesomeIcon
              icon={faTimesCircle}
              onClick={toggleChat}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                color: 'white'
              }}
            />
          </div>
          <div className="chat-body" id="chatBody" style={{ height: 'calc(100% - 100px)' }}>
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                <div className="message-container">
                  <div className="message-row">
                    <div className="message">
                      <ReactMarkdown
                        components={{
                          a: ({ href, children }) => {
                            if (href === '#book-consultation') {
                              return (
                                <span
                                  style={{ color: '#982cca', cursor: 'pointer', textDecoration: 'underline' }}
                                  onClick={() => window.location.href = '/services/appointment'}
                                >
                                  {children}
                                </span>
                              );
                            }
                            return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
                          }
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chat-message bot">
                <div className="message-container">
                  <div className="message-row">
                    <div className="message loading">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleUserInput()}
              placeholder="Type a message..."
            />
            <button className="send-button" onClick={handleUserInput}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
