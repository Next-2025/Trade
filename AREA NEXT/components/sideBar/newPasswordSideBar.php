<div class="backdropSidebar iconClose"></div>
<div class="sideBarPanel">
    <div class="newPasswordPanelContainer">
        <div class="newPasswordPanelHeader">
            <div class="actionBtns">
                <div class="backPanelNewPassword sidebarBtnOpen" data-target="components/sideBar/profileSideBar">
                    <svg class="ohGHbMkZKR cor-w-panel-l-header__fake-icon" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true" style="opacity: 1;"><path fill="currentColor" fill-rule="evenodd" d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"></path></svg>
                </div>
                <div class="closePanelnewPassword iconClose">
                    <svg class="ohGHbMkZKR cor-w-panel-l-header__fake-icon" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true" style="opacity: 1;"><path fill="currentColor" fill-rule="evenodd" d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
            <div class="titleHeader">
                <h2>Alterar Senha</h2>
            </div>
        </div>
        <div class="newPasswordPanelContent">
            <div class="info">
                <div class="infoContent">
                    <svg class="ohGHbMkZKR" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true" color="var(--contrast-primary)"><path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" clip-rule="evenodd"></path><path fill="currentColor" d="M12.998 8A1 1 0 1 1 11 8a1 1 0 0 1 1.998 0Z"></path><path fill="currentColor" fill-rule="evenodd" d="M10 11a1 1 0 0 1 1-1h2v6a1 1 0 1 1-2 0v-4a1 1 0 0 1-1-1Z" clip-rule="evenodd"></path></svg>
                    <div class="infoText">
                        <p>
                            <strong>IMPORTANTE: </strong>Para atualizar a sua senha, ela precisa seguir os requisitos: <br> <br>
                            Deve ter entre 8 e 20 caracteres; <br>
                            Deve conter pelo menos um número; <br>
                            Deve conter pelo menos uma letra maiúscula.
                        </p>
                    </div>
                </div>
            </div>
            <form>
                <div class="contentForm">
                    <div class="inputName">
                        <label class="labelInput">
                            <div class="labelContent">
                                <span class="placeholder">
                                    Senha Antiga
                                </span>
                                <input name="oldPassword" type="password" value="">
                            </div>
                        </label>
                    </div>   
                    <div class="inputName">
                        <label class="labelInput">
                            <div class="labelContent">
                                <span class="placeholder">
                                    Nova Senha
                                </span>
                                <input id="newPassword" name="newPassword" type="password" value="">
                            </div>
                        </label>
                    </div>   
                    <div class="inputName">
                        <label class="labelInput">
                            <div class="labelContent">
                                <span class="placeholder">
                                    Confirmar Nova Senha
                                </span>
                                <input name="newPasswordRepeat" type="password" value="">
                            </div>
                        </label>
                    </div>
                    <div class="error-message" id="errorMessage" style="display: none; color: red; margin-bottom: 10px;"></div>
                </div>
                <div class="profileLevelProgress">
                    <div class="statusPassword">
                        <p class="titleStatus">Força da senha</p>
                        <p class="levelPassword" id="levelPassword">Nível</p>
                    </div>
                    <div class="progressBar">
                        <div class="progress" id="progress" style="width: 0%;"></div>
                    </div>
                </div>
                <div class="btnsSection">
                    <div class="editNameBtn">
                        <button id="changePasswordBtn" class="titleeditNameBtn" style="background: transparent;border: none;" disabled>
                            <p>Alterar senha</p>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
    document.getElementById('newPassword').addEventListener('input', function () {
        var password = this.value;
        var strength = checkPasswordStrength(password);
        updateProgressBar(strength);
    });

    function checkPasswordStrength(password) {
        var strength = 0;

        if (password.length >= 8 && password.length <= 20) {
            strength += 25;
        }
        if (/[A-Z]/.test(password)) { // Verifica se tem letra maiúscula
            strength += 25;
        }
        if (/\d/.test(password)) { // Verifica se tem número
            strength += 25;
        }
        if (/[^A-Za-z0-9]/.test(password)) { // Verifica se tem caractere especial
            strength += 25;
        }

        return strength;
    }

    function updateProgressBar(strength) {
        var progressBar = document.getElementById('progress');
        var levelPassword = document.getElementById('levelPassword');
        var changePasswordBtn = document.getElementById('changePasswordBtn');

        progressBar.style.width = strength + '%';

        if (strength < 50) {
            levelPassword.textContent = "Fraca";
            progressBar.style.backgroundColor = "red";
        } else if (strength < 75) {
            levelPassword.textContent = "Média";
            progressBar.style.backgroundColor = "orange";
        } else {
            levelPassword.textContent = "Forte";
            progressBar.style.backgroundColor = "green";
        }

        if (strength >= 75) {
            changePasswordBtn.disabled = false;
        } else {
            changePasswordBtn.disabled = true;
        }
    }

    function showError(message) {
        var errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        changePasswordBtn.disabled = false;
    }

    changePasswordBtn.addEventListener('click', function (event) {
        event.preventDefault();

        changePasswordBtn.disabled = true;

        var oldPassword = document.querySelector('input[name="oldPassword"]').value;
        var newPassword = document.querySelector('input[name="newPassword"]').value;
        var confirmPassword = document.querySelector('input[name="newPasswordRepeat"]').value;

        if (newPassword !== confirmPassword) {
            showError('As senhas não conferem');
            return;
        }

        var body = JSON.stringify({
            old_password: oldPassword,
            new_password: newPassword,
            confirm_password: confirmPassword
        });

        fetch('api/user/change_password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'wefWOC52elVB4evSDRAw6w==.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'
            },
            body: body
        })
        .then(response => response.json())
        .then(data => {
            if (data.statusCode === 200) {
                document.querySelector(".newPasswordPanelContent").innerHTML = `<img src="libs/img/success.png" style="width: 200px; margin: 0 auto; background: transparent;">
                    <h3 style="font-size: 28px; color: white; text-align: center; line-height: 30px; margin-top: 20px;">
                        Senha alterada com sucesso
                    </h3>`
            } else {
                showError(data.message);
            }
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            alert('Erro ao tentar alterar a senha.');
        });
    });
</script>
