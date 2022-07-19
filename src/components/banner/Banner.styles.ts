import styled from "styled-components";

export const Header = styled.div`
  color: #fff;
  height: 448px;
  object-fit: contain;

  // &::-webkit-scrollbar {
  //   display: none;
  // }

  @media (max-width: 640px) {
    width: 100%;
    object-fit: contain;
  }
`;
export const BannerContent = styled.div`
  height: 190px;
  margin-left: 30px;
  padding-top: 140px;


  @media (max-width: 640px) {
     margin-left: 28px; 
      
  }

  .banner__title {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
  }

  .banner__button {
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    font-weigth: 700;
    padding-left: 2rem;
    margin-right: 1rem;
    padding-right: 2rem;
    border-radius: 0.2vw;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);


    @media (max-width: 640px) {
      font-weigth: 600;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  .banner__button:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }

  .banner__description {
    width: 45rem;
    height: 80px;
    line-height: 1.3;
    font-size: 0.9rem;
    padding-top: 1rem;

    @media (max-width: 640px) {
      width: 43rem;
      height: 75px;
      font-size: 0.8rem;
      max-width: 340px;
    }
  }

  .banner__fadeBottom {
    width: 100%;
    height: 7.4rem;
    margin-right: 100%;
    background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111);

    @media (max-width: 640px) {
    height: 7.6rem;      

    }
  }
`;
