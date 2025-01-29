import React from 'react';

const AchievementCard = () => {
  const rankings = [
    {
      top: {
        number: "#1",
        location: "in M.P. State",
        rank: "#16 in India",
        detail: "IIRF Ranking, 2023"
      }
    },
    {
      top: {
        number: "#12",
        location: "in North Zone",
        detail: "IIRF Ranking, 2024"
      }
    },
    {
      top: {
        title: "India's Top 10",
        subtitle: "State Government Engineering & Technology Universities",
        detail: "India Higher Education Rankings 2022-23",
        footnote: "By Education World"
      }
    },
    {
      bottom: {
        title: "Winner of AIR Best Cllg",
        subtitle: "Sustainability Award",
        detail: "under Domestic Water",
        footnote: "Users Category"
      }
    },
    {
      bottom: {
        title: "University of the Year",
        subtitle: "(North)",
        detail: "Indian Education Congress",
        footnote: "& Awards (2023)"
      }
    },
    {
      bottom: {
        title: "India's State Govnt & the Greenest",
        subtitle: "Campus in the Country"
      }
    }
  ];

  return (
    <div className="relative min-h-[400px] text-white py-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/90 to-violet-900/5"></div>
      
      {/* Content */}
      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="mb-16 text-4xl font-bold text-center">RANKINGS</h2>
        
        {/* Grid Container */}
        
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {rankings.map((ranking, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Star Icon */}
              
              <div className="mb-4">
                <div className="flex items-center justify-center w-16 h-16">
                
                  <div className="text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              {ranking.top && (
                <div>
                  <div className="mb-1 text-3xl font-bold">{ranking.top.number}</div>
                  <div className="mb-1 text-lg">{ranking.top.location}</div>
                  {ranking.top.rank && <div className="mb-1 text-lg">{ranking.top.rank}</div>}
                  <div className="text-sm text-gray-300">{ranking.top.detail}</div>
                  {ranking.top.footnote && (
                    <div className="text-sm text-gray-300">{ranking.top.footnote}</div>
                  )}
                </div>
              )}
              


              
              {ranking.bottom && (
                <div>
                  <div className="mb-2 text-xl font-bold text-yellow-400">{ranking.bottom.title}</div>
                  <div className="mb-1 text-lg">{ranking.bottom.subtitle}</div>
                  {ranking.bottom.detail && (
                    <div className="text-sm text-gray-300">{ranking.bottom.detail}</div>
                  )}
                  {ranking.bottom.footnote && (
                    <div className="text-sm text-gray-300">{ranking.bottom.footnote}</div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

<hr />

export default AchievementCard;