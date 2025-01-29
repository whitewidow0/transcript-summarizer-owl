import { useState } from "react";
import VideoInput from "@/components/VideoInput";
import SummaryCard from "@/components/SummaryCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState<any>(null);
  const { toast } = useToast();

  const extractVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleSubmit = async (url: string) => {
    setIsLoading(true);
    const videoId = extractVideoId(url);
    
    if (!videoId) {
      toast({
        title: "Invalid URL",
        description: "Could not extract video ID from the provided URL",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // For demonstration, generate a mock summary
    // In production, this would make an actual API call
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSummary({
        mainTopic: "Demo Summary for Video " + videoId,
        keyPoints: [
          "This is a demonstration of the summary feature",
          "The actual API integration needs to be implemented",
          "You can replace this with real API calls to your backend",
          "The video ID extracted is: " + videoId
        ],
        conclusion: "This is a placeholder summary. To get real summaries, you'll need to implement the backend API integration."
      });

      toast({
        title: "Summary Generated",
        description: "Demo summary has been created successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate summary. Please try again.",
        variant: "destructive",
      });
      console.error("Error generating summary:", error);
    } finally {
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