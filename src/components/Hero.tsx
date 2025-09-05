import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="px-4 py-2">
            🚀 Eliminate ML Training Guesswork
          </Badge>
          
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Predict ML Training Costs
              <br />
              Before You Hit Run
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stop wasting thousands on failed training runs. Get precise estimates for training time, 
              compute costs, and resource requirements by analyzing your codebase automatically.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button variant="hero" size="lg" className="gap-2">
              <Play className="h-5 w-5" />
              Start Free Analysis
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="h-5 w-5" />
              View on GitHub
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-12 text-sm text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">70%</div>
              <div>Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ai-accent">10x</div>
              <div>Faster Estimation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">95%</div>
              <div>Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;