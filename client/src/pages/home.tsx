import { motion } from "framer-motion";
import { Zap, Target, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { EmailForm, JoinWaitlistDialog } from "@/components/join-waitlist";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern z-0 opacity-[0.5]" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Navigation */}
      <header className="relative z-20 container mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-xl">
            E
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Extensa.app</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/vision"><a className="hover:text-foreground transition-colors">Vision</a></Link>
        </nav>
        <JoinWaitlistDialog>
          <Button variant="outline" className="font-medium hidden sm:flex rounded-none">
            Get Early Access
          </Button>
        </JoinWaitlistDialog>
      </header>

      <main className="flex-grow relative z-20">
        <div className="container mx-auto px-6 pt-20 pb-32 max-w-5xl">
          
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start gap-8 mb-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-background/50 backdrop-blur-sm text-xs font-medium tracking-wide uppercase text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Accepting Early Access
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[0.95] tracking-tighter text-foreground">
              We help your <br />
              <span className="text-muted-foreground">company grow.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              The AI distribution engine that identifies your Ideal Customer Profile and delivers high-intent leads in 24 hours.
            </p>

            <div className="w-full max-w-md mt-4">
              <EmailForm />
            </div>
          </motion.div>

          {/* Value Props / Minimal Grid */}
          <div className="grid md:grid-cols-3 gap-px bg-border/50 border border-border/50">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "ICP Identification",
                desc: "AI analyzes your best customers to build a precise profile of who buys next."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "24-Hour Turnaround",
                desc: "From sign-up to actionable data in one day. Speed is our currency."
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "10 High-Intent Leads",
                desc: "Start with a sample of 10 verifed leads matching your exact criteria."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
                className="bg-background p-8 md:p-10 flex flex-col gap-4 hover:bg-secondary/20 transition-colors"
              >
                <div className="w-10 h-10 bg-secondary flex items-center justify-center text-foreground mb-2">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium font-display">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
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
