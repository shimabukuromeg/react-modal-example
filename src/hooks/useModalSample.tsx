import React, { useCallback, useState } from 'react';
import { Modal } from '../components/Modal2';

export type UseModal = () => [
  ModalWrapper: React.FC<{ children: React.ReactNode }>,
  open: () => void,
  close: () => void,
  isOpenModal: boolean
];

export const useModalSample: UseModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const open = useCallback(() => {
    setIsOpenModal(true);
  }, [setIsOpenModal]);
  const close = useCallback(() => {
    setIsOpenModal(false);
  }, [setIsOpenModal]);

  const ModalWrapper = useCallback(
    ({ children }) => (
      <Modal isOpen={isOpenModal} onClose={close}>
        {children}
      </Modal>
    ),
    [isOpenModal, close]
  );
  return [ModalWrapper, open, close, isOpenModal];
};
