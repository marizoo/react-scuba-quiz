import styled from "styled-components";
import { colGrayLight } from "../globalStyle";

export const Container = styled.div`
    width: 300px;
    min-height: 100px;
    border: 1px solid ${colGrayLight};
    border-radius: 10px;

    margin: 30px 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.6;
`;
