import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TweenLite, Power1 } from "gsap";

const Line = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.greyColor};
  text-indent: -999999px;
  position: absolute;
  &:nth-child(1) {
    top: 0;
  }
  &:nth-child(2) {
    top: .9rem;
  }
  &:nth-child(3) {
    top: 1.8rem;
  }
`;

const Container = styled.div`
  width: 5rem;
  height: 2.1rem;
  cursor: pointer;
  top: 5rem;
  right: 5rem;
  position: fixed;
  z-index: 50;
  @media screen and (max-width: 1024px) {
    right: 2rem;
  }
`;

const MenuButton = ({ id, isOpenMenu, onToggleMenu }) => {
  const [isOpenMenuLoading, setIsOpenMenuLoading] = useState(false);
  const duration = 0.3;
  const delay = 0.5;
  const menuFn = () => {
    if (!isOpenMenuLoading) {
      setIsOpenMenuLoading(true);
      setTimeout(() => {
        setIsOpenMenuLoading(false);
      }, 500);
      if (isOpenMenu) {
        TweenLite.to("#ln1, #ln3", {
          duration,
          rotate: 0,
          ease: Power1
        });
        TweenLite.to("#ln2", {
          duration,
          rotate: 0,
          ease: Power1
        });
        TweenLite.to("#ln1", {
          delay,
          duration,
          top: "0",
          ease: Power1
        });
        TweenLite.to("#ln3", {
          delay,
          duration,
          top: "1.8rem",
          ease: Power1
        });
      } else {
        TweenLite.to("#ln1, #ln3", {
          duration,
          top: ".9rem",
          ease: Power1
        });
        TweenLite.to("#ln1, #ln3", {
          delay,
          duration,
          rotate: 45,
          ease: Power1
        });
        TweenLite.to("#ln2", {
          delay,
          duration,
          rotate: -45,
          ease: Power1
        });
      }
    }
  };
  const onMouseEnter = () => {
    if (!isOpenMenuLoading && !isOpenMenu) {
      TweenLite.to("#ln1", {
        duration,
        top: "-.2rem",
        ease: Power1
      });
      TweenLite.to("#ln3", {
        duration,
        top: "2rem",
        ease: Power1
      });
    }
  };
  const onMouseLeave = () => {
    if (!isOpenMenuLoading && !isOpenMenu) {
      TweenLite.to("#ln1", {
        duration,
        top: "0",
        ease: Power1
      });
      TweenLite.to("#ln3", {
        duration,
        top: "1.8rem",
        ease: Power1
      });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => menuFn, [isOpenMenu]);

  return (
    <Container
      id={id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onToggleMenu}
    >
      <Line id="ln1">1</Line>
      <Line id="ln2">2</Line>
      <Line id="ln3">3</Line>
    </Container>
  );
};

export default MenuButton;
