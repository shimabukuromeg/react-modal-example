import { FC, memo } from 'react';
import styled from 'styled-components';
import { BaseModal, ModalProps } from './BaseModal';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  min-width: 640px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal: FC<ModalProps> = memo(
  ({ isOpen, onClose, children, size = 'medium', className = '' }) => {
    if (isOpen) {
      return (
        <Overlay onClick={onClose}>
          <BaseModal
            className={(className ? [size, className] : [size]).join(' ')}
            onClick={(e: Event) => e.stopPropagation()}
          >
            {children}
          </BaseModal>
        </Overlay>
      );
    }
    return null;
  }
);
