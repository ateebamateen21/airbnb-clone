"use client";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);
  //the reason for this delay is some animation that takes exactly 300ms

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondary = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }
  return (
    <>
      <section
        className="
  justify-center
  items-center
  flex 
  overflow-x-hidden
  overflow-y-auto
    fixed
    inset-0
    z-50
    outline-none
    focus:outline-none
    bg-neutral-800/70
  "
      >
        {/* {47:10} */}
        <div
          className="
    relative
    w-full
    md:w-4/6
    lg:w-3/6
    xl:w-2/5
    my-6
    mx-auto
    h-full
    lg:h-auto
    md:h-auto
    "
        >
          {/* CONTENT */}
          <div
            className={`
        translate
        duration-300
        h-full
        ${showModal ? "opacity-100" : "opacity-0"}
        ${showModal ? "translate-y-0" : "translate-y-full"}
        `}
          >
            {/* 49:20 */}
            <div
              className="
            translate
            h-full
            lg:h-auto
            md:h-auto
            border-0
            rounded-lg
            shadow-lg
            relative
            flex flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
            "
            >
              {/* this is the header */}
              <div
                className="
                flex 
                items-center
                justify-center
                rounded-t
                p-6
                relative
                border-b-[1px]
                "
              >
                <button
                  onClick={handleClose}
                  className="
                    p-1
                    border-0
                    hover:opacity-70
                    transition
                    absolute
                    left-9 
                    "
                >
                  <IoMdClose size={18} />
                </button>
                <div
                  className="
                text-lg 
                font-semibold

                "
                >
                  Login Modal
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Modal;
