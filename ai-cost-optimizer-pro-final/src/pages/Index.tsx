
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Sparkles, TrendingDown, DollarSign, Brain, Zap, ExternalLink } from "lucide-react";

const Index = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "assistant", 
      content: "Hello! I'm your AI Cost Optimization Advisor. I help enterprise teams optimize costs through strategic AI implementation. How can I assist you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on your query, I can help you identify which tasks can be automated with AI to reduce operational costs by 30-40%. Would you like me to analyze your specific workflows?",
        "For optimal cost efficiency, I recommend considering GPT-4 for complex reasoning tasks and GPT-3.5 for simpler operations. This hybrid approach can reduce costs by up to 60% while maintaining quality.",
        "I can help you calculate the ROI of implementing AI agents in your organization. Typically, enterprises see 3-5x return on investment within the first year.",
        "Let me analyze your use case and recommend the most cost-effective LLM options, considering factors like latency, accuracy, and pricing models."
      ];

      const assistantMessage = {
        id: messages.length + 2,
        type: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)] + "\n\nFor a more detailed analysis and personalized recommendations, try our full AI Cost Optimizer Pro Agent."
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const features = [
    { icon: Brain, title: "AI Task Automation", description: "Identify automatable tasks to reduce costs" },
    { icon: TrendingDown, title: "Cost Optimization", description: "Optimize AI agent operational costs" },
    { icon: DollarSign, title: "ROI Calculator", description: "Calculate implementation and inference costs" },
    { icon: Zap, title: "LLM Selection", description: "Choose optimal models for cost-quality balance" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI Cost Optimizer Pro Agent
              </h1>
              <p className="text-sm text-muted-foreground">for enterprises</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Hero Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-center space-y-6">
              <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700 border-0">
                Enterprise AI Cost Optimization
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Optimize your AI costs with
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}intelligent insights
                </span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We built an AI Cost Optimization Advisor Agent that helps enterprise teams by acting as 
                the agent architect - a consultant to optimize costs for the organization through AI.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://studio.lyzr.ai/agent/685d07dd656af689f82ff2a3', '_blank')}
              >
                Get Started
              </Button>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://youtu.be/T2_OquhBNEw?si=mDVezuaYpnG9h-uT', '_blank')}
              >
                Watch Demo
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                        <p className="text-sm text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Chat Interface */}
            <Card className="h-[500px] flex flex-col shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0 flex-1 flex flex-col overflow-hidden">
                {/* Messages with ScrollArea */}
                <ScrollArea className="flex-1 h-full">
                  <div className="p-4 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${
                          message.type === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        {message.type === "assistant" && (
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                        )}
                        <div
                          className={`max-w-[85%] sm:max-w-[80%] md:max-w-[75%] p-3 sm:p-4 rounded-xl shadow-sm break-words ${
                            message.type === "user"
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                              : "bg-slate-100 text-slate-900"
                          }`}
                        >
                          <div className="whitespace-pre-line text-sm leading-relaxed break-words">
                            {message.content}
                          </div>
                          {message.type === "assistant" && message.id > 1 && (
                            <div className="mt-3 pt-3 border-t border-slate-200">
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs w-full sm:w-auto"
                                onClick={() => window.open('https://studio.lyzr.ai/agent/685d07dd656af689f82ff2a3', '_blank')}
                              >
                                Try Full Agent <ExternalLink className="w-3 h-3 ml-1" />
                              </Button>
                            </div>
                          )}
                        </div>
                        {message.type === "user" && (
                          <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <User className="w-4 h-4 text-slate-600" />
                          </div>
                        )}
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex gap-3 justify-start">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-slate-100 p-3 rounded-xl">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                {/* Input */}
                <div className="p-4 border-t bg-white">
                  <div className="flex gap-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask about AI cost optimization strategies..."
                      onKeyPress={(e) => e.key === "Enter" && handleSend()}
                      className="flex-1 bg-white border-purple-300 focus:border-purple-500 focus:ring-purple-500 focus:ring-2 focus:ring-offset-2 text-slate-900 placeholder:text-slate-500"
                      disabled={isLoading}
                    />
                    <Button 
                      onClick={handleSend} 
                      disabled={!input.trim() || isLoading}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex-shrink-0"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <h3 className="font-semibold mb-4 text-slate-900">Common Challenges We Address</h3>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Which tasks can AI automate to free up human time, resources and reduce costs?</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Which functions across the organizations can we leverage AI and save costs?</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>How to optimize costs of AI agents?</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>What agent actions consume credits and costs?</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Which LLM should we use for our use case - balancing cost, latency, and quality?</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <h3 className="font-semibold mb-4 text-slate-900">Who Benefits</h3>
              <div className="space-y-2 text-sm">
                <Badge variant="outline">AI Developers</Badge>
                <Badge variant="outline">Product Managers</Badge>
                <Badge variant="outline">Tech Leads</Badge>
                <Badge variant="outline">Senior Decision-makers</Badge>
              </div>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Our Agent helps in providing clarity on AI architecture, selecting the right LLMs, 
                calculating ROI, estimating implementation and inference costs, and developing 
                financial literacy around the total cost and value of deploying AI agents.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-slate-50 to-slate-100 border-slate-200 shadow-lg">
              <h3 className="font-semibold mb-2 text-slate-900">Try the Agent</h3>
              <p className="text-sm text-slate-600 mb-4">
                Experience the full power of our AI Cost Optimizer Pro Agent
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={() => window.open('https://studio.lyzr.ai/agent/685d07dd656af689f82ff2a3', '_blank')}
              >
                Launch Agent Studio
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white/90 backdrop-blur-sm mt-16 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-slate-600 space-y-1">
            <p>© 2025 Team Real And Ready</p>
            <p>Made with <span className="text-red-500">❤</span> by Shivangi</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
