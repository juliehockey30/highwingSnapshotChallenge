import styled from 'styled-components'

const ToggleBar = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  padding-left: 48px;
`;

const ToggleItem = styled.p`
  border-bottom: ${props => props.selected ? '5px solid #00e0c2' : 'unset'};
  color: ${props => props.selected ? '#00e0c2' : '#013d40'};
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 24px 0 0;
  padding-bottom: 24px;
`;

const BodyWrapper = styled.div`
  background-color: #eaeeef;
  padding-left: 48px;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 64px;
`;

const FilterButton = styled.button`
  background-color: ${props => props.selected ? '#00e0c2' : '#eaeeef'};
  border-radius: 8px;
  border: ${props => props.selected ? 'none' : '1px solid grey'};
  color: ${props => props.selected ? '#00716f' : 'grey'};
  cursor: pointer;
  margin: 24px 4px;
  padding: 12px 24px;
`;

const GroupHeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const GroupHeader = styled.p`
  font-size: 36px;
  font-weight: 700;
  margin-right: 30%;
`;

export{
  ToggleBar,
  ToggleItem,
  BodyWrapper,
  FilterWrapper,
  FilterButton,
  GroupHeadingWrapper,
  GroupHeader,
};
