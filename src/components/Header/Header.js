import React from 'react'

import {
  HeaderContainer,
  TopHeader,
  TextTopHeader,
  SignatureIcons,
  MainHeader,
  LeftHeaderContainer,
  HeaderBox,
  Logo,
  HeaderBoxIcon,
  HeaderBoxTitle,
  RightHeaderContainer
} from './HeaderElements'

import { TextPoppins } from '../../globalStyles'
import SignaturesImage from '../../assets/medals.png'
import GamersClubLogo from '../../assets/gamers_club_logo.svg'

const Header = ({ data }) => {
  return (
    <HeaderContainer>
      <TopHeader>
        <TextTopHeader>Você está jogando no modo gratuito.</TextTopHeader>
        <SignatureIcons src={SignaturesImage} />
        <TextTopHeader>Clique aqui para liberar vantagens exclusivas!</TextTopHeader>
      </TopHeader>

      <MainHeader>
        <LeftHeaderContainer>

          <HeaderBox>
            <Logo src={GamersClubLogo} />
          </HeaderBox>

          {data.map((menu) => {
            return (
              <HeaderBox>
                <HeaderBoxIcon src={menu.img} />
                <HeaderBoxTitle>{menu.title}</HeaderBoxTitle>
              </HeaderBox>
            )
          })}

        </LeftHeaderContainer>

        <RightHeaderContainer>

        </RightHeaderContainer>
      </MainHeader>
    </HeaderContainer>
  )
}

export default Header
