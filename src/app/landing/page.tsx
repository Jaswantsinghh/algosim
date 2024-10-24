"use client"
import BubbleSortPreview from '@/components/landing/BubbleSortPreview';
import ParticleBackground from '@/components/landing/ParticleBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ChevronRight, Code, GitBranch, Play } from 'lucide-react';
import Link from 'next/link';


function Landing() {
  return (
    <main className="flex-1">
   <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary text-primary-foreground overflow-hidden">
          <ParticleBackground />
          <div className="px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to AlgoSim
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="mx-auto max-w-[700px] text-lg md:text-xl text-primary-foreground/80">
                  An Open Source Algorithm Simulator with Interactive Tutorials
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-x-4"
              >
                <Button asChild size="lg" variant="secondary">
                  <Link href="/get-started">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className='text-black'>
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Features
          </h2>
          <div className="grid gap-6 items-center md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Visualizations</CardTitle>
                <Play className="w-8 h-8 mb-2 text-primary" />
              </CardHeader>
              <CardContent>
                <p>
                  Watch algorithms unfold step-by-step with our interactive
                  visualizations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Multiple Algorithms</CardTitle>
                <GitBranch className="w-8 h-8 mb-2 text-primary" />
              </CardHeader>
              <CardContent>
                <p>
                  Explore a wide range of algorithms, from sorting to graph
                  traversal.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Code Integration</CardTitle>
                <Code className="w-8 h-8 mb-2 text-primary" />
              </CardHeader>
              <CardContent>
                <p>
                  See the actual code alongside the visualization for better
                  understanding.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <BubbleSortPreview />
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Visualize Your Algorithms?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Join AlgoSim today and transform the way you understand and
                learn algorithms.
              </p>
            </div>
            <div className="space-x-4">
              <Button>
                Get Started <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Landing;
