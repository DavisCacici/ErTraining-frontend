import React, { useState } from 'react';
import './game.scss';
import { Button } from './button/Button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from './modal/Modal';

interface GameProps {
  readonly showModal: boolean;
  readonly setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Game: React.FC<GameProps> = (props) => {
  const { showModal, setShowModal } = props;
  // const [showModal, setShowModal] = useState(sm);

  const closeModalHandle = () => {
    // document.getElementById('my_game')!.src = '';
    setShowModal(false);
  };

  return (
    <div>
      {/* <Button onClick={() => setShowModal(true)}>Open modal</Button> */}
      <Modal
        show={showModal}
        setShow={setShowModal}
        // hideCloseButton
      >
        <ModalBody>
          <iframe
            id="my_game"
            loading="lazy"
            width="800"
            height="500"
            src="https://dos.zone/doom-ii-oct-10-1994/"
            // src="https://www.retrogames.cz/play_414-DOS.php"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeModalHandle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
