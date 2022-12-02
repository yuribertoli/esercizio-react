import styled from "styled-components";

export let StyledComponents = {
    H1: styled.h1`
        font-weight: 700;
        font-size: 32px;`,

    MainImg: styled.img`
        width: 80%;
        height: auto;
        margin: auto;
        grid-area: img;`,

    GridContainer: styled.div`
        display: grid; 
        grid-template-areas:
        "img    details"
        "colors colors";
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr; 
        gap: 0px 0px;`,

    Container: styled.div`
        width: 95%;
        margin: auto;
        padding: 30px 0;`,

    UlDetails: styled.ul`
        grid-area: details;
        display: flex;
        flex-direction: column;`,

    ButtonAddToCart: styled.button`
        padding: 10px 35px;
        border-radius: 10px;
        background-color: white;
        border: 2px solid rgb(171, 171, 171);`,

    Colors: styled.div`
        grid-area: colors;`,

    UlColors: styled.ul`
        display: flex;
        gap: 20px;`,

    ImgColors: styled.img`
        width: 200px;
        height: auto;
        cursor: pointer;
        margin-top: 10px; `
}




