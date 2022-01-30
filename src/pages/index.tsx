import type { NextPage } from 'next';
import { useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import styled from 'styled-components';
import { Modal as ModalSample1 } from '../components/Modal1';
import { useModalSample } from '../hooks/useModalSample';

const ModalStyle = styled.div`
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
  const [ModalSample2, openSample2, closeSample2, isOpenModalSample2] =
    useModalSample();
  return (
    <div>
      {/* モーダルのサンプルその1 */}
      <div>
        <h2>モーダルのサンプルその1</h2>
        <p>Modal is Open? {isOpenModal ? 'Yes' : 'No'}</p>
        <button type="button" onClick={() => setIsOpenModal(true)}>
          OPEN
        </button>
        <ModalSample1
          open={isOpenModal}
          onClose={() => setIsOpenModal(!isOpenModal)}
        >
          <h1>Title1</h1>
          <p>This is a customizable modal.</p>
          <button type="button" onClick={() => setIsOpenModal(false)}>
            CLOSE
          </button>
        </ModalSample1>
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
            <ModalStyle>
              <h1>Title2</h1>
              <p>This is a customizable modal.</p>
              <button type="button" onClick={close}>
                CLOSE
              </button>
            </ModalStyle>
          </Modal>
        </div>
      </div>
      {/* モーダルのサンプルその3 */}
      <div>
        <div>
          <h2>モーダルのサンプルその3</h2>
          <p>Modal is Open? {isOpenModalSample2 ? 'Yes' : 'No'}</p>
          <button type="button" onClick={openSample2}>
            OPEN
          </button>
          <ModalSample2>
            <h1>Title3</h1>
            <p>This is a customizable modal.</p>
            <button type="button" onClick={closeSample2}>
              CLOSE
            </button>
          </ModalSample2>
        </div>
      </div>
      {/* コンテンツの高さ増やす適当な要素 */}
      <div>
        <h2>コンテンツの高さ増やす適当な要素</h2>
        {[...Array(100)].map((_, i) => (
          <div>{`hello, ${i}`}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
