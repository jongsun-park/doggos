// react-ig-feed
// https://github.com/MohammedRaji/react-ig-feed#readme
import { useState } from "react";
import Feed from "react-ig-feed";
import "react-ig-feed/dist/index.css";
import styled from "styled-components";
import { colors } from "../../utils/styles";

const InstagramFeed = () => {
  const token =
    "IGQVJVUUR3U3NCYjd0aDgxNzVxSUpLU296ZAFNYRl9zY2hnd3RMaEN3QjVSM2hma1RxRktSV2ZASWW1IczduM1FLMzFmWWNjVGdWdUptVDZA4eFpwMmRjTkEtS29vc2swbFBIQzdpdU1hOGMxMkc3WlpWWAZDZD";
  const [num, setNum] = useState(6);
  const loadMore = (e) => {
    e.preventDefault();
    if (num >= 20) return "";
    setNum(num + 6);
  };

  return (
    <InstagramFeedConatiner>
      <h2 className="instgram-feed__title">
        {" "}
        Follow{" "}
        <a
          href="https://www.instagram.com/jins.little.daddy/"
          target="_blank"
          rel="noreferrer"
        >
          @jins.little.daddy
        </a>
      </h2>

      <Feed token={token} counter={num} />
      <button
        onClick={loadMore}
        className={`load-more-button ${num <= 20 ? "active" : "inactive"}`}
      >
        Load more
      </button>
    </InstagramFeedConatiner>
  );
};

const InstagramFeedConatiner = styled.div`
  display: flex;
  flex-direction: column;

  .instgram-feed__title {
    text-align: center;
    font-size: 1rem;
  }

  .load-more-button {
    margin: 1rem auto 3rem;
    border: none;
    padding: 8px 32px;
    background: ${colors.gray[7]};
    color: white;
    border-radius: 4px;

    &:hover {
      background: ${colors.gray[9]};
    }

    &.active {
    }

    &.inactive {
      color: ${colors.gray[9]};
      background: ${colors.gray[2]};
      cursor: not-allowed;
    }
  }
`;

export default InstagramFeed;
