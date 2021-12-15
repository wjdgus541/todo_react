import {createGlobalStyle} from "styled-components";
import ToDoList from "./components/ToDoList";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
li, ul {
    list-style: none;
}
input {
    outline:none;
    background:${(props) => props.theme.bgColor};
    border:none;
    flex:1;
    color:#A19882;
    font-weight:700;
    /* border-bottom:${(props) => props.theme.accentColor} solid 2px; */
    &:focus {
    background:${(props) => props.theme.accentColor};
    color:#A19882;
    }
}
form {
    border:${(props) => props.theme.accentColor} solid 2px;
    max-width:400px;
    margin : 0 auto;
    margin-bottom: 20px;
    background:${(props) => props.theme.accentColor};
    display:flex;
    justify-content: space-between;
    button {
        color:${(props) => props.theme.textColor};
        font-size:20px;
        background:${(props) => props.theme.accentColor};
        &:hover {
            cursor:pointer;
        }
    }

}
table {
    border-collapse: collapse;
	border-spacing: 0;
}
* {
    box-sizing:border-box
}
body {
  line-height: 1;
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${props => props.theme.bgColor};
  color:${props => props.theme.textColor};
}
button {
  background-color:${props => props.theme.bgColor};
  border:none;
}
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <ToDoList />
        </>
    );
}

export default App;