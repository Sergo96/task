import styled from 'styled-components';

const HomePage = () => {
  return (
    <>
      <HomePageIntro>
        <h1>Yooo Welcome to cute Cats Page :-D</h1>
      </HomePageIntro>
    </>
  );
};

const HomePageIntro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default HomePage;
