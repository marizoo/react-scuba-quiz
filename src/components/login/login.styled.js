import styled from "styled-components";
import { colGrayLight, colBrandLight } from "../../globalStyle";

export const ScLogin = styled.div`
    .loginTitle {
        color: ${colBrandLight};
        letter-spacing: 2px;
    }
    .loginTitle__small {
    }

    .loginInput {
        width: 100%;
        height: 30px;
        padding-left: 10px;
        background: 0;
        border: 0;
        background: ${colGrayLight};
        border-radius: 10px;
        margin: 1rem 0;

        &:focus {
            outline: none;
        }
    }
`;
