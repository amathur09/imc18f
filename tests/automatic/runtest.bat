REM Run the regresstion test
REM Parameter 1 - Jenkins Workspace
REM Parameter 2 - Test Reports Directory

cd %1\tests\automatic
java -cp %1/lib/* com.rxeffex.test.RegressionTestDriver rxeffex.xml %1/drivers %2