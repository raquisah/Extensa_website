import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export function EmailForm({ 
  compact = false,
  showSuccessMessage = true,
  placeholder = "enter your email",
  buttonText = "Join Waitlist",
  className = "",
}: { 
  compact?: boolean;
  showSuccessMessage?: boolean;
  placeholder?: string;
  buttonText?: string;
  className?: string;
}) {
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

  if (isSubmitted && showSuccessMessage) {
    return (
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
    );
  }

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <Input 
                    placeholder={placeholder}
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
                {buttonText} <ArrowRight className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      </Form>
      {!compact && (
        <p className="text-xs text-muted-foreground pl-1">
          Get your ICP identification + 10 free leads in 24 hours.
        </p>
      )}
    </div>
  );
}

export function JoinWaitlistDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-none border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Join the Waitlist</DialogTitle>
        </DialogHeader>
        <div className="py-6">
          <p className="text-muted-foreground mb-6">
            Get early access to Extensa.app and receive your complimentary ICP analysis.
          </p>
          <EmailForm compact buttonText="Join Now" />
        </div>
      </DialogContent>
    </Dialog>
  );
}