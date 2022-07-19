import styled from "styled-components";



export const Navbar = styled.div`
  top: 0;
  width: 100%;
  height: 25px;
  z-index: 1;
  padding: 20px;
  display: flex;
  position: fixed;
  transition: all 0.5s;
  background-color: #111;
  align-items: center;
  justify-content: space-between;
  transition-timing-function: ease-in;


  //  .nav__black {
  //    background-color: #111;
  //  }

  @media (max-width: 640px) { 
    width: 100%;
    height: 23px;
    padding: 25px;
  }
`;

export const Navlogo = styled.img`
  left: 20px;
  width: 80px;
  position: fixed;
  margin-bottom: 10px;
  object-fit: contain;
`;
export const NavAvatar = styled.img`
  width: 30px;
  right: 20px;
  position: fixed;
  border-radius:2px;
  object-fit: contain;
`;
