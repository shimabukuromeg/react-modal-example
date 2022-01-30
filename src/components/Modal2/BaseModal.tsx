import React from 'react';
import styled from 'styled-components';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: 'medium' | 'small';
  className?: string;
};

export type BaseModalProps = {
  children: React.ReactNode;
  className?: string;
};

export const BaseModal = React.memo(styled.div<BaseModalProps>`
  z-index: 999;
  display: flex;
  flex-direction: column;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.5;
  text-align: left;
  word-break: break-all;
  color: #222222;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  &.medium {
    width: 640px;
    height: 500px;
    padding: 56px;
  }
  &.small {
    width: 320px;
    height: 250px;
    padding: 24px;
  }
`);
