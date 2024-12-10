import React from 'react';

const App = () => {
  const technologyCardData = {
    title: 'Technologies',
    keyValuePairs: [
      { key: 'Front End', value: ['React.js'] },
      { key: 'Backend', value: ['Node.js', 'Express for server side logic'] },
      { key: 'Database rereer', value: ['MongoDB for product data', 'Postgres for user data'] },
      { key: 'APIs', value: ['RESTful APIs for communication'] },
    ],
    imageUrl: 'data:image;base64,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',
  };

  const highlightText = (text) => {
    return text.split('(').map((part, i) =>
      i === 1 ? (
        <span key={i} className="text-[#DC3545]">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const ProjectOverviewCard = ({ title, keyValuePairs, imageUrl, onViewAll }) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-[575px] h-[260px] flex flex-col">
        {/* Header */}
        <div className="relative p-4 flex items-center">
          <img src={imageUrl} alt="Logo" className="w-auto h-7 object-cover mr-4" />
          <h2 className="text-lg font-bold text-black">{title}</h2>
          {
            onViewAll && (
            <button
              onClick={onViewAll}
              className="absolute top-4 right-4 text-[#172B9E] text-[18px] font-bold px-3 py-1 rounded-md hover:bg-blue-100 transition"
            >
              View All
            </button>
          )}
        </div>

        {/* Key-Value Pairs */}
        <div className="p-4 bg-red-700 flex-grow flex flex-col justify-between">
          <div className="space-y-2 bg-green-600">
            {
            keyValuePairs.map((pair, index) => (
              <div key={index} className="flex bg-pink-700">
                {/* Key */}
                <span style={{display:'flex',flexDirection:'row'}}>
                  <h3 className="text-[17px] font-semibold text-[#444A61] w-[150px]">
                    {pair.key} 
                    {/* <span>:</span> */}
                  </h3>
                  :
                </span>
                {/* : */}
                {/* <p>:</p> */}
                {/* Value */}
                <p className="text-[17px] px-2 text-[#7E7E80]">
                  {Array.isArray(pair.value) ? (
                    pair.value.map((item, idx) => (
                      <React.Fragment key={idx}>
                        {highlightText(item)}
                        {idx < pair.value.length - 1 && ', '}
                      </React.Fragment>
                    ))
                  ) : (
                    highlightText(pair.value)
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const handleViewAll = () => {
    alert('View All clicked!');
  };

  return (
    <div className="p-8">
      <ProjectOverviewCard
        title={technologyCardData.title}
        keyValuePairs={technologyCardData.keyValuePairs}
        imageUrl={technologyCardData.imageUrl}
        onViewAll={handleViewAll}
      />
    </div>
  );
};

export default App;
