import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { JoinWaitlistDialog } from "@/components/join-waitlist";

export default function Vision() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern z-0 opacity-[0.5]" />
      
      {/* Navigation */}
      <header className="relative z-20 container mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-xl">
                E
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Extensa</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/"><a className="hover:text-foreground transition-colors">Home</a></Link>
        </nav>
        <JoinWaitlistDialog>
          <Button variant="outline" className="font-medium hidden sm:flex rounded-none">
            Get Early Access
          </Button>
        </JoinWaitlistDialog>
      </header>

      <main className="flex-grow relative z-20">
        <div className="container mx-auto px-6 pt-12 pb-32 max-w-5xl">
          <Link href="/">
            <a className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </a>
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-medium mb-16">Our Vision</h1>

            <div className="grid md:grid-cols-12 gap-12 border-t border-border pt-12">
              <div className="md:col-span-4">
                <h2 className="text-xl font-display font-medium text-muted-foreground">The Bottleneck</h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-2xl md:text-3xl font-light leading-tight text-foreground">
                  Distribution is the bottleneck of the modern internet.
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground mt-6">
                  Great products die in obscurity because connecting with the right audience is manual, expensive, and imprecise. Founders spend more time shouting into the void than building what matters.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-12 border-t border-border pt-12 mt-12">
              <div className="md:col-span-4">
                <h2 className="text-xl font-display font-medium text-muted-foreground">The Solution</h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-2xl md:text-3xl font-light leading-tight text-foreground">
                  Algorithmic Growth Infrastructure.
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground mt-6">
                  Extensa is building the infrastructure to solve this. An AI engine that doesn't just find leads, but understands the fundamental DNA of your ideal customer and routes your value directly to them. 
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground mt-6">
                  No manual searching. No guesswork. Just pure, algorithmic growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="border-t border-border bg-background relative z-20">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>&copy; 2025 Extensa.app</p>
          <div className="flex gap-6">
            <Link href="/privacy"><a className="hover:text-foreground">Privacy</a></Link>
            <Link href="/terms"><a className="hover:text-foreground">Terms</a></Link>
            <a href="#" className="hover:text-foreground">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}