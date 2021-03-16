import React from "react";
import {Lang} from "./entities/interfaces";

const LocaleContext = React.createContext<Lang>("ru");

export default LocaleContext;
