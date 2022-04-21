import { useEffect, useRef } from 'react';
import './modal.scss';

interface ModalProps {
  readonly show: boolean;
  readonly setShow: React.Dispatch<React.SetStateAction<boolean>>;
  readonly hideCloseButton?: boolean;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { show, setShow, hideCloseButton, children } = props;
  const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const clickOutsideContent = (e: any) => {
      if (e.target === modalRef.current) {
        setShow(false);
      }
    };
    window.addEventListener('click', clickOutsideContent);
    return () => {
      window.removeEventListener('click', clickOutsideContent);
    };
  }, [props, setShow]);

  return (
    <div ref={modalRef} className={`modal ${show ? 'active' : ''}`}>
      <div className="modal__content">
        {!hideCloseButton && (
          <span onClick={() => setShow(false)} className="modal__close">
            &times;
          </span>
        )}
        {children}
      </div>
    </div>
  );
};

export const ModalHeader: React.FC = (props) => {
  const { children } = props;
  return <div className="modal__header">{children}</div>;
};

export const ModalBody: React.FC = (props) => {
  const { children } = props;
  return <div className="modal__body">{children}</div>;
};

export const ModalFooter: React.FC = (props) => {
  const { children } = props;
  return <div className="modal__footer">{children}</div>;
};
