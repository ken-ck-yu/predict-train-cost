import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Code, Cloud, Zap, ArrowRight } from "lucide-react";

const Integrations = () => {
  const integrations = [
    {
      icon: Github,
      title: "GitHub Pull Requests",
      description: "Automatic cost analysis on every PR with detailed reports",
      status: "Available",
      features: ["PR Comments", "Cost Diff", "Auto-Check"]
    },
    {
      icon: Code,
      title: "VS Code Extension",
      description: "Real-time estimates directly in your development environment",
      status: "Available", 
      features: ["Inline Estimates", "Quick Analysis", "Cost Warnings"]
    },
    {
      icon: Cloud,
      title: "REST API",
      description: "Integrate cost estimation into your custom ML workflows",
      status: "Available",
      features: ["RESTful API", "Webhooks", "Batch Analysis"]
    },
    {
      icon: Zap,
      title: "Python SDK", 
      description: "Native Python integration for seamless workflow automation",
      status: "Coming Soon",
      features: ["Native Integration", "CLI Tools", "Jupyter Support"]
    }
  ];

  return (
    <section id="integrations" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="px-4 py-2">
            Integrations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Fits Into Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Existing Workflow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seamlessly integrate Teemo-Ops into your development environment 
            with our comprehensive set of tools and APIs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <Card key={index} className="group bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{integration.title}</CardTitle>
                    </div>
                    <Badge 
                      variant={integration.status === "Available" ? "default" : "secondary"}
                      className={integration.status === "Available" ? "bg-success text-white" : ""}
                    >
                      {integration.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {integration.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {integration.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group-hover:bg-primary group-hover:text-white transition-colors"
                    disabled={integration.status !== "Available"}
                  >
                    {integration.status === "Available" ? "Get Started" : "Notify Me"}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Custom Enterprise Integration
              </h3>
              <p className="text-muted-foreground mb-6">
                Need a custom integration for your ML infrastructure? 
                Our team can help you build tailored solutions.
              </p>
              <Button variant="hero" size="lg">
                Contact Sales
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Integrations;