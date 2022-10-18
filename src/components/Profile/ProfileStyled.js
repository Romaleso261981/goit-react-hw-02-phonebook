import styled from 'styled-components';

export const ProfileClass = styled.div`
  width: 280px;
  padding: 15px;
  border-radius: 8px;
  margin: 30px auto;
  background-color: ${getRandomHexColor};
`;

export const Description = styled.div`
  padding: 40px;
  align-items: center;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 100%;
  margin-bottom: 12px;
  margin-left: auto;
  margin-right: auto;
`;
export const Title = styled.p`
font-size: 30px;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
  color: blueviolet;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const Tag = styled.p`
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;

export const Location = styled.p`
  align-items: center;
  text-align: center;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  width: 33.33%;
  /* height: 60px; */
  padding: 12px;
  align-items: center;
  justify-content: center;
  background-color: #e8eaf1;
`;

export const Label = styled.span`
  margin-bottom: 6px;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
