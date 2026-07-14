'use client';

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower businesses with cutting-edge technology solutions that drive growth and efficiency.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To become the leading ERP solution provider in South Asia, transforming how businesses operate.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Integrity, innovation, customer focus, and excellence in everything we do.',
  },
];

const team = [
  {
    name: 'Md. Hakaluki',
    role: 'CEO & Founder',
    description: 'Visionary leader with 15+ years of experience in enterprise software.',
    avatar: 'MH',
  },
  {
    name: 'Ashraful Alam',
    role: 'CTO',
    description: 'Technical architect with expertise in scalable enterprise systems.',
    avatar: 'AA',
  },
  {
    name: 'Sadia Rahman',
    role: 'Head of Operations',
    description: 'Operations expert ensuring smooth delivery and customer satisfaction.',
    avatar: 'SR',
  },
  {
    name: 'Md. Kamal Hossain',
    role: 'Lead Developer',
    description: 'Full-stack developer with passion for clean, efficient code.',
    avatar: 'KH',
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-950 dark:to-indigo-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Power International
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            Building the future of business management with innovative ERP solutions
          </p>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-slate-300">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold">10+</p>
              <p className="text-white/80">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-white/80">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-white/80">Team Members</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-white/80">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Meet Our <span className="text-blue-600 dark:text-blue-400">Team</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">{member.role}</p>
                  <p className="text-gray-600 dark:text-slate-300 text-sm mt-2">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}