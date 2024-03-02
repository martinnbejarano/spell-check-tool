/* eslint-disable react/prop-types */
import { RiRobot2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

export const Message = ({ text, role }) => (
  <article
    className={`flex max-w-[calc(2/3*100%)] space-x-2 ${role === "system" ? "self-start" : "self-end"}`}
  >
    {role === "system" && (
      <div className="relative top-1">
        <RiRobot2Fill className="top-1 h-6 w-6" />
      </div>
    )}
    <div className="rounded-lg bg-[#000d1b] p-2">{text}</div>
    {role === "user" && (
      <div className="relative top-1">
        <FaUser className="h-6 w-6" />
      </div>
    )}
  </article>
);
