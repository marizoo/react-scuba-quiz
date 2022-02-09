import styled from "styled-components";
import { colBrand, colGrayLight, colBrandLight } from "../../globalStyle";

export const ScQuiz = styled.div`
    .loading {
        color: ${colBrand};
    }

    .quizQuestionNumber {
        color: ${colGrayLight};
    }

    .quizLine {
        width: 80%;
        margin: 1rem 0;
        height: 3px;
        background: ${colBrandLight};
    }

    .quizQuestion {
        margin-bottom: 1rem;
    }
    .quizButtonContainer {
    }

    .showScore {
    }
`;
