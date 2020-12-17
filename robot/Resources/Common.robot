*** Settings ***
Library  Selenium2Library
Library  LambdaTestStatus.py
Library  Collections

*** Variables ***

@{_tmp}
    ...  browserName: ${browserName},
    ...  platform: ${platform},
    ...  version: ${version},
    ...  visual: ${visual},
    ...  network: ${network},
    ...  console: ${console},
    ...  name: RobotFramework Lambda Test

${BROWSER}          ${ROBOT_BROWSER}
${CAPABILITIES}     ${EMPTY.join(${_tmp})}
# Visit https://accounts.lambdatest.com/profile to get the details
${KEY}              mlm475:mezqhi3StTgHWUy52RyVS2ReEUw3KSqCu4Gwdagq4ldTj2SQgh
${REMOTE_URL}       https://mlm475:mezqhi3StTgHWUy52RyVS2ReEUw3KSqCu4Gwdagq4ldTj2SQgh@hub.lambdatest.com/wd/hub
${TIMEOUT}          3000

*** Keywords ***

Open test browser
#https://6-12hoagies.github.io/HB.html
    [Timeout]   ${TIMEOUT}
    Open browser  https://6-12hoagies.github.io/index.html  browser=${BROWSER}
    ...  remote_url=${REMOTE_URL}
    ...  desired_capabilities=${CAPABILITIES}

Close test browser
    Run keyword if  '${REMOTE_URL}' != ''
    ...  Report Lambdatest Status
    ...  ${TEST_NAME} 
    ...  ${TEST_STATUS} 
    Close all browsers
