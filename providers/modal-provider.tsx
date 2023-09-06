"use client";

import PrewiewModal from "@/components/prewiew-modal";
import { useEffect, useState } from "react";

interface ModalProviderProps {}

const ModalProvider: React.FC<ModalProviderProps> = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PrewiewModal />
    </>
  );
};
export default ModalProvider;
