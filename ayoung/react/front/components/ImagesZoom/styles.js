import styled, { createGlobalStyle } from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

export const Overlay = styled.div` // 함수 호출하는 방법 - func''(백틱) = func() | (JavaScript) Tagged Template Literals
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  height: 44px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;
  
  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
`;

export const CloseBtn = styled(CloseOutlined)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
`;

export const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: #090909;
`;

export const ImgWrapper = styled.div`
  padding: 32px;
  text-align: center;
  
  & img {
    margin: 0 auto;
    max-height: 750px;
  }
`;

export const Indicator = styled.div`
  text-align: center;
  
  & > div { // 자식선택자 (Indicator라는 컴포넌트 안에 있는 div 선택)
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;

export const Global = createGlobalStyle` // 리액트에서 자동으로 만들어준 클래스명과 별개로 적용됨
  .slick-slide {
    display: inline-block;
  }
  .ant-card-cover {
    transform: none !important; // transform 안에 fixed속성 들어가게되면 fixed가 안잡혀서 none처리
  }
`