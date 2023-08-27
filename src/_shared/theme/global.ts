/* eslint-disable @typescript-eslint/no-explicit-any */
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* BODY */
    body {
      background: ${(props) => props.theme.background};
      color: ${(props) => props.theme};
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
      background-image: linear-gradient(${(props) =>
        props.theme.sidebarBackground}, ${(props) =>
  props.theme.alternateBackground});
      background-image: linear-gradient(${(props) =>
        props.theme.sidebarBackground}, ${(props) =>
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
    
    .rs-sidenav-default, .rs-sidenav-default .rs-dropdown-toggle, .rs-sidenav-default .rs-sidenav-item, .rs-sidenav-default .rs-sidenav-toggle-button {
       background: ${(props: any) => props.theme.dashboardBackground};
    }

    .rs-sidenav-default .rs-dropdown .rs-dropdown-toggle:hover, .rs-sidenav-default .rs-dropdown.rs-dropdown-open .rs-dropdown-toggle, .rs-sidenav-default .rs-sidenav-item:hover, .rs-sidenav-default .rs-sidenav-toggle-button:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }

    .rs-breadcrumb-item {
      font-size: 32px;
    }

    .rs-breadcrumb-separator {
      font-size: 32px;
    }

    .rs-panel-bordered {
      border-color: ${({ theme }) => theme.borderColor};
      box-shadow: ${({ theme }) => theme.cardShadow};
    }

    .rs-panel-header {
      color: ${({ theme }) => theme.subHeading};
    }

     /* INPUT */
  .rs-input {
    background:${({ theme }) => theme.background};
    border-color:${({ theme }) => theme.border}
  }
  .react-tel-input .form-control{
     background:${({ theme }) => theme.background};
    border-color:${({ theme }) => theme.border};
    width:100%;
    height: 3rem;
    font-size:20px;
  }

  .rs-input:disabled {
    background:${({ theme }) => theme.background.cards};
  }

  .jcWlLe .containerStyle .inputStyle {
     background:${({ theme }) => theme.background};
    border-color:${({ theme }) => theme.border};
  }

  .rs-picker-default .rs-picker-toggle.rs-btn {
    background:${({ theme }) => theme.background} !important;
    border-color:${({ theme }) => theme.border} !important;
    border:none !important;
  }

  .rs-picker-input {
    border-color:${({ theme }) => theme.border} !important;
  }

  .rs-picker-menu {
    background:${({ theme }) => theme.background} !important;
    border-color:${({ theme }) => theme.border} !important;
  }

  .rs-input-group {
    border-color:${({ theme }) => theme.border} !important; 
  }

  .rs-input-group-addon {
    background:${({ theme }) => theme.background.cards} !important;
  }

  /* UPLOAD */
  .rs-uploader-draggable .rs-uploader-trigger-customize .rs-uploader-trigger-btn {
    background:${({ theme }) => theme.background} !important;
  }
  
  /* LIST */
  .rs-list-item, .rs-list {
    background: transparent !important;
    border-color:${({ theme }) => theme.border} !important;
    box-shadow:none !important;
  }

  .rs-placeholder-active .rs-placeholder-grid-col>p, .rs-placeholder-active .rs-placeholder-paragraph-graph-image, .rs-placeholder-active .rs-placeholder-paragraph-rows>p, .rs-placeholder-active.rs-placeholder-graph {
    -webkit-animation: placeholder-active 3s ease infinite;
    animation: placeholder-active 3s ease infinite;
    background: ${({ theme }) =>
      `linear-gradient(-45deg, ${theme.hoverColor} 25%,${theme.dashboardBackground} 37%,${theme.sidebarShadow} 63%)`};
}
`;

export default GlobalStyle;
