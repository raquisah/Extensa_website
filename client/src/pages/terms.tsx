import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
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
              <span className="font-display font-bold text-xl tracking-tight">Extensa.app</span>
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
            <h1 className="text-4xl font-display font-medium mb-8">Terms of Service</h1>
            
            <p className="text-muted-foreground mb-6">Last updated: November 27, 2025</p>

            <section className="mb-8">
              <h2 className="text-xl font-display font-medium mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Extensa AI Inc. ("Company", "we", "us", or "our"), concerning your access to and use of the Extensa website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-medium mb-4">2. Intellectual Property Rights</h2>
              <p className="text-muted-foreground">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-medium mb-4">3. User Representations</h2>
              <p className="text-muted-foreground mb-4">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Use.</li>
                <li>You are not a minor in the jurisdiction in which you reside.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-medium mb-4">4. Prohibited Activities</h2>
              <p className="text-muted-foreground">
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-display font-medium mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
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