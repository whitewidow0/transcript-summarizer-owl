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
      <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-xl p-8 border border-gray-200">
        {summary.mainTopic && (
          <div className="mb-6">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Main Topic</h3>
            <p className="text-xl font-medium">{summary.mainTopic}</p>
          </div>
        )}
        
        {summary.keyPoints && summary.keyPoints.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Key Points</h3>
            <ul className="space-y-2">
              {summary.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-900 text-white text-sm mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {summary.conclusion && (
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Conclusion</h3>
            <p className="text-gray-700">{summary.conclusion}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryCard;