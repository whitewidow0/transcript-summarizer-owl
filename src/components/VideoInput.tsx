import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
      <div className="relative group animate-fade-up">
        <div className="p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl">
          <div className="flex gap-2">
            <Input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste YouTube URL here..."
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-white/20 hover:bg-white/30 text-white border-0"
            >
              Summarize
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default VideoInput;