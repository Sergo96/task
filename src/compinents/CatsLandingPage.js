import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import styled from 'styled-components';

const CatsLandingPage = () => {
  const [catList, setCatList] = useState([]);
  const [moreCat, setMoreCats] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const catId = params.num; // taking id from url

  console.log(catList);

  // here getting data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://api.thecatapi.com/v1/images/search?limit=${moreCat}&page=1&category_ids=${catId}`
        );
        // setCatList([...catList, ...res.data]); here is when ON scroll
        setCatList(res.data);
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [moreCat, catId]);

  const loadMore = () => {
    setMoreCats((moreCat) => moreCat + 10);
  };

  return (
    <>
      <LandPage>
        <LandPageContainer>
          {catList.map((component) => (
            <>
              <CatImages>
                <h5>name: {component.categories[0].name}</h5>
                <p>id: {component.id}</p>
                <img
                  src={component.url}
                  style={{ width: 300, height: 300, marginBottom: '20px' }}
                  alt=''
                />
              </CatImages>
            </>
          ))}
          <ButtonLoadMore onClick={loadMore}>
            {isLoading ? 'Loading...' : 'Load More'}
          </ButtonLoadMore>
        </LandPageContainer>
      </LandPage>
    </>
  );
};

const LandPage = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 40px;
`;

const LandPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1300px;
  width: 90%;
  margin: 0 auto;
`;

const CatImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonLoadMore = styled.button`
  background-color: orange;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export default CatsLandingPage;
