import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, Cpu, Target, Cloud, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Training Time Prediction",
      description: "Get precise estimates from hours to days based on your model architecture and dataset size",
      badge: "AI-Powered",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: DollarSign,
      title: "Multi-Cloud Cost Analysis",
      description: "Compare training costs across AWS, GCP, and Azure to find the most cost-effective option",
      badge: "Multi-Provider",
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: Cpu,
      title: "Hardware Optimization",
      description: "Receive optimal GPU configurations and memory requirements for your specific workload",
      badge: "Smart Recommendations",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Hyperparameter Tuning",
      description: "Get data-driven hyperparameter recommendations to reduce training time and improve efficiency",
      badge: "Performance",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Cloud,
      title: "Resource Requirements",
      description: "Analyze VRAM, CPU cores, and storage needs before provisioning expensive cloud resources",
      badge: "Resource Planning",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Calculate energy consumption and carbon footprint to make environmentally conscious choices",
      badge: "Eco-Friendly",
      gradient: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="px-4 py-2">
            Core Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything You Need for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Smart ML Training</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform analyzes your ML codebase, model architecture, and dataset 
            to provide comprehensive insights before you start training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group relative overflow-hidden bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;