interface SummaryCardProps {
  summary: {
    mainTopic?: string;
    keyPoints?: string[];
    conclusion?: string;
  };
}

const SummaryCard = ({ summary }: SummaryCardProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 animate-fade-up">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-xl">
        {summary.mainTopic && (
          <div className="mb-6">
            <h3 className="text-sm uppercase tracking-wider text-purple-200/70 mb-2">Main Topic</h3>
            <p className="text-xl font-medium text-white">{summary.mainTopic}</p>
          </div>
        )}
        
        {summary.keyPoints && summary.keyPoints.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm uppercase tracking-wider text-purple-200/70 mb-2">Key Points</h3>
            <ul className="space-y-3">
              {summary.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white/20 text-white text-sm flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-white/90">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {summary.conclusion && (
          <div>
            <h3 className="text-sm uppercase tracking-wider text-purple-200/70 mb-2">Conclusion</h3>
            <p className="text-white/90">{summary.conclusion}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryCard;