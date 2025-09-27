import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-black dark:to-black">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Me
          </h1>
          <div className="bg-white dark:bg-black rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <Image
                src="/images/nasim.jpg"
                alt="Nasim Ahame"
                width={192}
                height={192}
                className="rounded-full shadow-lg mx-auto mb-4"
                priority
              />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                NASIM AHAMED
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Programmer | Tech Enthusiast | Client
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About Me</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I am a Back-end Developer skilled in PHP, JavaScript, Python, MySQL, and PostgreSQL. I have experience with frameworks like Laravel, CodeIgniter, Django and Next.js. I am good at designing and improving databases, working in Linux, and have knowledge of frontend, CI/CD, and deployment. I enjoy building software that is fast, reliable, and useful for users.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Programming</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">PHP</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">JavaScript</span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Python</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Web Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">HTML</span>
                      <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full text-sm">CSS</span>
                      <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">Bootstrap</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Frameworks & Libraries</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">CodeIgniter</span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm">Laravel</span>
                      <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-sm">Django</span>
                      <span className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 px-3 py-1 rounded-full text-sm">Express</span>
                      <span className="bg-lime-100 dark:bg-lime-900 text-lime-800 dark:text-lime-200 px-3 py-1 rounded-full text-sm">React</span>
                      <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full text-sm">Next.js</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Databases</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 px-3 py-1 rounded-full text-sm">MySQL</span>
                      <span className="bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                      <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm">MongoDB</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Experience</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">SOFTWARE ENGINEER</h4>
                    <p className="text-indigo-600 dark:text-indigo-400">Biz Bangla Media Limited, Kawran Bazar</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">03/2021 - 04/2024</p>
                    <ul className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Update and maintain websites for security and performance</li>
                      <li>• Debug and resolve issues</li>
                      <li>• Manage Apache servers and optimize performance</li>
                      <li>• Develop and maintain React Native apps</li>
                      <li>• Collaborate across teams</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">SOFTWARE ENGINEER</h4>
                    <p className="text-green-600 dark:text-green-400">ICE Technologies Limited, Uttara</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">05/2019 - 12/2020</p>
                    <ul className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Write reusable, standard code with documentation</li>
                      <li>• Participate in a full development lifecycle</li>
                      <li>• Maintain project documentation</li>
                      <li>• Deliver products with integrity</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">PROGRAMMER</h4>
                    <p className="text-blue-600 dark:text-blue-400">Digicon Technologies Limited, Mirpur</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">12/2017 - 05/2019</p>
                    <ul className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
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

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Training</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 dark:bg-black rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white">CCNA</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Networking, routing, switching, troubleshooting</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-black rounded-lg">
                     <h4 className="font-semibold text-gray-900 dark:text-white">DevOps Capsule</h4>
                     <p className="text-sm text-gray-600 dark:text-gray-300">Linux, Docker, Kubernetes, CI/CD basics</p>
                   </div>
                   <div className="text-center p-4 bg-gray-50 dark:bg-black rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white">MERN Stack</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">MongoDB, Express, React, Node.js</p>
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