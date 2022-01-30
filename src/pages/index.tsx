import type { NextPage } from 'next';
import { useState } from 'react';
import { Modal } from '../components/Modal1';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div>モーダルのサンプルその1</div>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '閉じる' : '開く'}
      </button>
      <Modal size="small" open={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <div>
          <div>Hello, Modal</div>
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '閉じる' : '開く'}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
