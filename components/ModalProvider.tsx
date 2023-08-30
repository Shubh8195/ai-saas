"use client";

import { useEffect, useState } from "react";
import ProModel from "@/components/ProModel";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <ProModel />
    </>
  );
};

export default ModalProvider;
