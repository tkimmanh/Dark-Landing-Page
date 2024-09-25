"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import React, { useState } from "react";
import PlusIcon from "../../assets/icons/plus.svg";
import MinusIcon from "../../assets/icons/minus.svg";

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div key={question} className="py-7 border-b border-white/30 w-full ">
      <div className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon></MinusIcon> : <PlusIcon></PlusIcon>}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default React.memo(AccordionItem);
