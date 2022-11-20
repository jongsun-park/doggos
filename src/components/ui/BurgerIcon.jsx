import styled from "styled-components";
// https://codepen.io/ainalem/pen/GeMqdP

const BurgerIcon = ({ active = false, setActive = {} }) => {
  return (
    <IconContainer>
      <svg>
        <defs>
          <filter id="gooeyness">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="2.2"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooeyness"
            />
            <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div className="plates">
        <div
          className={`plate plate4 ${active ? "active" : ""}`}
          onClick={() => setActive((prev) => !prev)}
        >
          <svg
            className="burger"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className="line line1" d="M 50,35 H 30" />
            <path className="line line2" d="M 50,35 H 70" />
            <path className="line line3" d="M 50,50 H 30" />
            <path className="line line4" d="M 50,50 H 70" />
            <path className="line line5" d="M 50,65 H 30" />
            <path className="line line6" d="M 50,65 H 70" />
          </svg>
          <svg
            className="x"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className="line" d="M 34,32 L 66,68" />
            <path className="line" d="M 66,32 L 34,68" />
          </svg>
        </div>
      </div>
    </IconContainer>
  );
};

const IconContainer = styled.div`
  cursor: pointer;
  svg {
    height: 80px;
    position: absolute;
    width: 80px;
  }
  .plates {
    display: flex;
    flex-wrap: wrap;
    max-height: 160px;
    // width: 640px;
  }
  @media (max-width: 640px) {
    .plates {
      // width: 320px;
    }
  }
  .plate {
    height: 80px;
    width: 80px;
  }
  .burger {
    filter: url(#gooeyness);
  }
  .x {
    transform: scale(0);
    transition: transform 400ms;
  }
  .line {
    fill: none;
    stroke: black;
    stroke-width: 6px;
    stroke-linecap: round;
    stroke-linejoin: round;
    transform-origin: 50%;
    transition: stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms,
      transform 500ms 200ms;
  }
  .x .line {
    stroke-width: 5.5px;
  }

  /* Die vierte teller */
  .plate4 .x {
    transition: transform 400ms;
  }
  .plate4 .line {
    transform-origin: 50%;
    transition: transform 400ms 100ms;
  }
  .active.plate4 .line {
    transition: transform 400ms;
  }
  .active.plate4 .line1 {
    transform: translateX(18px) translateY(-3px) rotate(-45deg) scale(0.7);
  }
  .active.plate4 .line2 {
    transform: translateX(-18px) translateY(-3px) rotate(45deg) scale(0.7);
  }
  .active.plate4 .line3 {
    transform: translateY(0px) rotate(45deg) scale(0.7);
  }
  .active.plate4 .line4 {
    transform: translateY(0px) rotate(-45deg) scale(0.7);
  }
  .active.plate4 .line5 {
    transform: translateX(18px) translateY(3px) rotate(45deg) scale(0.7);
  }
  .active.plate4 .line6 {
    transform: translateX(-18px) translateY(3px) rotate(-45deg) scale(0.7);
  }
  .active.plate4 .x {
    transition: transform 400ms 100ms;
    transform: scale(1);
  }
`;

export default BurgerIcon;
