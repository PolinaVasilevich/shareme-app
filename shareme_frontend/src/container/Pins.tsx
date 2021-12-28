import React, { FC } from "react";
import { IUser } from "../types/data";

interface IPinsProps {
  user: IUser | undefined;
}

const Pins: FC<IPinsProps> = () => {
  return <div>Pins</div>;
};

export default Pins;
