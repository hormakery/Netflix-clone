import styled from "styled-components";



export const RowWrapper = styled.div`
  color: #fff;
  margin-left: 20px;

  .row__posters {
    display: flex;
    padding: 20px;
    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      display: none;
    }

    .row__posterLarge {
      max-height: 250px;

      @media (max-width: 640px) {
        max-height: 230px;
      
      }

      &:hover {
        transform: scale(1.09);
      }
    }
  }

  .row__poster {
    width: 100%;
    max-height: 100px;
    margin-right: 10px;
    object-fit: contain;
    transition: transform 450ms;

    @media (max-width: 640px) {
      max-height: 95px;
      margin-right: 8px;
    }

    &:hover {
      // opacity: 1;
      transform: scale(1.08);
    }
  }
`;
