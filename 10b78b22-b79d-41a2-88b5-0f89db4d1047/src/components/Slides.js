import React, {useState, useEffect} from 'react';

function Slides({slides}) {
  const [idx, setIdx] = useState(0);
  const [content, setContent] = useState(slides[idx]);

  const handleReset = () => {
    setIdx(0);
    setContent(slides[idx]);
  };

  const handlePrev = () => {
    setIdx(idx - 1);
    setContent(slides[idx]);
  };

  const handleNext = () => {
    setIdx(idx + 1);
    setContent(slides[idx]);
  };

  useEffect(() => {
    setIdx(idx);
    setContent(slides[idx]);
  }, [idx, slides]);

    return (
      <div>
        <div id="navigation" className="text-center">
          <button
            data-testid="button-restart"
            className="small outlined"
            onClick={handleReset}
            disabled={idx === 0}
          >
            Restart
          </button>
          <button
            data-testid="button-prev"
            className="small"
            onClick={handlePrev}
            disabled={idx === 0}
          >
            Prev
          </button>
          <button
            data-testid="button-next"
            className="small"
            onClick={handleNext}
            disabled={idx === slides?.length - 1}
          >
            Next
          </button>
        </div>
        <div id="slide" className="card text-center">
          <h1 data-testid="title">{content?.title}</h1>
          <p data-testid="text">{content?.text}</p>
        </div>
      </div>
    );

}

export default Slides;
