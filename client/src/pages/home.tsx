import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2, Zap, Target, BarChart3 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function Home() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock submission
    setTimeout(() => {
      console.log(values);
      setIsSubmitted(true);
      toast({
        title: "You're on the list.",
        description: "We'll be in touch shortly with your ICP identification.",
      });
    }, 1500);
  }

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
          <span className="font-display font-bold text-xl tracking-tight">Extensa</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/vision"><a className="hover:text-foreground transition-colors">Vision</a></Link>
          <a href="#process" className="hover:text-foreground transition-colors">Process</a>
        </nav>
        <Button variant="outline" className="font-medium hidden sm:flex rounded-none">
          Get Early Access
        </Button>
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
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 border border-green-200 bg-green-50/50 dark:bg-green-900/10 dark:border-green-900 rounded-none flex items-center gap-4"
                >
                  <div className="h-10 w-10 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center rounded-full">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">You're on the list</h3>
                    <p className="text-sm text-muted-foreground">Watch your inbox for your first 10 leads.</p>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="flex-grow">
                            <FormControl>
                              <Input 
                                placeholder="enter your email" 
                                className="h-12 bg-background/80 backdrop-blur-sm border-muted-foreground/20 focus:border-primary transition-all rounded-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        size="lg" 
                        disabled={form.formState.isSubmitting}
                        className="h-12 px-8 rounded-none font-medium"
                      >
                        {form.formState.isSubmitting ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                  <p className="text-xs text-muted-foreground pl-1">
                    Get your ICP identification + 10 free leads in 24 hours.
                  </p>
                </div>
              )}
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
          <p>&copy; 2025 Extensa AI Inc.</p>
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