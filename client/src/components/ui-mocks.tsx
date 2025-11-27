import { motion } from "framer-motion";
import { Search, User, BarChart2, MessageSquare, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const ICPChatMock = () => {
  return (
    <div className="w-full max-w-sm mx-auto bg-card border border-border shadow-xl rounded-xl overflow-hidden">
      <div className="bg-muted/30 p-3 border-b border-border flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
        <div className="text-[10px] text-muted-foreground font-mono ml-2">analysis_engine.tsx</div>
      </div>
      <div className="p-4 space-y-4 font-mono text-xs">
        <div className="flex gap-3">
          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <div className="w-3 h-3 bg-primary rounded-full" />
          </div>
          <div className="bg-muted/50 p-3 rounded-lg rounded-tl-none text-muted-foreground">
            Analyzing 1st, 2nd, and 3rd degree connections for "SaaS Founders"...
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <div className="w-3 h-3 bg-primary rounded-full" />
          </div>
          <div className="space-y-2 bg-muted/50 p-3 rounded-lg rounded-tl-none w-full">
            <div className="text-foreground font-medium">Pattern Identified</div>
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle2 className="w-3 h-3" />
              <span>High overlap in "FinTech" sector</span>
            </div>
            <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-primary" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LeadListMock = () => {
  const leads = [
    { name: "Elena R.", role: "VP Growth", score: 98 },
    { name: "Marcus J.", role: "Founder", score: 94 },
    { name: "Sarah K.", role: "Head of Sales", score: 89 },
  ];

  return (
    <div className="w-full max-w-sm mx-auto bg-card border border-border shadow-xl rounded-xl overflow-hidden">
      <div className="p-4 border-b border-border flex justify-between items-center">
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">High Intent Matches</div>
        <BarChart2 className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="divide-y divide-border">
        {leads.map((lead, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-3 flex items-center justify-between hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-medium">
                {lead.name[0]}
              </div>
              <div>
                <div className="text-sm font-medium">{lead.name}</div>
                <div className="text-[10px] text-muted-foreground">{lead.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-16 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: `${lead.score}%` }} />
              </div>
              <div className="text-xs font-mono font-medium text-green-600 dark:text-green-400">{lead.score}%</div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="p-3 bg-muted/30 text-center">
        <div className="text-[10px] text-muted-foreground hover:text-foreground cursor-pointer transition-colors flex items-center justify-center gap-1">
          View all 10 leads <ArrowUpRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};
