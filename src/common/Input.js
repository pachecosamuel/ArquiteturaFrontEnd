// src/common/Input.js

import React from 'react';
import { Input as AntdInput } from 'antd';

export const Input = ({ ...rest }) => {
    return (
        <AntdInput {...rest} />
    );
};

export default Input;
