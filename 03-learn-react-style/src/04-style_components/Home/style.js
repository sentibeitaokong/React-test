import styled from 'styled-components'
export const HomeWrapper=styled.div`
    fontSize:12px;
    color:red;
    .banner{
        background-color:blue;
        span{
            color:yellow;
        }
    }   
`

export const TitleWrapper=styled.h2`
    color:${props=>props.theme.themeColor};
    font-size:${props=>props.theme.fontSize};
`
