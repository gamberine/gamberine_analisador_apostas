@echo off
REM Script local para rodar Angular com config "local" na porta 4200 e abrir no Edge
start msedge http://localhost:4200
ng serve --c=local --port 4200

:: =====================================
:: Ativar / Desativar Auto Approve Codex
:: Uso:
::   gtp auto   -> ativa auto-approve (nunca mais pede aprovação)
::   gtp noauto -> volta para modo seguro (pede approve once/session)
:: =====================================
:gtp
if "%1"=="auto" (
    echo 🔓 Ativando auto-approve do Codex ChatGPT...
    powershell -Command "(Get-Content $env:APPDATA\Code\User\settings.json -Raw) -replace '\"github.copilot.terminal.requireApproval\":\s*true', '\"github.copilot.terminal.requireApproval\": false' | Set-Content $env:APPDATA\Code\User\settings.json"
    exit /b
)

if "%1"=="noauto" (
    echo 🔒 Desativando auto-approve do Codex ChatGPT...
    powershell -Command "(Get-Content $env:APPDATA\Code\User\settings.json -Raw) -replace '\"github.copilot.terminal.requireApproval\":\s*false', '\"github.copilot.terminal.requireApproval\": true' | Set-Content $env:APPDATA\Code\User\settings.json"
    exit /b
)
goto:eof
