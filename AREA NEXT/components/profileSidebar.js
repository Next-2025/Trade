// const sidebar = `
// <div class="backdropSidebar iconClose"></div>
// <div class="sideBarPanel">
//     <div class="profilePanelContainer">
//         <div class="profilePanelHeader">
//             <div class="titleHeader">
//                 <h2>Perfil</h2>
//             </div>
//             <div class="backPanelProfile" style="display: none;">
//                 <svg class="ohGHbMkZKR cor-w-panel-l-header__fake-icon" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true" style="opacity: 1;">
//                     <path fill="currentColor" fill-rule="evenodd" d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"></path>
//                 </svg>
//             </div>
//             <div class="closePanelProfile iconClose">
//                 <svg class="ohGHbMkZKR cor-w-panel-l-header__fake-icon" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true" style="opacity: 1;">
//                     <path fill="currentColor" fill-rule="evenodd" d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z" clip-rule="evenodd"></path>
//                 </svg>
//             </div>
//         </div>
//         <div class="profilePanelContent">
//             <div class="profileInfo">
//                 <div class="profileInfoLeft">
//                     <div class="profileInfoInitials">
//                         <p>Olá, JHONATAN WILLIAM SANTOS DA MOTA</p>
//                     </div>
//                 </div>
//                 <div class="profileInfoRight">
//                     <div class="profileUserIcon">
//                         <svg class="ohGHbMkZKR pro-c-avatar__placeholder" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
//                             <path fill="currentColor" fill-rule="evenodd" d="M12 3a5 5 0 0 0-3.456 8.613c-1.895.74-3.174 2.046-4.01 3.346a10.917 10.917 0 0 0-1.506 3.789l-.013.075-.003.023-.001.008v.005a1 1 0 0 0 1.979.285v-.007l.008-.042.036-.186a8.914 8.914 0 0 1 1.182-2.868C7.197 14.514 8.91 13 12 13c3.091 0 4.802 1.514 5.784 3.04a8.915 8.915 0 0 1 1.218 3.055l.006.035.001.007.001.005v.002a1 1 0 0 0 1.98-.285v-.006l-.002-.007-.003-.023a7.202 7.202 0 0 0-.063-.333 10.92 10.92 0 0 0-1.455-3.53c-.837-1.301-2.116-2.608-4.01-3.347A5 5 0 0 0 12 3ZM9 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" clip-rule="evenodd"></path>
//                         </svg>
//                     </div>
//                 </div>
//             </div>
//             <div class="profilePanelBody">
//                 <div class="profilePanelLevel">
//                     <div class="profileCardLevel sidebarBtnOpen" data-target="components/sideBar/pathTraderSideBar">
//                         <div class="profileCardLevelContent">
//                             <div class="profileCardLevelTop">
//                                 <svg width="1.5rem" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
//                                     <path fill="var(--primary-color)" d="M5 10.1 12 8l7 2.1V15l-7-2.1L5 15v-4.9Z"></path>
//                                 </svg>
//                                 <p>Iniciante</p>
//                             </div>
//                             <div class="profileCardLevelBottom">
//                                 <div class="profileLevelDetails">
//                                     <p>Nível 1</p>
//                                     <p>0/50 XP</p>
//                                 </div>
//                                 <div class="profileLevelProgress">
//                                     <div class="progressBar">
//                                         <div class="progress" style="width: 1%;"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="sideBarPanel">
//                 <div class="settingsPanelContainer">
//                     <div class="settingsPanelContent">
//                         <div class="btnsSection">
//                             <div class="settingsBtn sidebarBtnOpen" data-target="components/sideBar/personSettingsSideBar">
//                                 <div class="settingsBtnIcon">
//                                     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M12.052 4.45954C11.9192 6.4137 10.5522 7.91908 9.06152 7.91908C7.57083 7.91908 6.20157 6.41418 6.07107 4.45954C5.93514 2.42658 7.26589 1 9.06152 1C10.8572 1 12.1879 2.46358 12.052 4.45954Z" stroke="#ECEDF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                                         <path d="M8.99999 11.0693C5.37934 11.0693 1.89758 12.7834 1.02534 16.1215C0.909777 16.5631 1.20034 17 1.67646 17H16.3241C16.8002 17 17.0891 16.5631 16.9752 16.1215C16.103 12.7299 12.6212 11.0693 8.99999 11.0693Z" stroke="#ECEDF0" stroke-width="1.5" stroke-miterlimit="10"/>
//                                     </svg>
//                                 </div>
//                                 <div class="titleSettingsBtn">
//                                     <p>Configurações Pessoais</p>
//                                     <span>Dados da conta e verificação KYC</span>
//                                 </div>
//                             </div>
//                             <div class="settingsBtn">
//                                 <div class="settingsBtnIcon">
//                                     <svg viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
//                                         <path fill="currentColor" fill-rule="evenodd" d="M17 4.775a1 1 0 0 0-1.316-.949L9.162 6H17V4.775ZM19 6V4.775a3 3 0 0 0-3.949-2.846l-11 3.666A3 3 0 0 0 2 8.442V17a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3ZM5 8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5Z" clip-rule="evenodd"></path>
//                                         <path fill="currentColor" d="M16 13a1 1 0 1 1 1.998 0A1 1 0 0 1 16 13Z"></path>
//                                     </svg>
//                                 </div>
//                                 <div class="titleSettingsBtn sidebarBtnOpen" data-target="components/sideBar/valueDepositSideBar">
//                                     <p>Depositar</p>
//                                     <span>Adicione saldo em sua conta real</span>
//                                 </div>
//                             </div>
//                             <div class="settingsBtn">
//                                 <div class="settingsBtnIcon">
//                                     <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M16.2727 11.2816L15.7356 8.34679C15.5031 7.07889 15.3868 6.44494 14.9274 6.07004C14.468 5.69514 13.8074 5.69434 12.487 5.69434H8.93853C7.61809 5.69434 6.95826 5.69434 6.49807 6.07004C6.03868 6.44494 5.92243 7.07889 5.68993 8.34679L5.15278 11.2816C4.67174 13.9132 4.43042 15.2293 5.17202 16.0926C5.91362 16.9574 7.28457 16.9574 10.0249 16.9574H11.4006C14.1409 16.9574 15.5119 16.9574 16.2535 16.0934C16.9951 15.2293 16.7546 13.9132 16.2727 11.2824" stroke="#ECEDF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                                         <path fill-rule="evenodd" clip-rule="evenodd" d="M5.39348 0.956058L5.33995 0.956056C4.51336 0.95602 3.81482 0.955989 3.25833 1.0348C2.66403 1.11897 2.12331 1.30576 1.69165 1.76019C1.265 2.20934 1.09466 2.76313 1.01716 3.37009C0.943312 3.94844 0.943333 4.67732 0.94336 5.55343V5.60308V5.65275C0.943333 6.52883 0.943312 7.25773 1.01716 7.83596C1.09459 8.44223 1.26473 8.99566 1.69094 9.44428C1.86107 9.62433 2.05814 9.77153 2.27906 9.88361C2.64846 10.071 3.09983 9.92349 3.28724 9.55409C3.47464 9.1847 3.32711 8.73332 2.95772 8.54592C2.89046 8.5118 2.83257 8.46851 2.78091 8.41377L2.78092 8.41376L2.77878 8.41152C2.66376 8.29063 2.56309 8.1002 2.50508 7.64593C2.4448 7.17398 2.44336 6.54166 2.44336 5.60308C2.44336 4.66451 2.4448 4.03216 2.50508 3.56008C2.56309 3.10574 2.66378 2.91476 2.77921 2.79325C2.88961 2.67702 3.05561 2.57848 3.46867 2.51998C3.90757 2.45782 4.49887 2.45606 5.39348 2.45606H16.4938C17.3884 2.45606 17.9797 2.45782 18.4186 2.51998C18.8317 2.57848 18.9977 2.67702 19.1081 2.79325C19.2236 2.91483 19.3242 3.10567 19.3822 3.55975C19.4425 4.0317 19.4439 4.66402 19.4439 5.60308C19.4439 6.54214 19.4425 7.17469 19.3822 7.64663C19.3242 8.10096 19.2236 8.29081 19.1089 8.41107L19.1064 8.4138C19.0551 8.46812 18.9954 8.51259 18.9302 8.54559C18.5607 8.73264 18.4127 9.18387 18.5997 9.55344C18.7868 9.92302 19.238 10.071 19.6076 9.88394C19.8277 9.77253 20.0267 9.62376 20.1961 9.44451C20.6226 8.99624 20.7927 8.44278 20.8701 7.83667C20.944 7.25843 20.944 6.52931 20.9439 5.6528V5.65277V5.60308V5.55338V5.55336C20.944 4.67684 20.944 3.94795 20.8701 3.36972C20.7926 2.76273 20.6222 2.20927 20.1957 1.76019C19.764 1.30576 19.2233 1.11897 18.629 1.0348C18.0725 0.955989 17.3739 0.95602 16.5474 0.956056L16.4938 0.956058H5.39348ZM20.1961 9.44451L20.1974 9.44319L19.6519 8.92852L20.1948 9.44592L20.1961 9.44451ZM1.69094 9.44428L1.68994 9.44322L2.2354 8.92853L1.69207 9.44547L1.69094 9.44428Z" fill="#ECEDF0"/>
//                                         <path d="M10.796 10.9824C10.166 10.7978 9.96347 10.6069 9.96347 10.3097C9.96347 9.96868 10.2437 9.73091 10.7127 9.73091C11.1068 9.73091 11.3038 9.89985 11.376 10.1689C11.4093 10.2941 11.5009 10.3879 11.6174 10.3879H11.7007C11.8838 10.3879 12.0143 10.1846 11.9504 9.99058C11.8339 9.62141 11.5619 9.3148 11.129 9.19591V8.98004C11.129 8.72036 10.9431 8.51074 10.7127 8.51074C10.4824 8.51074 10.2965 8.72036 10.2965 8.98004V9.18653C9.75811 9.31793 9.3252 9.71214 9.3252 10.316C9.3252 11.0387 9.85524 11.3985 10.6295 11.6081C11.3233 11.7958 11.462 12.0711 11.462 12.3621C11.462 12.578 11.326 12.9221 10.7127 12.9221C10.2548 12.9221 10.019 12.7375 9.92739 12.4747C9.88576 12.3527 9.79141 12.2651 9.67763 12.2651H9.59993C9.414 12.2651 9.28357 12.4778 9.35295 12.6718C9.51113 13.1067 9.88021 13.3632 10.2965 13.4634V13.673C10.2965 13.9327 10.4824 14.1423 10.7127 14.1423C10.9431 14.1423 11.129 13.9327 11.129 13.673V13.4696C11.6701 13.3539 12.1003 13.0003 12.1003 12.359C12.1003 11.4704 11.4259 11.1669 10.796 10.9824Z" fill="#ECEDF0"/>
//                                     </svg>
//                                 </div>
//                                 <div class="titleSettingsBtn sidebarBtnOpen" data-target="components/sideBar/withdrawal">
//                                     <p>Sacar</p>
//                                     <span>Saques instantâneos via PIX em minutos</span>
//                                 </div>
//                             </div>
//                             <!-- <div class="settingsBtn sidebarBtnOpen" data-target="components/sideBar/api">
//                                 <div class="settingsBtnIcon">
//                                     <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M5.85 8.8L7.3 7.64C7.5 7.48 7.596 7.29333 7.588 7.08C7.58 6.86667 7.484 6.68 7.3 6.52C7.1 6.36 6.86267 6.2768 6.588 6.2704C6.31333 6.264 6.07567 6.34053 5.875 6.5L3.7 8.24C3.5 8.4 3.4 8.58667 3.4 8.8C3.4 9.01333 3.5 9.2 3.7 9.36L5.875 11.1C6.075 11.26 6.31267 11.3368 6.588 11.3304C6.86333 11.324 7.10067 11.2405 7.3 11.08C7.48333 10.92 7.57933 10.7333 7.588 10.52C7.59667 10.3067 7.50067 10.12 7.3 9.96L5.85 8.8ZM12.15 8.8L10.7 9.96C10.5 10.12 10.404 10.3067 10.412 10.52C10.42 10.7333 10.516 10.92 10.7 11.08C10.9 11.24 11.1377 11.3232 11.413 11.3296C11.6883 11.336 11.9257 11.2595 12.125 11.1L14.3 9.36C14.5 9.2 14.6 9.01333 14.6 8.8C14.6 8.58667 14.5 8.4 14.3 8.24L12.125 6.5C11.925 6.34 11.6877 6.2632 11.413 6.2696C11.1383 6.276 10.9007 6.35947 10.7 6.52C10.5167 6.68 10.421 6.86667 10.413 7.08C10.405 7.29333 10.5007 7.48 10.7 7.64L12.15 8.8ZM2 16C1.45 16 0.979333 15.8435 0.588 15.5304C0.196667 15.2173 0.000666667 14.8405 0 14.4V3.2C0 2.76 0.196 2.38347 0.588 2.0704C0.98 1.75733 1.45067 1.60053 2 1.6H6.2C6.41667 1.12 6.77933 0.733333 7.288 0.44C7.79667 0.146667 8.36733 0 9 0C9.63267 0 10.2037 0.146667 10.713 0.44C11.2223 0.733333 11.5847 1.12 11.8 1.6H16C16.55 1.6 17.021 1.7568 17.413 2.0704C17.805 2.384 18.0007 2.76053 18 3.2V14.4C18 14.84 17.8043 15.2168 17.413 15.5304C17.0217 15.844 16.5507 16.0005 16 16H2ZM2 14.4H16V3.2H2V14.4ZM9 2.6C9.21667 2.6 9.396 2.5432 9.538 2.4296C9.68 2.316 9.75067 2.1728 9.75 2C9.74933 1.8272 9.67833 1.684 9.537 1.5704C9.39567 1.4568 9.21667 1.4 9 1.4C8.78333 1.4 8.60433 1.4568 8.463 1.5704C8.32167 1.684 8.25067 1.8272 8.25 2C8.24933 2.1728 8.32033 2.31627 8.463 2.4304C8.60567 2.54453 8.78467 2.60107 9 2.6Z" fill="#ECEDF0"/>
//                                     </svg>
//                                 </div>
//                                 <div class="titleSettingsBtn">
//                                     <p>Credenciais API</p>
//                                     <span>Integre robôs e aplicativos externos</span>
//                                 </div>
//                             </div> !-->
//                             <div class="settingsBtn sidebarBtnOpen" data-target="components/sideBar/newPasswordSideBar.php">
//                                 <div class="settingsBtnIcon">
//                                     <svg viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
//                                         <path fill="currentColor" d="M16.766 8.783a1.648 1.648 0 1 0 0-3.297 1.648 1.648 0 0 0 0 3.297Z"></path>
//                                         <path fill="currentColor" fill-rule="evenodd" d="m1.736 17.88-.363 3.44a.838.838 0 0 0 .973.917l4.543-.778a.838.838 0 0 0 .694-.75l.126-1.396 1.396-.126a.838.838 0 0 0 .759-.759l.126-1.396 1.395-.125a.838.838 0 0 0 .518-.241l2.314-2.315c.62.177 1.26.266 1.9.266a6.633 6.633 0 0 0 4.718-1.942 6.758 6.758 0 0 0 0-9.547 6.73 6.73 0 0 0-4.778-1.974 6.729 6.729 0 0 0-4.768 1.974C9.493 4.924 8.953 7.473 9.606 9.752l-7.63 7.63a.838.838 0 0 0-.24.499Zm11.625-5.042a.837.837 0 0 1 .88-.194h.004a5.098 5.098 0 0 0 5.405-1.154 5.067 5.067 0 0 0 0-7.178 5.059 5.059 0 0 0-3.588-1.49 5.06 5.06 0 0 0-3.589 1.49 5.083 5.083 0 0 0-1.161 5.4.838.838 0 0 1-.185.888l-.002.002-7.764 7.764-.21 2.03 2.821-.482.128-1.45a.838.838 0 0 1 .759-.76l1.396-.126.126-1.395a.837.837 0 0 1 .758-.76l1.799-.162 2.423-2.423Z" clip-rule="evenodd"></path>
//                                     </svg>
//                                 </div>
//                                 <div class="titleSettingsBtn">
//                                     <p>Alterar Senha</p>
//                                     <span>Mantenha sua conta segura</span>
//                                 </div>
//                             </div>
//                             <a href="logout">
//                                 <div class="leaveProfileBtn">
//                                     <div class="leaveProfileBtnIcon">
//                                         <svg viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
//                                             <path fill="currentColor" fill-rule="evenodd" d="M5 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1.667a1 1 0 1 1-2 0V5H7v14h9v-1.667a1 1 0 1 1 2 0V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5Zm14.48 3.273a1 1 0 0 1 1.413.04l2.834 3a1 1 0 0 1 0 1.374l-2.834 3a1 1 0 1 1-1.454-1.374L20.68 13H14a1 1 0 1 1 0-2h6.68l-1.24-1.313a1 1 0 0 1 .04-1.414Z" clip-rule="evenodd"></path>
//                                         </svg>
//                                     </div>
//                                     <div class="titleLeaveProfileBtn">
//                                         <p>Sair</p>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// `;