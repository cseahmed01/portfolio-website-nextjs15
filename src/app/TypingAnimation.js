'use client'
import { useState, useEffect } from 'react';

export default function TypingAnimation({ skills }) {
  if (!skills || skills.length === 0) {
    return (
      <div className="text-heading-2 font-semibold text-primary dark:text-primary">
        Full Stack Developer
      </div>
    );
  }

  const [currentSkill, setCurrentSkill] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const skill = skills[skillIndex];
    let timeout;

    if (isTyping) {
      if (currentSkill.length < skill.length) {
        timeout = setTimeout(() => {
          setCurrentSkill(skill.slice(0, currentSkill.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (currentSkill.length > 0) {
        timeout = setTimeout(() => {
          setCurrentSkill(skill.slice(0, currentSkill.length - 1));
        }, 50);
      } else {
        setSkillIndex((prev) => (prev + 1) % skills.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentSkill, isTyping, skillIndex, skills]);

  return (
    <div className="text-heading-2 font-semibold text-primary dark:text-primary min-h-[2.5rem] flex items-center justify-center lg:justify-start">
      <span className="border-r-2 border-primary pr-2 mr-2 animate-pulse">
        {currentSkill}
      </span>
    </div>
  );
}