import type { NextPage } from 'next';
import { useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import styled from 'styled-components';
import { Modal as ModalSample } from '../components/Modal1';

const Sample2Modal = styled.div`
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
  width: 640px;
  height: 500px;
  padding: 56px;
`;

const Home: NextPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [Modal, open, close, isOpen] = useModal('__next', {
    // これはオプション。デフォルトはfalse
    preventScroll: true,
  });
  return (
    <div>
      {/* モーダルのサンプルその1 */}
      <div>
        <h2>モーダルのサンプルその1</h2>
        <p>Modal is Open? {isOpenModal ? 'Yes' : 'No'}</p>
        <button type="button" onClick={() => setIsOpenModal(true)}>
          OPEN
        </button>
        <ModalSample
          open={isOpenModal}
          onClose={() => setIsOpenModal(!isOpenModal)}
        >
          <h1>Title1</h1>
          <p>This is a customizable modal.</p>
          <button type="button" onClick={() => setIsOpenModal(false)}>
            CLOSE
          </button>
        </ModalSample>
      </div>
      {/* モーダルのサンプルその2 */}
      <div>
        <div>
          <h2>モーダルのサンプルその2</h2>
          <p>Modal is Open? {isOpen ? 'Yes' : 'No'}</p>
          <button type="button" onClick={open}>
            OPEN
          </button>
          <Modal>
            <Sample2Modal>
              <h1>Title2</h1>
              <p>This is a customizable modal.</p>
              <button type="button" onClick={close}>
                CLOSE
              </button>
            </Sample2Modal>
          </Modal>
        </div>
      </div>
      {/* コンテンツの高さ増やす適当な要素 */}
      {
        [...Array(100)].map((_, i) => (
          <div>
            {`hello, ${i}`}
          </div>
        ))
      }
    </div>
  );
};

export default Home;
