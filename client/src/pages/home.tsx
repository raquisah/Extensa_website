import { motion } from "framer-motion";
import { Zap, Target, BarChart3, Search, Users, MessageSquare, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { EmailForm, JoinWaitlistDialog } from "@/components/join-waitlist";
import { ICPChatMock, LeadListMock, ConnectMock, AnalyzeMock } from "@/components/ui-mocks";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern z-0 opacity-[0.5]" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Navigation */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4 text-xs md:text-sm font-medium z-30 relative">
        Get ICP identification + 10 ICPs details w/ LinkedIn and email addresses for free in 24hs
      </div>
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
        <div className="flex items-center gap-8">
          <Link href="/vision"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block">Vision</a></Link>
          <JoinWaitlistDialog>
            <Button variant="outline" className="font-medium hidden sm:flex rounded-none">
              Get Early Access
            </Button>
          </JoinWaitlistDialog>
        </div>
      </header>

      <main className="flex-grow relative z-20">
        <div className="container mx-auto px-6 pt-20 pb-24 max-w-5xl">
          
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start gap-8 mb-32"
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

          {/* Feature 1: Search */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32 border-t border-border/50 pt-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-10 h-10 bg-secondary flex items-center justify-center text-foreground mb-6 rounded-lg">
                <Search className="w-5 h-5" />
              </div>
              <div className="text-sm font-mono text-muted-foreground mb-2">01. Search</div>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Discovery Engine</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Connect your data sources, and let Extensa's AI analyze your network. We know you: via LinkedIn, we uncover high-potential partners that match your unique DNA.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Deep network analysis</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Behavioral pattern matching</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl blur-xl" />
              <ICPChatMock />
            </motion.div>
          </div>

          {/* Feature 2: Find */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32 border-t border-border/50 pt-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 md:order-1"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl blur-xl" />
              <LeadListMock />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="w-10 h-10 bg-secondary flex items-center justify-center text-foreground mb-6 rounded-lg">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-sm font-mono text-muted-foreground mb-2">02. Find</div>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Intelligent Matching</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Stop wasting time on manual searching. Extensa scores every interaction to identify which connections are ready to engage right now.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Real-time intent scoring</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Priority ranking system</li>
              </ul>
            </motion.div>
          </div>

          {/* Feature 3: Connects */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32 border-t border-border/50 pt-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-10 h-10 bg-secondary flex items-center justify-center text-foreground mb-6 rounded-lg">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-sm font-mono text-muted-foreground mb-2">03. Connects</div>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Automated Connection</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Connect at the perfect moment with AI-crafted messages that sound like you. Multi-channel sequences ensure you never miss an opportunity.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Personalized messaging</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Automated follow-ups</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl blur-xl" />
              <ConnectMock />
            </motion.div>
          </div>

          {/* Feature 4: Analyze */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32 border-t border-border/50 pt-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 md:order-1"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl blur-xl" />
              <AnalyzeMock />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="w-10 h-10 bg-secondary flex items-center justify-center text-foreground mb-6 rounded-lg">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-sm font-mono text-muted-foreground mb-2">04. Analyze & Improve</div>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Continuous Growth</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The engine gets smarter with every interaction. Track real-time performance metrics and let the AI refine your strategy for better results.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Conversion analytics</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Self-optimizing feedback loops</li>
              </ul>
            </motion.div>
          </div>

        </div>
      </main>
      
      <footer className="border-t border-border bg-background relative z-20">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>&copy; 2025 Extensa.app</p>
          <div className="flex gap-6">
            <Link href="/privacy"><a className="hover:text-foreground">Privacy</a></Link>
            <Link href="/terms"><a className="hover:text-foreground">Terms</a></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}