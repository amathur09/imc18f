REM Run the regression test
REM Parameter 1 - Jenkins Workspace
REM Parameter 2 - Test Reports Directory

cd %1\documentation\continuous_integration\jenkins
java -cp %1/lib/* com.rxeffex.test.RegressionTestDriver rxeffex.xml %1/drivers %2