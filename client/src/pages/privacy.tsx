import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
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
          <Link href="/vision"><a className="hover:text-foreground transition-colors">Vision</a></Link>
        </nav>
        <Button variant="outline" className="font-medium hidden sm:flex rounded-none">
          Get Early Access
        </Button>
      </header>

      <main className="flex-grow relative z-20">
        <div className="container mx-auto px-6 pt-12 pb-32 max-w-3xl">
          <Link href="/">
            <a className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </a>
          </Link>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h1 className="text-4xl font-display font-medium mb-8">Privacy Policy</h1>
            
            <p className="text-muted-foreground mb-6">Last updated: November 27, 2025</p>

            <section className="mb-8">
              <h2 className="text-xl font-display font-medium mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                At Extensa AI Inc. ("Extensa", "we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-medium mb-4">2. The Data We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                <li>Identity Data includes first name, last name, username or similar identifier.</li>
                <li>Contact Data includes email address and telephone numbers.</li>
                <li>Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                <li>Usage Data includes information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-medium mb-4">3. How We Use Your Data</h2>
              <p className="text-muted-foreground">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4 mt-4">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal or regulatory obligation.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-medium mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-display font-medium mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this privacy policy or our privacy practices, please contact us at support@extensa.ai.
              </p>
            </section>
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