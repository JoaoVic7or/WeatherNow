import styled from "styled-components"

const Li = styled.li`
    list-style-type: none;
    width: 100%;
    padding: 15px 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #fff;
`

export default function InfoBloco(props:any) {
    const { title, value } = props.info;
    return (
        <Li>
            <strong>{title}:</strong>
            <span>{value}</span>
        </Li>
    )
}