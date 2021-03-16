import React from "react";

import { Lang } from "./entities/interfaces";

const LocaleContext = React.createContext<Lang>("be");

export default LocaleContext;
