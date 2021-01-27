import React from "react";
import IconMoon from "react-icomoon";

const iconSet = require("../../asset/my-cv-v2-mid-font/selection.json");

const Icon = (props) => <IconMoon {...{ ...props, iconSet }} />;

export { Icon };
