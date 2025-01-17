<?php
/**
 * Função para gerar o caminho do arquivo com a última modificação
 * @param string $file Caminho relativo do arquivo
 * @return string URL com a query string baseada na última modificação
 */
function getFileWithVersion($file) {
    // Caminho completo do arquivo no servidor
    $filePath = $_SERVER['DOCUMENT_ROOT'] . '/' . $file;

    // Verifica se o arquivo existe
    if (file_exists($filePath)) {
        // Adiciona o timestamp da última modificação como query string
        return $file . '?v=' . filemtime($filePath);
    } else {
        // Retorna o arquivo sem modificação se ele não existir
        return $file;
    }
}

// Exemplo de uso
$cssFile = getFileWithVersion('assets/styles.css');
$jsFile = getFileWithVersion('assets/script.js');

?>

<!DOCTYPE html>

<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Next Systems - O seu modo de negociar.</title>
    <link rel="icon" href="img/fivecon.png" type="image/png">

    <!-- Estilos CSS -->
    <link rel="stylesheet" href="<?= getFileWithVersion("slick/slick.css")?>">
    <link rel="stylesheet" href="slick/slick-theme.css">
    <link rel="stylesheet" href="slick/slick.min.js">
    <link rel="stylesheet" href="<?= getFileWithVersion("css/style.css")?>">
    <link rel="stylesheet" href="<?= getFileWithVersion("css/main.css")?>"> <!-- Caminho ajustado -->
    <script src="bundle.js"></script>

    <!-- jQuery -->
    <script src="src/jquery-min.js"></script>

    <!-- amCharts Scripts -->
    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Dark.js"></script>
    <script src="lib/themes/Animated.js"></script>
    <script src="<?= getFileWithVersion("JavaScript/configChart.js")?>"></script>

    <!-- Scripts Adicionais -->
    <script src="lib/themes/stock.js"></script>
    <script src="lib/themes/Responsive.js"></script>
    <script src="lib/themes/pt_BR.js"></script>
    <script src="lib/plugins/json.js"></script>
    <script src="lib/plugins/jquery.mask.min.js"></script>

    <!-- Scripts Personalizados -->
    <script src="/script_desofuscado.js"></script>
    <script src="src/profileIdCopy.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <!-- Outros Metadados -->
    <meta name="theme-color" content="#25e612">
    <meta name="description" content="Transforme seu modo de investir com uma plataforma que funciona para você.">
    <meta name="author" content="2D - Patrick frança Dev">
    <link rel="icon" href="img/LOGO" type="image/x-icon">
    <link rel="stylesheet" href="css/icons.css">
</head>
<style>
    :root {
        --primary-color: #25e612;
        --secondary-color: #000000;
        --primary-text-color: #000000;
        --secondary-text-color: #ffffff;
        --buy-button: #188432;
        --sell-button: #d62940;
        --upCandle: #188432;
        --downCandle: #d62940;
        --deposit-button: #188432;
        --deposit-button-text: #fff;
        --login-button: #0d785f;
        --login-button-text: #000000;
        --deposit-options-text: #fff;
        --active-deposit-options-button: #0d785f;
        --active-deposit-options-text: #ffffff;
        --deposit-options-button: #1a1d21;
        --top-trader-profit: #1dff52;
    }
</style>
<style type="text/css"></style>
</head>


<body oncontextmenu="return false" style="">
    <div class="pageContainer">
        <div class="app">

            <div class="layout">
                <aside class="sidebarMenu">
                    <div class="sidebarMenuContent">
                        <div class="sidebarMenuBtns">

                            <ul>
                                <div class="sidebarMenuLogo">
                                    <img src="img/favicon.png" alt="">
                                </div>
                                <li>
                                    <button class="panelBtnOpen"
                                        data-target="components/panelLeft/panelLeftNegotiation.php">
                                        <span class="sidebarMenuItemIcon">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.10793 9.0922L4.2909 12.9416C4.15131 13.2373 4.15663 13.5162 4.2784 13.7271M9.20888 14.4614L4.96666 14.1103C4.81162 14.0975 4.67115 14.0572 4.5533 13.9915C4.43545 13.9259 4.34252 13.8363 4.27983 13.7278L14.92 7.58464M1.08117 8.41501L11.7206 2.27234M6.79233 1.53828L11.0345 1.8894C11.3604 1.91638 11.5993 2.06042 11.7211 2.27133C11.8432 2.48279 11.8488 2.76221 11.7092 3.05794L9.89217 6.90736"
                                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                        <span class="sidebarMenuItemName">Histórico</span>
                                    </button>
                                </li>
                                <li>

                                    <button class="panelBtnOpen" data-target="components/panelLeft/panelLeftEvents">
                                        <span class="sidebarMenuItemIcon">
                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.4258 0.00866708C14.605 0.037351 14.7652 0.134503 14.8712 0.27876C14.9772 0.423017 15.0203 0.602567 14.9911 0.777926C14.6881 2.59498 14.2851 4.09016 13.7821 5.26348C13.3255 6.32825 12.5519 7.58656 11.4613 9.03841L11.1932 9.39055L11.0545 9.56946C10.6299 10.1146 10.369 10.7648 10.3013 11.447C10.2063 12.4068 9.99699 13.0938 9.67331 13.5079C8.5046 14.7683 7.41875 15.5913 6.41576 15.9768C6.3616 15.9976 6.30292 16.0046 6.24525 15.997C6.18758 15.9895 6.13283 15.9677 6.08616 15.9337C6.03949 15.8997 6.00245 15.8546 5.97852 15.8027C5.9546 15.7508 5.94458 15.6938 5.94942 15.6371L6.21135 12.5631C6.21555 12.5143 6.2088 12.4653 6.19157 12.4194C6.17433 12.3735 6.14704 12.3318 6.11161 12.2974C6.07617 12.2629 6.03345 12.2364 5.98644 12.2198C5.93944 12.2032 5.88929 12.1968 5.83951 12.2012C5.29465 12.2492 4.74647 12.0372 4.19499 11.565C3.70924 11.1493 3.45244 10.7299 3.4246 10.3069L3.42152 10.2322C3.42137 10.1807 3.40912 10.13 3.38572 10.084C3.36232 10.0379 3.3284 9.99774 3.28659 9.96658C3.24477 9.93541 3.19619 9.91408 3.14459 9.90425C3.093 9.89441 3.03978 9.89633 2.98907 9.90986L0.432747 10.592C0.370263 10.6087 0.304211 10.6078 0.242263 10.5892C0.180315 10.5707 0.125013 10.5353 0.0827776 10.4873C0.0405426 10.4392 0.0131084 10.3804 0.00366096 10.3177C-0.0057865 10.255 0.00314047 10.1909 0.0294052 10.133L0.165678 9.83481L0.298185 9.55036L0.426926 9.27998L0.552243 9.02367L0.673451 8.7811L0.732685 8.66518L0.848415 8.44371L0.960036 8.23599L1.01482 8.13748L1.12096 7.9512L1.22368 7.77865C1.2739 7.69601 1.32275 7.6185 1.37023 7.54613L1.46336 7.40877C1.58502 7.23454 1.69664 7.09773 1.79822 6.99834C2.17691 6.62756 2.91682 6.28559 4.01797 5.97244C4.59105 5.80942 5.11062 5.50265 5.52519 5.08256C5.62791 4.97825 5.72972 4.87617 5.83061 4.77633L6.12986 4.48283C6.36602 4.25367 6.60596 4.02827 6.84958 3.80672L7.12657 3.55878L7.39707 3.32425C8.10971 2.71582 8.75432 2.2462 9.33092 1.9154C9.6409 1.73782 10.0011 1.5569 10.4115 1.37263L10.6926 1.24933L10.8388 1.18735L11.1425 1.06271C11.2462 1.02094 11.3523 0.979064 11.461 0.937072L11.7948 0.810425L12.143 0.683109L12.5066 0.554452L12.885 0.425126L13.278 0.294459L13.4804 0.229125L13.8961 0.0971185L14.1097 0.0311149C14.2118 -0.000441426 14.3201 -0.00812983 14.4258 0.00866708ZM3.1678 11.446C3.29357 11.4465 3.41558 11.4592 3.53382 11.4842C3.26401 11.612 3.09339 12.058 3.02194 12.8224L3.01338 12.9239C3.00954 12.9723 3.01649 13.0209 3.03374 13.0664C3.05099 13.1119 3.07814 13.1532 3.11331 13.1874C3.14848 13.2217 3.19082 13.248 3.23742 13.2646C3.28401 13.2812 3.33374 13.2878 3.38317 13.2837C4.22067 13.2145 4.70664 13.0417 4.84109 12.7654C4.86688 12.8805 4.87978 12.9991 4.87978 13.1213C4.87978 13.7377 4.42325 14.1845 3.5102 14.4614L2.0355 14.6068C1.98523 14.6118 1.93447 14.6058 1.88685 14.5893C1.83923 14.5728 1.79594 14.5462 1.76007 14.5114C1.7242 14.4766 1.69664 14.4344 1.67938 14.3879C1.66212 14.3415 1.65558 14.2919 1.66023 14.2426L1.79822 12.7862C2.08127 11.8928 2.53779 11.446 3.1678 11.446ZM13.4359 1.65708L13.2483 1.72007L12.8853 1.84504C12.7669 1.88658 12.651 1.92791 12.5378 1.969L12.2057 2.0913C11.882 2.21325 11.5817 2.33275 11.3048 2.44979L11.036 2.56672C10.6899 2.71767 10.3519 2.88608 10.0236 3.0713C9.23128 3.52595 8.24415 4.319 7.08172 5.44675L6.79924 5.7235C6.70406 5.81776 6.60773 5.91447 6.51026 6.01365C5.92993 6.60168 5.20262 7.0311 4.40042 7.25934C3.91456 7.39771 3.52047 7.53776 3.22224 7.67579C2.98325 7.78602 2.83088 7.88352 2.76686 7.94584C2.70751 8.00391 2.63446 8.0975 2.54772 8.22661L2.47068 8.34588L2.38714 8.48224L2.34297 8.55662L2.25052 8.71778L2.62887 8.61693C2.88241 8.5493 3.14845 8.53969 3.4064 8.58885C3.66434 8.63801 3.90726 8.74461 4.11633 8.9004C4.3254 9.0562 4.49501 9.25699 4.61202 9.48724C4.72904 9.71749 4.79031 9.97101 4.7911 10.2282L4.79212 10.2318L4.80685 10.2586L4.82876 10.2891L4.86231 10.33L4.88423 10.3545L4.93867 10.4114L5.00886 10.4784C5.03511 10.5026 5.06444 10.5286 5.09686 10.5565C5.36666 10.7877 5.55293 10.8681 5.68851 10.8681L5.71693 10.8667C5.96565 10.8449 6.21625 10.8765 6.45115 10.9595C6.68604 11.0424 6.89955 11.1746 7.0767 11.3469C7.25385 11.5191 7.39035 11.7272 7.47663 11.9565C7.5629 12.1858 7.59687 12.4308 7.57614 12.6743L7.48575 13.7377C7.8818 13.4015 8.25673 13.0421 8.60846 12.6616C8.73891 12.4646 8.86937 12.0106 8.93819 11.317C9.03072 10.3869 9.38643 9.50051 9.96537 8.75731C10.2318 8.41557 10.4801 8.08522 10.7104 7.76626L10.9347 7.45165C11.6626 6.4157 12.1906 5.51108 12.519 4.74517C12.875 3.91527 13.1818 2.88468 13.4359 1.65708ZM10.1869 3.74004C10.5955 3.74004 10.9874 3.89889 11.2764 4.18164C11.5654 4.46438 11.7277 4.84787 11.7277 5.24774C11.7277 5.6476 11.5654 6.03109 11.2764 6.31384C10.9874 6.59659 10.5955 6.75543 10.1869 6.75543C9.77826 6.75543 9.38636 6.59659 9.09741 6.31384C8.80846 6.03109 8.64612 5.6476 8.64612 5.24774C8.64612 4.84787 8.80846 4.46438 9.09741 4.18164C9.38636 3.89889 9.77826 3.74004 10.1869 3.74004Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </span>
                                        <span class="sidebarMenuItemName">Novidades</span>
                                    </button>
                                </li>

                                <li>
                                    <button class="panelBtnOpen" data-target="components/panelLeft/topTraders">
                                        <span class="sidebarMenuItemIcon">
                                            <svg viewBox="0 0 24 24" role="presentation" focusable="false"
                                                aria-hidden="true">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v.023h2.133c.38 0 .857.069 1.268.347.468.317.732.825.732 1.418V9.93c0 1.165-.31 2.104-.828 2.839-.51.725-1.18 1.191-1.81 1.49a6.286 6.286 0 0 1-1.693.512 6.305 6.305 0 0 1-.775.073h-.026a1 1 0 0 1-.406-.085c-.25.334-.52.638-.794.911-1.008 1.005-2.128 1.647-2.801 1.978V19h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-1.353c-.673-.331-1.793-.973-2.801-1.978a8.435 8.435 0 0 1-.765-.872 1 1 0 0 1-.3.046h-.028a3.888 3.888 0 0 1-.218-.01 6.307 6.307 0 0 1-.556-.063 6.286 6.286 0 0 1-1.693-.512c-.631-.299-1.3-.765-1.81-1.49C2.31 12.033 2 11.094 2 9.929V7.79c0-.594.264-1.102.733-1.42.41-.277.887-.346 1.267-.346h2V6Zm0 2.023H4v1.906c0 .792.205 1.32.464 1.687.264.376.628.644 1.03.834.287.136.58.226.842.285A6.678 6.678 0 0 1 6 10.625V8.023Zm11.654 4.742a6.674 6.674 0 0 0 .346-2.14V8.023h2.133v1.906c0 .792-.205 1.32-.463 1.687-.265.376-.629.644-1.031.834-.34.161-.689.258-.985.315ZM16 6H8v4.625c0 1.548.714 2.734 1.61 3.628.865.86 1.857 1.404 2.39 1.656.533-.252 1.525-.795 2.39-1.656.896-.894 1.61-2.08 1.61-3.628V6Z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span class="sidebarMenuItemName">Eventos</span>
                                    </button>
                                </li>
                                <li>
                                    <button class="panelBtnOpen" data-target="components/panelLeft/panelLeftHelp">
                                        <span class="sidebarMenuItemIcon">
                                            <svg width="17" height="20" viewBox="0 0 17 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9 20L8.75 17H8.5C6.13333 17 4.125 16.175 2.475 14.525C0.825 12.875 0 10.8667 0 8.5C0 6.13333 0.825 4.125 2.475 2.475C4.125 0.825 6.13333 0 8.5 0C9.68333 0 10.7877 0.220667 11.813 0.662C12.8383 1.10333 13.7383 1.71167 14.513 2.487C15.2877 3.26233 15.8957 4.16233 16.337 5.187C16.7783 6.21167 16.9993 7.316 17 8.5C17 9.75 16.796 10.95 16.388 12.1C15.98 13.25 15.4213 14.3167 14.712 15.3C14.0027 16.2833 13.161 17.175 12.187 17.975C11.213 18.775 10.1507 19.45 9 20ZM11 16.35C12.1833 15.35 13.146 14.1793 13.888 12.838C14.63 11.4967 15.0007 10.0507 15 8.5C15 6.68333 14.3707 5.146 13.112 3.888C11.8533 2.63 10.316 2.00067 8.5 2C6.684 1.99933 5.14667 2.62867 3.888 3.888C2.62933 5.14733 2 6.68467 2 8.5C2 10.3153 2.62933 11.853 3.888 13.113C5.14667 14.373 6.684 15.002 8.5 15H11V16.35ZM8.475 13.975C8.75833 13.975 9 13.875 9.2 13.675C9.4 13.475 9.5 13.2333 9.5 12.95C9.5 12.6667 9.4 12.425 9.2 12.225C9 12.025 8.75833 11.925 8.475 11.925C8.19167 11.925 7.95 12.025 7.75 12.225C7.55 12.425 7.45 12.6667 7.45 12.95C7.45 13.2333 7.55 13.475 7.75 13.675C7.95 13.875 8.19167 13.975 8.475 13.975ZM7.75 10.8H9.25C9.25 10.3 9.3 9.95 9.4 9.75C9.5 9.55 9.81667 9.18333 10.35 8.65C10.65 8.35 10.9 8.025 11.1 7.675C11.3 7.325 11.4 6.95 11.4 6.55C11.4 5.7 11.1127 5.06267 10.538 4.638C9.96333 4.21333 9.284 4.00067 8.5 4C7.76667 4 7.15 4.20433 6.65 4.613C6.15 5.02167 5.8 5.51733 5.6 6.1L7 6.65C7.08333 6.36667 7.24167 6.08767 7.475 5.813C7.70833 5.53833 8.05 5.40067 8.5 5.4C8.95 5.39933 9.28767 5.52433 9.513 5.775C9.73833 6.02567 9.85067 6.30067 9.85 6.6C9.85 6.88333 9.76667 7.13767 9.6 7.363C9.43333 7.58833 9.23333 7.81733 9 8.05C8.41667 8.55 8.06267 8.946 7.938 9.238C7.81333 9.53 7.75067 10.0507 7.75 10.8Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </span>
                                        <span class="sidebarMenuItemName">Ajuda</span>
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div class="playersOnline">
                            <p class="playersOnlineNumbers">1753</p>
                            <p class="playersOnlineSubTitle">online</p>
                        </div>
                    </div>
                </aside>

                <div class="panelLeftTabs" id="panelLeftTabsId">
                </div>
                <main class="layoutMain">
                    <div class="mainContent">
                        <header>
                            <div class="headerContent">
                                <div class="rowPanelheader">
                                    <div class="currentCurrency" id="openNewSymbol">
                                        <div class="currencyIcon">
                                            <svg style="width: 24px; height: 24px;" aria-hidden="true"
                                                class="ohGHbMkZKR" focusable="false" role="presentation"
                                                viewBox="0 0 24 24" color="inherit" dataicon="icon-plusbig">
                                                <path fill="#fff" fill-rule="evenodd"
                                                    d="M12 3a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V4a1 1 0 0 1 1-1Z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="currentCurrency" id="openSplitScreen">
                                        <div class="currencyIcon">
                                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect x="2" y="2" width="16" height="21" rx="2" stroke="#ECEDF0"
                                                    stroke-width="4"></rect>
                                                <rect x="2" y="31" width="16" height="11" rx="2" stroke="#ECEDF0"
                                                    stroke-width="4"></rect>
                                                <rect x="26" y="2" width="16" height="11" rx="2" stroke="#ECEDF0"
                                                    stroke-width="4"></rect>
                                                <rect x="26" y="21" width="16" height="21" rx="2" stroke="#ECEDF0"
                                                    stroke-width="4"></rect>
                                            </svg>
                                        </div>
                                        <div class="bottomLateralGraphButtons"
                                            style="display: flex; height: 3rem; z-index: 9999; left: 0; right: 0; bottom: 0; top: 0;">
                                            <div class="graphOptions graphicsType screenOptions"
                                                style="width: 129.1px;">
                                                <div class="graphOptionsContent" style="width: 100%;">
                                                    <button class="active">
                                                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="2" y="2" width="40" height="40" rx="2"
                                                                stroke="#ECEDF0" stroke-width="4"></rect>
                                                        </svg>
                                                        <span>1 Tela</span>
                                                    </button>
                                                    <button>
                                                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="2" y="2" width="16" height="40" rx="2"
                                                                stroke="#ECEDF0" stroke-width="4"></rect>
                                                            <rect x="26" y="2" width="16" height="40" rx="2"
                                                                stroke="#ECEDF0" stroke-width="4"></rect>
                                                        </svg>
                                                        <span>2 Telas</span>
                                                    </button>
                                                    <button>
                                                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="42" y="2" width="16" height="16" rx="2"
                                                                transform="rotate(90 42 2)" stroke="#ECEDF0"
                                                                stroke-width="4"></rect>
                                                            <rect x="18" y="2" width="16" height="16" rx="2"
                                                                transform="rotate(90 18 2)" stroke="#ECEDF0"
                                                                stroke-width="4"></rect>
                                                            <rect x="42" y="26" width="16" height="40" rx="2"
                                                                transform="rotate(90 42 26)" stroke="#ECEDF0"
                                                                stroke-width="4"></rect>
                                                        </svg>
                                                        <span>3 Telas</span>
                                                    </button>
                                                    <button>
                                                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="42" y="2" width="16" height="16" rx="2"
                                                                transform="rotate(90 42 2)" stroke="#ECEDF0"
                                                                stroke-width="4"></rect>
                                                            <rect x="18" y="2" width="16" height="16" rx="2"
                                                                transform="rotate(90 18 2)" stroke="#ECEDF0"
                                                                stroke-width="4"></rect>
                                                            <rect x="42" y="26" width="16" height="16" rx="2"
                                                                transform="rotate(90 42 26)" stroke="#ECEDF0"
                                                                stroke-width="4"></rect>
                                                            <rect x="18" y="26" width="16" height="16" rx="2"
                                                                transform="rotate(90 18 26)" stroke="#ECEDF0"
                                                                stroke-width="4"></rect>
                                                        </svg>
                                                        <span>4 Telas</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="currentCurrency active">
                                            <svg viewBox="0 0 24 24" role="presentation" focusable="false"
                                                aria-hidden="true">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                            <div class="currencyIcon"><img draggable="false" src="cripto/ETHUSD.png"
                                                    alt=""></div>
                                            <div class="currencyDetails">
                                                <p class="currencyName">ETH/USD</p>
                                                <div
                                                    style="display: flex; flex-direction: row;gap: .2rem;align-items: center; justify-content: center;">
                                                    <p class="profit"><b style="display: none;">•</b> Cripto •</p>
                                                    <span>95%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="bottomLateralGraphButtons">
                                        <div class="graphOptions graphicsType">
                                            <div class="graphOptionsContent">
                                                <button>
                                                    <svg class="ohGHbMkZKR" viewBox="0 0 24 24" role="presentation"
                                                        focusable="false" aria-hidden="true">
                                                        <path fill="currentColor" fill-rule="evenodd"
                                                            d="m14.842 8.058-1.845 5.774a1.2 1.2 0 0 1-1.143.835H8.507L6.972 18.27a1.2 1.2 0 0 1-1.104.73H3a1 1 0 1 1 0-2h2.34l1.534-3.604a1.2 1.2 0 0 1 1.104-.73h3.292l2.37-7.42c.348-1.085 1.87-1.121 2.268-.054l2.786 7.475H21a1 1 0 1 1 0 2h-2.861a1.2 1.2 0 0 1-1.124-.781l-2.173-5.828Z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                    <span>Gráfico de área</span>
                                                </button>
                                                <button>
                                                    <svg class="ohGHbMkZKR" viewBox="0 0 24 24" role="presentation"
                                                        focusable="false" aria-hidden="true">
                                                        <path fill="currentColor" fill-rule="evenodd"
                                                            d="M7 3a1 1 0 0 1 1 1v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8v2a1 1 0 1 1-2 0v-2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V4a1 1 0 0 1 1-1Zm10 4a1 1 0 0 1 1 1v2h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1v2a1 1 0 1 1-2 0v-2h-1a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1V8a1 1 0 0 1 1-1ZM5 8v8h4V8H5Zm10 4v4h4v-4h-4Z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                    <span>Candlesticks Japoneses</span>
                                                </button>
                                                <button>
                                                    <svg class="ohGHbMkZKR" viewBox="0 0 24 24" role="presentation"
                                                        focusable="false" aria-hidden="true">
                                                        <path fill="currentColor" fill-rule="evenodd"
                                                            d="M12 4a1 1 0 0 1 1 1v8h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-6h-1a1 1 0 0 1 0-2h1V5a1 1 0 0 1 1-1ZM5 7a1 1 0 0 1 1 1v3h1a1 1 0 1 1 0 2H6v6a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0v-9h-1a1 1 0 0 1-1-1Z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                    <span>Barras</span>
                                                </button>
                                            </div>
                                        </div>

                                        <ul class="graphBtnsContainer">
                                            <li class="graphBtn openOptionsGraph" title="Tipo do gráfico">
                                                <button>
                                                    <svg class="ohGHbMkZKR" viewBox="0 0 24 24" role="presentation"
                                                        focusable="false" aria-hidden="true">
                                                        <path fill="currentColor" fill-rule="evenodd"
                                                            d="M7 3a1 1 0 0 1 1 1v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8v2a1 1 0 1 1-2 0v-2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V4a1 1 0 0 1 1-1Zm10 4a1 1 0 0 1 1 1v2h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1v2a1 1 0 1 1-2 0v-2h-1a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1V8a1 1 0 0 1 1-1ZM5 8v8h4V8H5Zm10 4v4h4v-4h-4Z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </button>

                                                <div class="graphOptions graphicsType">
                                                    <div class="graphOptionsContent">
                                                        <button>
                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                role="presentation" focusable="false"
                                                                aria-hidden="true">
                                                                <path fill="currentColor" fill-rule="evenodd"
                                                                    d="m14.842 8.058-1.845 5.774a1.2 1.2 0 0 1-1.143.835H8.507L6.972 18.27a1.2 1.2 0 0 1-1.104.73H3a1 1 0 1 1 0-2h2.34l1.534-3.604a1.2 1.2 0 0 1 1.104-.73h3.292l2.37-7.42c.348-1.085 1.87-1.121 2.268-.054l2.786 7.475H21a1 1 0 1 1 0 2h-2.861a1.2 1.2 0 0 1-1.124-.781l-2.173-5.828Z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg>
                                                            <span>Gráfico de área</span>
                                                        </button>
                                                        <button>
                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                role="presentation" focusable="false"
                                                                aria-hidden="true">
                                                                <path fill="currentColor" fill-rule="evenodd"
                                                                    d="M7 3a1 1 0 0 1 1 1v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8v2a1 1 0 1 1-2 0v-2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V4a1 1 0 0 1 1-1Zm10 4a1 1 0 0 1 1 1v2h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1v2a1 1 0 1 1-2 0v-2h-1a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1V8a1 1 0 0 1 1-1ZM5 8v8h4V8H5Zm10 4v4h4v-4h-4Z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg>
                                                            <span>Candlesticks Japoneses</span>
                                                        </button>
                                                        <button>
                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                role="presentation" focusable="false"
                                                                aria-hidden="true">
                                                                <path fill="currentColor" fill-rule="evenodd"
                                                                    d="M12 4a1 1 0 0 1 1 1v8h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-6h-1a1 1 0 0 1 0-2h1V5a1 1 0 0 1 1-1ZM5 7a1 1 0 0 1 1 1v3h1a1 1 0 1 1 0 2H6v6a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0v-9h-1a1 1 0 0 1-1-1Z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg>
                                                            <span>Barras</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="graphBtn" id="indicator" title="Indicadores">
                                                <button>
                                                    <svg class="ohGHbMkZKR" viewBox="0 0 24 24" role="presentation"
                                                        focusable="false" aria-hidden="true">
                                                        <path fill="currentColor" fill-rule="evenodd"
                                                            d="M12 1a1 1 0 0 1 1 1v2.17a3.001 3.001 0 0 1 1.308 4.747L18 16h3a1 1 0 1 1 0 2h-1.957l.92 1.764a2 2 0 0 1-.85 2.698L16.787 18H13v1a1 1 0 1 1-2 0v-1H7.213l-2.326 4.462a2 2 0 0 1-.85-2.698L4.958 18H3a1 1 0 1 1 0-2h3l3.692-7.083A3.001 3.001 0 0 1 11 4.17V2a1 1 0 0 1 1-1Zm-.587 8.942L8.255 16H11v-1a1 1 0 1 1 2 0v1h2.745l-3.158-6.058a3.008 3.008 0 0 1-1.174 0ZM12 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="rightHeaderBtns">
                                    <div>
                                        <img src="img/Logo NextSystems.png" class="logo" alt="Logo" draggable="false">
                                    </div>
                                    <button class="profile sidebarBtnOpen"
                                        data-target="components/sideBar/profileSideBar">
                                        <span class="iconProfile">
                                            <svg viewBox="0 0 24 24" role="presentation" focusable="false"
                                                aria-hidden="true">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M12 3a5 5 0 0 0-3.456 8.613c-1.895.74-3.174 2.046-4.01 3.346a10.917 10.917 0 0 0-1.506 3.789l-.013.075-.003.023-.001.008v.005a1 1 0 0 0 1.979.285v-.007l.008-.042.036-.186a8.914 8.914 0 0 1 1.182-2.868C7.197 14.514 8.91 13 12 13c3.091 0 4.802 1.514 5.784 3.04a8.915 8.915 0 0 1 1.218 3.055l.006.035.001.007.001.005v.002a1 1 0 0 0 1.98-.285v-.006l-.002-.007-.003-.023a7.202 7.202 0 0 0-.063-.333 10.92 10.92 0 0 0-1.455-3.53c-.837-1.301-2.116-2.608-4.01-3.347A5 5 0 0 0 12 3ZM9 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span class="arrowIcon">
                                            <svg width="1.5rem" viewBox="0 0 24 24" role="presentation"
                                                focusable="false" aria-hidden="true">
                                                <path fill="var(--primary-color)"
                                                    d="M5 10.1 12 8l7 2.1V15l-7-2.1L5 15v-4.9Z"></path>
                                            </svg>
                                        </span>
                                    </button>
                                    <button class="accountBtn" data-target="components/sideBar/accountSideBar">
                                        <p>R$&nbsp;0,00</p>
                                        <span>
                                            Conta real
                                            <svg viewBox="0 0 24 24" role="presentation" focusable="false"
                                                aria-hidden="true" color="var(--contrast-secondary)"
                                                style="width: 1rem; height: 1rem;">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M7.293 9.293a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L12 12.586 8.707 9.293a1 1 0 0 0-1.414 0Z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </button>

                                    <button class="payments panelBtnOpen"
                                        data-target="components/sideBar/valueDepositSideBar">
                                        <svg viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                            <path fill="currentColor" fill-rule="evenodd" d="M17 4.775a1 1 0 0 0-1.316-.949L9.162 6H17V4.775ZM19 6V4.775a3 3 0 0 0-3.949-2.846l-11 3.666A3 3 0 0 0 2 8.442V17a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3ZM5 8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5Z" clip-rule="evenodd"></path>
                                            <path fill="currentColor" d="M16 13a1 1 0 1 1 1.998 0A1 1 0 0 1 16 13Z">
                                            </path>
                                        </svg>
                                        <span>Depositar</span>
                                    </button>
                                </div>
                            </div>
                        </header>
                        <div class="layoutBody">
                            <div class="platformContainerTrading">
                                <div class="platformContainerTradingMain">
                                    <div class="tradeFrameSection">
                                        <div class="menuTrade">
                                            <header>
                                                <h2>Análise Técnica</h2>
                                                <div class="menuHeaderRow" style="display: flex;"><button><svg
                                                            width="1.5rem" height="1.5rem" viewBox="0 0 24 24"
                                                            role="presentation" focusable="false" aria-hidden="true">
                                                            <path fill="#fff" fill-rule="evenodd"
                                                                d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z"
                                                                clip-rule="evenodd"></path>
                                                        </svg></button></div>
                                            </header>
                                            <div class="contentWrapperMenu">
                                                <section>
                                                    <div id="searchIndicators"><label><svg style="width: 1.5rem;"
                                                                viewBox="0 0 24 24" role="presentation"
                                                                focusable="false" aria-hidden="true">
                                                                <path fill="currentColor" fill-rule="evenodd"
                                                                    d="M15.506 16.92a8 8 0 1 1 1.414-1.414l3.323 3.322a1 1 0 0 1-1.415 1.415l-3.322-3.323ZM4.6 10.6a6 6 0 1 1 10.372 4.11 1.006 1.006 0 0 0-.263.262A6 6 0 0 1 4.6 10.6Z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg><input draggable="false" spellcheck="false"
                                                                placeholder="Pesquisar" name="instrument-search"
                                                                rows="2" type="text" value=""></label></div>
                                                    <div id="menuIndicatorList">
                                                        <div class="indicatorsSearchEmptyResultsContainer">
                                                            <div class="circleIcon"><svg width="1.5rem" height="1.5rem"
                                                                    viewBox="0 0 24 24" role="presentation"
                                                                    focusable="false" aria-hidden="true">
                                                                    <path fill="currentColor" fill-rule="evenodd"
                                                                        d="M15.506 16.92a8 8 0 1 1 1.414-1.414l3.323 3.322a1 1 0 0 1-1.415 1.415l-3.322-3.323ZM4.6 10.6a6 6 0 1 1 10.372 4.11 1.006 1.006 0 0 0-.263.262A6 6 0 0 1 4.6 10.6Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg></div><span>Nenhum resultado encontrado. Tente com
                                                                uma palavra-chave diferente.</span>
                                                        </div>
                                                        <div class="option"><button class="handleVisibleItemMenu">
                                                                <div>
                                                                    <svg width="1.5rem" viewBox="0 0 24 24"
                                                                        role="presentation" focusable="false"
                                                                        aria-hidden="true">
                                                                        <path fill="#fff" fill-rule="evenodd"
                                                                            d="M12 1a1 1 0 0 1 1 1v2.17a3.001 3.001 0 0 1 1.308 4.747L18 16h3a1 1 0 1 1 0 2h-1.957l.92 1.764a2 2 0 0 1-.85 2.698L16.787 18H13v1a1 1 0 1 1-2 0v-1H7.213l-2.326 4.462a2 2 0 0 1-.85-2.698L4.958 18H3a1 1 0 1 1 0-2h3l3.692-7.083A3.001 3.001 0 0 1 11 4.17V2a1 1 0 0 1 1-1Zm-.587 8.942L8.255 16H11v-1a1 1 0 1 1 2 0v1h2.745l-3.158-6.058a3.008 3.008 0 0 1-1.174 0ZM12 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
                                                                            clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    Indicadores

                                                                </div>
                                                                <svg width="1.5rem" viewBox="0 0 24 24"
                                                                    role="presentation" focusable="false"
                                                                    aria-hidden="true">
                                                                    <path fill="#fff" fill-rule="evenodd"
                                                                        d="M7.293 9.293a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L12 12.586 8.707 9.293a1 1 0 0 0-1.414 0Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg>
                                                            </button>
                                                            <div class="contentMenuOption">
                                                                <div class="optionItem ">
                                                                    <span>Bandas de aceleração

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Bandas de Bollinger

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Moving Average

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Moving Average Envelope

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Fractal Line

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Fractal ATR BLOCK

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Zig Zag

                                                                    </span>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="option"><button class="handleVisibleItemMenu">
                                                                <div>
                                                                    <svg width="1.5rem" viewBox="0 0 24 24"
                                                                        role="presentation" focusable="false"
                                                                        aria-hidden="true">
                                                                        <path fill="#fff" fill-rule="evenodd"
                                                                            d="M12 4a1 1 0 0 1 1 1v15a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1ZM8 8a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Zm12 3a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1ZM4 13a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm12 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z"
                                                                            clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    Osciladores

                                                                </div>
                                                                <svg width="1.5rem" viewBox="0 0 24 24"
                                                                    role="presentation" focusable="false"
                                                                    aria-hidden="true">
                                                                    <path fill="#fff" fill-rule="evenodd"
                                                                        d="M7.293 9.293a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L12 12.586 8.707 9.293a1 1 0 0 0-1.414 0Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg>
                                                            </button>
                                                            <div class="contentMenuOption">
                                                                <div class="optionItem ">
                                                                    <span>Aroon

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Bulls Power

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>CCI

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>MACD

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Momentum

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Moving Average Deviation

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>RSI

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Oscilador Estocástico

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Trix

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Typical Price

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Volume

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Williams R

                                                                    </span>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="option"><button class="handleVisibleItemMenu">
                                                                <div>
                                                                    <svg width="1.5rem" viewBox="0 0 24 24"
                                                                        role="presentation" focusable="false"
                                                                        aria-hidden="true">
                                                                        <path fill="#fff" fill-rule="evenodd"
                                                                            d="M21.092 5.828a2 2 0 0 1 0 2.829l-12.03 12.03a2 2 0 0 1-1.588.579l-4.276-.372-.372-4.276a2 2 0 0 1 .578-1.587L15.435 3a2 2 0 0 1 2.829 0l2.828 2.828Zm-2.758 2.758 1.344-1.343-2.829-2.829-1.343 1.343 2.828 2.829ZM16.92 10l-2.828-2.828-9.273 9.273.226 2.602 2.602.226L16.92 10Z"
                                                                            clip-rule="evenodd"></path>
                                                                    </svg>
                                                                    Desenhar

                                                                </div>
                                                                <svg width="1.5rem" viewBox="0 0 24 24"
                                                                    role="presentation" focusable="false"
                                                                    aria-hidden="true">
                                                                    <path fill="#fff" fill-rule="evenodd"
                                                                        d="M7.293 9.293a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L12 12.586 8.707 9.293a1 1 0 0 0-1.414 0Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg>
                                                            </button>
                                                            <div class="contentMenuOption">
                                                                <div class="optionItem ">
                                                                    <span>Average

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Caneta

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Circulo

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Níveis de fibonacci

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Zona temporal

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Linha horizontal

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Raio horizontal

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Linha

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Régua

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Canal Paralelo

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Polyline

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Quadrant Line

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Retângulo

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Regressão

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Linha de tendência

                                                                    </span>

                                                                </div>
                                                                <div class="optionItem ">
                                                                    <span>Linha Vertical

                                                                    </span>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                                <footer>
                                                    <p>
                                                        Todos os recursos oferecidos na plataforma podem ser utilizados
                                                        para análises
                                                        técnicas. Traders tomam todas as decisões
                                                        independentemente.
                                                    </p>
                                                </footer>
                                            </div>
                                        </div>
                                        <div class="tradeFrameContent">

                                            <div id="chartGraphic_ETH/USD" class="chartGraphicGL">
                                                <div id="grafico" style="position: relative; width: 100%; height: 100%;">
                                                    <div class="containeir-img">
                                                        <img src="img/FUNDO NEXT.png" draggable="false" alt="" class="imgFundo">
                                                    </div>
                                                </div>

                                                <div id="loadingChart" class="active">
                                                    <img src="img/FUNDO NEXT.png" draggable="false" alt="">
                                                    <button class="logoutButton" style="display: flex;">ATUALIZE A PÁGINA</button>
                                                </div>
                                                <div class="bottomLateralGraphButtons">
                                                    <div class="graphOptions graphicsType">
                                                        <div class="graphOptionsContent">
                                                            <button>
                                                                <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                    role="presentation" focusable="false"
                                                                    aria-hidden="true">
                                                                    <path fill="currentColor" fill-rule="evenodd"
                                                                        d="m14.842 8.058-1.845 5.774a1.2 1.2 0 0 1-1.143.835H8.507L6.972 18.27a1.2 1.2 0 0 1-1.104.73H3a1 1 0 1 1 0-2h2.34l1.534-3.604a1.2 1.2 0 0 1 1.104-.73h3.292l2.37-7.42c.348-1.085 1.87-1.121 2.268-.054l2.786 7.475H21a1 1 0 1 1 0 2h-2.861a1.2 1.2 0 0 1-1.124-.781l-2.173-5.828Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg>
                                                                <span>Gráfico de área</span>
                                                            </button>
                                                            <button>
                                                                <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                    role="presentation" focusable="false"
                                                                    aria-hidden="true">
                                                                    <path fill="currentColor" fill-rule="evenodd"
                                                                        d="M7 3a1 1 0 0 1 1 1v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8v2a1 1 0 1 1-2 0v-2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V4a1 1 0 0 1 1-1Zm10 4a1 1 0 0 1 1 1v2h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1v2a1 1 0 1 1-2 0v-2h-1a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1V8a1 1 0 0 1 1-1ZM5 8v8h4V8H5Zm10 4v4h4v-4h-4Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg>
                                                                <span>Candlesticks Japoneses</span>
                                                            </button>
                                                            <button>
                                                                <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                    role="presentation" focusable="false"
                                                                    aria-hidden="true">
                                                                    <path fill="currentColor" fill-rule="evenodd"
                                                                        d="M12 4a1 1 0 0 1 1 1v8h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-6h-1a1 1 0 0 1 0-2h1V5a1 1 0 0 1 1-1ZM5 7a1 1 0 0 1 1 1v3h1a1 1 0 1 1 0 2H6v6a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0v-9h-1a1 1 0 0 1-1-1Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg>
                                                                <span>Barras</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <ul class="graphBtnsContainer">
                                                        <li class="graphBtn openOptionsGraph" title="Tipo do gráfico">
                                                            <button>
                                                                <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                    role="presentation" focusable="false"
                                                                    aria-hidden="true">
                                                                    <path fill="currentColor" fill-rule="evenodd"
                                                                        d="M7 3a1 1 0 0 1 1 1v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8v2a1 1 0 1 1-2 0v-2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V4a1 1 0 0 1 1-1Zm10 4a1 1 0 0 1 1 1v2h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1v2a1 1 0 1 1-2 0v-2h-1a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1V8a1 1 0 0 1 1-1ZM5 8v8h4V8H5Zm10 4v4h4v-4h-4Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg>
                                                            </button>
                                                        </li>
                                                        <li class="graphBtn" id="indicator" title="Indicadores">
                                                            <button>
                                                                <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                    role="presentation" focusable="false"
                                                                    aria-hidden="true">
                                                                    <path fill="currentColor" fill-rule="evenodd"
                                                                        d="M12 1a1 1 0 0 1 1 1v2.17a3.001 3.001 0 0 1 1.308 4.747L18 16h3a1 1 0 1 1 0 2h-1.957l.92 1.764a2 2 0 0 1-.85 2.698L16.787 18H13v1a1 1 0 1 1-2 0v-1H7.213l-2.326 4.462a2 2 0 0 1-.85-2.698L4.958 18H3a1 1 0 1 1 0-2h3l3.692-7.083A3.001 3.001 0 0 1 11 4.17V2a1 1 0 0 1 1-1Zm-.587 8.942L8.255 16H11v-1a1 1 0 1 1 2 0v1h2.745l-3.158-6.058a3.008 3.008 0 0 1-1.174 0ZM12 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="wrapper">
                                                    <button id="zoomOut">
                                                        <svg width="1.5rem" viewBox="0 0 24 24" role="presentation"
                                                            focusable="false" aria-hidden="true">
                                                            <path fill="#fff" fill-rule="evenodd"
                                                                d="M7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
                                                                clip-rule="evenodd"></path>
                                                        </svg>
                                                    </button>
                                                    <div id="contentWrapperTime" style="display: flex;">
                                                        <div class="popper"><button>5s</button><button
                                                                class="current">15s</button><button>1m</button><button>5m</button><button>10m</button><button>15m</button><button>30m</button><button>1h</button><button>4h</button><button>1d</button><button>7d</button><button>1M</button>
                                                        </div>
                                                        <button>15s</button>
                                                    </div>
                                                    <button id="backtoCurrent">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem"
                                                            viewBox="0 0 512 512">
                                                            <path fill="#fff"
                                                                d="M256 0c17.7 0 32 14.3 32 32V64h32c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-64 64c-12.5 12.5-32.8 12.5-45.3 0l-64-64c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8h32V32c0-17.7 14.3-32 32-32zM169.4 393.4l64-64c12.5-12.5 32.8-12.5 45.3 0l64 64c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H288v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H192c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9zM32 224H64V192c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c12.5 12.5 12.5 32.8 0 45.3l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm297.4 54.6c-12.5-12.5-12.5-32.8 0-45.3l64-64c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6v32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H448v32c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-64-64zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                    <button id="zoomIn">
                                                        <svg width="1.5rem" viewBox="0 0 24 24" role="presentation"
                                                            focusable="false" aria-hidden="true">
                                                            <path fill="#fff" fill-rule="evenodd"
                                                                d="M12 7a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 0 1 1-1Z"
                                                                clip-rule="evenodd"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <span class="circularProgress loading" role="progressbar">
                                                    <svg viewBox="22 22 44 44">
                                                        <circle cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6">
                                                        </circle>
                                                    </svg>
                                                </span>
                                                <div style="position: relative; width: 100%; height: 100%;">
                                                    <div aria-hidden="true"
                                                        style="position: absolute; width: 852px; height: 844px;">
                                                        <div><canvas class="am5-layer-0" width="852" height="844"
                                                                style="position: absolute; top: 0px; left: 0px; width: 852px; height: 844px;"></canvas><canvas
                                                                class="am5-layer-30" width="852" height="844"
                                                                style="position: absolute; top: 0px; left: 0px; width: 852px; height: 844px;"></canvas><canvas
                                                                class="am5-layer-99" width="852" height="844"
                                                                style="position: absolute; top: 0px; left: 0px; width: 852px; height: 844px;"></canvas>
                                                        </div>
                                                    </div>
                                                    <div class="am5-html-container"
                                                        style="position: absolute; pointer-events: none; overflow: hidden; width: 852px; height: 844px;">
                                                        <div
                                                            style="position: absolute; overflow: auto; box-sizing: border-box; pointer-events: none; top: 810.5px; left: 1118.82px; display: none; color: rgb(255, 255, 255); opacity: 0;">
                                                            <p
                                                                style="font-size: .8rem; font-family: 'Inter', sans-serif; color: #bbb;">
                                                                12.19 03:02:00</p>
                                                        </div>
                                                        <div
                                                            style="position: absolute; overflow: auto; box-sizing: border-box; pointer-events: none; top: 158px; left: 1516.66px; display: none; color: rgb(255, 255, 255); opacity: 0;">
                                                            <div class="_container"
                                                                style="width: 100%; background-color: #272930; border-radius: 3px; padding: 4px 8px; height: 100%; display: flex; align-items: center; gap: 8px; z-index: 999; position: relative; cursor: pointer; opacity: 1 !important; transition: none !important;">
                                                                <svg id="tooltip-icon" viewBox="0 0 24 24"
                                                                    role="presentation" focusable="false"
                                                                    aria-hidden="true" width="14" height="14">
                                                                    <path fill="currentColor" fill-rule="evenodd"
                                                                        d="M5.217 8.358a6.797 6.797 0 0 1 13.566 0L19.277 16H20a1 1 0 1 1 0 2h-4a4 4 0 0 1-8 0H4a1 1 0 1 1 0-2h.722l.495-7.642ZM6.727 16h10.546l-.486-7.512a4.797 4.797 0 0 0-9.575 0L6.726 16ZM14 18h-4a2 2 0 1 0 4 0Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg>
                                                                <p
                                                                    style="font-size: .8rem; line-height: 1px; font-family: 'Inter', sans-serif; color: #bbb; opacity: 1 !important; transition: none !important;">
                                                                    3948.697751</p>
                                                            </div>
                                                        </div>
                                                        <div
                                                            style="position: absolute; overflow: auto; box-sizing: border-box; pointer-events: none; display: block; top: 666.529px; left: 752.656px; color: rgb(112, 128, 140); opacity: 1; min-width: 99.3438px; min-height: 21px;">
                                                            <div class="last-tick-axis-label" id="label_value">
                                                                3851.190000</div>
                                                        </div>
                                                    </div>
                                                    <div class="am5-reader-container" role="alert"
                                                        style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(1px, 1px, 1px, 1px);">
                                                    </div>
                                                    <div class="am5-focus-container" role="graphics-document"
                                                        style="position: absolute; pointer-events: none; top: 0px; left: 0px; overflow: hidden; width: 852px; height: 844px;">
                                                        <div role="button" aria-label="Zoom Out"
                                                            style="position: absolute; pointer-events: none; top: -2px; left: -2px; width: 4px; height: 4px;"
                                                            tabindex="0"></div>
                                                        <div tabindex="0"
                                                            style="position: absolute; pointer-events: none; top: -2px; left: -2px; width: 4px; height: 4px;">
                                                        </div>
                                                        <div tabindex="0"
                                                            style="position: absolute; pointer-events: none; top: -2px; left: -2px; width: 4px; height: 4px;">
                                                        </div>
                                                        <div tabindex="0"
                                                            style="position: absolute; pointer-events: none; top: -2px; left: -2px; width: 4px; height: 4px;">
                                                        </div>
                                                        <div tabindex="0"
                                                            style="position: absolute; pointer-events: none; top: -2px; left: -2px; width: 4px; height: 4px;">
                                                        </div>
                                                    </div>
                                                    <div class="am5-tooltip-container"></div>
                                                    <div class="am5-modal" style="display: none;">
                                                        <div class="am5-modal-curtain"></div>
                                                        <div class="am5-modal-wrapper">
                                                            <div class="am5-modal-content"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="infosCandle" style="opacity: 0;">
                                                    <p>Open: 3939.514063</p>
                                                    <p>Close: 3941.378988</p>
                                                    <p>High: 3941.381223</p>
                                                    <p>Low: 3939.507925</p>
                                                </div>
                                                <div class="gradientChart"></div>
                                                <div class="sentiment">
                                                    <p class="upText">56%</p><span class="up"
                                                        style="height: 56.5574%;"></span><span class="down"
                                                        style="height: 43.4426%;"></span>
                                                    <p class="downText">43%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tradeFrameForm">
                                            <div class="dealFormAlpha">
                                                <div class="dealFormTop">
                                                    <div class="dealFormAlphaBlock">
                                                        <div class="currentCurrency active" style="display: flex;">
                                                            <div class="currencyIcon"><img draggable="false"
                                                                    src="cripto/ETHUSD.png" alt=""></div>
                                                            <div class="currencyDetails">
                                                                <p class="currencyName">ETH/USD</p>
                                                                <div
                                                                    style="display: flex; flex-direction: row;gap: .2rem;align-items: center; justify-content: center;">
                                                                    <p class="profit"><b style="display: none;">•</b>
                                                                        Cripto •</p>
                                                                    <span>95%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="dealFormAlphaBlock responsive">
                                                        <div class="inputName openFloating">
                                                            <label>
                                                                <div class="labelContent">
                                                                    <span class="placeholder">Valor R$</span>
                                                                    <input name="valueTrade" inputmode="numeric"
                                                                        id="valueTrade" type="text" value="10,00"
                                                                        autocomplete="off" data-mask="#.##0,00" data-mask-reverse="true">
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div class="inputControls">
                                                            <button id="decrementButton">
                                                                <svg viewBox="0 0 24 24" role="presentation"
                                                                    focusable="false" aria-hidden="true">
                                                                    <path fill="currentColor" fill-rule="evenodd"
                                                                        d="M7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg>
                                                            </button>
                                                            <button id="incrementButton">
                                                                <svg viewBox="0 0 24 24" role="presentation"
                                                                    focusable="false" aria-hidden="true">
                                                                    <path fill="currentColor" fill-rule="evenodd"
                                                                        d="M12 7a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 0 1 1-1Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="dealFormAlphaBlock responsive">
                                                        <div class="inputName openFloating" style="position: relative;">
                                                            <label>
                                                                <div class="labelContent">
                                                                    <span class="placeholder">Duração</span>
                                                                    <p id="timeTrade">1 segundo.</p>
                                                                    <input type="hidden" id="tempoDuracao" value="1">
                                                                </div>
                                                            </label>
                                                            <div class="bottomLateralGraphButtons"
                                                                style="display: flex; z-index: 9999; left: 0; right: 0; bottom: 0; top: 0;">
                                                                <div class="graphOptions graphicsType periodOptions"
                                                                    style="width: 129.1px;overflow: auto; align-items: flex-start;max-height: 13.5rem;left: 50%;top: 9rem;">
                                                                    <div
                                                                        class="graphOptionsContent operationPeriodsContent">
                                                                        <button>
                                                                            <svg width="15" height="16"
                                                                                viewBox="0 0 15 16" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M4.74058 5.64997C4.35369 5.88032 5.77664 9.20329 6.12372 9.74441C6.26981 9.97085 6.50257 10.1321 6.77114 10.193C7.03972 10.2539 7.32227 10.2094 7.55706 10.0693C7.79185 9.92915 7.95979 9.70479 8.02417 9.44521C8.08856 9.18563 8.04416 8.91194 7.90068 8.68394C7.55706 8.14114 5.12662 5.41877 4.74058 5.64997ZM4.45063 2.01204C6.10901 1.45191 7.91453 1.45191 9.57291 2.01204C9.85768 2.10753 10.2351 1.91571 10.068 1.50024C9.94596 1.19868 9.82825 0.903827 9.78065 0.784043C9.66726 0.500079 9.26132 0.265536 9.08475 0.227004C8.41655 0.0812523 7.72411 0 7.01177 0C6.29943 0 5.60699 0.0812523 4.93793 0.227004C4.76136 0.265536 4.35628 0.500079 4.2429 0.784043L3.95554 1.50024C3.78849 1.91571 4.16586 2.10837 4.45063 2.01204ZM14.8865 2.66876C14.5508 2.27812 14.1791 1.91784 13.776 1.59238C13.6436 1.48432 13.2541 1.39637 13.0074 1.6351L11.581 3.01471C11.937 3.25694 12.2714 3.52761 12.5807 3.82388C12.894 4.12628 13.1667 4.4538 13.4168 4.79137L14.8423 3.41176C15.0899 3.17219 14.999 2.79608 14.8865 2.66876ZM7.01177 2.42919C6.09101 2.42908 5.17925 2.6045 4.32855 2.94543C3.47785 3.28636 2.70487 3.78612 2.05375 4.41617C1.40264 5.04623 0.886141 5.79424 0.533756 6.61748C0.181371 7.44073 4.64232e-08 8.32309 5.34401e-08 9.21418C-0.000113636 10.1053 0.181174 10.9878 0.533508 11.8111C0.885842 12.6345 1.40232 13.3826 2.05345 14.0127C2.70457 14.6429 3.47759 15.1427 4.32835 15.4837C5.17911 15.8247 6.09094 16.0001 7.01177 16C8.87129 16 10.6547 15.2851 11.9695 14.0126C13.2844 12.7401 14.0231 11.0142 14.0231 9.2146C14.0231 7.415 13.2844 5.6891 11.9695 4.41659C10.6547 3.14408 8.87129 2.42919 7.01177 2.42919ZM7.01177 14.3247C6.31836 14.3246 5.63175 14.1924 4.99114 13.9356C4.35053 13.6787 3.76847 13.3022 3.2782 12.8277C2.78792 12.3531 2.39903 11.7898 2.13372 11.1698C1.86842 10.5498 1.7319 9.88525 1.73195 9.21418C1.73201 8.54311 1.86864 7.87862 2.13405 7.25866C2.39946 6.63869 2.78845 6.07539 3.27881 5.60091C3.76917 5.12644 4.35129 4.75008 4.99194 4.49332C5.63259 4.23656 6.31922 4.10444 7.01264 4.1045C8.41293 4.10461 9.75583 4.64305 10.7459 5.60138C11.736 6.55971 12.2921 7.85942 12.292 9.2146C12.2919 10.5698 11.7355 11.8694 10.7453 12.8276C9.75505 13.7857 8.41207 14.3248 7.01177 14.3247Z"
                                                                                    fill="#ECEDF0"></path>
                                                                            </svg>
                                                                            <span>1 segundo.</span>
                                                                        </button><button class="active">
                                                                            <svg width="15" height="16"
                                                                                viewBox="0 0 15 16" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M4.74058 5.64997C4.35369 5.88032 5.77664 9.20329 6.12372 9.74441C6.26981 9.97085 6.50257 10.1321 6.77114 10.193C7.03972 10.2539 7.32227 10.2094 7.55706 10.0693C7.79185 9.92915 7.95979 9.70479 8.02417 9.44521C8.08856 9.18563 8.04416 8.91194 7.90068 8.68394C7.55706 8.14114 5.12662 5.41877 4.74058 5.64997ZM4.45063 2.01204C6.10901 1.45191 7.91453 1.45191 9.57291 2.01204C9.85768 2.10753 10.2351 1.91571 10.068 1.50024C9.94596 1.19868 9.82825 0.903827 9.78065 0.784043C9.66726 0.500079 9.26132 0.265536 9.08475 0.227004C8.41655 0.0812523 7.72411 0 7.01177 0C6.29943 0 5.60699 0.0812523 4.93793 0.227004C4.76136 0.265536 4.35628 0.500079 4.2429 0.784043L3.95554 1.50024C3.78849 1.91571 4.16586 2.10837 4.45063 2.01204ZM14.8865 2.66876C14.5508 2.27812 14.1791 1.91784 13.776 1.59238C13.6436 1.48432 13.2541 1.39637 13.0074 1.6351L11.581 3.01471C11.937 3.25694 12.2714 3.52761 12.5807 3.82388C12.894 4.12628 13.1667 4.4538 13.4168 4.79137L14.8423 3.41176C15.0899 3.17219 14.999 2.79608 14.8865 2.66876ZM7.01177 2.42919C6.09101 2.42908 5.17925 2.6045 4.32855 2.94543C3.47785 3.28636 2.70487 3.78612 2.05375 4.41617C1.40264 5.04623 0.886141 5.79424 0.533756 6.61748C0.181371 7.44073 4.64232e-08 8.32309 5.34401e-08 9.21418C-0.000113636 10.1053 0.181174 10.9878 0.533508 11.8111C0.885842 12.6345 1.40232 13.3826 2.05345 14.0127C2.70457 14.6429 3.47759 15.1427 4.32835 15.4837C5.17911 15.8247 6.09094 16.0001 7.01177 16C8.87129 16 10.6547 15.2851 11.9695 14.0126C13.2844 12.7401 14.0231 11.0142 14.0231 9.2146C14.0231 7.415 13.2844 5.6891 11.9695 4.41659C10.6547 3.14408 8.87129 2.42919 7.01177 2.42919ZM7.01177 14.3247C6.31836 14.3246 5.63175 14.1924 4.99114 13.9356C4.35053 13.6787 3.76847 13.3022 3.2782 12.8277C2.78792 12.3531 2.39903 11.7898 2.13372 11.1698C1.86842 10.5498 1.7319 9.88525 1.73195 9.21418C1.73201 8.54311 1.86864 7.87862 2.13405 7.25866C2.39946 6.63869 2.78845 6.07539 3.27881 5.60091C3.76917 5.12644 4.35129 4.75008 4.99194 4.49332C5.63259 4.23656 6.31922 4.10444 7.01264 4.1045C8.41293 4.10461 9.75583 4.64305 10.7459 5.60138C11.736 6.55971 12.2921 7.85942 12.292 9.2146C12.2919 10.5698 11.7355 11.8694 10.7453 12.8276C9.75505 13.7857 8.41207 14.3248 7.01177 14.3247Z"
                                                                                    fill="#ECEDF0"></path>
                                                                            </svg>
                                                                            <span>5 segundos.</span>
                                                                        </button><button>
                                                                            <svg width="15" height="16"
                                                                                viewBox="0 0 15 16" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M4.74058 5.64997C4.35369 5.88032 5.77664 9.20329 6.12372 9.74441C6.26981 9.97085 6.50257 10.1321 6.77114 10.193C7.03972 10.2539 7.32227 10.2094 7.55706 10.0693C7.79185 9.92915 7.95979 9.70479 8.02417 9.44521C8.08856 9.18563 8.04416 8.91194 7.90068 8.68394C7.55706 8.14114 5.12662 5.41877 4.74058 5.64997ZM4.45063 2.01204C6.10901 1.45191 7.91453 1.45191 9.57291 2.01204C9.85768 2.10753 10.2351 1.91571 10.068 1.50024C9.94596 1.19868 9.82825 0.903827 9.78065 0.784043C9.66726 0.500079 9.26132 0.265536 9.08475 0.227004C8.41655 0.0812523 7.72411 0 7.01177 0C6.29943 0 5.60699 0.0812523 4.93793 0.227004C4.76136 0.265536 4.35628 0.500079 4.2429 0.784043L3.95554 1.50024C3.78849 1.91571 4.16586 2.10837 4.45063 2.01204ZM14.8865 2.66876C14.5508 2.27812 14.1791 1.91784 13.776 1.59238C13.6436 1.48432 13.2541 1.39637 13.0074 1.6351L11.581 3.01471C11.937 3.25694 12.2714 3.52761 12.5807 3.82388C12.894 4.12628 13.1667 4.4538 13.4168 4.79137L14.8423 3.41176C15.0899 3.17219 14.999 2.79608 14.8865 2.66876ZM7.01177 2.42919C6.09101 2.42908 5.17925 2.6045 4.32855 2.94543C3.47785 3.28636 2.70487 3.78612 2.05375 4.41617C1.40264 5.04623 0.886141 5.79424 0.533756 6.61748C0.181371 7.44073 4.64232e-08 8.32309 5.34401e-08 9.21418C-0.000113636 10.1053 0.181174 10.9878 0.533508 11.8111C0.885842 12.6345 1.40232 13.3826 2.05345 14.0127C2.70457 14.6429 3.47759 15.1427 4.32835 15.4837C5.17911 15.8247 6.09094 16.0001 7.01177 16C8.87129 16 10.6547 15.2851 11.9695 14.0126C13.2844 12.7401 14.0231 11.0142 14.0231 9.2146C14.0231 7.415 13.2844 5.6891 11.9695 4.41659C10.6547 3.14408 8.87129 2.42919 7.01177 2.42919ZM7.01177 14.3247C6.31836 14.3246 5.63175 14.1924 4.99114 13.9356C4.35053 13.6787 3.76847 13.3022 3.2782 12.8277C2.78792 12.3531 2.39903 11.7898 2.13372 11.1698C1.86842 10.5498 1.7319 9.88525 1.73195 9.21418C1.73201 8.54311 1.86864 7.87862 2.13405 7.25866C2.39946 6.63869 2.78845 6.07539 3.27881 5.60091C3.76917 5.12644 4.35129 4.75008 4.99194 4.49332C5.63259 4.23656 6.31922 4.10444 7.01264 4.1045C8.41293 4.10461 9.75583 4.64305 10.7459 5.60138C11.736 6.55971 12.2921 7.85942 12.292 9.2146C12.2919 10.5698 11.7355 11.8694 10.7453 12.8276C9.75505 13.7857 8.41207 14.3248 7.01177 14.3247Z"
                                                                                    fill="#ECEDF0"></path>
                                                                            </svg>
                                                                            <span>15 segundos.</span>
                                                                        </button><button>
                                                                            <svg width="15" height="16"
                                                                                viewBox="0 0 15 16" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M4.74058 5.64997C4.35369 5.88032 5.77664 9.20329 6.12372 9.74441C6.26981 9.97085 6.50257 10.1321 6.77114 10.193C7.03972 10.2539 7.32227 10.2094 7.55706 10.0693C7.79185 9.92915 7.95979 9.70479 8.02417 9.44521C8.08856 9.18563 8.04416 8.91194 7.90068 8.68394C7.55706 8.14114 5.12662 5.41877 4.74058 5.64997ZM4.45063 2.01204C6.10901 1.45191 7.91453 1.45191 9.57291 2.01204C9.85768 2.10753 10.2351 1.91571 10.068 1.50024C9.94596 1.19868 9.82825 0.903827 9.78065 0.784043C9.66726 0.500079 9.26132 0.265536 9.08475 0.227004C8.41655 0.0812523 7.72411 0 7.01177 0C6.29943 0 5.60699 0.0812523 4.93793 0.227004C4.76136 0.265536 4.35628 0.500079 4.2429 0.784043L3.95554 1.50024C3.78849 1.91571 4.16586 2.10837 4.45063 2.01204ZM14.8865 2.66876C14.5508 2.27812 14.1791 1.91784 13.776 1.59238C13.6436 1.48432 13.2541 1.39637 13.0074 1.6351L11.581 3.01471C11.937 3.25694 12.2714 3.52761 12.5807 3.82388C12.894 4.12628 13.1667 4.4538 13.4168 4.79137L14.8423 3.41176C15.0899 3.17219 14.999 2.79608 14.8865 2.66876ZM7.01177 2.42919C6.09101 2.42908 5.17925 2.6045 4.32855 2.94543C3.47785 3.28636 2.70487 3.78612 2.05375 4.41617C1.40264 5.04623 0.886141 5.79424 0.533756 6.61748C0.181371 7.44073 4.64232e-08 8.32309 5.34401e-08 9.21418C-0.000113636 10.1053 0.181174 10.9878 0.533508 11.8111C0.885842 12.6345 1.40232 13.3826 2.05345 14.0127C2.70457 14.6429 3.47759 15.1427 4.32835 15.4837C5.17911 15.8247 6.09094 16.0001 7.01177 16C8.87129 16 10.6547 15.2851 11.9695 14.0126C13.2844 12.7401 14.0231 11.0142 14.0231 9.2146C14.0231 7.415 13.2844 5.6891 11.9695 4.41659C10.6547 3.14408 8.87129 2.42919 7.01177 2.42919ZM7.01177 14.3247C6.31836 14.3246 5.63175 14.1924 4.99114 13.9356C4.35053 13.6787 3.76847 13.3022 3.2782 12.8277C2.78792 12.3531 2.39903 11.7898 2.13372 11.1698C1.86842 10.5498 1.7319 9.88525 1.73195 9.21418C1.73201 8.54311 1.86864 7.87862 2.13405 7.25866C2.39946 6.63869 2.78845 6.07539 3.27881 5.60091C3.76917 5.12644 4.35129 4.75008 4.99194 4.49332C5.63259 4.23656 6.31922 4.10444 7.01264 4.1045C8.41293 4.10461 9.75583 4.64305 10.7459 5.60138C11.736 6.55971 12.2921 7.85942 12.292 9.2146C12.2919 10.5698 11.7355 11.8694 10.7453 12.8276C9.75505 13.7857 8.41207 14.3248 7.01177 14.3247Z"
                                                                                    fill="#ECEDF0"></path>
                                                                            </svg>
                                                                            <span>30 segundos.</span>
                                                                        </button><button>
                                                                            <svg width="15" height="16"
                                                                                viewBox="0 0 15 16" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M4.74058 5.64997C4.35369 5.88032 5.77664 9.20329 6.12372 9.74441C6.26981 9.97085 6.50257 10.1321 6.77114 10.193C7.03972 10.2539 7.32227 10.2094 7.55706 10.0693C7.79185 9.92915 7.95979 9.70479 8.02417 9.44521C8.08856 9.18563 8.04416 8.91194 7.90068 8.68394C7.55706 8.14114 5.12662 5.41877 4.74058 5.64997ZM4.45063 2.01204C6.10901 1.45191 7.91453 1.45191 9.57291 2.01204C9.85768 2.10753 10.2351 1.91571 10.068 1.50024C9.94596 1.19868 9.82825 0.903827 9.78065 0.784043C9.66726 0.500079 9.26132 0.265536 9.08475 0.227004C8.41655 0.0812523 7.72411 0 7.01177 0C6.29943 0 5.60699 0.0812523 4.93793 0.227004C4.76136 0.265536 4.35628 0.500079 4.2429 0.784043L3.95554 1.50024C3.78849 1.91571 4.16586 2.10837 4.45063 2.01204ZM14.8865 2.66876C14.5508 2.27812 14.1791 1.91784 13.776 1.59238C13.6436 1.48432 13.2541 1.39637 13.0074 1.6351L11.581 3.01471C11.937 3.25694 12.2714 3.52761 12.5807 3.82388C12.894 4.12628 13.1667 4.4538 13.4168 4.79137L14.8423 3.41176C15.0899 3.17219 14.999 2.79608 14.8865 2.66876ZM7.01177 2.42919C6.09101 2.42908 5.17925 2.6045 4.32855 2.94543C3.47785 3.28636 2.70487 3.78612 2.05375 4.41617C1.40264 5.04623 0.886141 5.79424 0.533756 6.61748C0.181371 7.44073 4.64232e-08 8.32309 5.34401e-08 9.21418C-0.000113636 10.1053 0.181174 10.9878 0.533508 11.8111C0.885842 12.6345 1.40232 13.3826 2.05345 14.0127C2.70457 14.6429 3.47759 15.1427 4.32835 15.4837C5.17911 15.8247 6.09094 16.0001 7.01177 16C8.87129 16 10.6547 15.2851 11.9695 14.0126C13.2844 12.7401 14.0231 11.0142 14.0231 9.2146C14.0231 7.415 13.2844 5.6891 11.9695 4.41659C10.6547 3.14408 8.87129 2.42919 7.01177 2.42919ZM7.01177 14.3247C6.31836 14.3246 5.63175 14.1924 4.99114 13.9356C4.35053 13.6787 3.76847 13.3022 3.2782 12.8277C2.78792 12.3531 2.39903 11.7898 2.13372 11.1698C1.86842 10.5498 1.7319 9.88525 1.73195 9.21418C1.73201 8.54311 1.86864 7.87862 2.13405 7.25866C2.39946 6.63869 2.78845 6.07539 3.27881 5.60091C3.76917 5.12644 4.35129 4.75008 4.99194 4.49332C5.63259 4.23656 6.31922 4.10444 7.01264 4.1045C8.41293 4.10461 9.75583 4.64305 10.7459 5.60138C11.736 6.55971 12.2921 7.85942 12.292 9.2146C12.2919 10.5698 11.7355 11.8694 10.7453 12.8276C9.75505 13.7857 8.41207 14.3248 7.01177 14.3247Z"
                                                                                    fill="#ECEDF0"></path>
                                                                            </svg>
                                                                            <span>1 minuto.</span>
                                                                        </button><button>
                                                                            <svg width="15" height="16"
                                                                                viewBox="0 0 15 16" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M4.74058 5.64997C4.35369 5.88032 5.77664 9.20329 6.12372 9.74441C6.26981 9.97085 6.50257 10.1321 6.77114 10.193C7.03972 10.2539 7.32227 10.2094 7.55706 10.0693C7.79185 9.92915 7.95979 9.70479 8.02417 9.44521C8.08856 9.18563 8.04416 8.91194 7.90068 8.68394C7.55706 8.14114 5.12662 5.41877 4.74058 5.64997ZM4.45063 2.01204C6.10901 1.45191 7.91453 1.45191 9.57291 2.01204C9.85768 2.10753 10.2351 1.91571 10.068 1.50024C9.94596 1.19868 9.82825 0.903827 9.78065 0.784043C9.66726 0.500079 9.26132 0.265536 9.08475 0.227004C8.41655 0.0812523 7.72411 0 7.01177 0C6.29943 0 5.60699 0.0812523 4.93793 0.227004C4.76136 0.265536 4.35628 0.500079 4.2429 0.784043L3.95554 1.50024C3.78849 1.91571 4.16586 2.10837 4.45063 2.01204ZM14.8865 2.66876C14.5508 2.27812 14.1791 1.91784 13.776 1.59238C13.6436 1.48432 13.2541 1.39637 13.0074 1.6351L11.581 3.01471C11.937 3.25694 12.2714 3.52761 12.5807 3.82388C12.894 4.12628 13.1667 4.4538 13.4168 4.79137L14.8423 3.41176C15.0899 3.17219 14.999 2.79608 14.8865 2.66876ZM7.01177 2.42919C6.09101 2.42908 5.17925 2.6045 4.32855 2.94543C3.47785 3.28636 2.70487 3.78612 2.05375 4.41617C1.40264 5.04623 0.886141 5.79424 0.533756 6.61748C0.181371 7.44073 4.64232e-08 8.32309 5.34401e-08 9.21418C-0.000113636 10.1053 0.181174 10.9878 0.533508 11.8111C0.885842 12.6345 1.40232 13.3826 2.05345 14.0127C2.70457 14.6429 3.47759 15.1427 4.32835 15.4837C5.17911 15.8247 6.09094 16.0001 7.01177 16C8.87129 16 10.6547 15.2851 11.9695 14.0126C13.2844 12.7401 14.0231 11.0142 14.0231 9.2146C14.0231 7.415 13.2844 5.6891 11.9695 4.41659C10.6547 3.14408 8.87129 2.42919 7.01177 2.42919ZM7.01177 14.3247C6.31836 14.3246 5.63175 14.1924 4.99114 13.9356C4.35053 13.6787 3.76847 13.3022 3.2782 12.8277C2.78792 12.3531 2.39903 11.7898 2.13372 11.1698C1.86842 10.5498 1.7319 9.88525 1.73195 9.21418C1.73201 8.54311 1.86864 7.87862 2.13405 7.25866C2.39946 6.63869 2.78845 6.07539 3.27881 5.60091C3.76917 5.12644 4.35129 4.75008 4.99194 4.49332C5.63259 4.23656 6.31922 4.10444 7.01264 4.1045C8.41293 4.10461 9.75583 4.64305 10.7459 5.60138C11.736 6.55971 12.2921 7.85942 12.292 9.2146C12.2919 10.5698 11.7355 11.8694 10.7453 12.8276C9.75505 13.7857 8.41207 14.3248 7.01177 14.3247Z"
                                                                                    fill="#ECEDF0"></path>
                                                                            </svg>
                                                                            <span>5 minutos.</span>
                                                                        </button><button>
                                                                            <svg width="15" height="16"
                                                                                viewBox="0 0 15 16" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M4.74058 5.64997C4.35369 5.88032 5.77664 9.20329 6.12372 9.74441C6.26981 9.97085 6.50257 10.1321 6.77114 10.193C7.03972 10.2539 7.32227 10.2094 7.55706 10.0693C7.79185 9.92915 7.95979 9.70479 8.02417 9.44521C8.08856 9.18563 8.04416 8.91194 7.90068 8.68394C7.55706 8.14114 5.12662 5.41877 4.74058 5.64997ZM4.45063 2.01204C6.10901 1.45191 7.91453 1.45191 9.57291 2.01204C9.85768 2.10753 10.2351 1.91571 10.068 1.50024C9.94596 1.19868 9.82825 0.903827 9.78065 0.784043C9.66726 0.500079 9.26132 0.265536 9.08475 0.227004C8.41655 0.0812523 7.72411 0 7.01177 0C6.29943 0 5.60699 0.0812523 4.93793 0.227004C4.76136 0.265536 4.35628 0.500079 4.2429 0.784043L3.95554 1.50024C3.78849 1.91571 4.16586 2.10837 4.45063 2.01204ZM14.8865 2.66876C14.5508 2.27812 14.1791 1.91784 13.776 1.59238C13.6436 1.48432 13.2541 1.39637 13.0074 1.6351L11.581 3.01471C11.937 3.25694 12.2714 3.52761 12.5807 3.82388C12.894 4.12628 13.1667 4.4538 13.4168 4.79137L14.8423 3.41176C15.0899 3.17219 14.999 2.79608 14.8865 2.66876ZM7.01177 2.42919C6.09101 2.42908 5.17925 2.6045 4.32855 2.94543C3.47785 3.28636 2.70487 3.78612 2.05375 4.41617C1.40264 5.04623 0.886141 5.79424 0.533756 6.61748C0.181371 7.44073 4.64232e-08 8.32309 5.34401e-08 9.21418C-0.000113636 10.1053 0.181174 10.9878 0.533508 11.8111C0.885842 12.6345 1.40232 13.3826 2.05345 14.0127C2.70457 14.6429 3.47759 15.1427 4.32835 15.4837C5.17911 15.8247 6.09094 16.0001 7.01177 16C8.87129 16 10.6547 15.2851 11.9695 14.0126C13.2844 12.7401 14.0231 11.0142 14.0231 9.2146C14.0231 7.415 13.2844 5.6891 11.9695 4.41659C10.6547 3.14408 8.87129 2.42919 7.01177 2.42919ZM7.01177 14.3247C6.31836 14.3246 5.63175 14.1924 4.99114 13.9356C4.35053 13.6787 3.76847 13.3022 3.2782 12.8277C2.78792 12.3531 2.39903 11.7898 2.13372 11.1698C1.86842 10.5498 1.7319 9.88525 1.73195 9.21418C1.73201 8.54311 1.86864 7.87862 2.13405 7.25866C2.39946 6.63869 2.78845 6.07539 3.27881 5.60091C3.76917 5.12644 4.35129 4.75008 4.99194 4.49332C5.63259 4.23656 6.31922 4.10444 7.01264 4.1045C8.41293 4.10461 9.75583 4.64305 10.7459 5.60138C11.736 6.55971 12.2921 7.85942 12.292 9.2146C12.2919 10.5698 11.7355 11.8694 10.7453 12.8276C9.75505 13.7857 8.41207 14.3248 7.01177 14.3247Z"
                                                                                    fill="#ECEDF0"></path>
                                                                            </svg>
                                                                            <span>15 minutos.</span>
                                                                        </button><button>
                                                                            <svg width="15" height="16"
                                                                                viewBox="0 0 15 16" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M4.74058 5.64997C4.35369 5.88032 5.77664 9.20329 6.12372 9.74441C6.26981 9.97085 6.50257 10.1321 6.77114 10.193C7.03972 10.2539 7.32227 10.2094 7.55706 10.0693C7.79185 9.92915 7.95979 9.70479 8.02417 9.44521C8.08856 9.18563 8.04416 8.91194 7.90068 8.68394C7.55706 8.14114 5.12662 5.41877 4.74058 5.64997ZM4.45063 2.01204C6.10901 1.45191 7.91453 1.45191 9.57291 2.01204C9.85768 2.10753 10.2351 1.91571 10.068 1.50024C9.94596 1.19868 9.82825 0.903827 9.78065 0.784043C9.66726 0.500079 9.26132 0.265536 9.08475 0.227004C8.41655 0.0812523 7.72411 0 7.01177 0C6.29943 0 5.60699 0.0812523 4.93793 0.227004C4.76136 0.265536 4.35628 0.500079 4.2429 0.784043L3.95554 1.50024C3.78849 1.91571 4.16586 2.10837 4.45063 2.01204ZM14.8865 2.66876C14.5508 2.27812 14.1791 1.91784 13.776 1.59238C13.6436 1.48432 13.2541 1.39637 13.0074 1.6351L11.581 3.01471C11.937 3.25694 12.2714 3.52761 12.5807 3.82388C12.894 4.12628 13.1667 4.4538 13.4168 4.79137L14.8423 3.41176C15.0899 3.17219 14.999 2.79608 14.8865 2.66876ZM7.01177 2.42919C6.09101 2.42908 5.17925 2.6045 4.32855 2.94543C3.47785 3.28636 2.70487 3.78612 2.05375 4.41617C1.40264 5.04623 0.886141 5.79424 0.533756 6.61748C0.181371 7.44073 4.64232e-08 8.32309 5.34401e-08 9.21418C-0.000113636 10.1053 0.181174 10.9878 0.533508 11.8111C0.885842 12.6345 1.40232 13.3826 2.05345 14.0127C2.70457 14.6429 3.47759 15.1427 4.32835 15.4837C5.17911 15.8247 6.09094 16.0001 7.01177 16C8.87129 16 10.6547 15.2851 11.9695 14.0126C13.2844 12.7401 14.0231 11.0142 14.0231 9.2146C14.0231 7.415 13.2844 5.6891 11.9695 4.41659C10.6547 3.14408 8.87129 2.42919 7.01177 2.42919ZM7.01177 14.3247C6.31836 14.3246 5.63175 14.1924 4.99114 13.9356C4.35053 13.6787 3.76847 13.3022 3.2782 12.8277C2.78792 12.3531 2.39903 11.7898 2.13372 11.1698C1.86842 10.5498 1.7319 9.88525 1.73195 9.21418C1.73201 8.54311 1.86864 7.87862 2.13405 7.25866C2.39946 6.63869 2.78845 6.07539 3.27881 5.60091C3.76917 5.12644 4.35129 4.75008 4.99194 4.49332C5.63259 4.23656 6.31922 4.10444 7.01264 4.1045C8.41293 4.10461 9.75583 4.64305 10.7459 5.60138C11.736 6.55971 12.2921 7.85942 12.292 9.2146C12.2919 10.5698 11.7355 11.8694 10.7453 12.8276C9.75505 13.7857 8.41207 14.3248 7.01177 14.3247Z"
                                                                                    fill="#ECEDF0"></path>
                                                                            </svg>
                                                                            <span>30 minutos.</span>
                                                                        </button><button>
                                                                            <svg width="15" height="16"
                                                                                viewBox="0 0 15 16" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M4.74058 5.64997C4.35369 5.88032 5.77664 9.20329 6.12372 9.74441C6.26981 9.97085 6.50257 10.1321 6.77114 10.193C7.03972 10.2539 7.32227 10.2094 7.55706 10.0693C7.79185 9.92915 7.95979 9.70479 8.02417 9.44521C8.08856 9.18563 8.04416 8.91194 7.90068 8.68394C7.55706 8.14114 5.12662 5.41877 4.74058 5.64997ZM4.45063 2.01204C6.10901 1.45191 7.91453 1.45191 9.57291 2.01204C9.85768 2.10753 10.2351 1.91571 10.068 1.50024C9.94596 1.19868 9.82825 0.903827 9.78065 0.784043C9.66726 0.500079 9.26132 0.265536 9.08475 0.227004C8.41655 0.0812523 7.72411 0 7.01177 0C6.29943 0 5.60699 0.0812523 4.93793 0.227004C4.76136 0.265536 4.35628 0.500079 4.2429 0.784043L3.95554 1.50024C3.78849 1.91571 4.16586 2.10837 4.45063 2.01204ZM14.8865 2.66876C14.5508 2.27812 14.1791 1.91784 13.776 1.59238C13.6436 1.48432 13.2541 1.39637 13.0074 1.6351L11.581 3.01471C11.937 3.25694 12.2714 3.52761 12.5807 3.82388C12.894 4.12628 13.1667 4.4538 13.4168 4.79137L14.8423 3.41176C15.0899 3.17219 14.999 2.79608 14.8865 2.66876ZM7.01177 2.42919C6.09101 2.42908 5.17925 2.6045 4.32855 2.94543C3.47785 3.28636 2.70487 3.78612 2.05375 4.41617C1.40264 5.04623 0.886141 5.79424 0.533756 6.61748C0.181371 7.44073 4.64232e-08 8.32309 5.34401e-08 9.21418C-0.000113636 10.1053 0.181174 10.9878 0.533508 11.8111C0.885842 12.6345 1.40232 13.3826 2.05345 14.0127C2.70457 14.6429 3.47759 15.1427 4.32835 15.4837C5.17911 15.8247 6.09094 16.0001 7.01177 16C8.87129 16 10.6547 15.2851 11.9695 14.0126C13.2844 12.7401 14.0231 11.0142 14.0231 9.2146C14.0231 7.415 13.2844 5.6891 11.9695 4.41659C10.6547 3.14408 8.87129 2.42919 7.01177 2.42919ZM7.01177 14.3247C6.31836 14.3246 5.63175 14.1924 4.99114 13.9356C4.35053 13.6787 3.76847 13.3022 3.2782 12.8277C2.78792 12.3531 2.39903 11.7898 2.13372 11.1698C1.86842 10.5498 1.7319 9.88525 1.73195 9.21418C1.73201 8.54311 1.86864 7.87862 2.13405 7.25866C2.39946 6.63869 2.78845 6.07539 3.27881 5.60091C3.76917 5.12644 4.35129 4.75008 4.99194 4.49332C5.63259 4.23656 6.31922 4.10444 7.01264 4.1045C8.41293 4.10461 9.75583 4.64305 10.7459 5.60138C11.736 6.55971 12.2921 7.85942 12.292 9.2146C12.2919 10.5698 11.7355 11.8694 10.7453 12.8276C9.75505 13.7857 8.41207 14.3248 7.01177 14.3247Z"
                                                                                    fill="#ECEDF0"></path>
                                                                            </svg>
                                                                            <span>1 hora.</span>
                                                                        </button><button>
                                                                            <svg width="15" height="16"
                                                                                viewBox="0 0 15 16" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M4.74058 5.64997C4.35369 5.88032 5.77664 9.20329 6.12372 9.74441C6.26981 9.97085 6.50257 10.1321 6.77114 10.193C7.03972 10.2539 7.32227 10.2094 7.55706 10.0693C7.79185 9.92915 7.95979 9.70479 8.02417 9.44521C8.08856 9.18563 8.04416 8.91194 7.90068 8.68394C7.55706 8.14114 5.12662 5.41877 4.74058 5.64997ZM4.45063 2.01204C6.10901 1.45191 7.91453 1.45191 9.57291 2.01204C9.85768 2.10753 10.2351 1.91571 10.068 1.50024C9.94596 1.19868 9.82825 0.903827 9.78065 0.784043C9.66726 0.500079 9.26132 0.265536 9.08475 0.227004C8.41655 0.0812523 7.72411 0 7.01177 0C6.29943 0 5.60699 0.0812523 4.93793 0.227004C4.76136 0.265536 4.35628 0.500079 4.2429 0.784043L3.95554 1.50024C3.78849 1.91571 4.16586 2.10837 4.45063 2.01204ZM14.8865 2.66876C14.5508 2.27812 14.1791 1.91784 13.776 1.59238C13.6436 1.48432 13.2541 1.39637 13.0074 1.6351L11.581 3.01471C11.937 3.25694 12.2714 3.52761 12.5807 3.82388C12.894 4.12628 13.1667 4.4538 13.4168 4.79137L14.8423 3.41176C15.0899 3.17219 14.999 2.79608 14.8865 2.66876ZM7.01177 2.42919C6.09101 2.42908 5.17925 2.6045 4.32855 2.94543C3.47785 3.28636 2.70487 3.78612 2.05375 4.41617C1.40264 5.04623 0.886141 5.79424 0.533756 6.61748C0.181371 7.44073 4.64232e-08 8.32309 5.34401e-08 9.21418C-0.000113636 10.1053 0.181174 10.9878 0.533508 11.8111C0.885842 12.6345 1.40232 13.3826 2.05345 14.0127C2.70457 14.6429 3.47759 15.1427 4.32835 15.4837C5.17911 15.8247 6.09094 16.0001 7.01177 16C8.87129 16 10.6547 15.2851 11.9695 14.0126C13.2844 12.7401 14.0231 11.0142 14.0231 9.2146C14.0231 7.415 13.2844 5.6891 11.9695 4.41659C10.6547 3.14408 8.87129 2.42919 7.01177 2.42919ZM7.01177 14.3247C6.31836 14.3246 5.63175 14.1924 4.99114 13.9356C4.35053 13.6787 3.76847 13.3022 3.2782 12.8277C2.78792 12.3531 2.39903 11.7898 2.13372 11.1698C1.86842 10.5498 1.7319 9.88525 1.73195 9.21418C1.73201 8.54311 1.86864 7.87862 2.13405 7.25866C2.39946 6.63869 2.78845 6.07539 3.27881 5.60091C3.76917 5.12644 4.35129 4.75008 4.99194 4.49332C5.63259 4.23656 6.31922 4.10444 7.01264 4.1045C8.41293 4.10461 9.75583 4.64305 10.7459 5.60138C11.736 6.55971 12.2921 7.85942 12.292 9.2146C12.2919 10.5698 11.7355 11.8694 10.7453 12.8276C9.75505 13.7857 8.41207 14.3248 7.01177 14.3247Z"
                                                                                    fill="#ECEDF0"></path>
                                                                            </svg>
                                                                            <span>4 horas.</span>
                                                                        </button><button>
                                                                            <svg width="15" height="16"
                                                                                viewBox="0 0 15 16" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M4.74058 5.64997C4.35369 5.88032 5.77664 9.20329 6.12372 9.74441C6.26981 9.97085 6.50257 10.1321 6.77114 10.193C7.03972 10.2539 7.32227 10.2094 7.55706 10.0693C7.79185 9.92915 7.95979 9.70479 8.02417 9.44521C8.08856 9.18563 8.04416 8.91194 7.90068 8.68394C7.55706 8.14114 5.12662 5.41877 4.74058 5.64997ZM4.45063 2.01204C6.10901 1.45191 7.91453 1.45191 9.57291 2.01204C9.85768 2.10753 10.2351 1.91571 10.068 1.50024C9.94596 1.19868 9.82825 0.903827 9.78065 0.784043C9.66726 0.500079 9.26132 0.265536 9.08475 0.227004C8.41655 0.0812523 7.72411 0 7.01177 0C6.29943 0 5.60699 0.0812523 4.93793 0.227004C4.76136 0.265536 4.35628 0.500079 4.2429 0.784043L3.95554 1.50024C3.78849 1.91571 4.16586 2.10837 4.45063 2.01204ZM14.8865 2.66876C14.5508 2.27812 14.1791 1.91784 13.776 1.59238C13.6436 1.48432 13.2541 1.39637 13.0074 1.6351L11.581 3.01471C11.937 3.25694 12.2714 3.52761 12.5807 3.82388C12.894 4.12628 13.1667 4.4538 13.4168 4.79137L14.8423 3.41176C15.0899 3.17219 14.999 2.79608 14.8865 2.66876ZM7.01177 2.42919C6.09101 2.42908 5.17925 2.6045 4.32855 2.94543C3.47785 3.28636 2.70487 3.78612 2.05375 4.41617C1.40264 5.04623 0.886141 5.79424 0.533756 6.61748C0.181371 7.44073 4.64232e-08 8.32309 5.34401e-08 9.21418C-0.000113636 10.1053 0.181174 10.9878 0.533508 11.8111C0.885842 12.6345 1.40232 13.3826 2.05345 14.0127C2.70457 14.6429 3.47759 15.1427 4.32835 15.4837C5.17911 15.8247 6.09094 16.0001 7.01177 16C8.87129 16 10.6547 15.2851 11.9695 14.0126C13.2844 12.7401 14.0231 11.0142 14.0231 9.2146C14.0231 7.415 13.2844 5.6891 11.9695 4.41659C10.6547 3.14408 8.87129 2.42919 7.01177 2.42919ZM7.01177 14.3247C6.31836 14.3246 5.63175 14.1924 4.99114 13.9356C4.35053 13.6787 3.76847 13.3022 3.2782 12.8277C2.78792 12.3531 2.39903 11.7898 2.13372 11.1698C1.86842 10.5498 1.7319 9.88525 1.73195 9.21418C1.73201 8.54311 1.86864 7.87862 2.13405 7.25866C2.39946 6.63869 2.78845 6.07539 3.27881 5.60091C3.76917 5.12644 4.35129 4.75008 4.99194 4.49332C5.63259 4.23656 6.31922 4.10444 7.01264 4.1045C8.41293 4.10461 9.75583 4.64305 10.7459 5.60138C11.736 6.55971 12.2921 7.85942 12.292 9.2146C12.2919 10.5698 11.7355 11.8694 10.7453 12.8276C9.75505 13.7857 8.41207 14.3248 7.01177 14.3247Z"
                                                                                    fill="#ECEDF0"></path>
                                                                            </svg>
                                                                            <span>1 undefined.</span>
                                                                        </button></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="inputControls">
                                                            <button id="decrementButtonTime">
                                                                <svg viewBox="0 0 24 24" role="presentation"
                                                                    focusable="false" aria-hidden="true">
                                                                    <path fill="currentColor" fill-rule="evenodd"
                                                                        d="M7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg>
                                                            </button>
                                                            <button id="incrementButtonTime">
                                                                <svg viewBox="0 0 24 24" role="presentation"
                                                                    focusable="false" aria-hidden="true">
                                                                    <path fill="currentColor" fill-rule="evenodd"
                                                                        d="M12 7a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 0 1 1-1Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="dealFormAlphaBlock changeOrder responsive">
                                                        <div class="inputName openFloating">
                                                            <label class="custom">
                                                                <div class="labelContent">
                                                                    <span>Seu pagamento</span>
                                                                    <p id="paymentPrev">R$&nbsp;19,50
                                                                    </p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="dealFormAlphaBlock changeOrder responsive hidden">
                                                        <div class="inputName openFloating">
                                                            <label class="custom">
                                                                <div class="labelContent">
                                                                    <p id="timePrev">Faltam 00:09 Segundos</p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="dealFormBottom">
                                                    <div class="dealFormAlphaBlock"
                                                        style="display: flex;gap: 8px;flex-direction: column;padding: 0;align-items: center;">

                                                        <button class="enableOrders" id="higher"
                                                            style="height: 3.3rem;background-color: #188432; --color: #188432">
                                                            <span style="width: auto;">Comprar</span>
                                                            <div class="btnIcon">
                                                                <svg viewBox="0 0 24 24" role="presentation"
                                                                    focusable="false" aria-hidden="true">
                                                                    <path fill="currentColor" fill-rule="evenodd"
                                                                        d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg>
                                                            </div>
                                                        </button>
                                                        <button class="enableOrders" id="lower"
                                                            style="height: 3.3rem;background-color: #D62940; --color: #D62940;">
                                                            <span style="width: auto;">Vender</span>
                                                            <div class="btnIcon">
                                                                <svg viewBox="0 0 24 24" role="presentation"
                                                                    focusable="false" aria-hidden="true">
                                                                    <path fill="currentColor" fill-rule="evenodd"
                                                                        d="M17.707 15.293a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L11 18.586V3a1 1 0 1 1 2 0v15.586l3.293-3.293a1 1 0 0 1 1.414 0Z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <p class="profitNotice">
                                                        Lucro: +R$ 200 <span><svg viewBox="0 0 24 24"
                                                                role="presentation" focusable="false" aria-hidden="true"
                                                                style="width: 16px; height: 16px;">
                                                                <path fill="currentColor"
                                                                    d="M13.1 17a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z">
                                                                </path>
                                                                <path fill="currentColor" fill-rule="evenodd"
                                                                    d="M8 8.5c-.097.773.228 1.406 1 1.5 1.217.148 1.34-.386 1.5-1 .13-.502.52-1.1 1.5-1.1s1.8.608 1.8 1.6c0 2.092-2.8 1.94-2.8 4.35 0 .7.3 1.15 1.1 1.15.6 0 .9-.4.9-.9 0-1.5 3.2-1.992 3.2-4.6C16.2 7 14.086 6 11.96 6 9.835 6 8.17 7.15 8 8.5Z"
                                                                    clip-rule="evenodd"></path>
                                                                <path fill="currentColor" fill-rule="evenodd"
                                                                    d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-10 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg></span>
                                                    </p>
                                                    <div class="tipContainerProfit">
                                                        <div class="tipContent">
                                                            <div class="tipText">
                                                                <span>O lucro que você ganhará como um trader
                                                                    bem-sucedido</span>
                                                            </div>
                                                            <div class="arrowTip">
                                                                <div class="arrowBodyTip"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="clock">
                                                        <div>
                                                            <span></span>
                                                            <div></div>
                                                        </div>
                                                        <p>03:16:39 UTC-3</p>
                                                    </div>
                                                </div>
                                                <div class="historyTitle" style="display: block;">
                                                    <p>Histórico</p>
                                                </div>
                                                <div class="containerHistory" style="display: block;">
                                                    <div class="historyList">
                                                        <div class="assetItem CRIPTO">
                                                            <div class="assetNegotiationItem">
                                                                <div class="iconItem">
                                                                    <img src="cripto/ADAUSD.png"
                                                                        style="height: 1.7rem; width: 1.7rem" alt="">
                                                                </div>
                                                                <div class="detailsAssetNegotiation">
                                                                    <div class="topInfos">
                                                                        <div class="assetName">
                                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                                role="presentation" focusable="false"
                                                                                aria-hidden="true" color="#1b985e"
                                                                                style="width: 15px; height: 12px; transform: rotate(180deg);">
                                                                                <path fill="#e24f32" fill-rule="evenodd"
                                                                                    d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg>
                                                                            <p>ADA/USD</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="center">
                                                                        <div class="time">
                                                                            <p>10/12/2024 - 22:57:30</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="assetFt"
                                                                        style="color: #ffffff78; font-size: .5rem; gap: .2rem;">
                                                                        <div class="activeValue">
                                                                            <p
                                                                                style="font-size: .6rem !important; line-height: 1;white-space: nowrap;">
                                                                                R$&nbsp;10,00</p>
                                                                        </div>
                                                                        x
                                                                        <p class="assetItemLucro"
                                                                            style="font-size: .65rem; line-height: initial !important;color: #e24f32;font-weight: 500;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 3.8rem;">
                                                                            -R$&nbsp;10,00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="assetItem CRIPTO">
                                                            <div class="assetNegotiationItem">
                                                                <div class="iconItem">
                                                                    <img src="cripto/ADAUSD.png"
                                                                        style="height: 1.7rem; width: 1.7rem" alt="">
                                                                </div>
                                                                <div class="detailsAssetNegotiation">
                                                                    <div class="topInfos">
                                                                        <div class="assetName">
                                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                                role="presentation" focusable="false"
                                                                                aria-hidden="true" color="#1b985e"
                                                                                style="width: 15px; height: 12px; transform: rotate(180deg);">
                                                                                <path fill="#e24f32" fill-rule="evenodd"
                                                                                    d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg>
                                                                            <p>ADA/USD</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="center">
                                                                        <div class="time">
                                                                            <p>10/12/2024 - 22:57:30</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="assetFt"
                                                                        style="color: #ffffff78; font-size: .5rem; gap: .2rem;">
                                                                        <div class="activeValue">
                                                                            <p
                                                                                style="font-size: .6rem !important; line-height: 1;white-space: nowrap;">
                                                                                R$&nbsp;10,00</p>
                                                                        </div>
                                                                        x
                                                                        <p class="assetItemLucro"
                                                                            style="font-size: .65rem; line-height: initial !important;color: #e24f32;font-weight: 500;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 3.8rem;">
                                                                            -R$&nbsp;10,00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="assetItem CRIPTO">
                                                            <div class="assetNegotiationItem">
                                                                <div class="iconItem">
                                                                    <img src="cripto/ADAUSD.png"
                                                                        style="height: 1.7rem; width: 1.7rem" alt="">
                                                                </div>
                                                                <div class="detailsAssetNegotiation">
                                                                    <div class="topInfos">
                                                                        <div class="assetName">
                                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                                role="presentation" focusable="false"
                                                                                aria-hidden="true" color="#1b985e"
                                                                                style="width: 15px; height: 12px; transform: rotate(180deg);">
                                                                                <path fill="#e24f32" fill-rule="evenodd"
                                                                                    d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg>
                                                                            <p>ADA/USD</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="center">
                                                                        <div class="time">
                                                                            <p>10/12/2024 - 22:57:30</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="assetFt"
                                                                        style="color: #ffffff78; font-size: .5rem; gap: .2rem;">
                                                                        <div class="activeValue">
                                                                            <p
                                                                                style="font-size: .6rem !important; line-height: 1;white-space: nowrap;">
                                                                                R$&nbsp;10,00</p>
                                                                        </div>
                                                                        x
                                                                        <p class="assetItemLucro"
                                                                            style="font-size: .65rem; line-height: initial !important;color: #e24f32;font-weight: 500;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 3.8rem;">
                                                                            -R$&nbsp;10,00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="assetItem CRIPTO">
                                                            <div class="assetNegotiationItem">
                                                                <div class="iconItem">
                                                                    <img src="cripto/ADAUSD.png"
                                                                        style="height: 1.7rem; width: 1.7rem" alt="">
                                                                </div>
                                                                <div class="detailsAssetNegotiation">
                                                                    <div class="topInfos">
                                                                        <div class="assetName">
                                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                                role="presentation" focusable="false"
                                                                                aria-hidden="true" color="#1b985e"
                                                                                style="width: 15px; height: 12px; transform: rotate(180deg);">
                                                                                <path fill="#e24f32" fill-rule="evenodd"
                                                                                    d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg>
                                                                            <p>ADA/USD</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="center">
                                                                        <div class="time">
                                                                            <p>10/12/2024 - 22:57:30</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="assetFt"
                                                                        style="color: #ffffff78; font-size: .5rem; gap: .2rem;">
                                                                        <div class="activeValue">
                                                                            <p
                                                                                style="font-size: .6rem !important; line-height: 1;white-space: nowrap;">
                                                                                R$&nbsp;10,00</p>
                                                                        </div>
                                                                        x
                                                                        <p class="assetItemLucro"
                                                                            style="font-size: .65rem; line-height: initial !important;color: #e24f32;font-weight: 500;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 3.8rem;">
                                                                            -R$&nbsp;10,00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="assetItem CRIPTO">
                                                            <div class="assetNegotiationItem">
                                                                <div class="iconItem">
                                                                    <img src="cripto/ADAUSD.png"
                                                                        style="height: 1.7rem; width: 1.7rem" alt="">
                                                                </div>
                                                                <div class="detailsAssetNegotiation">
                                                                    <div class="topInfos">
                                                                        <div class="assetName">
                                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                                role="presentation" focusable="false"
                                                                                aria-hidden="true" color="#1b985e"
                                                                                style="width: 15px; height: 12px; ">
                                                                                <path fill="#1b985e" fill-rule="evenodd"
                                                                                    d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg>
                                                                            <p>ADA/USD</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="center">
                                                                        <div class="time">
                                                                            <p>10/12/2024 - 22:57:30</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="assetFt"
                                                                        style="color: #ffffff78; font-size: .5rem; gap: .2rem;">
                                                                        <div class="activeValue">
                                                                            <p
                                                                                style="font-size: .6rem !important; line-height: 1;white-space: nowrap;">
                                                                                R$&nbsp;10,00</p>
                                                                        </div>
                                                                        x
                                                                        <p class="assetItemLucro"
                                                                            style="font-size: .65rem; line-height: initial !important;color: #1b985e;font-weight: 500;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 3.8rem;">
                                                                            R$&nbsp;19,80</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="assetItem CRIPTO">
                                                            <div class="assetNegotiationItem">
                                                                <div class="iconItem">
                                                                    <img src="cripto/ADAUSD.png"
                                                                        style="height: 1.7rem; width: 1.7rem" alt="">
                                                                </div>
                                                                <div class="detailsAssetNegotiation">
                                                                    <div class="topInfos">
                                                                        <div class="assetName">
                                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                                role="presentation" focusable="false"
                                                                                aria-hidden="true" color="#1b985e"
                                                                                style="width: 15px; height: 12px; ">
                                                                                <path fill="#1b985e" fill-rule="evenodd"
                                                                                    d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg>
                                                                            <p>ADA/USD</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="center">
                                                                        <div class="time">
                                                                            <p>10/12/2024 - 22:57:30</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="assetFt"
                                                                        style="color: #ffffff78; font-size: .5rem; gap: .2rem;">
                                                                        <div class="activeValue">
                                                                            <p
                                                                                style="font-size: .6rem !important; line-height: 1;white-space: nowrap;">
                                                                                R$&nbsp;10,00</p>
                                                                        </div>
                                                                        x
                                                                        <p class="assetItemLucro"
                                                                            style="font-size: .65rem; line-height: initial !important;color: #1b985e;font-weight: 500;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 3.8rem;">
                                                                            R$&nbsp;19,80</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="assetItem CRIPTO">
                                                            <div class="assetNegotiationItem">
                                                                <div class="iconItem">
                                                                    <img src="cripto/ADAUSD.png"
                                                                        style="height: 1.7rem; width: 1.7rem" alt="">
                                                                </div>
                                                                <div class="detailsAssetNegotiation">
                                                                    <div class="topInfos">
                                                                        <div class="assetName">
                                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                                role="presentation" focusable="false"
                                                                                aria-hidden="true" color="#1b985e"
                                                                                style="width: 15px; height: 12px; ">
                                                                                <path fill="#1b985e" fill-rule="evenodd"
                                                                                    d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg>
                                                                            <p>ADA/USD</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="center">
                                                                        <div class="time">
                                                                            <p>10/12/2024 - 22:57:30</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="assetFt"
                                                                        style="color: #ffffff78; font-size: .5rem; gap: .2rem;">
                                                                        <div class="activeValue">
                                                                            <p
                                                                                style="font-size: .6rem !important; line-height: 1;white-space: nowrap;">
                                                                                R$&nbsp;10,00</p>
                                                                        </div>
                                                                        x
                                                                        <p class="assetItemLucro"
                                                                            style="font-size: .65rem; line-height: initial !important;color: #1b985e;font-weight: 500;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 3.8rem;">
                                                                            R$&nbsp;19,80</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="assetItem CRIPTO">
                                                            <div class="assetNegotiationItem">
                                                                <div class="iconItem">
                                                                    <img src="cripto/BTCUSD.png"
                                                                        style="height: 1.7rem; width: 1.7rem" alt="">
                                                                </div>
                                                                <div class="detailsAssetNegotiation">
                                                                    <div class="topInfos">
                                                                        <div class="assetName">
                                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                                role="presentation" focusable="false"
                                                                                aria-hidden="true" color="#1b985e"
                                                                                style="width: 15px; height: 12px; transform: rotate(180deg);">
                                                                                <path fill="#e24f32" fill-rule="evenodd"
                                                                                    d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg>
                                                                            <p>BTC/USD</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="center">
                                                                        <div class="time">
                                                                            <p>10/12/2024 - 22:57:20</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="assetFt"
                                                                        style="color: #ffffff78; font-size: .5rem; gap: .2rem;">
                                                                        <div class="activeValue">
                                                                            <p
                                                                                style="font-size: .6rem !important; line-height: 1;white-space: nowrap;">
                                                                                R$&nbsp;10,00</p>
                                                                        </div>
                                                                        x
                                                                        <p class="assetItemLucro"
                                                                            style="font-size: .65rem; line-height: initial !important;color: #e24f32;font-weight: 500;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 3.8rem;">
                                                                            -R$&nbsp;10,00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="assetItem CRIPTO">
                                                            <div class="assetNegotiationItem">
                                                                <div class="iconItem">
                                                                    <img src="cripto/ETHUSD.png"
                                                                        style="height: 1.7rem; width: 1.7rem" alt="">
                                                                </div>
                                                                <div class="detailsAssetNegotiation">
                                                                    <div class="topInfos">
                                                                        <div class="assetName">
                                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                                role="presentation" focusable="false"
                                                                                aria-hidden="true" color="#1b985e"
                                                                                style="width: 15px; height: 12px; ">
                                                                                <path fill="#1b985e" fill-rule="evenodd"
                                                                                    d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg>
                                                                            <p>ETH/USD</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="center">
                                                                        <div class="time">
                                                                            <p>10/12/2024 - 22:57:15</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="assetFt"
                                                                        style="color: #ffffff78; font-size: .5rem; gap: .2rem;">
                                                                        <div class="activeValue">
                                                                            <p
                                                                                style="font-size: .6rem !important; line-height: 1;white-space: nowrap;">
                                                                                R$&nbsp;10,00</p>
                                                                        </div>
                                                                        x
                                                                        <p class="assetItemLucro"
                                                                            style="font-size: .65rem; line-height: initial !important;color: #1b985e;font-weight: 500;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 3.8rem;">
                                                                            R$&nbsp;19,50</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="assetItem CRIPTO">
                                                            <div class="assetNegotiationItem">
                                                                <div class="iconItem">
                                                                    <img src="cripto/ETHUSD.png"
                                                                        style="height: 1.7rem; width: 1.7rem" alt="">
                                                                </div>
                                                                <div class="detailsAssetNegotiation">
                                                                    <div class="topInfos">
                                                                        <div class="assetName">
                                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                                role="presentation" focusable="false"
                                                                                aria-hidden="true" color="#1b985e"
                                                                                style="width: 15px; height: 12px; transform: rotate(180deg);">
                                                                                <path fill="#e24f32" fill-rule="evenodd"
                                                                                    d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg>
                                                                            <p>ETH/USD</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="center">
                                                                        <div class="time">
                                                                            <p>10/12/2024 - 22:57:15</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="assetFt"
                                                                        style="color: #ffffff78; font-size: .5rem; gap: .2rem;">
                                                                        <div class="activeValue">
                                                                            <p
                                                                                style="font-size: .6rem !important; line-height: 1;white-space: nowrap;">
                                                                                R$&nbsp;10,00</p>
                                                                        </div>
                                                                        x
                                                                        <p class="assetItemLucro"
                                                                            style="font-size: .65rem; line-height: initial !important;color: #e24f32;font-weight: 500;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 3.8rem;">
                                                                            -R$&nbsp;10,00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="assetItem CRIPTO">
                                                            <div class="assetNegotiationItem">
                                                                <div class="iconItem">
                                                                    <img src="cripto/ETHUSD.png"
                                                                        style="height: 1.7rem; width: 1.7rem" alt="">
                                                                </div>
                                                                <div class="detailsAssetNegotiation">
                                                                    <div class="topInfos">
                                                                        <div class="assetName">
                                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                                role="presentation" focusable="false"
                                                                                aria-hidden="true" color="#1b985e"
                                                                                style="width: 15px; height: 12px; ">
                                                                                <path fill="#1b985e" fill-rule="evenodd"
                                                                                    d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg>
                                                                            <p>ETH/USD</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="center">
                                                                        <div class="time">
                                                                            <p>10/12/2024 - 22:57:15</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="assetFt"
                                                                        style="color: #ffffff78; font-size: .5rem; gap: .2rem;">
                                                                        <div class="activeValue">
                                                                            <p
                                                                                style="font-size: .6rem !important; line-height: 1;white-space: nowrap;">
                                                                                R$&nbsp;10,00</p>
                                                                        </div>
                                                                        x
                                                                        <p class="assetItemLucro"
                                                                            style="font-size: .65rem; line-height: initial !important;color: #1b985e;font-weight: 500;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 3.8rem;">
                                                                            R$&nbsp;19,50</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="assetItem CRIPTO">
                                                            <div class="assetNegotiationItem">
                                                                <div class="iconItem">
                                                                    <img src="cripto/BTCUSD.png"
                                                                        style="height: 1.7rem; width: 1.7rem" alt="">
                                                                </div>
                                                                <div class="detailsAssetNegotiation">
                                                                    <div class="topInfos">
                                                                        <div class="assetName">
                                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                                role="presentation" focusable="false"
                                                                                aria-hidden="true" color="#1b985e"
                                                                                style="width: 15px; height: 12px; ">
                                                                                <path fill="#1b985e" fill-rule="evenodd"
                                                                                    d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg>
                                                                            <p>BTC/USD</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="center">
                                                                        <div class="time">
                                                                            <p>10/12/2024 - 22:57:15</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="assetFt"
                                                                        style="color: #ffffff78; font-size: .5rem; gap: .2rem;">
                                                                        <div class="activeValue">
                                                                            <p
                                                                                style="font-size: .6rem !important; line-height: 1;white-space: nowrap;">
                                                                                R$&nbsp;10,00</p>
                                                                        </div>
                                                                        x
                                                                        <p class="assetItemLucro"
                                                                            style="font-size: .65rem; line-height: initial !important;color: #1b985e;font-weight: 500;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 3.8rem;">
                                                                            R$&nbsp;19,70</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="assetItem CRIPTO">
                                                            <div class="assetNegotiationItem">
                                                                <div class="iconItem">
                                                                    <img src="forex/GBPUSD.png"
                                                                        style="height: 1.7rem; width: 1.7rem" alt="">
                                                                </div>
                                                                <div class="detailsAssetNegotiation">
                                                                    <div class="topInfos">
                                                                        <div class="assetName">
                                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                                role="presentation" focusable="false"
                                                                                aria-hidden="true" color="#1b985e"
                                                                                style="width: 15px; height: 12px; ">
                                                                                <path fill="#1b985e" fill-rule="evenodd"
                                                                                    d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg>
                                                                            <p>GBP/USD</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="center">
                                                                        <div class="time">
                                                                            <p>10/12/2024 - 22:57:00</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="assetFt"
                                                                        style="color: #ffffff78; font-size: .5rem; gap: .2rem;">
                                                                        <div class="activeValue">
                                                                            <p
                                                                                style="font-size: .6rem !important; line-height: 1;white-space: nowrap;">
                                                                                R$&nbsp;10,00</p>
                                                                        </div>
                                                                        x
                                                                        <p class="assetItemLucro"
                                                                            style="font-size: .65rem; line-height: initial !important;color: #e24f32;font-weight: 500;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 3.8rem;">
                                                                            -R$&nbsp;10,00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="assetItem CRIPTO">
                                                            <div class="assetNegotiationItem">
                                                                <div class="iconItem">
                                                                    <img src="forex/GBPUSD.png"
                                                                        style="height: 1.7rem; width: 1.7rem" alt="">
                                                                </div>
                                                                <div class="detailsAssetNegotiation">
                                                                    <div class="topInfos">
                                                                        <div class="assetName">
                                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                                role="presentation" focusable="false"
                                                                                aria-hidden="true" color="#1b985e"
                                                                                style="width: 15px; height: 12px; transform: rotate(180deg);">
                                                                                <path fill="#e24f32" fill-rule="evenodd"
                                                                                    d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg>
                                                                            <p>GBP/USD</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="center">
                                                                        <div class="time">
                                                                            <p>10/12/2024 - 22:57:00</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="assetFt"
                                                                        style="color: #ffffff78; font-size: .5rem; gap: .2rem;">
                                                                        <div class="activeValue">
                                                                            <p
                                                                                style="font-size: .6rem !important; line-height: 1;white-space: nowrap;">
                                                                                R$&nbsp;10,00</p>
                                                                        </div>
                                                                        x
                                                                        <p class="assetItemLucro"
                                                                            style="font-size: .65rem; line-height: initial !important;color: #1b985e;font-weight: 500;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 3.8rem;">
                                                                            R$&nbsp;19,50</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="assetItem CRIPTO">
                                                            <div class="assetNegotiationItem">
                                                                <div class="iconItem">
                                                                    <img src="forex/GBPUSD.png"
                                                                        style="height: 1.7rem; width: 1.7rem" alt="">
                                                                </div>
                                                                <div class="detailsAssetNegotiation">
                                                                    <div class="topInfos">
                                                                        <div class="assetName">
                                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                                role="presentation" focusable="false"
                                                                                aria-hidden="true" color="#1b985e"
                                                                                style="width: 15px; height: 12px; transform: rotate(180deg);">
                                                                                <path fill="#e24f32" fill-rule="evenodd"
                                                                                    d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg>
                                                                            <p>GBP/USD</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="center">
                                                                        <div class="time">
                                                                            <p>10/12/2024 - 22:57:00</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="assetFt"
                                                                        style="color: #ffffff78; font-size: .5rem; gap: .2rem;">
                                                                        <div class="activeValue">
                                                                            <p
                                                                                style="font-size: .6rem !important; line-height: 1;white-space: nowrap;">
                                                                                R$&nbsp;10,00</p>
                                                                        </div>
                                                                        x
                                                                        <p class="assetItemLucro"
                                                                            style="font-size: .65rem; line-height: initial !important;color: #1b985e;font-weight: 500;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 3.8rem;">
                                                                            R$&nbsp;19,50</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="assetItem CRIPTO">
                                                            <div class="assetNegotiationItem">
                                                                <div class="iconItem">
                                                                    <img src="forex/GBPUSD.png"
                                                                        style="height: 1.7rem; width: 1.7rem" alt="">
                                                                </div>
                                                                <div class="detailsAssetNegotiation">
                                                                    <div class="topInfos">
                                                                        <div class="assetName">
                                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                                role="presentation" focusable="false"
                                                                                aria-hidden="true" color="#1b985e"
                                                                                style="width: 15px; height: 12px; ">
                                                                                <path fill="#1b985e" fill-rule="evenodd"
                                                                                    d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg>
                                                                            <p>GBP/USD</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="center">
                                                                        <div class="time">
                                                                            <p>10/12/2024 - 22:57:00</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="assetFt"
                                                                        style="color: #ffffff78; font-size: .5rem; gap: .2rem;">
                                                                        <div class="activeValue">
                                                                            <p
                                                                                style="font-size: .6rem !important; line-height: 1;white-space: nowrap;">
                                                                                R$&nbsp;10,00</p>
                                                                        </div>
                                                                        x
                                                                        <p class="assetItemLucro"
                                                                            style="font-size: .65rem; line-height: initial !important;color: #e24f32;font-weight: 500;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 3.8rem;">
                                                                            -R$&nbsp;10,00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="assetItem CRIPTO">
                                                            <div class="assetNegotiationItem">
                                                                <div class="iconItem">
                                                                    <img src="forex/GBPUSD.png"
                                                                        style="height: 1.7rem; width: 1.7rem" alt="">
                                                                </div>
                                                                <div class="detailsAssetNegotiation">
                                                                    <div class="topInfos">
                                                                        <div class="assetName">
                                                                            <svg class="ohGHbMkZKR" viewBox="0 0 24 24"
                                                                                role="presentation" focusable="false"
                                                                                aria-hidden="true" color="#1b985e"
                                                                                style="width: 15px; height: 12px; ">
                                                                                <path fill="#1b985e" fill-rule="evenodd"
                                                                                    d="M17.707 8.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l3.293 3.293a1 1 0 0 0 1.414 0Z"
                                                                                    clip-rule="evenodd"></path>
                                                                            </svg>
                                                                            <p>GBP/USD</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="center">
                                                                        <div class="time">
                                                                            <p>10/12/2024 - 22:57:00</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="assetFt"
                                                                        style="color: #ffffff78; font-size: .5rem; gap: .2rem;">
                                                                        <div class="activeValue">
                                                                            <p
                                                                                style="font-size: .6rem !important; line-height: 1;white-space: nowrap;">
                                                                                R$&nbsp;10,00</p>
                                                                        </div>
                                                                        x
                                                                        <p class="assetItemLucro"
                                                                            style="font-size: .65rem; line-height: initial !important;color: #e24f32;font-weight: 500;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 3.8rem;">
                                                                            -R$&nbsp;10,00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <div class="sideBarContainer sideBarMainContainer" id="sidebarRightId">
                <div class="backdropSidebar iconClose"></div>
<div class="sideBarPanel">
    <div class="profilePanelContainer">
        <div class="profilePanelHeader">
            <div class="titleHeader">
                <h2>Perfil</h2>
            </div>
            <div class="backPanelProfile" style="display: none;">
                <svg class="ohGHbMkZKR cor-w-panel-l-header__fake-icon" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true" style="opacity: 1;">
                    <path fill="currentColor" fill-rule="evenodd" d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"></path>
                </svg>
            </div>
            <div class="closePanelProfile iconClose">
                <svg class="ohGHbMkZKR cor-w-panel-l-header__fake-icon" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true" style="opacity: 1;">
                    <path fill="currentColor" fill-rule="evenodd" d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>
        <div class="profilePanelContent">
            <div class="profileInfo">
                <div class="profileInfoLeft">
                    <div class="profileInfoInitials">
                        <p>Olá, JHONATAN WILLIAM SANTOS DA MOTA</p>
                    </div>
                </div>
                <div class="profileInfoRight">
                    <div class="profileUserIcon">
                        <svg class="ohGHbMkZKR pro-c-avatar__placeholder" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                            <path fill="currentColor" fill-rule="evenodd" d="M12 3a5 5 0 0 0-3.456 8.613c-1.895.74-3.174 2.046-4.01 3.346a10.917 10.917 0 0 0-1.506 3.789l-.013.075-.003.023-.001.008v.005a1 1 0 0 0 1.979.285v-.007l.008-.042.036-.186a8.914 8.914 0 0 1 1.182-2.868C7.197 14.514 8.91 13 12 13c3.091 0 4.802 1.514 5.784 3.04a8.915 8.915 0 0 1 1.218 3.055l.006.035.001.007.001.005v.002a1 1 0 0 0 1.98-.285v-.006l-.002-.007-.003-.023a7.202 7.202 0 0 0-.063-.333 10.92 10.92 0 0 0-1.455-3.53c-.837-1.301-2.116-2.608-4.01-3.347A5 5 0 0 0 12 3ZM9 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="profilePanelBody">
                <div class="profilePanelLevel">
                    <div class="profileCardLevel sidebarBtnOpen" data-target="components/sideBar/pathTraderSideBar">
                        <div class="profileCardLevelContent">
                            <div class="profileCardLevelTop">
                                <svg width="1.5rem" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                    <path fill="var(--primary-color)" d="M5 10.1 12 8l7 2.1V15l-7-2.1L5 15v-4.9Z"></path>
                                </svg>
                                <p>Iniciante</p>
                            </div>
                            <div class="profileCardLevelBottom">
                                <div class="profileLevelDetails">
                                    <p>Nível 1</p>
                                    <p>0/50 XP</p>
                                </div>
                                <div class="profileLevelProgress">
                                    <div class="progressBar">
                                        <div class="progress" style="width: 1%;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sideBarPanel">
                <div class="settingsPanelContainer">
                    <div class="settingsPanelContent">
                        <div class="btnsSection">
                            <div class="settingsBtn sidebarBtnOpen" data-target="components/sideBar/personSettingsSideBar">
                                <div class="settingsBtnIcon">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.052 4.45954C11.9192 6.4137 10.5522 7.91908 9.06152 7.91908C7.57083 7.91908 6.20157 6.41418 6.07107 4.45954C5.93514 2.42658 7.26589 1 9.06152 1C10.8572 1 12.1879 2.46358 12.052 4.45954Z" stroke="#ECEDF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.99999 11.0693C5.37934 11.0693 1.89758 12.7834 1.02534 16.1215C0.909777 16.5631 1.20034 17 1.67646 17H16.3241C16.8002 17 17.0891 16.5631 16.9752 16.1215C16.103 12.7299 12.6212 11.0693 8.99999 11.0693Z" stroke="#ECEDF0" stroke-width="1.5" stroke-miterlimit="10"/>
                                    </svg>
                                </div>
                                <div class="titleSettingsBtn">
                                    <p>Configurações Pessoais</p>
                                    <span>Dados da conta e verificação KYC</span>
                                </div>
                            </div>
                            <div class="settingsBtn">
                                <div class="settingsBtnIcon">
                                    <svg viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                        <path fill="currentColor" fill-rule="evenodd" d="M17 4.775a1 1 0 0 0-1.316-.949L9.162 6H17V4.775ZM19 6V4.775a3 3 0 0 0-3.949-2.846l-11 3.666A3 3 0 0 0 2 8.442V17a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3ZM5 8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5Z" clip-rule="evenodd"></path>
                                        <path fill="currentColor" d="M16 13a1 1 0 1 1 1.998 0A1 1 0 0 1 16 13Z"></path>
                                    </svg>
                                </div>
                                <div class="titleSettingsBtn sidebarBtnOpen" data-target="components/sideBar/valueDepositSideBar">
                                    <p>Depositar</p>
                                    <span>Adicione saldo em sua conta real</span>
                                </div>
                            </div>
                            <div class="settingsBtn">
                                <div class="settingsBtnIcon">
                                    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.2727 11.2816L15.7356 8.34679C15.5031 7.07889 15.3868 6.44494 14.9274 6.07004C14.468 5.69514 13.8074 5.69434 12.487 5.69434H8.93853C7.61809 5.69434 6.95826 5.69434 6.49807 6.07004C6.03868 6.44494 5.92243 7.07889 5.68993 8.34679L5.15278 11.2816C4.67174 13.9132 4.43042 15.2293 5.17202 16.0926C5.91362 16.9574 7.28457 16.9574 10.0249 16.9574H11.4006C14.1409 16.9574 15.5119 16.9574 16.2535 16.0934C16.9951 15.2293 16.7546 13.9132 16.2727 11.2824" stroke="#ECEDF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.39348 0.956058L5.33995 0.956056C4.51336 0.95602 3.81482 0.955989 3.25833 1.0348C2.66403 1.11897 2.12331 1.30576 1.69165 1.76019C1.265 2.20934 1.09466 2.76313 1.01716 3.37009C0.943312 3.94844 0.943333 4.67732 0.94336 5.55343V5.60308V5.65275C0.943333 6.52883 0.943312 7.25773 1.01716 7.83596C1.09459 8.44223 1.26473 8.99566 1.69094 9.44428C1.86107 9.62433 2.05814 9.77153 2.27906 9.88361C2.64846 10.071 3.09983 9.92349 3.28724 9.55409C3.47464 9.1847 3.32711 8.73332 2.95772 8.54592C2.89046 8.5118 2.83257 8.46851 2.78091 8.41377L2.78092 8.41376L2.77878 8.41152C2.66376 8.29063 2.56309 8.1002 2.50508 7.64593C2.4448 7.17398 2.44336 6.54166 2.44336 5.60308C2.44336 4.66451 2.4448 4.03216 2.50508 3.56008C2.56309 3.10574 2.66378 2.91476 2.77921 2.79325C2.88961 2.67702 3.05561 2.57848 3.46867 2.51998C3.90757 2.45782 4.49887 2.45606 5.39348 2.45606H16.4938C17.3884 2.45606 17.9797 2.45782 18.4186 2.51998C18.8317 2.57848 18.9977 2.67702 19.1081 2.79325C19.2236 2.91483 19.3242 3.10567 19.3822 3.55975C19.4425 4.0317 19.4439 4.66402 19.4439 5.60308C19.4439 6.54214 19.4425 7.17469 19.3822 7.64663C19.3242 8.10096 19.2236 8.29081 19.1089 8.41107L19.1064 8.4138C19.0551 8.46812 18.9954 8.51259 18.9302 8.54559C18.5607 8.73264 18.4127 9.18387 18.5997 9.55344C18.7868 9.92302 19.238 10.071 19.6076 9.88394C19.8277 9.77253 20.0267 9.62376 20.1961 9.44451C20.6226 8.99624 20.7927 8.44278 20.8701 7.83667C20.944 7.25843 20.944 6.52931 20.9439 5.6528V5.65277V5.60308V5.55338V5.55336C20.944 4.67684 20.944 3.94795 20.8701 3.36972C20.7926 2.76273 20.6222 2.20927 20.1957 1.76019C19.764 1.30576 19.2233 1.11897 18.629 1.0348C18.0725 0.955989 17.3739 0.95602 16.5474 0.956056L16.4938 0.956058H5.39348ZM20.1961 9.44451L20.1974 9.44319L19.6519 8.92852L20.1948 9.44592L20.1961 9.44451ZM1.69094 9.44428L1.68994 9.44322L2.2354 8.92853L1.69207 9.44547L1.69094 9.44428Z" fill="#ECEDF0"/>
                                        <path d="M10.796 10.9824C10.166 10.7978 9.96347 10.6069 9.96347 10.3097C9.96347 9.96868 10.2437 9.73091 10.7127 9.73091C11.1068 9.73091 11.3038 9.89985 11.376 10.1689C11.4093 10.2941 11.5009 10.3879 11.6174 10.3879H11.7007C11.8838 10.3879 12.0143 10.1846 11.9504 9.99058C11.8339 9.62141 11.5619 9.3148 11.129 9.19591V8.98004C11.129 8.72036 10.9431 8.51074 10.7127 8.51074C10.4824 8.51074 10.2965 8.72036 10.2965 8.98004V9.18653C9.75811 9.31793 9.3252 9.71214 9.3252 10.316C9.3252 11.0387 9.85524 11.3985 10.6295 11.6081C11.3233 11.7958 11.462 12.0711 11.462 12.3621C11.462 12.578 11.326 12.9221 10.7127 12.9221C10.2548 12.9221 10.019 12.7375 9.92739 12.4747C9.88576 12.3527 9.79141 12.2651 9.67763 12.2651H9.59993C9.414 12.2651 9.28357 12.4778 9.35295 12.6718C9.51113 13.1067 9.88021 13.3632 10.2965 13.4634V13.673C10.2965 13.9327 10.4824 14.1423 10.7127 14.1423C10.9431 14.1423 11.129 13.9327 11.129 13.673V13.4696C11.6701 13.3539 12.1003 13.0003 12.1003 12.359C12.1003 11.4704 11.4259 11.1669 10.796 10.9824Z" fill="#ECEDF0"/>
                                    </svg>
                                </div>
                                <div class="titleSettingsBtn sidebarBtnOpen" data-target="components/sideBar/withdrawal">
                                    <p>Sacar</p>
                                    <span>Saques instantâneos via PIX em minutos</span>
                                </div>
                            </div>
                            <!-- <div class="settingsBtn sidebarBtnOpen" data-target="components/sideBar/api">
                                <div class="settingsBtnIcon">
                                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.85 8.8L7.3 7.64C7.5 7.48 7.596 7.29333 7.588 7.08C7.58 6.86667 7.484 6.68 7.3 6.52C7.1 6.36 6.86267 6.2768 6.588 6.2704C6.31333 6.264 6.07567 6.34053 5.875 6.5L3.7 8.24C3.5 8.4 3.4 8.58667 3.4 8.8C3.4 9.01333 3.5 9.2 3.7 9.36L5.875 11.1C6.075 11.26 6.31267 11.3368 6.588 11.3304C6.86333 11.324 7.10067 11.2405 7.3 11.08C7.48333 10.92 7.57933 10.7333 7.588 10.52C7.59667 10.3067 7.50067 10.12 7.3 9.96L5.85 8.8ZM12.15 8.8L10.7 9.96C10.5 10.12 10.404 10.3067 10.412 10.52C10.42 10.7333 10.516 10.92 10.7 11.08C10.9 11.24 11.1377 11.3232 11.413 11.3296C11.6883 11.336 11.9257 11.2595 12.125 11.1L14.3 9.36C14.5 9.2 14.6 9.01333 14.6 8.8C14.6 8.58667 14.5 8.4 14.3 8.24L12.125 6.5C11.925 6.34 11.6877 6.2632 11.413 6.2696C11.1383 6.276 10.9007 6.35947 10.7 6.52C10.5167 6.68 10.421 6.86667 10.413 7.08C10.405 7.29333 10.5007 7.48 10.7 7.64L12.15 8.8ZM2 16C1.45 16 0.979333 15.8435 0.588 15.5304C0.196667 15.2173 0.000666667 14.8405 0 14.4V3.2C0 2.76 0.196 2.38347 0.588 2.0704C0.98 1.75733 1.45067 1.60053 2 1.6H6.2C6.41667 1.12 6.77933 0.733333 7.288 0.44C7.79667 0.146667 8.36733 0 9 0C9.63267 0 10.2037 0.146667 10.713 0.44C11.2223 0.733333 11.5847 1.12 11.8 1.6H16C16.55 1.6 17.021 1.7568 17.413 2.0704C17.805 2.384 18.0007 2.76053 18 3.2V14.4C18 14.84 17.8043 15.2168 17.413 15.5304C17.0217 15.844 16.5507 16.0005 16 16H2ZM2 14.4H16V3.2H2V14.4ZM9 2.6C9.21667 2.6 9.396 2.5432 9.538 2.4296C9.68 2.316 9.75067 2.1728 9.75 2C9.74933 1.8272 9.67833 1.684 9.537 1.5704C9.39567 1.4568 9.21667 1.4 9 1.4C8.78333 1.4 8.60433 1.4568 8.463 1.5704C8.32167 1.684 8.25067 1.8272 8.25 2C8.24933 2.1728 8.32033 2.31627 8.463 2.4304C8.60567 2.54453 8.78467 2.60107 9 2.6Z" fill="#ECEDF0"/>
                                    </svg>
                                </div>
                                <div class="titleSettingsBtn">
                                    <p>Credenciais API</p>
                                    <span>Integre robôs e aplicativos externos</span>
                                </div>
                            </div> !-->
                            <div class="settingsBtn sidebarBtnOpen" data-target="components/sideBar/newPasswordSideBar.php">
                                <div class="settingsBtnIcon">
                                    <svg viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                        <path fill="currentColor" d="M16.766 8.783a1.648 1.648 0 1 0 0-3.297 1.648 1.648 0 0 0 0 3.297Z"></path>
                                        <path fill="currentColor" fill-rule="evenodd" d="m1.736 17.88-.363 3.44a.838.838 0 0 0 .973.917l4.543-.778a.838.838 0 0 0 .694-.75l.126-1.396 1.396-.126a.838.838 0 0 0 .759-.759l.126-1.396 1.395-.125a.838.838 0 0 0 .518-.241l2.314-2.315c.62.177 1.26.266 1.9.266a6.633 6.633 0 0 0 4.718-1.942 6.758 6.758 0 0 0 0-9.547 6.73 6.73 0 0 0-4.778-1.974 6.729 6.729 0 0 0-4.768 1.974C9.493 4.924 8.953 7.473 9.606 9.752l-7.63 7.63a.838.838 0 0 0-.24.499Zm11.625-5.042a.837.837 0 0 1 .88-.194h.004a5.098 5.098 0 0 0 5.405-1.154 5.067 5.067 0 0 0 0-7.178 5.059 5.059 0 0 0-3.588-1.49 5.06 5.06 0 0 0-3.589 1.49 5.083 5.083 0 0 0-1.161 5.4.838.838 0 0 1-.185.888l-.002.002-7.764 7.764-.21 2.03 2.821-.482.128-1.45a.838.838 0 0 1 .759-.76l1.396-.126.126-1.395a.837.837 0 0 1 .758-.76l1.799-.162 2.423-2.423Z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                
                                <div class="titleSettingsBtn">
                                    <p>Alterar Senha</p>
                                    <span>Mantenha sua conta segura</span>
                                </div>
                            </div>
                            <a href="logout">
                                <div class="leaveProfileBtn">
                                    <div class="leaveProfileBtnIcon">
                                        <svg viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                            <path fill="currentColor" fill-rule="evenodd" d="M5 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1.667a1 1 0 1 1-2 0V5H7v14h9v-1.667a1 1 0 1 1 2 0V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5Zm14.48 3.273a1 1 0 0 1 1.413.04l2.834 3a1 1 0 0 1 0 1.374l-2.834 3a1 1 0 1 1-1.454-1.374L20.68 13H14a1 1 0 1 1 0-2h6.68l-1.24-1.313a1 1 0 0 1 .04-1.414Z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="titleLeaveProfileBtn">
                                        <p>Sair</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </div>
            <div class="floating">
                <div class="backdropFloating"></div>
                <div class="floatingElements">
                    <div class="floatingElementsContainer">
                        <div class="floatingElementsContent">
                            <div class="floatingElementsHeader">
                                <button class="btnFloatingHeader active" id="durationFloating">Duração</button>
                                <button class="btnFloatingHeader" id="valueFloating">Valor</button>
                                <div class="indicatorBtn"
                                    style="width: 50%;transform: translateX(0%);will-change: transform;"></div>
                            </div>

                            <div class="floatingElementsBody">
                                <div class="floatingElementsPage">
                                    <div class="floatingElementsTime">
                                        <div class="floatingElementsTimeContent">
                                            <div class="timeHeader">
                                                <button class="timeHeaderBtn"><span>Rápida</span></button>
                                                <button class="timeHeaderBtn active"><span>Temporizador</span></button>
                                                <button class="timeHeaderBtn"><span>Horário</span></button>
                                                <div class="timeBtnIndicator" style="transform: translateY(100%);">
                                                </div>
                                            </div>
                                            <div class="timeContent">
                                                <div class="timeWrapper" style="transform: translateY(-100%);">
                                                    <div class="timeWrapperSection">
                                                        <div class="durationPickerContent">
                                                            <div class="durationPickerDescription">
                                                                <p>A Trade será fechada depois de:</p>
                                                            </div>
                                                            <div class="durationPicker">
                                                                <div class="firstDropshadow"></div>
                                                                <div class="secondDropshadow"></div>
                                                                <div class="durationTimer">
                                                                    <div class="durationTimerContent">
                                                                        <div class="durationTimerWrapper">
                                                                            <div class="durationTimerItem">5 seg.</div>
                                                                            <div class="durationTimerItem">15 seg.</div>
                                                                            <div class="durationTimerItem">30 seg.</div>
                                                                            <div class="durationTimerItem">45 seg.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="timeWrapperSection">
                                                        <div class="durationPickerContent">
                                                            <div class="durationPickerDescription">
                                                                <p>A Trade será fechada depois de:</p>
                                                            </div>
                                                            <div class="durationPicker">
                                                                <div class="firstDropshadow"></div>
                                                                <div class="secondDropshadow"></div>
                                                                <div class="durationTimer">
                                                                    <div class="durationTimerContent"
                                                                        style="width: min-content; flex: none;">
                                                                        <div class="durationTimerWrapper">
                                                                            <div class="durationTimerWrapper">
                                                                                <div class="durationTimerItem">01 h
                                                                                </div>
                                                                                <div class="durationTimerItem">02 h
                                                                                </div>
                                                                                <div class="durationTimerItem">02 h
                                                                                </div>
                                                                                <div class="durationTimerItem">04 h
                                                                                </div>
                                                                                <div class="durationTimerItem">05 h
                                                                                </div>
                                                                                <div class="durationTimerItem">06 h
                                                                                </div>
                                                                                <div class="durationTimerItem">07 h
                                                                                </div>
                                                                                <div class="durationTimerItem">08 h
                                                                                </div>
                                                                                <div class="durationTimerItem">09 h
                                                                                </div>
                                                                                <div class="durationTimerItem">10 h
                                                                                </div>
                                                                                <div class="durationTimerItem">11 h
                                                                                </div>
                                                                                <div class="durationTimerItem">12 h
                                                                                </div>
                                                                                <div class="durationTimerItem">13 h
                                                                                </div>
                                                                                <div class="durationTimerItem">14 h
                                                                                </div>
                                                                                <div class="durationTimerItem">15 h
                                                                                </div>
                                                                                <div class="durationTimerItem">16 h
                                                                                </div>
                                                                                <div class="durationTimerItem">17 h
                                                                                </div>
                                                                                <div class="durationTimerItem">18 h
                                                                                </div>
                                                                                <div class="durationTimerItem">19 h
                                                                                </div>
                                                                                <div class="durationTimerItem">20 h
                                                                                </div>
                                                                                <div class="durationTimerItem">21 h
                                                                                </div>
                                                                                <div class="durationTimerItem">22 h
                                                                                </div>
                                                                                <div class="durationTimerItem">23 h
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="durationTimerContent"
                                                                        style="width: min-content; flex: none;">
                                                                        <div class="durationTimerWrapper">
                                                                            <div class="durationTimerItem">01 min.</div>
                                                                            <div class="durationTimerItem">02 min.</div>
                                                                            <div class="durationTimerItem">03 min.</div>
                                                                            <div class="durationTimerItem">04 min.</div>
                                                                            <div class="durationTimerItem">05 min.</div>
                                                                            <div class="durationTimerItem">06 min.</div>
                                                                            <div class="durationTimerItem">07 min.</div>
                                                                            <div class="durationTimerItem">08 min.</div>
                                                                            <div class="durationTimerItem">09 min.</div>
                                                                            <div class="durationTimerItem">10 min.</div>
                                                                            <div class="durationTimerItem">11 min.</div>
                                                                            <div class="durationTimerItem">12 min.</div>
                                                                            <div class="durationTimerItem">13 min.</div>
                                                                            <div class="durationTimerItem">14 min.</div>
                                                                            <div class="durationTimerItem">15 min.</div>
                                                                            <div class="durationTimerItem">16 min.</div>
                                                                            <div class="durationTimerItem">17 min.</div>
                                                                            <div class="durationTimerItem">18 min.</div>
                                                                            <div class="durationTimerItem">19 min.</div>
                                                                            <div class="durationTimerItem">20 min.</div>
                                                                            <div class="durationTimerItem">21 min.</div>
                                                                            <div class="durationTimerItem">22 min.</div>
                                                                            <div class="durationTimerItem">23 min.</div>
                                                                            <div class="durationTimerItem">24 min.</div>
                                                                            <div class="durationTimerItem">25 min.</div>
                                                                            <div class="durationTimerItem">26 min.</div>
                                                                            <div class="durationTimerItem">27 min.</div>
                                                                            <div class="durationTimerItem">28 min.</div>
                                                                            <div class="durationTimerItem">29 min.</div>
                                                                            <div class="durationTimerItem">30 min.</div>
                                                                            <div class="durationTimerItem">31 min.</div>
                                                                            <div class="durationTimerItem">32 min.</div>
                                                                            <div class="durationTimerItem">33 min.</div>
                                                                            <div class="durationTimerItem">34 min.</div>
                                                                            <div class="durationTimerItem">35 min.</div>
                                                                            <div class="durationTimerItem">36 min.</div>
                                                                            <div class="durationTimerItem">37 min.</div>
                                                                            <div class="durationTimerItem">38 min.</div>
                                                                            <div class="durationTimerItem">39 min.</div>
                                                                            <div class="durationTimerItem">40 min.</div>
                                                                            <div class="durationTimerItem">41 min.</div>
                                                                            <div class="durationTimerItem">42 min.</div>
                                                                            <div class="durationTimerItem">43 min.</div>
                                                                            <div class="durationTimerItem">44 min.</div>
                                                                            <div class="durationTimerItem">45 min.</div>
                                                                            <div class="durationTimerItem">46 min.</div>
                                                                            <div class="durationTimerItem">47 min.</div>
                                                                            <div class="durationTimerItem">48 min.</div>
                                                                            <div class="durationTimerItem">49 min.</div>
                                                                            <div class="durationTimerItem">50 min.</div>
                                                                            <div class="durationTimerItem">51 min.</div>
                                                                            <div class="durationTimerItem">52 min.</div>
                                                                            <div class="durationTimerItem">53 min.</div>
                                                                            <div class="durationTimerItem">54 min.</div>
                                                                            <div class="durationTimerItem">55 min.</div>
                                                                            <div class="durationTimerItem">56 min.</div>
                                                                            <div class="durationTimerItem">57 min.</div>
                                                                            <div class="durationTimerItem">58 min.</div>
                                                                            <div class="durationTimerItem"
                                                                                style="height: auto;padding-bottom: 48px;">
                                                                                59 min.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="timeWrapperSection">
                                                        <div class="durationPickerContent">
                                                            <div class="durationPickerDescription">
                                                                <p>A Trade será fechada em:</p>
                                                            </div>
                                                            <div class="durationPicker">
                                                                <div class="firstDropshadow"></div>
                                                                <div class="secondDropshadow"></div>
                                                                <div class="durationTimer">
                                                                    <div class="durationTimerContent"
                                                                        style="width: min-content; flex: none;">
                                                                        <div class="durationTimerWrapper"
                                                                            style="height: auto;">
                                                                            <div class="durationTimerItem"
                                                                                style="justify-content: flex-end;">Hoje
                                                                            </div>
                                                                            <div class="durationTimerItem"
                                                                                style="justify-content: flex-end;">
                                                                                Amanhã</div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="durationTimerContent"
                                                                        style="width: min-content; flex: none;">
                                                                        <div class="durationTimerWrapper">
                                                                            <div class="durationTimerItem">01</div>
                                                                            <div class="durationTimerItem">02</div>
                                                                            <div class="durationTimerItem">02</div>
                                                                            <div class="durationTimerItem">04</div>
                                                                            <div class="durationTimerItem">05</div>
                                                                            <div class="durationTimerItem">06</div>
                                                                            <div class="durationTimerItem">07</div>
                                                                            <div class="durationTimerItem">08</div>
                                                                            <div class="durationTimerItem">09</div>
                                                                            <div class="durationTimerItem">10</div>
                                                                            <div class="durationTimerItem">11</div>
                                                                            <div class="durationTimerItem">12</div>
                                                                            <div class="durationTimerItem">13</div>
                                                                            <div class="durationTimerItem">14</div>
                                                                            <div class="durationTimerItem">15</div>
                                                                            <div class="durationTimerItem">16</div>
                                                                            <div class="durationTimerItem">17</div>
                                                                            <div class="durationTimerItem">18</div>
                                                                            <div class="durationTimerItem">19</div>
                                                                            <div class="durationTimerItem">20</div>
                                                                            <div class="durationTimerItem">21</div>
                                                                            <div class="durationTimerItem">22</div>
                                                                            <div class="durationTimerItem">23</div>
                                                                            <div class="durationTimerItem"
                                                                                style="height: auto;padding-bottom: 48px;">
                                                                                00</div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="durationTimerContent"
                                                                        style="width: min-content; flex: none;">
                                                                        <div class="durationTimerWrapper">
                                                                            <div class="durationTimerItem">01</div>
                                                                            <div class="durationTimerItem">02</div>
                                                                            <div class="durationTimerItem">02</div>
                                                                            <div class="durationTimerItem">04</div>
                                                                            <div class="durationTimerItem">05</div>
                                                                            <div class="durationTimerItem">06</div>
                                                                            <div class="durationTimerItem">07</div>
                                                                            <div class="durationTimerItem">08</div>
                                                                            <div class="durationTimerItem">09</div>
                                                                            <div class="durationTimerItem">10</div>
                                                                            <div class="durationTimerItem">11</div>
                                                                            <div class="durationTimerItem">12</div>
                                                                            <div class="durationTimerItem">13</div>
                                                                            <div class="durationTimerItem">14</div>
                                                                            <div class="durationTimerItem">15</div>
                                                                            <div class="durationTimerItem">16</div>
                                                                            <div class="durationTimerItem">17</div>
                                                                            <div class="durationTimerItem">18</div>
                                                                            <div class="durationTimerItem">19</div>
                                                                            <div class="durationTimerItem">20</div>
                                                                            <div class="durationTimerItem">21</div>
                                                                            <div class="durationTimerItem">22</div>
                                                                            <div class="durationTimerItem">23</div>
                                                                            <div class="durationTimerItem">24</div>
                                                                            <div class="durationTimerItem">25</div>
                                                                            <div class="durationTimerItem">26</div>
                                                                            <div class="durationTimerItem">27</div>
                                                                            <div class="durationTimerItem">28</div>
                                                                            <div class="durationTimerItem">29</div>
                                                                            <div class="durationTimerItem">30</div>
                                                                            <div class="durationTimerItem">31</div>
                                                                            <div class="durationTimerItem">32</div>
                                                                            <div class="durationTimerItem">33</div>
                                                                            <div class="durationTimerItem">34</div>
                                                                            <div class="durationTimerItem">35</div>
                                                                            <div class="durationTimerItem">36</div>
                                                                            <div class="durationTimerItem">37</div>
                                                                            <div class="durationTimerItem">38</div>
                                                                            <div class="durationTimerItem">39</div>
                                                                            <div class="durationTimerItem">40</div>
                                                                            <div class="durationTimerItem">41</div>
                                                                            <div class="durationTimerItem">42</div>
                                                                            <div class="durationTimerItem">43</div>
                                                                            <div class="durationTimerItem">44</div>
                                                                            <div class="durationTimerItem">45</div>
                                                                            <div class="durationTimerItem">46</div>
                                                                            <div class="durationTimerItem">47</div>
                                                                            <div class="durationTimerItem">48</div>
                                                                            <div class="durationTimerItem">49</div>
                                                                            <div class="durationTimerItem">50</div>
                                                                            <div class="durationTimerItem">51</div>
                                                                            <div class="durationTimerItem">52</div>
                                                                            <div class="durationTimerItem">53</div>
                                                                            <div class="durationTimerItem">54</div>
                                                                            <div class="durationTimerItem">55</div>
                                                                            <div class="durationTimerItem">56</div>
                                                                            <div class="durationTimerItem">57</div>
                                                                            <div class="durationTimerItem">58</div>
                                                                            <div class="durationTimerItem"
                                                                                style="height: auto;padding-bottom: 48px;">
                                                                                59</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="floatingElementsTime">
                                        <div class="floatingDeposit">
                                            <div class="floatingDepositValue">
                                                <div class="valueDescription">
                                                    <span>Sem saldo suficiente</span>
                                                    <button id="depositButton">Depositar</button>
                                                </div>
                                                <div class="valueInput">
                                                    <h3>R$<span id="displayValue">00</span></h3>
                                                    <input type="hidden" id="hiddenValue" value="0">
                                                </div>
                                            </div>

                                            <div class="floatingDepositKeyboard">
                                                <div class="keyboard" id="keyboard">
                                                    <button class="numberButton">1</button>
                                                    <button class="numberButton">2</button>
                                                    <button class="numberButton">3</button>
                                                    <button class="numberButton">4</button>
                                                    <button class="numberButton">5</button>
                                                    <button class="numberButton">6</button>
                                                    <button class="numberButton">7</button>
                                                    <button class="numberButton">8</button>
                                                    <button class="numberButton">9</button>
                                                    <button class="decimalButton">.</button>
                                                    <button class="numberButton">0</button>
                                                    <button id="clearButton">
                                                        <svg class="ohGHbMkZKR" viewBox="0 0 24 24" role="presentation"
                                                            focusable="false" aria-hidden="true">
                                                            <path fill="currentColor" fill-rule="evenodd"
                                                                d="M8.125 4H21.25c.962 0 1.75.8 1.75 1.778v12.444C23 19.2 22.212 20 21.25 20H8.125c-.604 0-1.076-.32-1.391-.791L1.99 13.244a2 2 0 0 1-.001-2.489l4.745-5.973C7.049 4.312 7.52 4 8.124 4Zm9.266 12.444 1.234-1.253L15.484 12l3.14-3.191-1.233-1.253-3.141 3.19-3.141-3.19-1.234 1.253L13.016 12l-3.141 3.191 1.234 1.253 3.14-3.19 3.142 3.19Z"
                                                                clip-rule="evenodd"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <style>
        .toast-container {
            position: fixed;
            top: 25px;
            right: 30px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            z-index: 9999;
            /* Certifica-se de que o toast sempre esteja visível */
        }

        .toast {
            position: relative;
            border-radius: 12px;
            /* Borda mais suave */
            background: #f4f8f7;
            /* Fundo claro para contraste com o conteúdo */
            padding: 15px 30px 15px 20px;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
            /* Sombra mais suave */
            border-left: 10px solid var(--primary-color);
            /* Cor de destaque no lado esquerdo */
            overflow: hidden;
            transform: translateX(calc(100% + 30px));
            transition: all 0.4s ease-out;
            /* Transição mais suave e rápida */
            display: block !important;
            max-width: 350px;
            /* Limitar largura para evitar toasts muito grandes */
        }

        .toast.active {
            transform: translateX(0);
        }

        .toast-content {
            display: flex;
            align-items: center;
        }

        .toast-check {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--primary-color);
            /* Verde suave */
            border-radius: 50%;
            color: #fff;
            font-size: 20px;
            width: 40px;
            height: 40px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
            /* Adiciona profundidade ao ícone */
        }

        .message {
            display: flex;
            flex-direction: column;
            margin: 0 16px;
        }

        .message-text {
            font-size: 18px;
            font-weight: 600;
        }

        .text-1 {
            color: #333;
        }

        .text-2 {
            color: #666;
            font-weight: 400;
            font-size: 14px;
        }

        .toast-close {
            position: absolute;
            top: 12px;
            right: 18px;
            padding: 5px;
            cursor: pointer;
            opacity: 0.6;
            color: #00cba1;
            font-size: 16px;
            transition: opacity 0.3s;
        }

        .toast-close:hover {
            opacity: 1;
        }

        .progress {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 4px;
            width: 100%;
            background: #ddd;
            border-radius: 0 0 12px 12px;
            /* Harmoniza o formato do progresso com a caixa */
        }

        .progress::before {
            content: "";
            position: absolute;
            bottom: 0;
            right: 0;
            height: 100%;
            width: 100%;
            background-color: var(--primary-color);
            border-radius: 0 0 12px 12px;
        }

        .progress.active::before {
            animation: progress 5s linear forwards;
        }

        @keyframes progress {
            100% {
                right: 100%;
            }
        }

        .toast-btn {
            padding: 12px 45px;
            font-size: 18px;
            outline: none;
            border: none;
            background-color: #00cba1;
            color: #fff;
            border-radius: 25px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .toast-btn:hover {
            background-color: #009e82;
            /* Cor um pouco mais escura no hover */
        }
    </style>
    <div id="notifications"></div>
    <script>
        $(document).ready(function () {
            $("#loadingChart").removeClass("active").addClass("deactivate");
            // Adicione aqui o código que depende do DOM estar carregado
        });
        function showToast(iconClass, title, description) {
            const toastId = 'toast_' + new Date().getTime();
            const toastHtml = `
            <div class="toast ${toastId}" style="transform: translateY(-100%); transition: transform 0.3s ease;">
                <div class="content" style="display:flex;text-align">
                    <i class="${iconClass}"></i>
                    <div>
                        <h2 style="padding-inline:1rem 1.5rem;">${title}</h2>
                        <p style="margin-left:1rem">${description}</p>
                    </div>
                </div>
                <button>
                    <svg width="24" class="ohGHbMkZKR" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                        <path fill="currentColor" fill-rule="evenodd" d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        `;

            $('#notifications').append(toastHtml);
            const $toast = $('.' + toastId);

            // Animação de entrada
            setTimeout(() => {
                $toast.css('transform', 'translateY(0)');
            }, 10);

            // Animação de saída após 5 segundos
            setTimeout(() => {
                $toast.css('transform', 'translateY(-100%)');
                setTimeout(() => {
                    $toast.remove();
                }, 300);
            }, 5000);

            // Evento de clique no botão de fechar
            $toast.find('button').on('click', function () {
                $toast.css('transform', 'translateY(-100%)');
                setTimeout(() => {
                    $toast.remove();
                }, 300);
            });
        }
    </script>

    <script type="text/javascript" src="src/script.js?v2" ass="3"></script>
    <script type="text/javascript" src="./JavaScript/main.js"></script>

    <script type="module" src="src/index.js"></script>



</body>

</html>