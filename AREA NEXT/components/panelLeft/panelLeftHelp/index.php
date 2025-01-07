<div class="containerPanel panelLeftHelp">
    <div class="panelLeftContainer">
        <div class="panelLeftContainerInner" style="background-color: #08090a;">
            <div class="panel">
                <div class="panelHeader">
                    <div class="panelHeaderContent">
                        <h3>Ajuda</h3>
                        <div class="panelHeaderIcon">
                            <div class="icon iconClose">
                                <svg viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z" clip-rule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panelContent">
                    <div class="accordion">
                        <div class="accordion-item">
                            <div class="accordion-item-header">Qual o depósito e saque mínimo?</div>
                            <div class="accordion-item-body">
                                <div class="accordion-item-body-content">
                                    Você pode começar depositando a partir de R$ 30,00 e sacar a partir de R$ 10,00.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-item-header">Existem taxas para depósitos e saques?</div>
                            <div class="accordion-item-body">
                                <div class="accordion-item-body-content">
                                    Atualmente não cobramos nenhuma taxa para depósitos e saques. No entanto, o método de pagamento escolhido pode cobrar taxas.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-item-header">Posso operar no celular?</div>
                            <div class="accordion-item-body">
                                <div class="accordion-item-body-content">
                                    Sim, nossa plataforma é 100% responsiva e pode ser utilizada em qualquer dispositivo móvel através de navegadores como Google Chrome, Safari, entre outros.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-item-header">Existem bônus ou promoções disponíveis?</div>
                            <div class="accordion-item-body">
                                <div class="accordion-item-body-content">
                                    Você pode obter até 200% de bônus no seu primeiro depósito. Lembre-se de que o valor do bônus pode ser sacado após realizar uma movimentação de 200x o valor depositado.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-item-header">Como faço para depositar?</div>
                            <div class="accordion-item-body">
                                <div class="accordion-item-body-content">
                                    Você pode depositar instantaneamente com PIX localizado no botão "Depositar" e siga as instruções.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-item-header">Como faço para obter suporte?</div>
                            <div class="accordion-item-body">
                                <div class="accordion-item-body-content">
                                   O suporte é 24/7 e você pode entrar em contato pelo email suporte@broker.systemtrading.pro                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-item-header">Como faço para sacar meus lucros?</div>
                            <div class="accordion-item-body">
                                <div class="accordion-item-body-content">
                                   Clique no ícone do seu perfil e clique no botão "Sacar" e siga as instruções.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-item-header">Quanto tempo leva para o meu saque ser processado?</div>
                            <div class="accordion-item-body">
                                <div class="accordion-item-body-content">
                                   O saque normalmente é processado em menos de 1 hora, mas pode levar até 48 horas úteis.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="supportEmail">
                        <svg class="ohGHbMkZKR" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.665c.01.085.01.17 0 .255V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6.956a.999.999 0 0 1 0-.327V6Zm2 2.533V18h16V8.53l-7.503 4.332a1 1 0 0 1-1 0L4 8.533Zm16-2.312V6H4v.224l7.997 4.617L20 6.22Z" clip-rule="evenodd"></path></svg>
                        <p>Tempo médio de resposta 30 minutos.</p>
                        <a class="supportEmailLink" href="mailto:suporte@broker.systemtrading.pro"><span>suporte@broker.systemtrading.pro</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", event => {
            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if(accordionItemHeader.classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            }
            else {
                accordionItemBody.style.maxHeight = 0;
            }
            
        });
    });
</script>