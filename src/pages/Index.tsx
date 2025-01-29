import { useState } from "react";
import VideoInput from "@/components/VideoInput";
import SummaryCard from "@/components/SummaryCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState<any>(null);
  const { toast } = useToast();

  const handleSubmit = async (url: string) => {
    setIsLoading(true);
    try {
      // Mock API call for now - replace with actual API integration
      const response = await fetch('https://api.example.com/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate summary');
      }

      // Simulated response for now
      setTimeout(() => {
        setSummary({
          mainTopic: "Understanding React Hooks",
          keyPoints: [
            "Hooks allow function components to use state and lifecycle features",
            "useState is the most basic Hook for managing component state",
            "useEffect handles side effects in function components",
            "Custom Hooks enable reuse of stateful logic between components"
          ],
          conclusion: "React Hooks provide a more direct way to use state and side effects in function components, making the code cleaner and more reusable."
        });
        setIsLoading(false);
      }, 2000);

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate summary. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white">
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/30 blur-[100px] animate-pulse-subtle"></div>
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/20 blur-[80px] animate-pulse-subtle delay-700"></div>
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/25 blur-[90px] animate-pulse-subtle delay-1000"></div>
          </div>
        </div>

        {/* Content */}
        <div className="container relative px-4 py-16 mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              YouTube Summary Generator
            </h1>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto opacity-90">
              Transform any YouTube video into a concise, easy-to-read summary powered by AI.
            </p>
          </div>

          <div className="relative z-10 backdrop-blur-sm">
            <VideoInput onSubmit={handleSubmit} isLoading={isLoading} />

            {isLoading && (
              <div className="mt-12">
                <LoadingSpinner />
              </div>
            )}

            {summary && !isLoading && <SummaryCard summary={summary} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;