import {FC, ReactNode, useEffect} from 'react';
import addClassString from '@/utils/addClassString';

export interface SideModalProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode | ReactNode[]
}


const SideModal:FC<SideModalProps> = ({isOpen, onClose, children}) => {
  const classes = addClassString('z-30 fixed duration-700 h-screen m-0 w-screen transition-transform ease-in-out left-0 top-0',
      [isOpen ? 'translate-x-0' : 'translate-x-full'])

    useEffect(() => {
        let scrollY;

        if (isOpen) {
            scrollY = window.scrollY;
            document.body.style.overflowY = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
        }

        return () => {
            if (isOpen) {
                document.body.style.overflowY = 'auto';
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.left = '';
                document.body.style.right = '';
                window.scrollTo(0, scrollY);
            }
        };
    }, [isOpen]);

    const exitModal = (e) => {
      if(e.target === e.currentTarget) {
          onClose()
      }
    }

  return (
      <div onClick={exitModal} className={classes}>
          <div className="absolute m-0 right-0 top-0 h-full w-full overflow-scroll max-w-modal bg-dark300 p-10">
              <i onClick={onClose} className="bi-arrow-left cursor-pointer text-5xl text-white"/>
              <div className="pt-10">
                  {children}
              </div>
          </div>
      </div>
  )
}

export default SideModal;