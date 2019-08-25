@echo off

if "%1"=="dev:build" (
    set COMMAND=docker-compose -f docker-compose.devserver.yml build
    goto args
)

if "%1"=="dev:i" (
    set COMMAND=docker-compose -f docker-compose.devserver.yml run devserver npm i
    goto args
)

if "%1"=="dev:run" (
    set COMMAND=docker-compose -f docker-compose.devserver.yml run --service-ports devserver npm run
    goto args
)

echo ERROR: no such command: %1
goto end


:args
set ARGS=
shift

:args_loop
if not "%1"=="" (
    set ARGS=%ARGS% %1
    @shift
    goto args_loop
)

:run
@echo on
%COMMAND%%ARGS%
@echo off

:end
