import { useState } from "react";
import VideoInput from "@/components/VideoInput";
import SummaryCard from "@/components/SummaryCard";
import LoadingSpinner from "@/components/LoadingSpinner";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState<any>(null);

  const handleSubmit = async (url: string) => {
    setIsLoading(true);
    // TODO: Implement API call here
    // For now, we'll simulate an API call
    setTimeout(() => {
      setSummary({
        mainTopic: "Sample Video Title",
        keyPoints: [
          "First key point about the video",
          "Second important takeaway",
          "Third significant insight",
        ],
        conclusion: "A brief conclusion about the video content."
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <div className="container px-4 py-16 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">
            YouTube Summary Generator
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform any YouTube video into a concise, easy-to-read summary powered by AI.
          </p>
        </div>

        <VideoInput onSubmit={handleSubmit} isLoading={isLoading} />

        {isLoading && (
          <div className="mt-12">
            <LoadingSpinner />
          </div>
        )}

        {summary && !isLoading && <SummaryCard summary={summary} />}
      </div>
    </div>
  );
};

export default Index;