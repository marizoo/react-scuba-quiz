import styled from "styled-components";
import {
    colGrayLight,
    colBrand,
    colWhite,
    colBrandLight,
} from "../../globalStyle";

export const ScLogin = styled.div`
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    min-height: 100px;
    border: 1px solid ${colGrayLight};
    border-radius: 10px;

    .loginWrapper {
        width: 80%;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        .loginTitle {
        }
        .loginTitle__small {
            margin: 1rem 0;
        }

        .loginInput {
            width: 100%;
            height: 30px;
            margin: 1rem 0;
            padding-left: 10px;
            background: 0;
            border: 0;
            background: ${colGrayLight};

            &:focus {
                outline: none;
            }
        }
        .loginButton {
            width: 100%;
            height: 30px;
            background: ${colBrand};
            border: 0;
            color: ${colWhite};
            letter-spacing: 1px;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background: hotpink;
            }
        }

        /* why sass system doesn work? */
    }
`;
