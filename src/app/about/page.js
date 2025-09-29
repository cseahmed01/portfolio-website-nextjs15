import Image from 'next/image';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getAbout() {
  return await prisma.about.findFirst() || { content: 'About content not available.' }
}

export default async function About() {
  const about = await getAbout()
  return (
    <main className="min-h-screen bg-gradient-to-br from-accent/5 to-primary/5 dark:from-surface-dark dark:to-surface-dark">
      <div className="container-fluid py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-heading-1 font-bold text-text-primary dark:text-foreground mb-12 text-center animate-fade-in">
            About Me
          </h1>
          <div className="bg-surface dark:bg-surface-dark rounded-xl shadow-xl p-8 md:p-12 animate-scale-in">
            <div className="text-center mb-12">
              <div className="relative inline-block mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-30"></div>
                <Image
                  src="/images/nasim.jpg"
                  alt="Nasim Ahame"
                  width={192}
                  height={192}
                  className="rounded-full shadow-xl relative z-10"
                  priority
                />
              </div>
              <h2 className="text-heading-2 font-semibold text-text-primary dark:text-foreground mb-2">
                NASIM AHAMED
              </h2>
              <p className="text-body text-text-secondary dark:text-text-secondary">
                Programmer | Tech Enthusiast | Client
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About Me</h3>
                <div className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                  {about.content}
                </div>
              </div>

              <div className="animate-slide-in-left">
                <h3 className="text-heading-3 font-semibold text-text-primary dark:text-foreground mb-6">Skills</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-text-primary dark:text-foreground mb-3">Programming</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary px-3 py-1 rounded-full text-body-small font-medium">PHP</span>
                      <span className="bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent px-3 py-1 rounded-full text-body-small font-medium">JavaScript</span>
                      <span className="bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary px-3 py-1 rounded-full text-body-small font-medium">Python</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-text-primary dark:text-foreground mb-3">Web Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary px-3 py-1 rounded-full text-body-small font-medium">HTML</span>
                      <span className="bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent px-3 py-1 rounded-full text-body-small font-medium">CSS</span>
                      <span className="bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary px-3 py-1 rounded-full text-body-small font-medium">Bootstrap</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-text-primary dark:text-foreground mb-3">Frameworks & Libraries</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-body-small font-medium">CodeIgniter</span>
                      <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-body-small font-medium">Laravel</span>
                      <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-body-small font-medium">Django</span>
                      <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-200 px-3 py-1 rounded-full text-body-small font-medium">Express</span>
                      <span className="bg-lime-100 dark:bg-lime-900/30 text-lime-800 dark:text-lime-200 px-3 py-1 rounded-full text-body-small font-medium">React</span>
                      <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full text-body-small font-medium">Next.js</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-text-primary dark:text-foreground mb-3">Databases</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-200 px-3 py-1 rounded-full text-body-small font-medium">MySQL</span>
                      <span className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-200 px-3 py-1 rounded-full text-body-small font-medium">PostgreSQL</span>
                      <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-body-small font-medium">MongoDB</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-slide-in-right">
                <h3 className="text-heading-3 font-semibold text-text-primary dark:text-foreground mb-6">Experience</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="font-semibold text-text-primary dark:text-foreground">SOFTWARE ENGINEER</h4>
                    <p className="text-primary dark:text-primary">Biz Bangla Media Limited, Kawran Bazar</p>
                    <p className="text-body-small text-text-secondary dark:text-text-secondary">03/2021 - 04/2024</p>
                    <ul className="mt-3 text-text-secondary dark:text-text-secondary text-body-small space-y-1">
                      <li>• Update and maintain websites for security and performance</li>
                      <li>• Debug and resolve issues</li>
                      <li>• Manage Apache servers and optimize performance</li>
                      <li>• Develop and maintain React Native apps</li>
                      <li>• Collaborate across teams</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="font-semibold text-text-primary dark:text-foreground">SOFTWARE ENGINEER</h4>
                    <p className="text-accent dark:text-accent">ICE Technologies Limited, Uttara</p>
                    <p className="text-body-small text-text-secondary dark:text-text-secondary">05/2019 - 12/2020</p>
                    <ul className="mt-3 text-text-secondary dark:text-text-secondary text-body-small space-y-1">
                      <li>• Write reusable, standard code with documentation</li>
                      <li>• Participate in a full development lifecycle</li>
                      <li>• Maintain project documentation</li>
                      <li>• Deliver products with integrity</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-secondary pl-6">
                    <h4 className="font-semibold text-text-primary dark:text-foreground">PROGRAMMER</h4>
                    <p className="text-secondary dark:text-secondary">Digicon Technologies Limited, Mirpur</p>
                    <p className="text-body-small text-text-secondary dark:text-text-secondary">12/2017 - 05/2019</p>
                    <ul className="mt-3 text-text-secondary dark:text-text-secondary text-body-small space-y-1">
                      <li>• Develop reusable, documented code</li>
                      <li>• Ensure QMS-compliant documentation</li>
                      <li>• Analyze, design, and develop per SDLC</li>
                      <li>• Deliver products per requirements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Education</h3>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">B.Sc., Computer Science & Engineering</h4>
                  <p className="text-purple-600 dark:text-purple-400">United International University, Dhaka, BD</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">08/2016</p>
                </div>
              </div>

              <div className="animate-fade-in">
                <h3 className="text-heading-3 font-semibold text-text-primary dark:text-foreground mb-6">My Values</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-surface dark:bg-surface-dark rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-text-primary dark:text-foreground mb-3">Quality & Excellence</h4>
                    <p className="text-body text-text-secondary dark:text-text-secondary">I strive for excellence in every project, ensuring code quality, performance, and user satisfaction.</p>
                  </div>
                  <div className="p-6 bg-surface dark:bg-surface-dark rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-text-primary dark:text-foreground mb-3">Continuous Learning</h4>
                    <p className="text-body text-text-secondary dark:text-text-secondary">Technology evolves rapidly, and I commit to staying updated with the latest tools and best practices.</p>
                  </div>
                  <div className="p-6 bg-surface dark:bg-surface-dark rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-text-primary dark:text-foreground mb-3">Collaboration</h4>
                    <p className="text-body text-text-secondary dark:text-text-secondary">I believe great software is built through teamwork, clear communication, and shared vision.</p>
                  </div>
                  <div className="p-6 bg-surface dark:bg-surface-dark rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-text-primary dark:text-foreground mb-3">Problem Solving</h4>
                    <p className="text-body text-text-secondary dark:text-text-secondary">I enjoy tackling complex challenges and finding elegant solutions that create real value.</p>
                  </div>
                </div>
              </div>

              <div className="animate-scale-in">
                <h3 className="text-heading-3 font-semibold text-text-primary dark:text-foreground mb-6">Training</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-surface dark:bg-surface-dark rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-text-primary dark:text-foreground mb-2">CCNA</h4>
                    <p className="text-body-small text-text-secondary dark:text-text-secondary">Networking, routing, switching, troubleshooting</p>
                  </div>
                  <div className="text-center p-6 bg-surface dark:bg-surface-dark rounded-lg shadow-sm hover:shadow-md transition-shadow">
                     <h4 className="font-semibold text-text-primary dark:text-foreground mb-2">DevOps Capsule</h4>
                     <p className="text-body-small text-text-secondary dark:text-text-secondary">Linux, Docker, Kubernetes, CI/CD basics</p>
                   </div>
                   <div className="text-center p-6 bg-surface dark:bg-surface-dark rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-text-primary dark:text-foreground mb-2">MERN Stack</h4>
                    <p className="text-body-small text-text-secondary dark:text-text-secondary">MongoDB, Express, React, Node.js</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}