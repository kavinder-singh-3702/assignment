import React from "react";

export default function fundamental({ heading, value }) {
  return (
    <div className="flex items-center justify-between gap-[6vw] border-b border-gray-200 pb-4">
      <p className="text-grey-200">{heading}</p>
      <p>{value}</p>
    </div>
  );
}
