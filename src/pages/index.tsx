import type { NextPage } from 'next';
import { useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import styled from 'styled-components';
import { Modal as ModalSample1 } from '../components/Modal1';
import { useModalSample } from '../hooks/useModalSample';

const Container = styled.div`
  margin: 100px;
`

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
  // サンプルその1
  const [isOpenModal, setIsOpenModal] = useState(false);
  // サンプルその2
  const [Modal, open, close, isOpen] = useModal('__next', {
    preventScroll: true,
  });
  // サンプルその3
  const [ModalSample2, openSample2, closeSample2, isOpenModalSample2] =
    useModalSample();
  return (
    <div>
      {/* モーダルのサンプルその1 状態が変わったときのコールバック関数をpropsに渡す普通のアレパターン */}
      <Container>
        <h2>モーダルのサンプルその1</h2>
        <h3>状態が変わったときのコールバック関数をpropsに渡す普通のアレパターン</h3>
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
      </Container>
      {/* モーダルのサンプルその2 状態と、ビューとなるコンポーネントを組にして返すパターン（react-hooks-use-modalを使ってみた） */}
      <Container>
        <div>
          <h2>モーダルのサンプルその2 </h2>
          <h3>状態と、ビューとなるコンポーネントを組にして返すパターン（react-hooks-use-modalを使ってみた）</h3>
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
      </Container>
      {/* モーダルのサンプルその3 react-hooks-use-modal を参考にサンプルその1を書き直してみた */}
      <Container>
        <div>
          <h2>モーダルのサンプルその3</h2>
          <h3>react-hooks-use-modal を参考にサンプルその1を書き直してみた</h3>
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
      </Container>
      {/* コンテンツの高さ増やす適当な要素 */}
      <Container>
        <h2>コンテンツの高さ増やす適当な要素</h2>
        <div style={{height: '1000px', background: '#F2F2F2'}}>コンテンツの高さ増やす適当な要素</div>
      </Container>
    </div>
  );
};

export default Home;
