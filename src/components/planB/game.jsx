import React, { useState } from 'react';
import './game.scss';
import Button from './button/Button';
import Modal, { ModalBody, ModalFooter, ModalHeader } from './modal/Modal';

export const Game = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandle = () => {
    document.getElementById('my_game').src = '';
    setShowModal(false);
  };

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Open modal</Button>
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
          {/* TODO: alla chiusra della modale il video non si ferma, SOLUTION: onclose helper fn => settare src a null */}
          <Button onClick={closeModalHandle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
