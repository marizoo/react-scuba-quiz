import React from "react";
import styled, { css } from "styled-components";
import {
    colBrand,
    colBrandLight,
    colDark,
    colGray,
    colGrayLight,
    colWhite,
} from "../globalStyle";

const ScButton = styled.button`
    width: 100%;
    min-height: 30px;
    background-color: ${colGray};
    border: none;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 10px;
    color: white;
    margin: 0.8rem 0;
    padding: 8px;
    line-height: 1.6;

    &:hover {
        background: ${colGrayLight};
        color: ${colDark};
    }

    ${(props) =>
        props.brand &&
        css`
            background: ${colBrand};

            &:hover {
                background: ${colBrandLight};
                color: ${colWhite};
            }
        `}

    ${(props) =>
        props.outline &&
        css`
            background: 0;
            border: 2px solid ${colBrand};
            color: ${colBrand};

            &:hover {
                background: ${colBrand};
                color: ${colWhite};
            }
        `}
`;

const Button = ({ children, brand, outline, onClick, type }) => {
    return (
        <ScButton
            brand={brand}
            outline={outline}
            onClick={onClick}
            type={type || "button"}
        >
            {children}
        </ScButton>
    );
};

export default Button;
