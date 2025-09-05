import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, DollarSign, Clock, TrendingDown } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "Burning Through Budget",
      description: "A single misconfigured training job can cost hundreds to thousands in GPU costs",
      stat: "$2,000+",
      statLabel: "Average waste per failed run"
    },
    {
      icon: Clock,
      title: "Delayed Deployments", 
      description: "Failed training runs delay model deployment by weeks, missing critical deadlines",
      stat: "2-4 weeks",
      statLabel: "Average deployment delay"
    },
    {
      icon: TrendingDown,
      title: "Resource Inefficiency",
      description: "ML engineers spend 60% of time on resource planning instead of model development",
      stat: "60%",
      statLabel: "Time wasted on planning"
    },
    {
      icon: AlertTriangle,
      title: "Training Failures",
      description: "Over 40% of training runs fail due to inadequate resource estimation",
      stat: "40%+",
      statLabel: "Failed training runs"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            The Hidden Cost of ML Training
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Machine learning engineers waste hundreds of hours and thousands of dollars 
            because they can't accurately estimate resource needs upfront.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card key={index} className="relative overflow-hidden bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-destructive/10">
                      <Icon className="h-6 w-6 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{problem.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {problem.description}
                      </p>
                      <div className="space-y-1">
                        <div className="text-2xl font-bold text-destructive">
                          {problem.stat}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {problem.statLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;