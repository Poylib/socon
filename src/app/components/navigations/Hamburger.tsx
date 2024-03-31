"use client";
import { Fade } from "hamburger-react";
import { useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button>
      <Fade color="#fff" rounded size={20} />
    </button>
  );
}
