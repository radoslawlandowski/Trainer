function Start-App($port) {
    $freePortOutput = Kill-App $port
    Write-Host $freePortOutput

    $command = "npm start"

    $process = Call-CommandInNewProcess $command

    return $process
}

function Kill-App($port) {
    $output = Free-Port $port

    if($output -eq "") {
        Write-Host "No application running on port: $port"
    } else {
        Write-Host "Application using port: $port stopped!"
    }
}

function Call-CommandInNewProcess($scriptBlock) {
    $process = Start-Process -FilePath "powershell" -ArgumentList "-Command & $scriptBlock" -PassThru

    return $process
}

function Call-Command($command) {
    Invoke-Expression -Command $command | Out-String -OutVariable output | Out-Null

    return $output
}

function Free-Port ($port) {
    $freePortCommand = "fuser -k $port/tcp"

    return Call-Command $freePortCommand
}

function Run-Protractor($argums) {
    $command = "protractor ./public/scripts/tests/e2e/tests/conf.js"

    Call-Command $command
}

function Run-UITests() {
    Start-App 3000

    Start-Sleep -Seconds 5

    Run-Protractor
    
    Kill-App 3000
}