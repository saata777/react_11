import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    body, html {
      width: 768px;
      height: 1024px;
    }
  }

  @media (max-width: 375px) {
    body, html {
      width: 375px;
      height: 667px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${(props) => `url(${props.backgroundImage})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: brightness(0.6);
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 768px;
    height: 1024px;
  }

  @media (max-width: 375px) {
    width: 375px;
    height: 667px;
  }
`;

const TimeDisplay = styled.h1`
  color: #fff;
  font-family: Inter;
  font-size: 200px;
  font-style: normal;
  font-weight: 700;
  line-height: 200px;
  letter-spacing: -5px;
  margin: 0px;

  @media (max-width: 768px) {
    font-size: 175px;
    line-height: 150px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 375px) {
    font-size: 100px;
    line-height: 100px;
  }
`;

const SubText = styled.p`
  color: #fff;
  font-family: "Inter";
  font-size: clamp(16px, 2vw, 20px);
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 0;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
    line-height: 16px;
  }
`;
const Spans = styled.p`
  color: #fff;
  font-family: "Inter";
  font-size: clamp(16px, 2vw, 20px);
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 0;
  display: flex;
  flex-direction: row;
  @media (max-width: 375px) {
    display: none;
  }
`;
const MoreInfo = styled.div`
  position: fixed;
  bottom: ${(props) => (props.expanded ? "-55px" : "-430px")};
  left: 0;
  width: 100%;
  height: 400px;
  background: ${(props) =>
    props.isNight ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)"};
  color: ${(props) => (props.isNight ? "white" : "black")};
  text-align: center;
  padding-bottom: 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  transition: bottom 0.5s ease;
  z-index: 1;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 250px;

  @media (max-width: 768px) {
    flex-direction: row;
    font-family: Inter;
    font-size: 40px;
    gap: 100px;
    height: 440px;
    padding: 20px;
    bottom: ${(props) => (props.expanded ? "-55px" : "-500px")};
  }

  @media (max-width: 375px) {
    flex-direction: column;
    height: 256px;
    gap: 20px;
    padding: 16px;
    bottom: ${(props) => (props.expanded ? "-15px" : "-300px")};
    align-items: start;
    justify-content: center;
  }
`;

const Divinfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  margin-bottom: 45px;
  margin-left: 165px;

  @media (max-width: 768px) {
    margin-left: 0;
    gap: 20px;
    margin-left: 64px;
  }

  @media (max-width: 375px) {
    margin-left: 0;
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  width: 146px;
  height: 56px;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 5px;
  text-transform: uppercase;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  background: white;
  color: black;
  border-radius: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: background 0.3s, bottom 0.5s ease;
  z-index: 2;
  margin-right: 165px;

  &:hover {
    background: #ddd;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 80px;
    text-align: start;
  }

  @media (max-width: 375px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 0;
  transition: transform 0.5s ease;
  transform: ${(props) => (props.expanded ? "translateY(-380px)" : "none")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  height: 100%;
  text-align: start;
  padding: 58px;

  @media (max-width: 768px) {
    padding: 64px;
    transform: ${(props) => (props.expanded ? "translateY(-440px)" : "none")};
  }

  @media (max-width: 375px) {
    padding: 24px;
    transform: ${(props) => (props.expanded ? "translateY(-256px)" : "none")};
  }
`;

const Georgia = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 4.8px;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

const Pi = styled.p`
  display: flex;
  flex-direction: column;
  gap: 9px;
  text-align: start;
  font-family: Inter;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;

  @media (max-width: 768px) {
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (max-width: 375px) {
    font-size: 24px;
    flex-direction: row;
    justify-content: space-between;
    width: 323px;
  }
`;

const Span = styled.p`
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 375px) {
    font-size: 10px;
  }
`;

const Line = styled.div`
  width: 1px;
  opacity: 0.25;
  height: 240px;
  background-color: ${(props) => (props.isNight ? "white" : "black")};
  position: absolute;
  top: 56px;
  left: 734px;

  @media (max-width: 768px) {
    display: ${(props) => (props.expanded ? "none" : "block")};
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 375px) {
    display: none;
  }
`;

const Customsp = styled.p`
  color: #fff;
  font-family: "Inter";
  font-size: clamp(14px, 2vw, 18px);
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  width: 540px;

  @media (max-width: 768px) {
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 20px;
    width: 340px;
  }
`;

const Left = styled.div`
  margin-left: 165px;
  display: flex;
  padding-top: 80px;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: 40px;
  }

  @media (max-width: 375px) {
    padding-top: 20px;
  }
`;

const Horizontaluri = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    margin-left: 64px;
    gap: 20px;
  }

  @media (max-width: 375px) {
    margin-left: 24px;
  }
`;

const Pppp = styled.p`
  margin-left: 165px;

  @media (max-width: 768px) {
    margin-left: 64px;
  }

  @media (max-width: 375px) {
    margin-left: 24px;
  }
`;

const CustomP = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: clamp(14px, 2vw, 18px);
  font-style: normal;
  font-weight: 400;
  line-height: 28px;

  @media (max-width: 768px) {
    color: #fff;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

const App = () => {
  const [isNight, setIsNight] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [dateInfo, setDateInfo] = useState({});
  const [time, setTime] = useState(new Date());

  const dayBackground = "/dge.png";
  const nightBackground = "/game.png";

  useEffect(() => {
    const updateTime = setInterval(() => {
      const now = new Date();
      setTime(now);

      const currentHour = now.getHours();

      setIsNight(currentHour >= 18 || currentHour < 6);
    }, 100);

    return () => clearInterval(updateTime);
  }, [333]);

  useEffect(() => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const dayOfYear =
      Math.floor((now - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
    const weekOfYear = Math.ceil(dayOfYear / 7);
    const dayOfWeek = now.getDay() + 1;

    setDateInfo({
      dayOfWeek,
      dayOfYear,
      weekOfYear,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
  }, [time]);

  const handleExpandToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <GlobalStyle />
      <Container backgroundImage={isNight ? nightBackground : dayBackground}>
        <ContentContainer expanded={expanded}>
          <Pppp>
            <Customsp>
              “The science of operations, as derived from mathematics more{" "}
              especially, is a science of itself, and has its own abstract truth
              and value.”
            </Customsp>
            <CustomP>Ada Lovelace</CustomP>
          </Pppp>
          <Horizontaluri>
            <Left>
              <SubText>
                {isNight ? "🌙 GOOD EVENING" : "☀️ GOOD MORNING"},{" "}
                <Spans> IT'S CURRENTLY</Spans>
              </SubText>
              <TimeDisplay>
                {time.getHours().toString().padStart(2, "0")}:
                {time.getMinutes().toString().padStart(2, "0")}
              </TimeDisplay>
              <Georgia>IN TBILISI, GEO</Georgia>
            </Left>
            <Button expanded={expanded} onClick={handleExpandToggle}>
              {expanded ? (
                <>
                  LESS{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <circle cx="20" cy="20" r="20" fill="#303030" />
                    <path
                      d="M14 23L20 17L26 23"
                      stroke="white"
                      strokewidth="2"
                    />
                  </svg>
                </>
              ) : (
                <>
                  MORE{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <circle cx="20" cy="20" r="20" fill="#303030" />
                    <path
                      d="M14 17L20 23L26 17"
                      stroke="white"
                      strokewidth="2"
                    />
                  </svg>
                </>
              )}
            </Button>
          </Horizontaluri>
        </ContentContainer>
      </Container>
      <MoreInfo expanded={expanded} isNight={isNight}>
        <Divinfo>
          <Pi>
            {" "}
            <Span>CURRENT TIMEZONE</Span>
            {dateInfo.timeZone}
          </Pi>
          <Pi>
            {" "}
            <Span>DAY OF THE YEAR</Span> {dateInfo.dayOfYear}
          </Pi>
        </Divinfo>
        <Line isNight={isNight} expanded={expanded}></Line>
        <Divinfo>
          <Pi>
            {" "}
            <Span>DAY OF THE WEEK</Span> {dateInfo.dayOfWeek}
          </Pi>
          <Pi>
            {" "}
            <Span>WEEK NUMBER</Span> {dateInfo.weekOfYear}
          </Pi>
        </Divinfo>
      </MoreInfo>
    </>
  );
};

export default App;
