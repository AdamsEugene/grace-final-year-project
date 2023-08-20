import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* BODY */
    body {
      background: ${(props) => props.theme.background};
      color: ${(props) => props.theme.primary};
      font-family: 'Gilroy-Bold', sans-serif;
      font-family: 'Gilroy-Heavy', sans-serif;
      font-family: 'Gilroy-Light', sans-serif;
      font-family: 'Gilroy-Medium', sans-serif;
      font-family: 'Gilroy-Regular', sans-serif;
                                                
    }

    /*=================================================================================================
      SCROLL BAR
    =================================================================================================*/
    body ::-webkit-scrollbar-thumb {
      cursor: pointer;
      border-radius: 5px;
      -webkit-transition: color 0.2s ease;
      transition: color 0.2s ease;
      border: 0.25rem ${(props) => props.theme.background} solid;
    }

    body ::-webkit-scrollbar-track {
      background: ${(props: any) => props.theme.background};
      border: 0.3rem ${(props) => props.theme.background} solid;
      border-radius: 0;
    }
    body ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 0.95rem;
      height: 1rem;
    }
    body ::-webkit-scrollbar-thumb {
      background-image: linear-gradient(${(props) => props.theme.sidebarBackground}, ${(props) =>
    props.theme.alternateBackground});
      background-image: linear-gradient(${(props) => props.theme.sidebarBackground}, ${(props) =>
    props.theme.alternateBackground});
    }
    body ::-webkit-scrollbar-thumb:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
    
    /* Rechart */
    .recharts-cartesian-grid-vertical line {
      stroke-opacity: 0;
    }

    .recharts-xAxis {
      transform: translate(0, 4%); 
    }

    .recharts-yAxis {
      transform: translate(-2%, 0); 
    }

    .recharts-layer .recharts-cartesian-axis-tick line {
      visibility: hidden;
    }

    .recharts-layer .recharts-cartesian-axis-tick line[orientation="bottom"]{
      /* margin-top: 20rem; */
      /* display: inline; */
      box-sizing: border-box;
      background-color: red;
      height: 20px;
    }

    .recharts-layer .recharts-cartesian-axis-tick text {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 13.2617px;
      line-height: 21px;
      color: #131313;
    }
    

    /* React */
    .react-multiple-carousel__arrow {
      z-index: 3;
    }    

    /* Table */
    .ui.selectable.sortable.very.basic.table.new-table .th {
      font-size: 15.4354px;
      letter-spacing: -0.01em;
      font-family: "Inter";
      font-weight: 600;
      background-color: rgba(106, 84, 245, 0.1);
      color: ${({ theme }) => theme.body};
    }
    .ui.sortable.table thead th {
      font-family: 'Inter' !important;
      font-style: normal !important;
      font-weight: 600 !important;
      font-size: 15.4354px !important;
      line-height: 15px !important;
      letter-spacing: -0.01em !important;
      color: ${({ theme }) => theme.h2Color} !important;
    }
    .ui.selectable.sortable.very.basic.table.new-table .tr {
      cursor: pointer;
      background: ${({ theme }) => theme.card} !important;
    }
    .ui.selectable.sortable.very.basic.table.new-table .tr:hover {
      background-color: rgba(106, 84, 245, 0.1) !important;
    }
    .ui.selectable.sortable.very.basic.table.new-table .page-font-new {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 13.506px;
      letter-spacing: -0.01em;
      /* color: ${({ theme }) => theme.card} !important; */
    }
    .ui.selectable.sortable.very.basic.table.new-table .page-font-new .content {
      padding-left: 0px;
    }
    .ui.selectable.sortable.very.basic.table.new-table .page-font-new-light {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 13.506px;
      letter-spacing: -0.01em;
    }

    
`;

export default GlobalStyle;
