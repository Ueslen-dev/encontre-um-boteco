import styled from 'styled-components'

export const Contain = styled.section`
    height:100vh;
`;

export const Form = styled.form`
    width: 100%;
    background: var(--text-white);
    padding: 3rem;
    border-radius: 0.9rem;
    input, select, .fileUploadOverlay{
        margin-bottom: 1rem;
    }
    input[type="file"]{
        position:relative;
        z-index: 9;
        height: 9rem;
        opacity: 0;
        cursor: pointer;
    }
    
    .fileUploadOverlay{
        border-radius: 2rem;
        border: 1px solid var(--text-secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        position:relative;
        margin-top: -10.2rem;
        padding: 1rem 0 1rem;
        img{
            width: 20%;
            padding-right: 2rem;
        }
        span{
            font-size: 1.4rem;
            color: var(--text-secondary);
        }
    }
   @media(min-width: 700px){
        
        .containInput-1, .containInput-2{
            display: grid;
        }
        .containInput-1{
            grid-template-columns: 2fr 1fr;
            grid-gap: 1rem;
        }
        .containInput-2{
            grid-template-columns: 1fr 2fr;
            grid-gap: 1rem;
        }
        .fileUploadOverlay{
        img{
            width: 10%;
        }
        span{
            font-size: 1.6rem;
        }
    }
   }
`;