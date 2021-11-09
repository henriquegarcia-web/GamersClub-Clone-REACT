import styled from "styled-components";
import { TextPoppins } from '../../globalStyles'
import TopHeaderBg from '../../assets/top-bg.jpg';

export const HeaderContainer = styled.div`

`

export const TopHeader = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${TopHeaderBg});
`

export const TextTopHeader = styled(TextPoppins)`
  color: white;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
`

export const SignatureIcons = styled.img`
  width: 50px;
  margin: 0 5px;
`

export const MainHeader = styled.div`

`

export const LeftHeaderContainer = styled.div`

`

export const HeaderBox = styled.div`

`

export const Logo = styled.img`

`

export const HeaderBoxIcon = styled.img`
  width: 20px;
`

export const HeaderBoxTitle = styled.div`

`

export const RightHeaderContainer = styled.div`

`