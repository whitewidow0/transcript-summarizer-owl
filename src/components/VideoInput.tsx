import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface VideoInputProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

const VideoInput = ({ onSubmit, isLoading }: VideoInputProps) => {
  const [url, setUrl] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid YouTube URL",
        variant: "destructive",
      });
      return;
    }
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative group">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste YouTube URL here..."
          className="w-full px-6 py-4 bg-white bg-opacity-5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 backdrop-blur-sm"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50"
        >
          Summarize
        </button>
      </div>
    </form>
  );
};

export default VideoInput;